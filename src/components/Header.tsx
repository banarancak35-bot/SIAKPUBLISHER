import React, { useState } from 'react';
import { Search, Menu, X, ArrowUpRight, Feather } from 'lucide-react';
import { PUBLISHER_INFO } from '../data/books';
import { SiakLogo } from './SiakLogo';

export type NavTab = 'home' | 'catalog' | 'authors' | 'manuscript' | 'about' | 'contact';

interface HeaderProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Beranda' },
    { id: 'catalog', label: 'Katalog Buku' },
    { id: 'authors', label: 'Penulis' },
    { id: 'manuscript', label: 'Layanan Naskah' },
    { id: 'about', label: 'Tentang Kami' },
    { id: 'contact', label: 'Kontak' },
  ];

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#091122]/95 backdrop-blur-md border-b border-[#1b2a4a]/80 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Identitas Brand Resmi */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus-visible:outline-none"
            title="SIAK PUBLISHER - Beranda"
          >
            <SiakLogo variant="horizontal" theme="dark" size={46} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#d4af37]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f59e0b] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Pencarian & Tombol Kirim Naskah */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              aria-label="Cari judul buku atau penulis"
              className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm text-slate-400 bg-[#0f1d38]/80 hover:bg-[#16274b] border border-[#223963] rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
            >
              <Search className="w-4 h-4 text-[#d4af37]" />
              <span className="hidden sm:inline text-slate-300">Cari buku / penulis...</span>
              <kbd className="hidden md:inline text-[10px] bg-[#0b1426] text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">⌘K</kbd>
            </button>

            <button
              onClick={() => handleNavClick('manuscript')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#091122] hover:brightness-110 shadow-sm shadow-[#d4af37]/20 transition-all"
            >
              <Feather className="w-3.5 h-3.5" />
              <span>Kirim Naskah</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-[#16274b] rounded-lg border border-[#223963] focus-visible:outline-none"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1224] border-b border-[#1b2a4a] px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#142347] text-[#d4af37] font-semibold'
                    : 'text-slate-300 hover:bg-[#0f1d38] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-[#1b2a4a] flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('manuscript')}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#091122] font-semibold text-sm"
              >
                <Feather className="w-4 h-4" />
                <span>Kirim Naskah Sekarang</span>
              </button>
              
              <a
                href={`https://wa.me/${PUBLISHER_INFO.waNumber}?text=Halo%20SIAK%20PUBLISHER,%20saya%20ingin%20konsultasi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#0e1c39] border border-[#233863] text-slate-200 text-sm font-medium hover:text-[#d4af37]"
              >
                <span>Chat WhatsApp: {PUBLISHER_INFO.phoneFormatted}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
