import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import interiorImg from "@assets/generated_images/interior_painting_service_image.png";
import exteriorImg from "@assets/generated_images/exterior_house_painting_service_image.png";
import heroImg from "@assets/generated_images/interior_living_room_painting_hero_shot.png";
import remodelImg from "@assets/generated_images/kitchen_remodeling_service_image.png";

export default function Gallery() {
  const { t } = useLanguage();

  const images = [
    { src: heroImg, alt: "Living Room" },
    { src: exteriorImg, alt: "Exterior House" },
    { src: interiorImg, alt: "Detail Work" },
    { src: remodelImg, alt: "Kitchen Remodel" },
    { src: interiorImg, alt: "Bedroom" }, // Reusing for layout demo
    { src: exteriorImg, alt: "Siding" }, // Reusing for layout demo
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            {t.nav.gallery}
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <AspectRatio ratio={4/3}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-serif font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    {img.alt}
                  </span>
                </div>
              </AspectRatio>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
