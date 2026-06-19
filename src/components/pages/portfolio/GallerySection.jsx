import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { GALLERY_ITEMS } from "@/config/sections/portfolio";

export default function GallerySection() {
  return (
    <section id="portfolio-gallery" className="section-shell border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="left"
          eyebrow="Design"
          title="Creative"
          highlight="gallery"
          className="mb-8 max-w-xl"
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={600}
                className="aspect-square w-full object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
