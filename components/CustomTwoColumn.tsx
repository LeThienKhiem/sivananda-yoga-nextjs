"use client";

import Image from "next/image";

interface CustomTwoColumnProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageFirst?: boolean;
}

export default function CustomTwoColumn({
  title,
  description,
  imageUrl,
  imageFirst = true,
}: CustomTwoColumnProps) {
  const imageBlock = (
    <div className="w-full md:w-1/2">
      <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-lg border border-gray-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title || "Custom Block"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>
    </div>
  );

  const textBlock = (
    <div className="w-full md:w-1/2 space-y-6">
      {title && (
        <h2 className="text-3xl md:text-4xl font-serif text-[#0B3B24] font-bold">
          {title}
        </h2>
      )}
      {description && (
        <div
          className="prose prose-slate max-w-none text-[#4A4A4A] leading-relaxed
                     [&>h2]:text-2xl [&>h2]:font-serif [&>h2]:text-[#0B3B24] [&>h2]:mb-4
                     [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>strong]:text-[#0B3B24]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto py-16 md:py-24 px-6 w-full">
      <div
        className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${imageFirst ? "" : "md:flex-row-reverse"}`}
      >
        {imageBlock}
        {textBlock}
      </div>
    </section>
  );
}
