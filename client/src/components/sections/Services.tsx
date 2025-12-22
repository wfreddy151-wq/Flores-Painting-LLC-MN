import { motion } from "framer-motion";
import { Paintbrush, Home, Hammer, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import interiorImg from "@assets/generated_images/interior_painting_service_image.png";
import exteriorImg from "@assets/generated_images/exterior_house_painting_service_image.png";
import remodelImg from "@assets/generated_images/kitchen_remodeling_service_image.png";
import cleaningImg from "@assets/generated_images/post-construction_cleaning_service_image.png";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: "interior",
      title: t.services.interior.title,
      description: t.services.interior.desc,
      icon: Paintbrush,
      image: interiorImg,
    },
    {
      id: "exterior",
      title: t.services.exterior.title,
      description: t.services.exterior.desc,
      icon: Home,
      image: exteriorImg,
    },
    {
      id: "remodel",
      title: t.services.remodel.title,
      description: t.services.remodel.desc,
      icon: Hammer,
      image: remodelImg,
    },
    {
      id: "cleaning",
      title: t.services.cleaning.title,
      description: t.services.cleaning.desc,
      icon: Sparkles,
      image: cleaningImg,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            {t.services.title}
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white p-2 rounded-lg shadow-md">
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
