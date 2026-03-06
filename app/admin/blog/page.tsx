"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { Plus, Edit, Trash2, Image as ImageIcon, Loader2, Video, Eye, FileEdit, X } from "lucide-react";

/** Parse content with # H1, ## H2, **bold** and render as styled elements */
function renderWithBold(text: string) {
  const parts = text.split(/(\*\*.+?\*\*)/g);
  return parts.map((part, j) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={j} className="font-semibold text-[#0B3B24]">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

function renderStyledContent(text: string) {
  if (!text || typeof text !== "string") return null;
  return text.split("\n").map((line, i) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-bold font-serif text-[#0B3B24] mb-3 mt-6">
          {renderWithBold(trimmed.slice(3))}
        </h2>
      );
    }
    if (trimmed.startsWith("# ")) {
      return (
        <h1 key={i} className="text-3xl font-bold font-serif text-[#0B3B24] mb-4 mt-8">
          {renderWithBold(trimmed.slice(2))}
        </h1>
      );
    }
    if (!trimmed) return <div key={i} className="h-4" />;
    return (
      <p key={i} className="text-base leading-relaxed text-[#4A4A4A] mb-4">
        {renderWithBold(trimmed)}
      </p>
    );
  });
}

export default function AdminBlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [uploadingField, setUploadingField] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState<"editor" | "preview">("editor");

  // Form State
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    category: "YOGA LIFE STYLE",
    header_image: "",
    content_1: "",
    middle_image: "",
    content_2: "",
    footer_image: "",
    author_name: "",
    author_avatar: "",
    author_quote: "",
    youtube_link: "",
    is_published: true,
  });

  const categories = [
    "YOGA LIFE STYLE",
    "AYURVEDA",
    "MEDITATION",
    "HEALTH & DIET",
  ];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error("Error fetching blogs:", error);
    else setBlogs(data || []);
    setLoading(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    const value =
      target.type === "checkbox" ? target.checked : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  const handleImageRemove = (fieldName: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: "" }));
  };

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    try {
      setUploadingField(fieldName);
      const file = e.target.files?.[0];
      if (!file) return;

      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from("blog-images")
        .getPublicUrl(filePath);

      setFormData((prev) => ({ ...prev, [fieldName]: data.publicUrl }));
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image!");
    } finally {
      setUploadingField(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const postData = { ...formData };
    if (!postData.id) {
      // Create new
      const { id: _id, ...insertData } = postData;
      const { error } = await supabase.from("blogs").insert([insertData]);
      if (error) alert("Error creating blog: " + error.message);
    } else {
      // Update existing
      const { error } = await supabase
        .from("blogs")
        .update(postData)
        .eq("id", postData.id);
      if (error) alert("Error updating blog: " + error.message);
    }

    resetForm();
    await fetchBlogs();
    setLoading(false);
  };

  const editBlog = (blog: any) => {
    setFormData({
      ...blog,
      title: blog.title ?? "",
      category: blog.category ?? "YOGA LIFE STYLE",
      header_image: blog.header_image ?? "",
      content_1: blog.content_1 ?? "",
      middle_image: blog.middle_image ?? "",
      content_2: blog.content_2 ?? "",
      footer_image: blog.footer_image ?? "",
      author_name: blog.author_name ?? "",
      author_avatar: blog.author_avatar ?? "",
      author_quote: blog.author_quote ?? "",
      youtube_link: blog.youtube_link ?? "",
    });
    setIsEditing(true);
  };

  const deleteBlog = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const { error } = await supabase.from("blogs").delete().eq("id", id);
      if (error) alert("Error deleting blog");
      else fetchBlogs();
    }
  };

  const resetForm = () => {
    setFormData({
      id: "",
      title: "",
      category: "YOGA LIFE STYLE",
      header_image: "",
      content_1: "",
      middle_image: "",
      content_2: "",
      footer_image: "",
      author_name: "",
      author_avatar: "",
      author_quote: "",
      youtube_link: "",
      is_published: true,
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#0B3B24]">Blog Manager</h1>
          {!isEditing && (
            <button
              onClick={() => {
                resetForm();
                setIsEditing(true);
              }}
              className="bg-[#ED7D4D] text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-orange-600"
            >
              <Plus size={20} /> Create New Post
            </button>
          )}
        </div>

        {isEditing ? (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Mobile Preview Toggle */}
            <div className="flex lg:hidden gap-2 p-2 bg-white rounded-lg border border-gray-200">
              <button
                type="button"
                onClick={() => setPreviewMode("editor")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  previewMode === "editor"
                    ? "bg-[#0B3B24] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <FileEdit size={18} /> Editor
              </button>
              <button
                type="button"
                onClick={() => setPreviewMode("preview")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  previewMode === "preview"
                    ? "bg-[#0B3B24] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Eye size={18} /> Preview
              </button>
            </div>

            {/* Left Column: Editor */}
            <div
              className={`flex-1 min-w-0 ${
                previewMode === "preview" ? "hidden lg:block" : ""
              }`}
            >
              <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 border-b pb-4">
                  {formData.id ? "Edit Post" : "Create New Post"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
              {/* TITLE SECTION */}
              <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-[#0B3B24]">
                  1. Title Section
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-[#ED7D4D] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-[#ED7D4D] outline-none"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">
                      YouTube Video Link (Optional)
                    </label>
                    <input
                      type="url"
                      name="youtube_link"
                      value={formData.youtube_link || ""}
                      onChange={handleInputChange}
                      placeholder="https://www.youtube.com/watch?v=..."
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-[#ED7D4D] outline-none"
                    />
                  </div>
                  <div className="md:col-span-2 flex items-center gap-3">
                    <label className="block text-sm font-medium">Status</label>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="is_published"
                        checked={!!formData.is_published}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-[#ED7D4D] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F6F1F]"></div>
                      <span className="ms-3 text-sm font-medium text-gray-700">
                        {formData.is_published ? "Published" : "Draft"}
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="space-y-6 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-[#0B3B24]">
                  2. Content Section
                </h3>

                {/* Header Image */}
                <div className="border border-dashed border-gray-300 p-4 rounded text-center bg-white relative">
                  <label className="block text-sm font-medium mb-2">
                    Header Image
                  </label>
                  {formData.header_image && (
                    <>
                      <img
                        src={formData.header_image}
                        alt="Header"
                        className="h-32 mx-auto mb-4 object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={() => handleImageRemove("header_image")}
                        className="flex items-center gap-1 mx-auto mb-4 text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        <X size={16} /> Remove image
                      </button>
                    </>
                  )}
                  <div className="flex justify-center items-center gap-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleImageUpload(e, "header_image")
                      }
                      className="text-sm"
                    />
                    {uploadingField === "header_image" && (
                      <Loader2 className="animate-spin text-[#ED7D4D]" />
                    )}
                  </div>
                </div>

                {/* Content 1 */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Content Part 1 (Markdown / Text)
                  </label>
                  <textarea
                    name="content_1"
                    value={formData.content_1}
                    onChange={handleInputChange}
                    rows={12}
                    className="w-full p-3 border rounded focus:ring-2 focus:ring-[#ED7D4D] outline-none"
                  />
                </div>

                {/* Middle Image */}
                <div className="border border-dashed border-gray-300 p-4 rounded text-center bg-white relative">
                  <label className="block text-sm font-medium mb-2">
                    Middle Image
                  </label>
                  {formData.middle_image && (
                    <>
                      <img
                        src={formData.middle_image}
                        alt="Middle"
                        className="h-32 mx-auto mb-4 object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={() => handleImageRemove("middle_image")}
                        className="flex items-center gap-1 mx-auto mb-4 text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        <X size={16} /> Remove image
                      </button>
                    </>
                  )}
                  <div className="flex justify-center items-center gap-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleImageUpload(e, "middle_image")
                      }
                      className="text-sm"
                    />
                    {uploadingField === "middle_image" && (
                      <Loader2 className="animate-spin text-[#ED7D4D]" />
                    )}
                  </div>
                </div>

                {/* Content 2 */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Content Part 2 (Markdown / Text)
                  </label>
                  <textarea
                    name="content_2"
                    value={formData.content_2}
                    onChange={handleInputChange}
                    rows={12}
                    className="w-full p-3 border rounded focus:ring-2 focus:ring-[#ED7D4D] outline-none"
                  />
                </div>

                {/* Footer Image */}
                <div className="border border-dashed border-gray-300 p-4 rounded text-center bg-white relative">
                  <label className="block text-sm font-medium mb-2">
                    Footer Image
                  </label>
                  {formData.footer_image && (
                    <>
                      <img
                        src={formData.footer_image}
                        alt="Footer"
                        className="h-32 mx-auto mb-4 object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={() => handleImageRemove("footer_image")}
                        className="flex items-center gap-1 mx-auto mb-4 text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        <X size={16} /> Remove image
                      </button>
                    </>
                  )}
                  <div className="flex justify-center items-center gap-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleImageUpload(e, "footer_image")
                      }
                      className="text-sm"
                    />
                    {uploadingField === "footer_image" && (
                      <Loader2 className="animate-spin text-[#ED7D4D]" />
                    )}
                  </div>
                </div>
              </div>

              {/* CREDIT SECTION */}
              <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-[#0B3B24]">
                  3. Credit (Writer)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Writer Name
                    </label>
                    <input
                      type="text"
                      name="author_name"
                      value={formData.author_name}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-[#ED7D4D] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Writer Quote
                    </label>
                    <input
                      type="text"
                      name="author_quote"
                      value={formData.author_quote}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-[#ED7D4D] outline-none"
                    />
                  </div>
                </div>
                {/* Avatar Image */}
                <div className="border border-dashed border-gray-300 p-4 rounded text-center bg-white mt-4">
                  <label className="block text-sm font-medium mb-2">
                    Writer Avatar Image
                  </label>
                  {formData.author_avatar && (
                    <>
                      <img
                        src={formData.author_avatar}
                        alt="Avatar"
                        className="w-20 h-20 mx-auto mb-4 object-cover rounded-full"
                      />
                      <button
                        type="button"
                        onClick={() => handleImageRemove("author_avatar")}
                        className="flex items-center gap-1 mx-auto mb-4 text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        <X size={16} /> Remove image
                      </button>
                    </>
                  )}
                  <div className="flex justify-center items-center gap-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleImageUpload(e, "author_avatar")
                      }
                      className="text-sm"
                    />
                    {uploadingField === "author_avatar" && (
                      <Loader2 className="animate-spin text-[#ED7D4D]" />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 border rounded text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-2 bg-[#0B3B24] text-white rounded hover:bg-[#1a5438] flex items-center gap-2"
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}{" "}
                  Save Post
                </button>
              </div>
            </form>
          </div>
            </div>

            {/* Right Column: Live Preview */}
            <div
              className={`w-full lg:w-1/2 xl:w-[45%] shrink-0 ${
                previewMode === "editor" ? "hidden lg:block" : ""
              }`}
            >
              <div className="sticky top-24 h-[calc(100vh-120px)] overflow-y-auto bg-white rounded-xl border border-gray-200 p-8 shadow-inner">
                <div className="text-center mb-8 border-b pb-6">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-2">
                    Live Preview
                  </span>
                  <h1 className="text-3xl font-serif font-bold text-[#0B3B24]">
                    {formData.title || "Untitled Post"}
                  </h1>
                  {formData.category && (
                    <span className="inline-block mt-2 text-xs font-semibold text-[#4F6F1F] bg-[#E5F5C8] px-2 py-1 rounded">
                      {formData.category}
                    </span>
                  )}
                </div>

                {formData.youtube_link ? (
                  <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center text-gray-400 text-sm">
                    YouTube Video
                  </div>
                ) : formData.header_image ? (
                  <img
                    src={formData.header_image}
                    alt="Header"
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                ) : null}

                <div className="prose prose-slate max-w-none">
                  <div className="space-y-2">
                    {renderStyledContent(formData.content_1 || "")}
                  </div>
                  {formData.middle_image && (
                    <img
                      src={formData.middle_image}
                      alt=""
                      className="my-6 rounded-lg w-full object-cover max-h-64"
                    />
                  )}
                  <div className="space-y-2">
                    {renderStyledContent(formData.content_2 || "")}
                  </div>
                  {formData.footer_image && (
                    <img
                      src={formData.footer_image}
                      alt=""
                      className="my-6 rounded-lg w-full object-cover max-h-64"
                    />
                  )}
                </div>

                {(formData.author_name || formData.author_quote) && (
                  <div className="mt-8 pt-6 border-t border-gray-200 flex items-start gap-4">
                    {formData.author_avatar && (
                      <img
                        src={formData.author_avatar}
                        alt={formData.author_name || "Author"}
                        className="w-14 h-14 rounded-full object-cover shrink-0"
                      />
                    )}
                    <div>
                      {formData.author_name && (
                        <p className="font-semibold text-[#0B3B24]">
                          {formData.author_name}
                        </p>
                      )}
                      {formData.author_quote && (
                        <p className="text-sm text-[#4A4A4A] italic mt-1">
                          &quot;{formData.author_quote}&quot;
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {loading ? (
              <div className="p-12 text-center text-gray-500 flex justify-center">
                <Loader2 className="animate-spin w-8 h-8" />
              </div>
            ) : blogs.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                No blog posts found. Create one!
              </div>
            ) : (
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-600 border-b">
                  <tr>
                    <th className="p-4 font-semibold">Image</th>
                    <th className="p-4 font-semibold">Title</th>
                    <th className="p-4 font-semibold">Category</th>
                    <th className="p-4 font-semibold">Date</th>
                    <th className="p-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {blogs.map((blog) => (
                    <tr
                      key={blog.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4">
                        <div className="relative">
                          {blog.header_image ? (
                            <img
                              src={blog.header_image}
                              alt={blog.title}
                              className="w-16 h-12 object-cover rounded"
                            />
                          ) : (
                            <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                              <ImageIcon size={16} />
                            </div>
                          )}
                          {blog.youtube_link && (
                            <div
                              className="absolute -top-1 -right-1 bg-red-600 rounded-full p-0.5"
                              title="Has YouTube video"
                            >
                              <Video size={10} className="text-white" />
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-4 font-medium text-[#0B3B24] max-w-xs truncate">
                        <span className="inline-flex items-center gap-1.5">
                          {blog.title}
                          {blog.youtube_link && (
                            <Video
                              size={14}
                              className="text-red-600 shrink-0"
                              title="Has YouTube video"
                            />
                          )}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        <span className="bg-[#E5F5C8] text-[#4F6F1F] px-2 py-1 rounded text-xs font-bold">
                          {blog.category}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-500">
                        {new Date(blog.created_at).toLocaleDateString()}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => editBlog(blog)}
                          className="text-blue-600 hover:bg-blue-50 p-2 rounded-full mr-2 transition-colors"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => deleteBlog(blog.id)}
                          className="text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
