"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { Plus, Edit, Trash2, Loader2 } from "lucide-react";

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    title: "",
    description: "",
    sort_order: 0,
    is_active: true,
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (error) console.error("Error fetching testimonials:", error);
    else setTestimonials(data || []);
    setLoading(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const postData = {
      ...formData,
      sort_order: parseInt(formData.sort_order.toString(), 10) || 0,
    };

    if (!postData.id) {
      // @ts-expect-error - id not needed for insert
      delete postData.id;
      const { error } = await supabase.from("testimonials").insert([postData]);
      if (error) alert("Error creating testimonial: " + error.message);
    } else {
      const { error } = await supabase
        .from("testimonials")
        .update(postData)
        .eq("id", postData.id);
      if (error) alert("Error updating testimonial: " + error.message);
    }

    resetForm();
    fetchTestimonials();
  };

  const editTestimonial = (item: any) => {
    setFormData({
      id: item.id,
      name: item.name || "",
      title: item.title || "",
      description: item.description || "",
      sort_order: item.sort_order || 0,
      is_active: item.is_active ?? true,
    });
    setIsEditing(true);
  };

  const deleteTestimonial = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      const { error } = await supabase.from("testimonials").delete().eq("id", id);
      if (error) alert("Error deleting testimonial");
      else fetchTestimonials();
    }
  };

  const resetForm = () => {
    setFormData({
      id: "",
      name: "",
      title: "",
      description: "",
      sort_order: 0,
      is_active: true,
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0B3B24]">
            Testimonial Manager
          </h1>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="w-full sm:w-auto bg-[#ED7D4D] text-white px-6 py-2 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 shadow-sm"
            >
              <Plus size={20} /> Add Testimonial
            </button>
          )}
        </div>

        {isEditing ? (
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 border-b pb-4">
              {formData.id ? "Edit Testimonial" : "Add Testimonial"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div>
                  <label className="block text-sm font-bold mb-1 text-[#0B3B24]">
                    Author Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#ED7D4D] outline-none"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1 text-[#0B3B24]">
                    Title / Role
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#ED7D4D] outline-none"
                    placeholder="e.g. Yoga Student / 35 years old"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-1 text-[#0B3B24]">
                    Testimonial Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#ED7D4D] outline-none"
                    placeholder="Write the feedback here..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-1 text-[#0B3B24]">
                    Sort Order
                  </label>
                  <input
                    type="number"
                    name="sort_order"
                    value={formData.sort_order}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#ED7D4D] outline-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Lower numbers appear first
                  </p>
                </div>

                <div className="flex items-center pt-8">
                  <label className="flex items-center gap-3 cursor-pointer font-bold text-[#0B3B24]">
                    <input
                      type="checkbox"
                      name="is_active"
                      checked={formData.is_active}
                      onChange={handleInputChange}
                      className="w-5 h-5 accent-[#ED7D4D]"
                    />
                    Is Active (Visible on site)
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 border rounded-md text-gray-600 hover:bg-gray-100 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-[#0B3B24] text-white rounded-md hover:bg-[#1a5438] flex items-center gap-2 font-bold shadow-md transition-colors"
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />} Save
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {loading ? (
              <div className="p-12 text-center text-gray-500 flex justify-center">
                <Loader2 className="animate-spin w-8 h-8" />
              </div>
            ) : testimonials.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                No testimonials found. Add one!
              </div>
            ) : (
              <div className="flex flex-col divide-y divide-gray-100">
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-gray-50 transition-colors gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-bold text-[#0B3B24] text-lg">
                          {item.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {item.title}
                        </span>
                        {!item.is_active && (
                          <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-md text-xs font-bold">
                            Hidden
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-3 italic">
                        &quot;{item.description}&quot;
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 md:pl-6 md:border-l border-gray-100">
                      <button
                        onClick={() => editTestimonial(item)}
                        className="text-blue-600 bg-blue-50 px-4 py-2 rounded-md transition-colors flex items-center gap-2 text-sm font-bold flex-1 md:flex-none justify-center hover:bg-blue-100"
                      >
                        <Edit size={16} /> Edit
                      </button>
                      <button
                        onClick={() => deleteTestimonial(item.id)}
                        className="text-red-600 bg-red-50 px-4 py-2 rounded-md transition-colors flex items-center gap-2 text-sm font-bold flex-1 md:flex-none justify-center hover:bg-red-100"
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
