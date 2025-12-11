"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  HERO_CONTENT, 
  STATS, 
  HISTORY, 
  VISION_MISSION, 
  GOVERNMENT, 
  POTENTIALS,
  SERVICES,
  SDGS_GOALS,
  LOCATION,
  GALLERY_ITEMS
} from "@/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  ArrowRight, Leaf, Users, Crown, ChevronRight, Trees, Wheat, Utensils, 
  CheckCircle2, MapPin, Mountain, Calendar, ArrowUpRight, Home as HomeIcon, Map, Flag
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Helper Components ---

const SectionHeading = ({ children, className, light = false }: { children: React.ReactNode; className?: string, light?: boolean }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className={cn(
      "text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight leading-[1.2]",
      light ? "text-white" : "text-emerald-950",
      className
    )}
  >
    {children}
  </motion.h2>
);

const SectionSub = ({ children, className, light = false }: { children: React.ReactNode; className?: string, light?: boolean }) => (
  <motion.p 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 }}
    className={cn(
      "text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl",
      light ? "text-emerald-100/90" : "text-stone-600",
      className
    )}
  >
    {children}
  </motion.p>
);

const IconWrapper = ({ icon, className }: { icon: any, className?: string }) => {
  const icons: any = {
    Wheat, Trees, Users, Utensils, Mountain, Home: HomeIcon, Map, Flag
  };
  const SelectedIcon = icons[icon] || Leaf;
  return <SelectedIcon className={className} />;
};

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="flex flex-col bg-stone-50 w-full overflow-hidden selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-grow w-full">
        
        {/* --- 1. HERO SECTION --- */}
        <section 
          id="hero" 
          ref={ref} 
          className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
        >
          <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
            <Image
              src={HERO_CONTENT.image}
              alt="Pemandangan Desa"
              fill
              className="object-cover brightness-[0.75] scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-black/40" />
          </motion.div>

          <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
            <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold tracking-wide mb-6 mx-auto md:mx-0 shadow-lg"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]"></span>
                WEBSITE RESMI DESA
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl"
              >
                {HERO_CONTENT.title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-2xl text-stone-100 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium text-shadow-sm"
              >
                {HERO_CONTENT.subtitle}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto"
              >
                <a href="#tentang" className="px-8 py-4 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/30 hover:scale-105 active:scale-95">
                  Jelajahi Desa
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#layanan" className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 transition-all flex items-center justify-center hover:scale-105 active:scale-95">
                  Layanan Publik
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- 2. STATS SECTION (GENIUS REWORK) --- */}
        <section className="relative z-20 -mt-20 md:-mt-24 mb-24 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card bg-white/95 p-6 md:p-8 rounded-2xl relative overflow-hidden shadow-2xl border-t border-white/60 transform transition-all hover:-translate-y-1 hover:shadow-emerald-500/10 group"
                >
                  {/* Decorative Background Icon */}
                  <div className="absolute -right-4 -bottom-4 text-emerald-100 opacity-50 group-hover:scale-110 group-hover:text-emerald-200 transition-all duration-500">
                    <IconWrapper icon={stat.icon} className="w-24 h-24 md:w-32 md:h-32" />
                  </div>

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="flex items-center gap-2 mb-4 text-emerald-600">
                      <div className="p-2 bg-emerald-50 rounded-lg">
                        <IconWrapper icon={stat.icon} className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-700/70">{stat.label}</span>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl md:text-5xl font-extrabold text-stone-800 tracking-tight leading-none group-hover:text-emerald-600 transition-colors">
                        {stat.value}
                      </h3>
                      <p className="text-stone-500 font-medium text-xs md:text-sm mt-1 flex items-center gap-1">
                        {stat.suffix}
                        <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                        <span className="text-stone-400">{stat.desc}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. LAYANAN PUBLIK (With Action Icons) --- */}
        <section id="layanan" className="py-20 md:py-32 container mx-auto px-6 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <SectionHeading>Layanan Publik Digital</SectionHeading>
            <SectionSub className="mx-auto">
              Informasi persyaratan dan prosedur pelayanan administrasi desa untuk memudahkan kebutuhan warga.
            </SectionSub>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100 hover:shadow-2xl hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 group flex flex-col relative"
              >
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400">
                  <ArrowUpRight size={24} />
                </div>

                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4">{service.title}</h3>
                <ul className="space-y-3 w-full mt-auto">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-stone-600 justify-start">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-left font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- 4. SEJARAH (Timeline Icons) --- */}
        <section id="tentang" className="py-20 md:py-32 bg-stone-100 px-6 overflow-hidden">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <SectionHeading>Warisan Leluhur &<br className="hidden lg:block"/> Sejarah Panjang</SectionHeading>
                <SectionSub className="mb-10 lg:mx-0 mx-auto">{HISTORY.excerpt}</SectionSub>
                
                <div className="space-y-10 relative pl-0 lg:pl-8 lg:border-l-2 lg:border-emerald-200 lg:ml-3">
                  {HISTORY.timeline.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="relative flex flex-col items-center lg:items-start group"
                    >
                      <span className="hidden lg:flex absolute -left-[43px] top-1.5 w-6 h-6 rounded-full bg-emerald-100 border-2 border-emerald-500 items-center justify-center z-10 group-hover:scale-125 transition-transform">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                      </span>
                      
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/50 text-emerald-700 rounded-full font-bold text-xs mb-2">
                        <Calendar size={12} />
                        Tahun {item.year}
                      </span>
                      <h4 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">{item.title}</h4>
                      <p className="text-stone-600 text-sm leading-relaxed max-w-md">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 relative h-[400px] lg:h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group"
              >
                <Image 
                  src={HISTORY.image}
                  alt="Kantor Desa"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent flex items-end p-8 lg:p-12">
                  <div className="text-center lg:text-left w-full">
                    <div className="w-16 h-1 bg-emerald-500 mb-6 rounded-full mx-auto lg:mx-0"></div>
                    <blockquote className="text-white font-serif italic text-xl lg:text-2xl leading-relaxed">
                      "Menghormati masa lalu adalah pondasi untuk membangun masa depan yang kokoh."
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- 5. GALERI (Masonry Style) --- */}
        <section id="galeri" className="py-20 md:py-32 bg-stone-50 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <SectionHeading className="mx-auto">Giat Desa & Mahasiswa</SectionHeading>
              <SectionSub className="mx-auto">Dokumentasi kegiatan kemasyarakatan yang terekam lensa.</SectionSub>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
              {GALLERY_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer border border-white/50",
                    item.span
                  )}
                >
                  <Image 
                    src={item.src} 
                    alt={item.alt} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-6">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                      <span className="bg-white/90 backdrop-blur-sm text-emerald-900 text-[10px] font-bold px-3 py-1 rounded-full mb-2 inline-block">Dokumentasi</span>
                      <p className="text-white font-bold text-lg leading-tight">{item.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 6. SDGs DESA --- */}
        <section className="py-20 md:py-32 bg-stone-900 text-white relative overflow-hidden px-6">
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-5">
             <Image src="/globe.svg" width={800} height={800} alt="pattern" className="absolute -right-20 -top-20 lg:-right-60 lg:-top-60 rotate-12" />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <SectionHeading light className="mx-auto">SDGs Desa</SectionHeading>
              <SectionSub light className="mx-auto text-stone-300">
                Komitmen kami dalam mewujudkan pembangunan berkelanjutan sesuai arah kebijakan nasional.
              </SectionSub>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SDGS_GOALS.map((goal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group flex flex-col items-center md:items-start text-center md:text-left"
                >
                  <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-black/20", goal.color)}>
                    <goal.icon size={26} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{goal.title}</h4>
                  <p className="text-sm text-stone-400 leading-relaxed">{goal.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 7. PEMERINTAHAN --- */}
        <section id="pemerintahan" className="py-20 md:py-32 container mx-auto px-6 bg-stone-50">
          <div className="text-center mb-16">
            <SectionHeading className="mx-auto">Struktur Pemerintahan</SectionHeading>
            <SectionSub className="mx-auto">Orang-orang berdedikasi yang melayani masyarakat Tombatu Tiga Selatan.</SectionSub>
          </div>

          {/* Banner Photo */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full h-[300px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 group"
          >
            <Image 
              src={GOVERNMENT.bannerImage}
              alt="Foto Bersama Perangkat Desa"
              fill
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex items-end justify-center pb-8">
               <span className="text-white font-bold tracking-widest uppercase bg-emerald-600/90 px-6 py-2.5 rounded-full backdrop-blur-sm shadow-lg border border-emerald-400/50">
                 Kekompakan Perangkat Desa
               </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[...GOVERNMENT.officials, ...GOVERNMENT.jaga].map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl hover:border-emerald-100 hover:-translate-y-1 transition-all duration-300 group text-center md:text-left"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-stone-100 text-stone-400 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 mx-auto md:mx-0 shadow-inner">
                  <Users size={24} />
                </div>
                <h4 className="font-bold text-stone-800 text-lg mb-1">{person.name}</h4>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- 8. POTENSI (Bento Grid) --- */}
        <section id="potensi" className="py-20 md:py-32 container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 text-center md:text-left">
            <div className="w-full md:w-auto">
              <SectionHeading className="mx-auto md:mx-0">Potensi & Sumber Daya</SectionHeading>
              <SectionSub className="mx-auto md:mx-0">Kekayaan alam dan manusia yang menjadi modal pembangunan desa.</SectionSub>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[300px]">
            {POTENTIALS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "group relative overflow-hidden rounded-[2rem] bg-white p-8 md:p-10 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 border border-stone-200 hover:border-emerald-300 min-h-[260px]",
                  i === 0 || i === 3 ? "md:col-span-2" : ""
                )}
              >
                {item.image ? (
                  <>
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.4] group-hover:brightness-[0.3]"
                    />
                    <div className="relative z-10 flex flex-col h-full justify-end items-start text-left">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 text-white ring-1 ring-white/30">
                        <IconWrapper icon={item.icon} className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="relative z-10 flex flex-col h-full items-center md:items-start text-center md:text-left">
                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-auto text-emerald-600 ring-1 ring-stone-100 group-hover:scale-110 transition-transform">
                      <IconWrapper icon={item.icon} className="w-8 h-8" />
                    </div>
                    <div className="mt-6 md:mt-0">
                      <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-3 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                      <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- 9. LOKASI DESA --- */}
        <section className="py-20 md:py-32 container mx-auto px-6">
          <div className="bg-stone-900 rounded-[2.5rem] p-4 md:p-6 shadow-2xl overflow-hidden relative">
            <div className="absolute top-8 left-0 right-0 z-10 text-center pointer-events-none">
              <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/90 backdrop-blur-md text-stone-900 text-xs md:text-sm font-bold shadow-lg">
                <MapPin size={16} className="text-red-500" />
                PETA WILAYAH
              </span>
            </div>

            <div className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden bg-stone-800 relative group">
              <iframe 
                src={LOCATION.googleMapsUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
              ></iframe>
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-stone-900/50 to-transparent pointer-events-none"></div>
            </div>

            <div className="mt-8 text-center px-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{LOCATION.title}</h3>
              <p className="text-stone-400 text-sm md:text-base max-w-2xl mx-auto">{LOCATION.desc}</p>
              <a 
                href="http://googleusercontent.com/maps.google.com/7" 
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors border-b border-emerald-400/30 hover:border-emerald-300 pb-0.5"
              >
                Buka di Google Maps ↗
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}