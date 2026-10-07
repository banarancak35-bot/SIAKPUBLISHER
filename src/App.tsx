import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Header, NavTab } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturedBooks } from './components/FeaturedBooks';
import { CategorySection } from './components/CategorySection';
import { CatalogView } from './components/CatalogView';
import { AuthorsView } from './components/AuthorsView';
import { ManuscriptServiceView } from './components/ManuscriptServiceView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { BookDetailModal } from './components/BookDetailModal';
import { SearchModal } from './components/SearchModal';
import { HtmlCodeModal } from './components/HtmlCodeModal';
import { BOOKS_DATA, Book, PUBLISHER_INFO } from './data/books';
import { 
  ShieldCheck, Award, BookOpen, Clock, CheckCircle2, 
  MessageCircle, Star, ArrowRight, Sparkles, Feather
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isHtmlModalOpen, setIsHtmlModalOpen] = useState<boolean>(false);
  const [catalogInitialCategory, setCatalogInitialCategory] = useState<string>('all');

  // Featured book for Hero
  const featuredBook = BOOKS_DATA.find((b) => b.id === 'mutiara-sungai-jantan') || BOOKS_DATA[0];

  // Curated list for Featured Books section (top 6)
  const featuredList = BOOKS_DATA.filter((b) => b.isFeatured).slice(0, 6);

  const handleSelectCategory = (categoryName: string) => {
    setCatalogInitialCategory(categoryName);
    setActiveTab('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateCatalog = () => {
    setCatalogInitialCategory('all');
    setActiveTab('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateManuscript = () => {
    setActiveTab('manuscript');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070d19] text-slate-100 flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-white">
      
      {/* 1. TOP BAR: Kontak Resmi (Email & WhatsApp) */}
      <TopBar onOpenHtmlModal={() => setIsHtmlModalOpen(true)} />

      {/* 2. HEADER: Navigasi, Logo, & Pencarian */}
      <Header
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* Banner Utama (Hero Section) */}
            <HeroSection
              onNavigateManuscript={handleNavigateManuscript}
              onNavigateAbout={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Bagian Buku Unggulan (Status Bersih / Panggilan Naskah Perdana) */}
            <FeaturedBooks
              books={featuredList}
              onOpenBookDetail={setSelectedBook}
              onNavigateCatalog={handleNavigateCatalog}
              onNavigateManuscript={handleNavigateManuscript}
            />

            {/* Bagian Kategori / Genre Buku */}
            <CategorySection onSelectCategory={handleSelectCategory} />

            {/* Keunggulan Menerbitkan di SIAK PUBLISHER */}
            <section className="py-16 sm:py-20 bg-[#070d19] relative border-b border-[#1b2a4a]/70">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
                  <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block">
                    Standar Mutu Penerbitan
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
                    Mengapa Menerbitkan Karya di SIAK PUBLISHER?
                  </h2>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    Kami memadukan ketelitian akademis, keindahan desain visual, dan dedikasi penuh untuk merawat setiap lembar pemikiran Anda.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {/* Poin 1 */}
                  <div className="bg-[#0b1426] border border-[#1b2a4a] hover:border-[#d4af37]/60 p-6 sm:p-8 rounded-2xl space-y-4 shadow-lg transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[#14264d] border border-[#233f7d] flex items-center justify-center text-[#d4af37]">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-white">
                      Legalitas ISBN & Barcode Resmi
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      Terdaftar langsung di Perpustakaan Nasional RI dan memenuhi syarat angka kredit (BKD/KUM) bagi dosen dan peneliti institusi.
                    </p>
                  </div>

                  {/* Poin 2 */}
                  <div className="bg-[#0b1426] border border-[#1b2a4a] hover:border-[#d4af37]/60 p-6 sm:p-8 rounded-2xl space-y-4 shadow-lg transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[#14264d] border border-[#233f7d] flex items-center justify-center text-[#d4af37]">
                      <Award className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-white">
                      Tata Cetak Lux & Kertas Pilihan
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      Menggunakan kertas bookpaper ramah mata, laminasi cover eksklusif doff/glossy, dan opsi jilid jahit benang atau hardcover mewah.
                    </p>
                  </div>

                  {/* Poin 3 */}
                  <div className="bg-[#0b1426] border border-[#1b2a4a] hover:border-[#d4af37]/60 p-6 sm:p-8 rounded-2xl space-y-4 shadow-lg transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[#14264d] border border-[#233f7d] flex items-center justify-center text-[#d4af37]">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-white">
                      Proses Transparan & Pendampingan
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      Penulis diajak berdiskusi langsung mengenai konsep cover dan tata letak bab. Laporan royalti penjualan transparan setiap periode.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimoni Singkat Penulis & Pembaca */}
            <section className="py-16 bg-[#0a1224] border-b border-[#1b2a4a]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                  <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block">
                    Apresiasi & Testimoni
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    Kata Para Penulis & Pembaca
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-[#070d19] border border-[#192b4d] space-y-3">
                    <div className="flex items-center gap-1 text-amber-300">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      "Penerbitan buku monograf sejarah saya diproses begitu rapi dan tepat waktu oleh SIAK PUBLISHER. Kualitas cetaknya sangat memuaskan, setara penerbit nasional papan atas."
                    </p>
                    <div className="pt-2 border-t border-[#162747]">
                      <strong className="text-xs text-white block">Dr. Mahadir Ahmad, M.Hum</strong>
                      <span className="text-[11px] text-slate-400">Penulis Buku "Mutiara Sungai Jantan"</span>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#070d19] border border-[#192b4d] space-y-3">
                    <div className="flex items-center gap-1 text-amber-300">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      "Editor SIAK PUBLISHER sangat teliti namun tetap menghargai ruh bahasa sastra saya. Desain covernya pun berhasil menangkap suasana novel dengan sempurna."
                    </p>
                    <div className="pt-2 border-t border-[#162747]">
                      <strong className="text-xs text-white block">Ratih Kumala Dewi</strong>
                      <span className="text-[11px] text-slate-400">Novelis "Nyanyian Hilir"</span>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#070d19] border border-[#192b4d] space-y-3">
                    <div className="flex items-center gap-1 text-amber-300">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      "Pemesanan buku via WhatsApp sangat cepat dilayani. Packing buku tebal dan aman sampai di Surabaya hanya dalam tempo 2 hari kerja."
                    </p>
                    <div className="pt-2 border-t border-[#162747]">
                      <strong className="text-xs text-white block">Ahmad Ridwan, S.Pd</strong>
                      <span className="text-[11px] text-slate-400">Guru & Pembaca Setia</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* View: Katalog Buku */}
        {activeTab === 'catalog' && (
          <CatalogView
            initialCategory={catalogInitialCategory}
            onOpenBookDetail={setSelectedBook}
            onNavigateManuscript={handleNavigateManuscript}
          />
        )}

        {/* View: Daftar Penulis */}
        {activeTab === 'authors' && (
          <AuthorsView
            onNavigateCatalog={handleNavigateCatalog}
            onNavigateManuscript={handleNavigateManuscript}
          />
        )}

        {/* View: Layanan & Kirim Naskah */}
        {activeTab === 'manuscript' && <ManuscriptServiceView />}

        {/* View: Tentang Kami */}
        {activeTab === 'about' && <AboutView />}

        {/* View: Kontak */}
        {activeTab === 'contact' && <ContactView />}
      </main>

      {/* 3. FOOTER */}
      <Footer
        onSelectTab={setActiveTab}
        onOpenHtmlModal={() => setIsHtmlModalOpen(true)}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${PUBLISHER_INFO.waNumber}?text=Halo%20SIAK%20PUBLISHER,%20saya%20ingin%20konsultasi%20buku/naskah.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b8860b] text-[#091122] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
        title="Chat Langsung via WhatsApp 085271219108"
      >
        <MessageCircle className="w-6 h-6 text-[#091122] fill-current" />
        <span className="hidden sm:inline font-bold text-xs pr-1 text-[#091122]">
          Chat WhatsApp
        </span>
      </a>

      {/* Modals */}
      <BookDetailModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectBook={setSelectedBook}
      />

      <HtmlCodeModal
        isOpen={isHtmlModalOpen}
        onClose={() => setIsHtmlModalOpen(false)}
      />

    </div>
  );
}
