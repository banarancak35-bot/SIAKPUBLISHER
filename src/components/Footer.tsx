import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Code2 } from 'lucide-react';
import { PUBLISHER_INFO } from '../data/books';
import { NavTab } from './Header';
import { SiakLogo } from './SiakLogo';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenHtmlModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenHtmlModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#040812] border-t border-[#15233f] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Kolom 1: Profil Brand Penerbit */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <SiakLogo variant="horizontal" theme="dark" size={44} />
            </div>

            <p className="text-slate-400 leading-relaxed font-light">
              Penerbit buku berbadan hukum dan terdaftar resmi di Perpustakaan Nasional Republik Indonesia. Menerbitkan karya-karya fiksi, non-fiksi, pendidikan, dan kajian kebudayaan Melayu dengan integritas ilmiah dan standar cetak mutu tinggi.
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenHtmlModal}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e1c38] hover:bg-[#162a54] border border-[#233863] text-slate-200 text-xs font-medium transition-all"
              >
                <Code2 className="w-4 h-4 text-[#d4af37]" />
                <span>Salin Template HTML & Tailwind (1-File)</span>
              </button>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Halaman
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectTab('home')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('catalog')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Katalog Buku
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('authors')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Daftar Penulis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('manuscript')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Kirim Naskah
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('about')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('contact')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Kontak Redaksi
                </button>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Alamat Kantor */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Kontak Resmi
            </h4>
            
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-300">{PUBLISHER_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`https://wa.me/${PUBLISHER_INFO.waNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 hover:text-[#d4af37] font-medium transition-colors"
                >
                  WA: {PUBLISHER_INFO.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`mailto:${PUBLISHER_INFO.email}`}
                  className="text-slate-200 hover:text-[#d4af37] transition-colors break-all"
                >
                  {PUBLISHER_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              Media Sosial Resmi: <span className="text-slate-300">@siakpublisher</span> (Instagram, Facebook, YouTube)
            </div>
          </div>

          {/* Kolom 4: Newsletter Berlangganan */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Warta Pustaka
            </h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Daftarkan surel Anda untuk menerima katalog buku terbitan baru, kabar bedah buku, dan promo khusus setiap bulan.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/50 border border-emerald-800 rounded-xl text-emerald-300 flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Terima kasih! Anda telah terdaftar dalam warta pustaka kami.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Alamat email Anda..."
                    className="w-full px-3.5 py-2.5 bg-[#081020] border border-[#1e3052] rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#091122] font-bold text-xs hover:brightness-110 shadow-sm transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Berlangganan Newsletter</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Baris Bawah: Hak Cipta & Ketentuan */}
        <div className="mt-12 pt-6 border-t border-[#121c33] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>
            &copy; 2026 <strong className="text-slate-300 font-medium">SIAK PUBLISHER</strong>. Seluruh Hak Cipta Dilindungi Undang-Undang Republik Indonesia.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onSelectTab('about')}
              className="hover:text-slate-300 transition-colors"
            >
              Kebijakan Privasi
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onSelectTab('manuscript')}
              className="hover:text-slate-300 transition-colors"
            >
              Syarat & Ketentuan Naskah
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onSelectTab('contact')}
              className="hover:text-slate-300 transition-colors"
            >
              Pusat Bantuan
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
