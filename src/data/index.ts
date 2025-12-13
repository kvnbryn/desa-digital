import { 
  FileText, HeartPulse, GraduationCap, Sprout, ShieldCheck, Landmark, Trees, 
  Wheat, Users, Utensils, Mountain, Home, Map, Flag, Baby
} from "lucide-react";

export const SITE_CONFIG = {
  name: "Desa Tombatu Tiga Selatan",
  description: "Website Resmi Informasi dan Pelayanan Desa Tombatu Tiga Selatan, Minahasa Tenggara.",
  address: "Kecamatan Tombatu, Kabupaten Minahasa Tenggara, Sulawesi Utara",
  contact: {
    email: "admin@tombatutigaselatan.desa.id",
    phone: "+62 812-3456-7890",
  }
};

export const NAVIGATION = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang", href: "#tentang" },
  { name: "Layanan", href: "#layanan" },
  { name: "Pemerintahan", href: "#pemerintahan" },
  { name: "Potensi", href: "#potensi" },
  { name: "Galeri", href: "#galeri" },
];

export const HERO_CONTENT = {
  title: "Membangun Desa, \nMerajut Masa Depan.",
  subtitle: "Selamat datang di portal digital resmi Desa Tombatu Tiga Selatan. Informasi transparan, pelayanan prima, dan gotong royong menuju kesejahteraan.",
  image: "/images/sawa-kuning11.jpg", 
};

export const STATS = [
  { label: "Penduduk", value: "794", suffix: " Jiwa", icon: "Users", desc: "Total Populasi" },
  { label: "Kepala Keluarga", value: "225", suffix: " KK", icon: "Home", desc: "Keluarga Tercatat" },
  { label: "Luas Wilayah", value: "14.7", suffix: " km²", icon: "Map", desc: "Total Area" },
  { label: "Jaga / Dusun", value: "4", suffix: " Area", icon: "Flag", desc: "Wilayah Administratif" },
];

export const HISTORY = {
  title: "Sejarah & Asal Usul",
  excerpt: "Sejarah Desa Tombatu Tiga Selatan bermula sekitar tahun 1660, diawali oleh rombongan dari Luaan dan Wewelan yang bermukim di sekitar Danau Bulilin. Melalui gotong royong para Tonaas terdahulu, danau dikeringkan menjadi pemukiman.",
  image: "/images/kantor-desa.jpg",
  timeline: [
    {
      year: "1660",
      title: "Kedatangan Leluhur",
      desc: "Rombongan Tonaas Mamosey (Luaan) dan Tonaas Lewulan (Wewelan) tiba di Danau Bulilin akibat Perang Tondano I."
    },
    {
      year: "1665",
      title: "Pengeringan Danau",
      desc: "Kesepakatan para Tonaas untuk mengeringkan Danau Bulilin menjadi daratan pemukiman melalui ritual dan penggalian terowongan air."
    },
    {
      year: "2010",
      title: "Pemekaran Desa",
      desc: "Pada 28 April 2010, Desa Tombatu Tiga Selatan resmi dimekarkan dan disahkan menjadi desa mandiri, terpisah dari Desa Tombatu Tiga Induk."
    }
  ],
  leaders: [
    { name: "Robert Arikalang", period: "2010 - 2011", role: "Pejabat Hukum Tua" },
    { name: "Ruben J. Pondaag, S.Pd", period: "2011 - 2019", role: "Hukum Tua" },
    { name: "Richard Kindangen, S.IP", period: "Jan - Okt 2019", role: "Pejabat Hukum Tua" },
    { name: "Florence H. Kindangen, SH", period: "2019 - Sekarang", role: "Hukum Tua" },
  ]
};

export const VISION_MISSION = {
  vision: "Gotong Royong Membangun Desa Tombatu Tiga Selatan Yang Jujur, Adil, Sejahtera dan Berbudaya.",
  mission: [
    "Menciptakan pemerintahan yang bersih, berwibawa, profesional, transparan dan tanpa korupsi.",
    "Meningkatkan pelayanan kepada masyarakat cepat, mudah dan ramah.",
    "Peningkatan kualitas sumber daya manusia.",
    "Pembangunan sarana dan prasarana pendidikan serta kesehatan.",
    "Peningkatan usaha ekonomi produktif masyarakat (BUMDES, Pertanian).",
    "Menciptakan keamanan dan ketertiban masyarakat."
  ]
};

export const GOVERNMENT = {
  bannerImage: "/images/perangkat-desa.jpg",
  hukumTua: {
    name: "Florence H. Kindangen, SH",
    role: "Hukum Tua (Kepala Desa)",
    image: null
  },
  officials: [
    { name: "Yennie Kojong", role: "Sekretaris Desa" },
    { name: "Yanne Kojong, S.Pd", role: "Kaur Umum & Tata Usaha" },
    { name: "Gladies Walangitan", role: "Kaur Keuangan" },
    { name: "Elias M. Selaindoong", role: "Kaur Perencanaan" },
    { name: "Vebe Arikalang", role: "Kasi Pemerintahan" },
    { name: "Linda Karawisan", role: "Kasi Kesejahteraan" },
    { name: "Selvie Manengal", role: "Kasi Pelayanan" },
  ],
  jaga: [
    { name: "Willy B. Manaan", role: "Kepala Jaga I" },
    { name: "Alvian H. Poluan", role: "Kepala Jaga II" },
    { name: "Maxi Munaische", role: "Kepala Jaga III" },
    { name: "Markus Mokalu", role: "Kepala Jaga IV" },
  ],
  bpd: [
    { name: "Jeffrey M. Munaiseche, SH", role: "Ketua BPD" },
    { name: "Julius J. Pondaag", role: "Wakil Ketua" },
    { name: "Stien Rambembuoch", role: "Sekretaris" },
    { name: "Apolos Langoy", role: "Bidang Pemerintahan" },
    { name: "Rieske I.E. Monolimay, S.Pd", role: "Bidang Pemberdayaan" },
  ]
};

export const POTENTIALS = [
  {
    title: "Pertanian & Perkebunan",
    desc: "Komoditas utama meliputi Padi dan Jagung. Didukung lahan subur nan hijau.",
    icon: "Wheat",
    image: "/images/alam-1.jpg" 
  },
  {
    title: "Keindahan Alam",
    desc: "Bentang alam yang asri dan udara sejuk khas pegunungan Minahasa.",
    icon: "Trees",
    image: "/images/alam-5.jpg"
  },
];

export const SERVICES = [
  {
    title: "Administrasi Kependudukan",
    icon: FileText,
    items: ["Pembuatan KTP & KK", "Surat Pindah Domisili", "Akte Kelahiran/Kematian"]
  },
  {
    title: "Surat Pengantar",
    icon: ShieldCheck,
    items: ["Pengantar SKCK", "Pengantar Nikah", "Surat Keterangan Usaha (SKU)"]
  },
  {
    title: "Bantuan Sosial",
    icon: HeartPulse,
    items: ["Pendaftaran BLT", "Kartu Indonesia Sehat", "Bantuan Pangan Non-Tunai"]
  },
  {
    title: "Pertanahan & PBB",
    icon: Landmark,
    items: ["Surat Keterangan Tanah", "Pembayaran PBB", "Sporadik"]
  }
];

export const SDGS_GOALS = [
  { 
    title: "Desa Sehat & Sejahtera", 
    desc: "Peningkatan akses kesehatan posyandu dan fasilitas MCK.",
    color: "bg-green-500",
    icon: HeartPulse
  },
  { 
    title: "Pendidikan Desa Berkualitas", 
    desc: "Dukungan PAUD dan beasiswa siswa berprestasi.",
    color: "bg-red-500",
    icon: GraduationCap
  },
  { 
    title: "Pertumbuhan Ekonomi Desa", 
    desc: "Pengembangan BUMDES dan UMKM lokal.",
    color: "bg-sky-500",
    icon: Sprout
  },
  { 
    title: "Desa Peduli Lingkungan", 
    desc: "Penghijauan dan pengelolaan sampah terpadu.",
    color: "bg-emerald-600",
    icon: Trees
  }
];

export const LOCATION = {
  title: "Lokasi Desa",
  desc: "Desa Tombatu Tiga Selatan terletak strategis di Kecamatan Tombatu, dikelilingi keindahan alam Minahasa Tenggara.",
  googleMapsUrl: "https://maps.app.goo.gl/gPUbBrQtnhxp9aDz8",
  mapImage: "/images/peta-desa.jpg" 
};

// REVISI: Update Gallery Layout (2 Portrait + 4 Squares)
export const GALLERY_ITEMS = [
  { src: "/images/sosialisasi-1.jpg", alt: "Sosialisasi Warga 1", span: "md:col-span-1 md:row-span-2" }, // Foto Portrait 1
  { src: "/images/sosialisasi-2.jpg", alt: "Sosialisasi Warga 2", span: "md:col-span-1 md:row-span-2" }, // Foto Portrait 2
  { src: "/images/apel.jpg", alt: "Apel Pagi Perangkat", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/warga.jpg", alt: "Kebersamaan Warga", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/kegiatan-2.jpg", alt: "Kegiatan Desa", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/kegiatan-3.jpg", alt: "Kegiatan Mahasiswa", span: "md:col-span-1 md:row-span-1" },
];