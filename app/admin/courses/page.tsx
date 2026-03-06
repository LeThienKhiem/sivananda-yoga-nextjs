"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase';
import { Plus, Edit, Trash2, Image as ImageIcon, Loader2 } from 'lucide-react';

const CATEGORIES = ['Upcoming', 'Yoga Vacation', 'Ayurveda', 'Workshop', 'Short Courses', 'Holistic Health', 'Teacher Training'];
const LANGUAGES = ['Vietnamese', 'English', 'Chinese', 'Japanese'];
const COURSE_TYPES = ['Online', 'Offline', 'Offline and Online'];
const PRICING_OPTIONS = ['Paid', 'Free'];

const slugify = (str: string) => {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd').replace(/([^0-9a-z-\s])/g, '').replace(/(\s+)/g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '');
};

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const [formData, setFormData] = useState({
    id: '',
    title: '',
    slug: '',
    image_url: '',
    category: [] as string[],
    pricing: 'Paid',
    course_type: 'Offline',
    languages: ['English'] as string[],
    price_display: '',
    date_display: '',
    location: '',
    registration_link: '',
    description: '',
    start_date: '',
    end_date: '',
    organizer_name: '',
    organizer_phone: '',
    organizer_email: '',
    venue_name: '',
    venue_address: '',
    is_active: true
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) console.error('Error fetching courses:', error);
    else setCourses(data || []);
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'category' | 'languages') => {
    const value = e.target.value;
    const checked = e.target.checked;
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value] 
        : prev[field].filter(item => item !== value)
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploadingImage(true);
      const file = e.target.files?.[0];
      if (!file) return;

      const fileExt = file.name.split('.').pop();
      const fileName = `course-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images') // Reusing the public bucket we created for blogs
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('blog-images').getPublicUrl(filePath);
      
      setFormData(prev => ({ ...prev, image_url: data.publicUrl }));
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image!');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const postData = { ...formData };
    
    if (!postData.id) {
      // @ts-ignore
      delete postData.id; 
      const { error } = await supabase.from('courses').insert([postData]);
      if (error) alert('Error creating course: ' + error.message);
    } else {
      const { error } = await supabase.from('courses').update(postData).eq('id', postData.id);
      if (error) alert('Error updating course: ' + error.message);
    }

    resetForm();
    fetchCourses();
  };

  const editCourse = (course: any) => {
    setFormData({
      id: course.id,
      title: course.title || '',
      slug: course.slug || '',
      image_url: course.image_url || '',
      category: course.category || [],
      pricing: course.pricing || 'Paid',
      course_type: course.course_type || 'Offline',
      languages: course.languages || [],
      price_display: course.price_display || '',
      date_display: course.date_display || '',
      location: course.location || '',
      registration_link: course.registration_link || '',
      description: course.description || '',
      start_date: course.start_date || '',
      end_date: course.end_date || '',
      organizer_name: course.organizer_name || '',
      organizer_phone: course.organizer_phone || '',
      organizer_email: course.organizer_email || '',
      venue_name: course.venue_name || '',
      venue_address: course.venue_address || '',
      is_active: course.is_active ?? true
    });
    setIsEditing(true);
  };

  const deleteCourse = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      const { error } = await supabase.from('courses').delete().eq('id', id);
      if (error) alert('Error deleting course');
      else fetchCourses();
    }
  };

  const resetForm = () => {
    setFormData({
      id: '', title: '', slug: '', image_url: '', category: [], pricing: 'Paid', course_type: 'Offline',
      languages: ['English'], price_display: '', date_display: '', location: '', registration_link: '',
      description: '', start_date: '', end_date: '', organizer_name: '', organizer_phone: '', organizer_email: '',
      venue_name: '', venue_address: '', is_active: true
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0B3B24]">Course Manager</h1>
          {!isEditing && (
            <button onClick={() => setIsEditing(true)} className="w-full sm:w-auto bg-[#ED7D4D] text-white px-6 py-2 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-orange-600">
              <Plus size={20} /> Create New Course
            </button>
          )}
        </div>

        {isEditing ? (
          <div className="bg-white p-4 md:p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 border-b pb-4">{formData.id ? 'Edit Course' : 'Create New Course'}</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
                {/* LEFT COLUMN: EDITOR */}
                <div className="space-y-8 lg:h-[calc(100vh-200px)] lg:overflow-y-auto lg:pr-4 min-h-0">
                  
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-lg">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold mb-1 text-[#0B3B24]">Course Title *</label>
                      <input type="text" name="title" value={formData.title} onChange={(e) => {
                        handleInputChange(e);
                        if (!formData.id) setFormData(prev => ({ ...prev, slug: slugify(e.target.value) }));
                      }} required className="w-full p-2 border rounded focus:ring-2 focus:ring-[#ED7D4D] outline-none" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold mb-1 text-[#0B3B24]">URL Slug *</label>
                      <input type="text" name="slug" value={formData.slug} onChange={handleInputChange} required className="w-full p-2 border rounded focus:ring-2 focus:ring-[#ED7D4D] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-1 text-[#0B3B24]">Short Date Display</label>
                      <input type="text" name="date_display" value={formData.date_display} onChange={handleInputChange} placeholder="e.g. JUNE 12 - JULY 11" className="w-full p-2 border rounded outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-1 text-[#0B3B24]">Short Location Display</label>
                      <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="e.g. Dalat Ashram" className="w-full p-2 border rounded outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-1 text-[#0B3B24]">Price Display</label>
                      <input type="text" name="price_display" value={formData.price_display} onChange={handleInputChange} placeholder="e.g. FROM $1450" className="w-full p-2 border rounded outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-1 text-[#0B3B24]">External Registration URL</label>
                      <input type="text" name="registration_link" value={formData.registration_link} onChange={handleInputChange} placeholder="https://retreat.guru/..." className="w-full p-2 border rounded outline-none" />
                    </div>
                  </div>

                  {/* Detailed Schedule & Venue */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-lg">
                    <div>
                      <label className="block text-sm font-bold mb-1 text-[#0B3B24]">Start Date & Time</label>
                      <input type="text" name="start_date" value={formData.start_date} onChange={handleInputChange} placeholder="Thursday, January 8, 2026 @ 8:00 am" className="w-full p-2 border rounded outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-1 text-[#0B3B24]">End Date & Time</label>
                      <input type="text" name="end_date" value={formData.end_date} onChange={handleInputChange} placeholder="Saturday, January 10, 2026 @ 5:00 pm" className="w-full p-2 border rounded outline-none" />
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-1 text-[#0B3B24]">Venue Name</label>
                        <input type="text" name="venue_name" value={formData.venue_name} onChange={handleInputChange} placeholder="Sivananda Yoga Resort..." className="w-full p-2 border rounded outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-1 text-[#0B3B24]">Venue Address</label>
                        <input type="text" name="venue_address" value={formData.venue_address} onChange={handleInputChange} placeholder="K'lan Resort, Dalat..." className="w-full p-2 border rounded outline-none" />
                      </div>
                    </div>
                  </div>

                  {/* Organizer */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-lg">
                    <div>
                      <label className="block text-sm font-bold mb-1 text-[#0B3B24]">Organizer Name</label>
                      <input type="text" name="organizer_name" value={formData.organizer_name} onChange={handleInputChange} placeholder="Swami Sitaramananda" className="w-full p-2 border rounded outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-1 text-[#0B3B24]">Organizer Phone</label>
                      <input type="text" name="organizer_phone" value={formData.organizer_phone} onChange={handleInputChange} placeholder="+84 263..." className="w-full p-2 border rounded outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-1 text-[#0B3B24]">Organizer Email</label>
                      <input type="text" name="organizer_email" value={formData.organizer_email} onChange={handleInputChange} placeholder="email@sivananda.org" className="w-full p-2 border rounded outline-none" />
                    </div>
                  </div>

                  {/* Description (HTML) */}
                  <div className="p-6 bg-gray-50 rounded-lg flex flex-col">
                    <label className="block text-sm font-bold mb-1 text-[#0B3B24]">Course Description (HTML supported)</label>
                    <textarea name="description" value={formData.description} onChange={handleInputChange} rows={12} className="w-full p-3 border rounded focus:ring-2 focus:ring-[#ED7D4D] outline-none font-mono text-sm flex-grow" placeholder="<h2>About this course</h2><p>...</p>" />
                  </div>

                  {/* Classification & Filters */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-50 rounded-lg">
                    {/* Categories (Array) */}
                    <div>
                      <label className="block text-sm font-bold mb-3 text-[#0B3B24]">Categories</label>
                      <div className="flex flex-wrap gap-3">
                        {CATEGORIES.map(cat => (
                          <label key={cat} className="flex items-center gap-2 text-sm bg-white border px-3 py-1.5 rounded cursor-pointer hover:border-[#ED7D4D]">
                            <input type="checkbox" value={cat} checked={formData.category.includes(cat)} onChange={(e) => handleArrayChange(e, 'category')} className="accent-[#ED7D4D]" />
                            {cat}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Languages (Array) */}
                    <div>
                      <label className="block text-sm font-bold mb-3 text-[#0B3B24]">Languages</label>
                      <div className="flex flex-wrap gap-3">
                        {LANGUAGES.map(lang => (
                          <label key={lang} className="flex items-center gap-2 text-sm bg-white border px-3 py-1.5 rounded cursor-pointer hover:border-[#ED7D4D]">
                            <input type="checkbox" value={lang} checked={formData.languages.includes(lang)} onChange={(e) => handleArrayChange(e, 'languages')} className="accent-[#ED7D4D]" />
                            {lang}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Type & Pricing */}
                    <div className="flex gap-6">
                      <div className="flex-1">
                        <label className="block text-sm font-bold mb-1 text-[#0B3B24]">Course Type</label>
                        <select name="course_type" value={formData.course_type} onChange={handleInputChange} className="w-full p-2 border rounded focus:ring-2 focus:ring-[#ED7D4D] outline-none">
                          {COURSE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-bold mb-1 text-[#0B3B24]">Pricing</label>
                        <select name="pricing" value={formData.pricing} onChange={handleInputChange} className="w-full p-2 border rounded focus:ring-2 focus:ring-[#ED7D4D] outline-none">
                          {PRICING_OPTIONS.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Active Toggle */}
                    <div className="flex items-center pt-6">
                      <label className="flex items-center gap-3 cursor-pointer font-bold text-[#0B3B24]">
                        <input type="checkbox" name="is_active" checked={formData.is_active} onChange={handleInputChange} className="w-5 h-5 accent-[#ED7D4D]" />
                        Is Active (Visible on site)
                      </label>
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <label className="block text-sm font-bold mb-3 text-[#0B3B24]">Course Image</label>
                    <div className="border-2 border-dashed border-gray-300 p-6 rounded text-center bg-white relative">
                      {formData.image_url ? (
                        <div className="mb-4">
                          <img src={formData.image_url} alt="Course" className="h-48 mx-auto object-cover rounded shadow-md" />
                        </div>
                      ) : (
                        <div className="mb-4 text-gray-400"><ImageIcon size={48} className="mx-auto mb-2 opacity-50" /> No image uploaded</div>
                      )}
                      <div className="flex justify-center items-center gap-4">
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="text-sm" disabled={uploadingImage} />
                        {uploadingImage && <Loader2 className="animate-spin text-[#ED7D4D]" />}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 pt-4 border-t">
                    <button type="button" onClick={resetForm} className="px-6 py-2 border rounded text-gray-600 hover:bg-gray-100 font-medium">Cancel</button>
                    <button type="submit" disabled={loading || uploadingImage} className="px-8 py-2 bg-[#0B3B24] text-white rounded hover:bg-[#1a5438] flex items-center gap-2 font-bold shadow-md">
                      {loading && <Loader2 className="w-4 h-4 animate-spin" />} Save Course
                    </button>
                  </div>
                </div>

                {/* RIGHT COLUMN: LIVE PREVIEW */}
                <div className="hidden lg:block sticky top-8 h-[calc(100vh-200px)] overflow-y-auto bg-white rounded-xl border border-gray-200 shadow-inner p-8">
                  <div className="text-center mb-8 border-b pb-6">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-2">Live Preview</span>
                    <h1 className="text-3xl font-serif font-bold text-[#0B3B24] mb-2">{formData.title || "Untitled Course"}</h1>
                    <p className="text-sm text-gray-500 font-medium">{formData.date_display} | {formData.location}</p>
                  </div>
                  
                  {/* Details Card Preview */}
                  <div className="bg-gray-50 p-6 rounded-lg mb-8 text-sm text-[#4A4A4A] space-y-3 border border-gray-100">
                    <p><strong className="text-[#0B3B24]">Start:</strong> {formData.start_date || 'N/A'}</p>
                    <p><strong className="text-[#0B3B24]">End:</strong> {formData.end_date || 'N/A'}</p>
                    <p><strong className="text-[#0B3B24]">Organizer:</strong> {formData.organizer_name || 'N/A'} {formData.organizer_phone ? `(${formData.organizer_phone})` : ''}</p>
                    <p><strong className="text-[#0B3B24]">Venue:</strong> {formData.venue_name || 'N/A'} {formData.venue_address ? `- ${formData.venue_address}` : ''}</p>
                  </div>

                  {/* Rendered HTML Description */}
                  <div 
                    className="prose prose-slate max-w-none text-[#4A4A4A]
                      [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[#0B3B24] [&>h2]:mt-8 [&>h2]:mb-4
                      [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#0B3B24] [&>h3]:mt-6 [&>h3]:mb-3
                      [&>p]:mb-4 [&>p]:leading-relaxed
                      [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-4 [&>ul>li]:mb-1
                      [&>strong]:font-bold [&>strong]:text-[#0B3B24]"
                    dangerouslySetInnerHTML={{ __html: formData.description || '<p class="text-gray-400 italic">Description preview will appear here...</p>' }}
                  />
                </div>

              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {loading ? (
              <div className="p-12 text-center text-gray-500 flex justify-center"><Loader2 className="animate-spin w-8 h-8" /></div>
            ) : courses.length === 0 ? (
              <div className="p-12 text-center text-gray-500">No courses found. Create one!</div>
            ) : (
              <>
                {/* Desktop Table View */}
                <div className="hidden md:block">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-600 border-b">
                      <tr>
                        <th className="p-4 font-semibold">Image</th>
                        <th className="p-4 font-semibold">Title</th>
                        <th className="p-4 font-semibold">Categories</th>
                        <th className="p-4 font-semibold">Date</th>
                        <th className="p-4 font-semibold text-center">Status</th>
                        <th className="p-4 font-semibold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {courses.map(course => (
                        <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                          <td className="p-4">
                            {course.image_url ? (
                              <img src={course.image_url} alt={course.title} className="w-20 h-14 object-cover rounded shadow-sm" />
                            ) : (
                              <div className="w-20 h-14 bg-gray-200 rounded flex items-center justify-center text-gray-400"><ImageIcon size={16} /></div>
                            )}
                          </td>
                          <td className="p-4 font-bold text-[#0B3B24] max-w-xs truncate">{course.title}</td>
                          <td className="p-4 text-xs text-gray-500">
                            <div className="flex flex-wrap gap-1">
                               {course.category?.slice(0,2).map((c:string) => <span key={c} className="bg-gray-200 px-2 py-0.5 rounded">{c}</span>)}
                               {course.category?.length > 2 && <span>+{course.category.length - 2}</span>}
                            </div>
                          </td>
                          <td className="p-4 text-sm text-gray-600">{course.date_display}</td>
                          <td className="p-4 text-center">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${course.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                              {course.is_active ? 'Active' : 'Hidden'}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <button onClick={() => editCourse(course)} className="text-blue-600 hover:bg-blue-50 p-2 rounded-full mr-2 transition-colors">
                              <Edit size={18} />
                            </button>
                            <button onClick={() => deleteCourse(course.id)} className="text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors">
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden flex flex-col divide-y divide-gray-100">
                  {courses.map(course => (
                    <div key={course.id} className="flex flex-col p-4 hover:bg-gray-50 transition-colors gap-3">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0">
                          {course.image_url ? (
                            <img src={course.image_url} alt={course.title} className="w-16 h-16 object-cover rounded-md shadow-sm" />
                          ) : (
                            <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center text-gray-400"><ImageIcon size={20} /></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-[#0B3B24] line-clamp-2 text-sm mb-1.5">{course.title}</h4>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mt-1">
                            <span className={`px-2 py-0.5 rounded-md font-bold ${course.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                              {course.is_active ? 'Active' : 'Hidden'}
                            </span>
                            <span className="truncate">{course.date_display}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                        <div className="flex flex-wrap gap-1">
                           {course.category?.slice(0,2).map((c:string) => <span key={c} className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-[10px]">{c}</span>)}
                           {course.category?.length > 2 && <span className="text-[10px] text-gray-500">+{course.category.length - 2}</span>}
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => editCourse(course)} className="text-blue-600 bg-blue-50 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 text-xs font-bold">
                            <Edit size={14} /> Edit
                          </button>
                          <button onClick={() => deleteCourse(course.id)} className="text-red-600 bg-red-50 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 text-xs font-bold">
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
