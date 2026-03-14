"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { Plus, Edit, Trash2, Loader2, X } from "lucide-react";

interface ComponentRecord {
  id: string;
  name: string;
  component_type: string;
  description: string | null;
  is_active: boolean;
  fields_schema: unknown;
  created_at?: string;
}

interface SchemaField {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
}

const EMPTY_FIELD: SchemaField = {
  name: "",
  label: "",
  type: "text",
  defaultValue: "",
};

const FIELD_TYPES = [
  { value: "text", label: "Text" },
  { value: "textarea", label: "Textarea" },
  { value: "number", label: "Number" },
  { value: "image_url", label: "Image URL" },
];

const emptyForm = {
  id: "",
  name: "",
  component_type: "",
  description: "",
  is_active: true,
};

function parseFieldsSchema(raw: unknown): SchemaField[] {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return raw.map((item) => {
      const obj = typeof item === "object" && item !== null ? item as Record<string, unknown> : {};
      return {
        name: String(obj.name ?? obj.key ?? ""),
        label: String(obj.label ?? ""),
        type: String(obj.type ?? "text"),
        defaultValue: String(obj.defaultValue ?? obj.default_value ?? ""),
      };
    });
  }
  return [];
}

export default function AdminComponentRegistryPage() {
  const [components, setComponents] = useState<ComponentRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const [fieldsSchema, setFieldsSchema] = useState<SchemaField[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchComponents();
  }, []);

  const fetchComponents = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("component_registry")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.error("Error fetching components:", error);
      alert("Error loading components: " + error.message);
    }
    setComponents(data || []);
    setLoading(false);
  };

  const handleInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addSchemaField = () => {
    setFieldsSchema((prev) => [...prev, { ...EMPTY_FIELD }]);
  };

  const updateSchemaField = (index: number, field: keyof SchemaField, value: string) => {
    setFieldsSchema((prev) =>
      prev.map((f, i) => (i === index ? { ...f, [field]: value } : f))
    );
  };

  const removeSchemaField = (index: number) => {
    setFieldsSchema((prev) => prev.filter((_, i) => i !== index));
  };

  const openForm = (record?: ComponentRecord) => {
    if (record) {
      setFormData({
        id: record.id,
        name: record.name,
        component_type: record.component_type,
        description: record.description ?? "",
        is_active: record.is_active ?? true,
      });
      const parsed = parseFieldsSchema(record.fields_schema);
      setFieldsSchema(parsed.length > 0 ? parsed : []);
    } else {
      setFormData(emptyForm);
      setFieldsSchema([]);
    }
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setFormData(emptyForm);
    setFieldsSchema([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert("Name is required.");
      return;
    }
    if (!formData.component_type.trim()) {
      alert("Component type is required.");
      return;
    }

    setSaving(true);
    try {
      const schemaPayload = fieldsSchema.map((f) => ({
        name: f.name,
        label: f.label,
        type: f.type,
        defaultValue: f.defaultValue,
      }));

      const payload = {
        name: formData.name.trim(),
        component_type: formData.component_type.trim(),
        description: formData.description.trim() || null,
        is_active: formData.is_active,
        fields_schema: schemaPayload,
      };

      if (formData.id) {
        const { error } = await supabase
          .from("component_registry")
          .update(payload)
          .eq("id", formData.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("component_registry")
          .insert([payload]);
        if (error) throw error;
      }
      closeForm();
      fetchComponents();
    } catch (err: unknown) {
      alert("Error saving: " + (err instanceof Error ? err.message : String(err)));
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this component?"))
      return;
    const { error } = await supabase
      .from("component_registry")
      .delete()
      .eq("id", id);
    if (error) {
      alert("Error deleting: " + error.message);
      return;
    }
    fetchComponents();
  };

  const handleToggleActive = async (record: ComponentRecord) => {
    const { error } = await supabase
      .from("component_registry")
      .update({ is_active: !record.is_active })
      .eq("id", record.id);
    if (error) {
      alert("Error updating status: " + error.message);
      return;
    }
    fetchComponents();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 text-[#0B3B24]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Component Registry</h1>
          <button
            type="button"
            onClick={() => openForm()}
            className="flex items-center gap-2 bg-[#0B3B24] hover:bg-[#4F6F1F] text-white px-6 py-2 rounded font-bold shadow-sm transition-colors"
          >
            <Plus size={20} /> Add New Component
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="animate-spin w-10 h-10 text-[#0B3B24]" />
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="p-4 font-bold text-[#0B3B24]">Name</th>
                    <th className="p-4 font-bold text-[#0B3B24]">
                      Component Type
                    </th>
                    <th className="p-4 font-bold text-[#0B3B24]">Description</th>
                    <th className="p-4 font-bold text-[#0B3B24]">Status</th>
                    <th className="p-4 font-bold text-[#0B3B24] text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {components.length === 0 ? (
                    <tr>
                      <td
                        colSpan={5}
                        className="p-8 text-center text-gray-500 italic"
                      >
                        No components yet. Add one to get started.
                      </td>
                    </tr>
                  ) : (
                    components.map((c) => (
                      <tr key={c.id} className="hover:bg-gray-50">
                        <td className="p-4 font-semibold">{c.name}</td>
                        <td className="p-4 font-mono text-sm">
                          {c.component_type}
                        </td>
                        <td className="p-4 text-gray-600 max-w-xs truncate">
                          {c.description || "—"}
                        </td>
                        <td className="p-4">
                          <button
                            type="button"
                            onClick={() => handleToggleActive(c)}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                              c.is_active
                                ? "bg-green-100 text-green-800 hover:bg-green-200"
                                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                            }`}
                          >
                            {c.is_active ? "Active" : "Inactive"}
                          </button>
                        </td>
                        <td className="p-4 flex gap-2 justify-end">
                          <button
                            type="button"
                            onClick={() => openForm(c)}
                            className="p-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors"
                            aria-label="Edit"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(c.id)}
                            className="p-2 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors"
                            aria-label="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Modal Form */}
      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold text-[#0B3B24]">
                {formData.id ? "Edit Component" : "Add New Component"}
              </h2>
              <button
                type="button"
                onClick={closeForm}
                className="p-2 rounded hover:bg-gray-100 text-gray-600"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-bold mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInput}
                  required
                  placeholder="e.g. Upcoming Events Slider"
                  className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-[#0B3B24]/30"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">
                  Component Type <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="component_type"
                  value={formData.component_type}
                  onChange={handleInput}
                  required
                  placeholder="e.g. UpcomingEvents"
                  className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-[#0B3B24]/30 font-mono"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInput}
                  rows={3}
                  placeholder="Brief description of what this component does"
                  className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-[#0B3B24]/30 resize-none"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="is_active"
                    checked={formData.is_active}
                    onChange={handleInput}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm font-bold">Active</span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Fields Schema
                </label>
                <p className="text-xs text-gray-500 mb-3">
                  Define the configurable props for this component in the Page Builder.
                </p>

                <div className="space-y-3">
                  {fieldsSchema.map((field, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl p-4 bg-gray-50/80 shadow-sm"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Field {index + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeSchemaField(index)}
                          className="p-1.5 text-red-500 rounded hover:bg-red-50 transition-colors"
                          aria-label="Remove field"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">
                            Label
                          </label>
                          <input
                            type="text"
                            value={field.label}
                            onChange={(e) =>
                              updateSchemaField(index, "label", e.target.value)
                            }
                            placeholder="e.g. Tiêu đề phụ"
                            className="w-full p-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#0B3B24]/30 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">
                            Name / Key
                          </label>
                          <input
                            type="text"
                            value={field.name}
                            onChange={(e) =>
                              updateSchemaField(index, "name", e.target.value)
                            }
                            placeholder="e.g. subtitle"
                            className="w-full p-2 border border-gray-200 rounded-lg outline-none font-mono text-sm focus:ring-2 focus:ring-[#0B3B24]/30"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">
                            Type
                          </label>
                          <select
                            value={field.type}
                            onChange={(e) =>
                              updateSchemaField(index, "type", e.target.value)
                            }
                            className="w-full p-2 border border-gray-200 rounded-lg outline-none bg-white text-sm focus:ring-2 focus:ring-[#0B3B24]/30"
                          >
                            {FIELD_TYPES.map((t) => (
                              <option key={t.value} value={t.value}>
                                {t.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">
                            Default Value
                          </label>
                          <input
                            type="text"
                            value={field.defaultValue}
                            onChange={(e) =>
                              updateSchemaField(
                                index,
                                "defaultValue",
                                e.target.value
                              )
                            }
                            placeholder="Optional"
                            className="w-full p-2 border border-gray-200 rounded-lg outline-none text-sm focus:ring-2 focus:ring-[#0B3B24]/30"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={addSchemaField}
                  className="mt-3 flex items-center gap-2 px-4 py-2 border border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-[#0B3B24] hover:text-[#0B3B24] hover:bg-[#E5F5C8]/30 transition-colors text-sm font-medium"
                >
                  <Plus size={18} /> Add New Field
                </button>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-6 py-2 border rounded hover:bg-gray-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-2 bg-[#0B3B24] hover:bg-[#4F6F1F] text-white rounded font-bold transition-colors disabled:opacity-50"
                >
                  {saving && <Loader2 className="animate-spin" size={18} />}
                  {formData.id ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
