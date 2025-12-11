import { SITE_CONFIG } from "@/data";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-200 py-16 md:py-24 border-t border-stone-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="flex items-center gap-5">
              {/* LOGO FOOTER (UPDATED SIZE) */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
                <Image
                  src="/images/logo-desa.png"
                  alt="Logo Kabupaten Minahasa Tenggara"
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl font-bold text-white tracking-tight leading-none">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-stone-500 text-sm font-medium mt-1 uppercase tracking-wider">Kab. Minahasa Tenggara</span>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-white font-bold text-lg tracking-wide">Tautan Cepat</h3>
            <ul className="space-y-4 text-sm text-stone-400">
              <li><a href="#hero" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-300">Beranda</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-300">Layanan Publik</a></li>
              <li><a href="#pemerintahan" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-300">Pemerintahan</a></li>
              <li><a href="https://minahasatenggarakab.go.id/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-300">Kab. Minahasa Tenggara</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-white font-bold text-lg tracking-wide">Hubungi Kami</h3>
            <div className="space-y-5 text-sm text-stone-400">
              <div className="flex items-start gap-4 justify-center md:justify-start">
                <MapPin size={20} className="text-emerald-500 mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Mail size={20} className="text-emerald-500 shrink-0" />
                <span>{SITE_CONFIG.contact.email}</span>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Phone size={20} className="text-emerald-500 shrink-0" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 text-center text-xs text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Pemerintah Desa Tombatu Tiga Selatan.</p>
          <p className="flex items-center gap-1.5 opacity-80">
            Made with <span className="text-red-500 animate-pulse">❤</span> for Minahasa Tenggara
          </p>
        </div>
      </div>
    </footer>
  );
}