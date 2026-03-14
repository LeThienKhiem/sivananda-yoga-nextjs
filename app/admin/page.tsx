"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  BookOpen,
  HelpCircle,
  ArrowRight,
  LayoutDashboard,
  LayoutTemplate,
  MessageSquareQuote,
} from "lucide-react";

// Define the modules here so it's easy to add more in the future
const adminModules = [
  {
    title: "Manage Blogs",
    description: "Create, edit, and publish blog articles and news.",
    href: "/admin/blogs",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "hover:border-blue-200",
  },
  {
    title: "Manage Courses",
    description: "Update course details, schedules, pricing, and statuses.",
    href: "/admin/courses",
    icon: BookOpen,
    color: "text-[#ED7D4D]", // Brand Orange
    bgColor: "bg-[#FEF5E7]",
    borderColor: "hover:border-[#ED7D4D]/30",
  },
  {
    title: "Manage FAQs",
    description: "Update frequently asked questions and categories.",
    href: "/admin/faqs",
    icon: HelpCircle,
    color: "text-[#0B3B24]", // Brand Green
    bgColor: "bg-[#E5F5C8]",
    borderColor: "hover:border-[#0B3B24]/30",
  },
  {
    title: "Manage Testimonials",
    description: "Add, edit, and remove student reviews and testimonials.",
    href: "/admin/testimonials",
    icon: MessageSquareQuote,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "hover:border-purple-200",
  },
  {
    title: "Page Builder",
    description: "Create custom dynamic pages with drag-and-drop components.",
    href: "/admin/pages",
    icon: LayoutTemplate,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "hover:border-indigo-200",
  },
  // Future placeholders
  /*
  {
    title: 'Settings',
    description: 'Configure general site settings and preferences.',
    href: '/admin/settings',
    icon: Settings,
    color: 'text-gray-600',
    bgColor: 'bg-gray-100',
    borderColor: 'hover:border-gray-300'
  }
  */
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 md:mb-12 border-b border-gray-200 pb-6">
          <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
            <LayoutDashboard className="w-8 h-8 text-[#0B3B24]" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-[#0B3B24]">
              Admin Dashboard
            </h1>
            <p className="text-gray-500 mt-1 font-medium">
              Manage your website content and settings
            </p>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminModules.map((module) => {
            const IconComponent = module.icon;
            return (
              <Link
                href={module.href}
                key={module.title}
                className={`group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col h-full ${module.borderColor}`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${module.bgColor} ${module.color}`}
                >
                  <IconComponent size={28} />
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0B3B24] transition-colors">
                  {module.title}
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {module.description}
                </p>

                <div
                  className={`flex items-center font-bold text-sm tracking-wide mt-auto transition-colors duration-300 ${module.color}`}
                >
                  Go to module
                  <ArrowRight
                    size={18}
                    className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
