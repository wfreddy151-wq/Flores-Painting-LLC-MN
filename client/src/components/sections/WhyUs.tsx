import { motion } from "framer-motion";
import { CheckCircle2, DollarSign, Award, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function WhyUs() {
  const { t } = useLanguage();

  const features = [
    {
      key: "quality",
      icon: Award,
      title: t.whyUs.quality.title,
      description: t.whyUs.quality.desc,
    },
    {
      key: "estimates",
      icon: DollarSign,
      title: t.whyUs.estimates.title,
      description: t.whyUs.estimates.desc,
    },
    {
      key: "professionalism",
      icon: CheckCircle2,
      title: t.whyUs.professionalism.title,
      description: t.whyUs.professionalism.desc,
    },
    {
      key: "communication",
      icon: MessageCircle,
      title: t.whyUs.communication.title,
      description: t.whyUs.communication.desc,
    },
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-8 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dmjd26f13/image/upload/v1766384737/B92BF314-31FC-4410-AFBB-B4B940ABC580_efdsmr.png')",
          backgroundSize: "auto",
          backgroundRepeat: "repeat"
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
            {t.whyUs.title}
          </h2>
          <p className="text-gray-300 text-lg">
            Flores Painting LLC
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 flex items-center justify-center rotate-3 group-hover:rotate-0 transition-all duration-300 group-hover:bg-secondary">
                <feature.icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
