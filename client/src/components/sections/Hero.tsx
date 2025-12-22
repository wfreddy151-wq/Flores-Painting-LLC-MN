import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import heroImage from "@assets/generated_images/interior_living_room_painting_hero_shot.png";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-white"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 text-sm font-medium text-secondary">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Flores Painting LLC MN</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6 drop-shadow-sm">
            {t.hero.title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg h-14 px-8 rounded-full shadow-lg shadow-secondary/20 transition-all hover:scale-105"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white/5 backdrop-blur-sm border-white/30 text-white hover:bg-white/10 font-medium text-lg h-14 px-8 rounded-full"
            >
              {t.nav.services}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
