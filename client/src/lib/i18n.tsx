import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface Translations {
  nav: {
    home: string;
    services: string;
    gallery: string;
    contact: string;
    estimate: string;
  };
  hero: {
    welcome: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    interior: { title: string; desc: string };
    exterior: { title: string; desc: string };
    remodel: { title: string; desc: string };
    cleaning: { title: string; desc: string };
  };
  whyUs: {
    title: string;
    quality: { title: string; desc: string };
    estimates: { title: string; desc: string };
    professionalism: { title: string; desc: string };
    communication: { title: string; desc: string };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
    methods: {
      call: string;
      sms: string;
      whatsapp: string;
    };
  };
  footer: {
    privacy: string;
    terms: string;
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      gallery: "Galería",
      contact: "Contacto",
      estimate: "Solicitar Estimación",
    },
    hero: {
      welcome: "Bienvenidos a Flores Painting LLC",
      title: "Transformamos tus espacios con calidad y detalle",
      subtitle: "Especialistas en pintura y remodelación interior y exterior en Minnesota. Resultados excepcionales garantizados.",
      cta: "Obtener Presupuesto Gratis",
    },
    services: {
      title: "Nuestros Servicios",
      interior: {
        title: "Pintura Interior",
        desc: "Transformamos tus espacios con acabados de alta calidad.",
      },
      exterior: {
        title: "Pintura Exterior",
        desc: "Protege y embellece el exterior de tu hogar o negocio.",
      },
      remodel: {
        title: "Remodelación Interior",
        desc: "Proyectos de remodelación de cocina, baño y más.",
      },
      cleaning: {
        title: "Limpieza Post-Obra",
        desc: "Ofrecemos limpieza de la obra tras la finalización.",
      },
    },
    whyUs: {
      title: "¿Por qué Elegirnos?",
      quality: {
        title: "Calidad Garantizada",
        desc: "Usamos solo los mejores materiales para garantizar durabilidad.",
      },
      estimates: {
        title: "Estimaciones Gratuitas",
        desc: "Ofrecemos estimaciones sin compromiso para cada proyecto.",
      },
      professionalism: {
        title: "Profesionalismo",
        desc: "Expertos en pintura y remodelación liderados por José Flores.",
      },
      communication: {
        title: "Comunicación Directa",
        desc: "Respuestas rápidas y múltiples formas de contacto.",
      },
    },
    contact: {
      title: "Contáctanos",
      subtitle: "Para más información o para solicitar una estimación gratuita, no dudes en contactarnos.",
      form: {
        name: "Nombre",
        email: "Correo electrónico",
        phone: "Teléfono",
        message: "Mensaje",
        submit: "Enviar Mensaje",
      },
      methods: {
        call: "Llamar ahora",
        sms: "Enviar mensaje",
        whatsapp: "Chat en WhatsApp",
      },
    },
    footer: {
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      rights: "Todos los derechos reservados",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
      estimate: "Request Estimate",
    },
    hero: {
      welcome: "Welcome to Flores Painting LLC",
      title: "We transform your spaces with quality and detail",
      subtitle: "Specialists in interior and exterior painting and remodeling in Minnesota. Exceptional results guaranteed.",
      cta: "Get Free Quote",
    },
    services: {
      title: "Our Services",
      interior: {
        title: "Interior Painting",
        desc: "We transform your spaces with high-quality finishes.",
      },
      exterior: {
        title: "Exterior Painting",
        desc: "Protect and beautify the exterior of your home or business.",
      },
      remodel: {
        title: "Interior Remodeling",
        desc: "Kitchen, bathroom remodeling projects and more.",
      },
      cleaning: {
        title: "Post-Construction Cleaning",
        desc: "We offer site cleaning after completion.",
      },
    },
    whyUs: {
      title: "Why Choose Us?",
      quality: {
        title: "Guaranteed Quality",
        desc: "We use only the best materials to ensure durability.",
      },
      estimates: {
        title: "Free Estimates",
        desc: "We offer no-obligation estimates for every project.",
      },
      professionalism: {
        title: "Professionalism",
        desc: "Painting and remodeling experts led by José Flores.",
      },
      communication: {
        title: "Direct Communication",
        desc: "Quick responses and multiple ways to contact us.",
      },
    },
    contact: {
      title: "Contact Us",
      subtitle: "For more information or to request a free estimate, do not hesitate to contact us.",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        submit: "Send Message",
      },
      methods: {
        call: "Call Now",
        sms: "Send Message",
        whatsapp: "Chat on WhatsApp",
      },
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
