"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { Plus, Edit, Trash2, Loader2, ArrowUp, ArrowDown } from "lucide-react";

const PARENT_PAGES = [
  "Yoga Vacation",
  "Teacher Training",
  "Ayurveda",
  "About Us",
  "Contact Us",
  "FAQ",
];

const COMPONENT_REGISTRY = [
  { id: "UpcomingEvents", name: "Upcoming Events", desc: "Slider sự kiện/khóa học" },
  { id: "StudentFeedback", name: "Student Feedback", desc: "Đánh giá học viên" },
  { id: "ContactSection", name: "Contact Form", desc: "Form liên hệ & Địa chỉ" },
  { id: "MoreInformation", name: "More Information", desc: "Nút Contact & FAQs" },
  { id: "AccommodationCost", name: "Accommodation", desc: "Thông tin phòng & giá" },
  { id: "CourseCurriculum", name: "Course Curriculum", desc: "Nội dung khóa học" },
  { id: "SeniorTeachers", name: "Senior Teachers", desc: "Danh sách giáo viên" },
  { id: "AshramGallery", name: "Ashram Gallery", desc: "Thư viện ảnh Masonry" },
  { id: "BenefitsTTC", name: "Benefits Matrix", desc: "Lợi ích khóa học" },
  { id: "YogaInsights", name: "Yoga Insights", desc: "Danh sách bài viết Blog" },
  { id: "KarmaYogaTabs", name: "Interactive Tabs", desc: "Tabs nội dung" },
  {
    id: "CustomTwoColumn",
    name: "CUSTOM: 2-Column",
    desc: "Tự viết nội dung & Ảnh",
  },
];

export default function AdminPageBuilder() {
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [uploadingImage, setUploadingImage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    id: "",
    slug: "",
    title: "",
    description: "",
    hero_image: "",
    parent_page: "Yoga Vacation",
    components: [] as any[],
    is_published: true,
  });

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("custom_pages")
      .select("*")
      .order("created_at", { ascending: false });
    setPages(data || []);
    setLoading(false);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const uploadImage = async (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (url: string) => void,
    loadingId: string
  ) => {
    try {
      setUploadingImage(loadingId);
      const file = e.target.files?.[0];
      if (!file) return;
      const fileName = `page-${Math.random()}.${file.name.split(".").pop()}`;
      await supabase.storage.from("blog-images").upload(fileName, file);
      const { data } = supabase.storage.from("blog-images").getPublicUrl(fileName);
      callback(data.publicUrl);
    } catch {
      alert("Upload failed");
    } finally {
      setUploadingImage(null);
    }
  };

  const addComponent = (type: string) => {
    const newComp =
      type === "CustomTwoColumn"
        ? {
            id: Date.now().toString(),
            type,
            title: "",
            description: "",
            image_url: "",
          }
        : { id: Date.now().toString(), type };
    setFormData((prev) => ({
      ...prev,
      components: [...prev.components, newComp],
    }));
  };

  const updateComponent = (id: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      components: prev.components.map((comp) =>
        comp.id === id ? { ...comp, [field]: value } : comp
      ),
    }));
  };

  const removeComponent = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      components: prev.components.filter((c) => c.id !== id),
    }));
  };

  const moveComponent = (index: number, direction: number) => {
    const newComps = [...formData.components];
    if (index + direction < 0 || index + direction >= newComps.length) return;
    const temp = newComps[index];
    newComps[index] = newComps[index + direction];
    newComps[index + direction] = temp;
    setFormData((prev) => ({ ...prev, components: newComps }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const postData = { ...formData };
    if (!postData.id) {
      delete (postData as { id?: string }).id;
      const { error } = await supabase.from("custom_pages").insert([postData]);
      if (error) alert("Error: " + error.message);
    } else {
      const { error } = await supabase
        .from("custom_pages")
        .update(postData)
        .eq("id", postData.id);
      if (error) alert("Error: " + error.message);
    }
    setIsEditing(false);
    fetchPages();
  };

  const resetForm = () => {
    setFormData({
      id: "",
      slug: "",
      title: "",
      description: "",
      hero_image: "",
      parent_page: "Yoga Vacation",
      components: [],
      is_published: true,
    });
    setIsEditing(false);
  };

  const deletePage = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this page?")) {
      await supabase.from("custom_pages").delete().eq("id", id);
      fetchPages();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 text-[#0B3B24]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dynamic Page Builder</h1>
          {!isEditing && (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="bg-[#ED7D4D] text-white px-6 py-2 rounded font-bold shadow-sm"
            >
              Create New Page
            </button>
          )}
        </div>

        {isEditing ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-8 rounded-xl shadow-sm border space-y-8"
          >
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <h2 className="text-xl font-bold border-b pb-2">
                1. Page Settings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-1">
                    URL Slug *
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInput}
                    required
                    className="w-full p-2 border rounded outline-none"
                    placeholder="e.g. chuong-trinh-dac-biet"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Parent Menu *
                  </label>
                  <select
                    name="parent_page"
                    value={formData.parent_page}
                    onChange={handleInput}
                    className="w-full p-2 border rounded bg-white outline-none"
                  >
                    {PARENT_PAGES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-1">
                    Page Title (H1) *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInput}
                    required
                    className="w-full p-2 border rounded outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-1">
                    Subtitle / Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInput}
                    className="w-full p-2 border rounded outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-1">
                    Hero Background Image
                  </label>
                  <div className="flex items-center gap-4">
                    {formData.hero_image && (
                      <img
                        src={formData.hero_image}
                        className="h-16 rounded"
                        alt="Hero"
                      />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        uploadImage(
                          e,
                          (url) =>
                            setFormData((prev) => ({ ...prev, hero_image: url })),
                          "hero"
                        )
                      }
                    />
                    {uploadingImage === "hero" && (
                      <Loader2 className="animate-spin text-[#ED7D4D]" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg space-y-6">
              <h2 className="text-xl font-bold border-b pb-2">
                2. Page Content Blocks (JSON Structure)
              </h2>

              <div className="space-y-4">
                {formData.components.length === 0 && (
                  <p className="text-gray-400 italic text-sm">
                    No blocks added yet.
                  </p>
                )}
                {formData.components.map((comp, idx) => (
                  <div
                    key={comp.id}
                    className="bg-white p-4 rounded border shadow-sm relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0B3B24]" />
                    <div className="flex justify-between items-center pl-2 mb-2">
                      <span className="font-bold text-sm text-[#0B3B24]">
                        {COMPONENT_REGISTRY.find((c) => c.id === comp.type)
                          ?.name || comp.type}
                      </span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => moveComponent(idx, -1)}
                          disabled={idx === 0}
                          className="hover:text-[#ED7D4D] disabled:opacity-30"
                        >
                          <ArrowUp size={18} />
                        </button>
                        <button
                          type="button"
                          onClick={() => moveComponent(idx, 1)}
                          disabled={idx === formData.components.length - 1}
                          className="hover:text-[#ED7D4D] disabled:opacity-30"
                        >
                          <ArrowDown size={18} />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeComponent(comp.id)}
                          className="text-red-500 ml-4 hover:scale-110"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    {comp.type === "CustomTwoColumn" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4 pl-2">
                        <div>
                          <label className="block text-xs font-bold mb-1">
                            Block Title
                          </label>
                          <input
                            type="text"
                            value={comp.title ?? ""}
                            onChange={(e) =>
                              updateComponent(comp.id, "title", e.target.value)
                            }
                            className="w-full p-2 border rounded outline-none"
                          />
                        </div>
                        <div className="row-span-2">
                          <label className="block text-xs font-bold mb-1">
                            Description (HTML allowed)
                          </label>
                          <textarea
                            value={comp.description ?? ""}
                            onChange={(e) =>
                              updateComponent(
                                comp.id,
                                "description",
                                e.target.value
                              )
                            }
                            className="w-full p-2 border rounded h-full outline-none font-mono text-sm"
                            rows={6}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold mb-1">
                            Block Image
                          </label>
                          <div className="flex items-center gap-3">
                            {comp.image_url && (
                              <img
                                src={comp.image_url}
                                className="h-16 w-16 object-cover rounded"
                                alt="block"
                              />
                            )}
                            <input
                              type="file"
                              accept="image/*"
                              className="text-xs"
                              onChange={(e) =>
                                uploadImage(
                                  e,
                                  (url) =>
                                    updateComponent(comp.id, "image_url", url),
                                  comp.id
                                )
                              }
                            />
                            {uploadingImage === comp.id && (
                              <Loader2 className="animate-spin w-4 h-4 text-[#ED7D4D]" />
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-sm mb-4">
                  Click to add a block:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {COMPONENT_REGISTRY.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => addComponent(c.id)}
                      className="flex flex-col items-start p-3 border rounded-lg bg-white hover:border-[#ED7D4D] hover:shadow-md transition-all text-left group"
                    >
                      <span className="font-bold text-[#0B3B24] text-sm mb-1">
                        {c.name}
                      </span>
                      <span className="text-xs text-gray-500 mb-3">
                        {c.desc}
                      </span>
                      <div className="mt-auto flex items-center gap-1 text-[#ED7D4D] text-xs font-bold uppercase">
                        <Plus size={14} /> Add
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2 border rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-2 bg-[#0B3B24] text-white rounded font-bold hover:bg-[#1a5438]"
              >
                Save Page
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap md:whitespace-normal">
              <thead className="bg-gray-50 border-b text-sm">
                <tr>
                  <th className="p-4">Menu</th>
                  <th className="p-4">Title</th>
                  <th className="p-4">URL</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {pages.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-500">
                      {p.parent_page}
                    </td>
                    <td className="p-4 font-bold text-[#0B3B24]">
                      {p.title}
                    </td>
                    <td className="p-4">
                      <a
                        href={`/p/${p.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        /p/{p.slug}
                      </a>
                    </td>
                    <td className="p-4 flex gap-2 justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({
                            ...p,
                            components: p.components ?? [],
                          });
                          setIsEditing(true);
                        }}
                        className="p-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => deletePage(p.id)}
                        className="p-2 bg-red-50 text-red-600 rounded hover:bg-red-100"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
