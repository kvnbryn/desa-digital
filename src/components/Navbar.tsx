"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVIGATION } from "@/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full",
          scrolled || isOpen 
            ? "bg-white/90 backdrop-blur-md py-2 shadow-sm border-b border-stone-100" 
            : "bg-transparent py-4 md:py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* --- LOGO SECTION (UPDATED SIZE) --- */}
            <Link href="/" className="flex items-center gap-3 group z-50">
              <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:scale-105 duration-300">
                <Image
                  src="/images/logo-desa.png"
                  alt="Logo Kabupaten Minahasa Tenggara"
                  fill
                  className="object-contain drop-shadow-md"
                  sizes="(max-width: 768px) 48px, 64px"
                  priority
                />
              </div>
              
              <div className="flex flex-col">
                <span className={cn("text-sm md:text-base font-bold leading-none tracking-tight", scrolled || isOpen ? "text-stone-900" : "text-stone-900 md:text-white")}>
                  DESA TOMBATU
                </span>
                <span className={cn("text-[10px] md:text-xs font-bold leading-none tracking-widest uppercase mt-1", scrolled || isOpen ? "text-emerald-600" : "text-stone-600 md:text-emerald-300")}>
                  Tiga Selatan
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-all hover:-translate-y-0.5",
                    scrolled ? "text-stone-600 hover:text-emerald-600" : "text-stone-200 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#layanan"
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg active:scale-95",
                  scrolled 
                    ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/20" 
                    : "bg-white text-emerald-900 hover:bg-stone-100 shadow-black/10"
                )}
              >
                Layanan
              </Link>
            </nav>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 z-50 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className={cn("w-8 h-8 flex items-center justify-center transition-colors", scrolled || isOpen ? "text-stone-900" : "text-stone-900 md:text-white")}>
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white md:hidden flex flex-col pt-32 px-6 pb-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-2 h-full">
              {NAVIGATION.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-3xl font-bold text-stone-800 py-4 border-b border-stone-100 active:text-emerald-600"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="mt-auto">
                <Link
                  href="#layanan"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-emerald-600 text-white font-bold text-lg py-5 rounded-2xl text-center shadow-xl shadow-emerald-600/30 active:scale-95 transition-transform"
                >
                  Akses Layanan Desa
                </Link>
                <p className="text-center text-stone-400 text-xs mt-6">© Pemerintah Desa Tombatu Tiga Selatan</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}