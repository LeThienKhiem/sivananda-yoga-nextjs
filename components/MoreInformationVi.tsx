"use client";

import React from "react";
import Link from "next/link";

export default function MoreInformationVi() {
  return (
    <section className="mx-auto w-full max-w-4xl bg-[#FDFCF8] px-6 py-20">
      <div className="mb-12 border-l-4 border-[#0B3B24] pl-6">
        <h2 className="font-serif text-2xl font-bold uppercase tracking-wide text-[#0B3B24] md:text-3xl">
          Thông tin thêm
        </h2>
      </div>

      <div className="space-y-12 border-l border-gray-200 pl-6 md:pl-10">
        {/* Contact Us */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#0B3B24]">Liên hệ với chúng tôi</h3>
          <p className="text-[#4A4A4A]">
            Bạn có câu hỏi về việc đăng ký các chương trình và khóa tu... vui lòng
            liên hệ với chúng tôi, gửi tin nhắn hoặc gọi{" "}
            <strong>(+84) 263 650 1100</strong>.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-block rounded-sm bg-[#E5F5C8] px-8 py-3 text-sm font-bold uppercase tracking-widest text-[#0B3B24] shadow-sm transition-colors hover:bg-[#d4e8aa]"
          >
            Liên Hệ
          </Link>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#0B3B24]">
            Câu hỏi thường gặp (FAQs)
          </h3>
          <p className="text-[#4A4A4A]">
            Chúng tôi có đầy đủ các câu trả lời chi tiết cho những câu hỏi thường
            gặp nhất về khóa tu Yoga.
          </p>
          <Link
            href="/frequently-asked-questions"
            className="mt-2 inline-block rounded-sm bg-[#E5F5C8] px-8 py-3 text-sm font-bold uppercase tracking-widest text-[#0B3B24] shadow-sm transition-colors hover:bg-[#d4e8aa]"
          >
            Xem FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
