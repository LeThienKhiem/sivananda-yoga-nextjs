"use client";

import React from "react";
import UpcomingEvents from "@/components/UpcomingEvents";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MoreInformationVi from "@/components/MoreInformationVi";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function SyhetPracticuumPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FDFCF8]">
      <Header />

      {/* 1. HERO BANNER */}
      <section className="relative flex w-full flex-col">
        {/* Background Image Container */}
        <div className="relative z-0 h-[50vh] min-h-[400px] w-full md:h-[60vh] md:min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
            alt="SYHET Practicuum Team"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Seamless Overlapping Content Box (No Shadow, blends with background) */}
        <div className="relative z-10 mx-auto w-[95%] max-w-5xl -mt-16 bg-[#FDFCF8] px-6 pt-10 pb-6 text-center md:-mt-24 md:pt-14 md:pb-10">
          <p className="mb-2 text-lg font-medium text-gray-600 md:mb-4 md:text-xl">
            Chương Trình Cố Vấn Sức Khỏe Phục Hồi Tự Nhiên
          </p>
          <h1 className="font-serif text-3xl font-bold text-[#0B3B24] md:text-5xl lg:text-6xl">
            Khoá học nghỉ dưỡng theo chủ đề
          </h1>
        </div>
      </section>

      {/* 2. INTRO OVERLAP SECTION */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        {/* Top Row: Text Left, Image Right */}
        <div className="flex flex-col items-center gap-12 md:flex-row lg:gap-20">
          <div className="w-full space-y-8 md:w-1/2">
            <p className="text-lg leading-relaxed text-[#4A4A4A] md:text-xl">
              Chương trình <strong>&quot;Cố vấn Sức Khỏe Phục Hồi Tự Nhiên theo Yoga&quot;</strong> là chuỗi các <strong>khóa học kéo dài từ 3 đến 5 ngày</strong>, được giảng dạy bởi các giáo viên đang trong quá trình đào tạo chương trình Giáo Viên Cố Vấn Sức Khỏe Phục Hồi Tự Nhiên - SYHET 800 giờ. Đây là chương trình ứng dụng yoga cổ điển nhằm <strong>cải thiện các bệnh lý cụ thể</strong> và <strong>tăng cường sức khỏe toàn diện</strong> - thể chất, tinh thần và tâm linh.
            </p>
            <button
              type="button"
              className="rounded-sm bg-[#ED7D4D] px-8 py-3.5 text-base font-bold uppercase tracking-widest text-white shadow-md transition-colors hover:bg-orange-600"
            >
              Khóa Học Sắp Tới
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-xl md:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800"
                alt="Yoga Therapy Session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Middle Overlap: Green Box */}
        <div className="relative z-20 mx-auto mb-12 mt-12 max-w-3xl rounded-sm bg-[#4F6F1F] p-8 text-white shadow-2xl md:-mb-24 md:-mt-24 md:p-12 lg:p-16">
          <p className="font-medium leading-relaxed text-white/95 text-justify text-base md:text-left md:text-lg">
            Mỗi giáo viên đều là người sống và thực hành theo lối sống Yoga cổ điển, có sự hiểu biết sâu sắc về bản thân, nhận diện được điểm mạnh - điểm yếu, và kết nối sâu sắc với sự cân bằng và khỏe mạnh từ bên trong. Từ nền tảng trải nghiệm cá nhân đó, giáo viên sẽ giảng dạy, khuyến khích và hỗ trợ học viên thực hành Yoga một cách đều đặn, thông qua việc điều chỉnh và gợi ý những phương pháp thực hành đơn giản, dễ áp dụng, phù hợp với thể trạng và hoàn cảnh sống riêng biệt của từng học viên ở mỗi thời điểm.
          </p>
        </div>

        {/* Bottom Row: Image Left, Text Right */}
        <div className="flex flex-col items-center gap-12 md:flex-row-reverse lg:gap-20">
          <div className="w-full space-y-8 md:w-1/2">
            <div className="border-l-[3px] border-gray-300 pl-6 md:pl-8">
              <p className="text-lg leading-relaxed text-[#4A4A4A] md:text-xl">
                <strong>Thông qua sự đồng hành đầy thấu hiểu và kết nối</strong>, học viên được hướng dẫn thực hành 5 điểm Yoga (thể dục đúng, hít thở đúng, thư giãn đúng, dinh dưỡng đúng, tư duy tích cực và thiền định), kết hợp cùng các phương pháp sống lành mạnh theo truyền thống Yoga và Ayurveda. Chương trình không chỉ giúp làm dịu các cơn đau về thể chất và tinh thần, mà còn từng bước hình thành một lối sống tích cực, khỏe mạnh và đầy yêu thương.
              </p>
            </div>
            <button
              type="button"
              className="ml-6 rounded-sm bg-[#ED7D4D] px-8 py-3.5 text-base font-bold uppercase tracking-widest text-white shadow-md transition-colors hover:bg-orange-600 md:ml-8"
            >
              Khóa Học Sắp Tới
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-xl md:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=800"
                alt="Meditation in Forest"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. GIFT BANNER SECTION */}
      <section className="relative flex h-[300px] w-full items-center justify-center px-6 text-center md:h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2000"
            alt="Forest Path Banner"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-white">
          <h2 className="mb-6 font-serif text-3xl font-medium leading-tight drop-shadow-md md:text-4xl lg:text-5xl">
            Món Quà Từ Trái Tim – Hỗ Trợ 50% Chi Phí
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed opacity-95 drop-shadow-sm text-justify md:text-center md:text-lg">
            Vì một cộng đồng khỏe mạnh và gắn kết hơn, chương trình &quot;Cố vấn Sức Khỏe Phục Hồi Tự Nhiên theo Yoga&quot; hiện đang được hỗ trợ 50% chi phí tham dự. Đây là một nỗ lực nhằm tạo điều kiện cho nhiều người hơn có cơ hội tiếp cận phương pháp chăm sóc sức khỏe toàn diện, dựa trên nền tảng Yoga và Ayurveda cổ điển.
          </p>
        </div>
      </section>

      {/* 4. COURSE OVERVIEW SECTION */}
      <section className="w-full bg-[#F4F7F0] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#0B3B24] md:text-5xl">
              Nội dung tổng quan của các khoá học
            </h2>
            <p className="font-serif text-xl font-medium italic text-[#4A4A4A] md:text-2xl">
              Tư vấn cá nhân – Thực hành thiết thực – Chuyển hóa từ bên trong
            </p>
          </div>

          {/* List of Cards */}
          <div className="space-y-4 md:space-y-6">
            {/* Item 1 */}
            <div className="flex items-center gap-4 rounded-lg border border-white/50 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] md:p-8">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-[#4F6F1F] md:h-7 md:w-7" />
              <p className="text-lg font-medium text-[#4A4A4A] md:text-xl">
                Tư vấn sức khoẻ toàn diện 1 kèm 1 trong suốt trước, trong, sau khoá học
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4 rounded-lg border border-white/50 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] md:p-8">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-[#4F6F1F] md:h-7 md:w-7" />
              <p className="text-lg font-medium text-[#4A4A4A] md:text-xl">
                Thực hành phương pháp cổ điển ứng dụng cho từng chứng bệnh cụ thể
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4 rounded-lg border border-white/50 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] md:p-8">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-[#4F6F1F] md:h-7 md:w-7" />
              <p className="text-lg font-medium text-[#4A4A4A] md:text-xl">
                Tìm hiểu nguồn gốc thật sự của bệnh tật theo góc nhìn hiện đại và cổ điển
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-4 rounded-lg border border-white/50 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] md:p-8">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-[#4F6F1F] md:h-7 md:w-7" />
              <p className="text-lg font-medium text-[#4A4A4A] md:text-xl">
                Triết lý yoga cổ điển và ứng dụng, xây dựng lối sống lành mạnh, kết nối yêu thương
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMAGE BREAK SECTION */}
      <section className="relative h-[400px] w-full md:h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
          alt="Class discussion and learning"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* 6. UPCOMING EVENTS SECTION */}
      <div className="bg-[#FDFCF8] py-12">
        <UpcomingEvents />
      </div>

      {/* 7. MORE INFORMATION SECTION (VIETNAMESE) */}
      <MoreInformationVi />

      {/* Spacer for bottom if needed */}
      <div className="flex-grow" />

      <Footer />
    </main>
  );
}
