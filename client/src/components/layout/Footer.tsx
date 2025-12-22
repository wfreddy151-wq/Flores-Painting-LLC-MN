import { useLanguage } from "@/lib/i18n";
import { Link } from "wouter";
import logoImage from "@assets/generated_images/logo_for_flores_painting_llc.png";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-primary-foreground py-16 border-t border-white/10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
             <div className="flex items-center gap-3 mb-6">
               <div className="h-10 w-10 rounded-full bg-white p-1">
                 <img src={logoImage} alt="Logo" className="w-full h-full object-contain" />
               </div>
               <span className="font-serif font-bold text-xl">Flores Painting LLC</span>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed mb-6">
               José Flores
               <br />
               Minnesota, USA
             </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">{t.nav.services}</h4>
            <ul className="space-y-3 text-gray-400">
              <li>{t.services.interior.title}</li>
              <li>{t.services.exterior.title}</li>
              <li>{t.services.remodel.title}</li>
              <li>{t.services.cleaning.title}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>713 374 5666</li>
              <li>Josesflores33@gmail.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">{t.footer.privacy}</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">{t.footer.terms}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Flores Painting LLC. {t.footer.rights}.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
