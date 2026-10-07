import React from 'react';
import { Feather, ArrowRight, Sparkles, ShieldCheck, Award, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';
import { PUBLISHER_INFO } from '../data/books';
import { SiakLogo } from './SiakLogo';

interface HeroSectionProps {
  onNavigateManuscript: () => void;
  onNavigateAbout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateManuscript,
  onNavigateAbout,
}) => {
  const handleConsultWA = () => {
    const message = encodeURIComponent(
      `Halo Tim Redaksi SIAK PUBLISHER,\nSaya tertarik mengirimkan naskah perdana saya untuk diterbitkan ber-ISBN resmi.\n\nMohon informasi syarat dan alur pengajuan naskah.`
    );
    window.open(`https://wa.me/${PUBLISHER_INFO.waNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#091122] via-[#0b162c] to-[#070d19] border-b border-[#1b2a4a]/70 py-14 sm:py-20 lg:py-24">
      {/* Decorative ambient gold lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#1d4ed8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Sisi Kiri: Narasi Peluncuran & Panggilan Naskah Perdana */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#122244] border border-[#233a69] text-xs font-medium text-[#e5c158]">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="tracking-wide uppercase font-semibold">Penerimaan Naskah Perdana Resmi Dibuka</span>
            </div>

            {/* Judul Utama */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.2] text-balance">
              Mengabadikan Karya, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#fef08a] via-[#e5c158] to-[#ca8a04] bg-clip-text text-transparent">
                Merawat Peradaban.
              </span>
            </h1>

            {/* Deskripsi Brand */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Selamat datang di <strong className="text-white font-medium">SIAK PUBLISHER</strong>. Lembaga penerbitan buku baru yang berakar dari marwah kebudayaan Siak Sri Indrapura, Riau. Kami siap mendampingi Anda melahirkan karya perdana yang ber-ISBN resmi Perpustakaan Nasional RI dengan tata letak estetik dan kualitas cetak prima.
            </p>

            {/* Tombol Aksi Utama */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onNavigateManuscript}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b8860b] text-[#091122] font-bold text-sm shadow-lg shadow-[#d4af37]/20 hover:brightness-110 active:scale-[0.99] transition-all"
              >
                <Feather className="w-4 h-4 text-[#091122]" />
                <span>Kirim Naskah Perdana Anda</span>
              </button>

              <button
                onClick={handleConsultWA}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0f1e3c] hover:bg-[#162a53] border border-[#243c6b] text-slate-200 font-semibold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#d4af37]" />
                <span>Konsultasi Redaksi (085271219108)</span>
              </button>

              <button
                onClick={onNavigateAbout}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-slate-300 hover:text-white text-sm font-medium transition-all"
              >
                <span>Tentang Kami →</span>
              </button>
            </div>

            {/* Baris Bukti Kualitas (Trust Markers) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1b2a4a]/90 w-full max-w-xl">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#d4af37]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-display font-bold text-base sm:text-lg text-white">ISBN Sah</span>
                </div>
                <span className="text-xs text-slate-400 mt-0.5">Perpusnas RI</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#d4af37]">
                  <Award className="w-4 h-4" />
                  <span className="font-display font-bold text-base sm:text-lg text-white">Cetak Lux</span>
                </div>
                <span className="text-xs text-slate-400 mt-0.5">Bookpaper & Cover Indah</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#d4af37]">
                  <FileText className="w-4 h-4" />
                  <span className="font-display font-bold text-base sm:text-lg text-white">3 Paket</span>
                </div>
                <span className="text-xs text-slate-400 mt-0.5">Indie, Reguler & Kampus</span>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Kartu Logo Resmi SIAK PUBLISHER */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              
              {/* Backglow Emas */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#d4af37]/30 to-[#f59e0b]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300 opacity-80" />
              
              {/* Card Kontainer Logo Resmi */}
              <div className="relative bg-[#0d1830] border border-[#223963] rounded-3xl p-8 sm:p-10 shadow-2xl transition-all duration-300 hover:border-[#d4af37]/70 flex flex-col items-center text-center">
                
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142345] border border-[#263e6e] text-[11px] font-semibold text-[#fef08a] mb-6">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Identitas Resmi Penerbit</span>
                </div>

                {/* LOGO RESMI VECTOR LENGKAP */}
                <div className="p-4 rounded-2xl bg-gradient-to-b from-[#091122] to-[#060c18] border border-[#1b2b4d] w-full flex flex-col items-center justify-center py-6 shadow-inner">
                  <SiakLogo variant="full" theme="dark" />
                </div>

                {/* Slogan & Info Peluncuran */}
                <div className="mt-6 space-y-2">
                  <p className="text-xs font-medium text-[#d4af37] tracking-wider uppercase">
                    Penerbitan Buku Ber-ISBN Resmi
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    Menerima naskah fiksi, non-fiksi, monograf ilmiah, dan kajian sejarah Melayu nusantara.
                  </p>
                </div>

                {/* Tombol Ajukan Naskah di Card */}
                <div className="w-full pt-5 mt-5 border-t border-[#1b2a4a]">
                  <button
                    onClick={onNavigateManuscript}
                    className="w-full py-2.5 rounded-xl bg-[#d4af37] hover:bg-[#e5c158] text-[#091122] font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <Feather className="w-3.5 h-3.5" />
                    <span>Jadilah Penulis Perdana Kami</span>
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
