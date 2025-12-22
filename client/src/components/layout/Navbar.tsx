import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Globe, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import logoImage from "@assets/generated_images/logo_for_flores_painting_llc.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.gallery, href: "#gallery" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Smooth scroll
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // If we are on a different route (e.g. privacy), go home first
      setLocation("/");
      setTimeout(() => {
        const el = document.querySelector(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-2" : "bg-transparent py-4 text-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group" onClick={(e) => handleScrollTo(e, "#home")}>
          <div className="relative overflow-hidden rounded-full border-2 border-white/20 bg-white p-1 h-12 w-12 transition-transform group-hover:scale-105">
            <img src={logoImage} alt="Flores Painting LLC" className="h-full w-full object-contain" />
          </div>
          <span className={cn(
            "font-serif font-bold text-lg md:text-xl tracking-tight transition-colors",
            scrolled ? "text-primary" : "text-white"
          )}>
            Flores Painting LLC
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-secondary",
                  scrolled ? "text-gray-700" : "text-gray-200"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 pl-6 border-l border-gray-200/20">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className={cn(
                "gap-2 font-medium",
                 scrolled ? "hover:bg-gray-100" : "text-white hover:bg-white/10 hover:text-white"
              )}
            >
              <Globe className="h-4 w-4" />
              {language === "es" ? "EN" : "ES"}
            </Button>
            
            <Button 
              size="sm" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-md"
              asChild
            >
              <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")}>
                {t.nav.estimate}
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLanguage}
            className={cn(scrolled ? "" : "text-white hover:bg-white/10")}
          >
             <span className="font-bold text-xs">{language === "es" ? "EN" : "ES"}</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(scrolled ? "" : "text-white hover:bg-white/10")}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top-2 p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="flex items-center py-3 px-4 rounded-md text-gray-700 hover:bg-gray-50 font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="my-2 border-t border-gray-100 pt-4 px-4">
             <Button className="w-full bg-secondary text-secondary-foreground font-bold" asChild>
                <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")}>
                  {t.nav.estimate}
                </a>
             </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
