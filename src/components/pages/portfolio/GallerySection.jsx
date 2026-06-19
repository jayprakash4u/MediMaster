"use client";

import React from "react";

export default function GallerySection() {
  // Configurable gallery data array. You can replace the placeholder URLs with your actual images later.
  const galleryItems = [
    {
      id: 1,
      src: "/portfolio/design that speak/608196595_1638582740436478_7316760576952356079_n.jpg",
      alt: "608196595 1638582740436478 7316760576952356079 n",
    },
    {
      id: 2,
      src: "/portfolio/design that speak/633887700_1528118185983829_6802503972094607037_n.jpg",
      alt: "633887700 1528118185983829 6802503972094607037 n",
    },
    {
      id: 3,
      src: "/portfolio/design that speak/637881301_1676310873330331_3552557693031311283_n.jpg",
      alt: "637881301 1676310873330331 3552557693031311283 n",
    },
    {
      id: 4,
      src: "/portfolio/design that speak/657313990_1563836305745350_5214077155083448411_n.jpg",
      alt: "657313990 1563836305745350 5214077155083448411 n",
    },
    {
      id: 5,
      src: "/portfolio/design that speak/668411635_122308715780028589_2334395967835997730_n.jpg",
      alt: "668411635 122308715780028589 2334395967835997730 n",
    },
    {
      id: 6,
      src: "/portfolio/design that speak/669183979_122309205626028589_6851250268842688242_n.jpg",
      alt: "669183979 122309205626028589 6851250268842688242 n",
    },
    {
      id: 7,
      src: "/portfolio/design that speak/679847150_1026673283022148_3840906238837073562_n.jpg",
      alt: "679847150 1026673283022148 3840906238837073562 n",
    },
    {
      id: 8,
      src: "/portfolio/design that speak/686338965_994380072929191_7980025454209299416_n.jpg",
      alt: "686338965 994380072929191 7980025454209299416 n",
    },
    {
      id: 9,
      src: "/portfolio/design that speak/696344317_1000788718954993_7169556252752826802_n.jpg",
      alt: "696344317 1000788718954993 7169556252752826802 n",
    },
    {
      id: 10,
      src: "/portfolio/design that speak/697943252_122238229964253460_693006613387952388_n.jpg",
      alt: "697943252 122238229964253460 693006613387952388 n",
    },
    {
      id: 11,
      src: "/portfolio/design that speak/700078824_122238964406253460_1833223054325819015_n.jpg",
      alt: "700078824 122238964406253460 1833223054325819015 n",
    },
    {
      id: 12,
      src: "/portfolio/design that speak/704810635_122231542022041936_4612472522226303167_n.jpg",
      alt: "704810635 122231542022041936 4612472522226303167 n",
    },
    {
      id: 13,
      src: "/portfolio/design that speak/706981442_1051878370501639_596125456630341765_n.jpg",
      alt: "706981442 1051878370501639 596125456630341765 n",
    },
    {
      id: 14,
      src: "/portfolio/design that speak/714444052_122232503384041936_3825057358130271884_n.jpg",
      alt: "714444052 122232503384041936 3825057358130271884 n",
    },
    { id: 15, src: "/portfolio/design that speak/hgh.jpg", alt: "hgh" },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 font-serif">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER SECTION --- */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-2xl md:text-3xl text-neutral-800 tracking-widest font-light uppercase">
            Designs That Speak
          </h2>
          <div className="flex justify-center items-center gap-3 pt-2 text-neutral-400 text-xxs">
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
          </div>
        </div>

        {/* --- MASONRY GRID SYSTEM --- */}
        {/* Using CSS columns layout strategy to match asymmetrical staggering without break-blocks */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 [column-fill:_balance]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid relative overflow-hidden group rounded-sm bg-neutral-50 cursor-pointer"
            >
              {/* Image Frame Wrapper */}
              <div className="w-full h-auto overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Minimal Clean Overlay (Optional - shows up slightly on hover) */}
              <div className="absolute inset-0 bg-neutral-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
