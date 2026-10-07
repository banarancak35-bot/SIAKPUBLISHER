import React from 'react';
import { BookOpen, Award, Quote, ArrowRight, Feather } from 'lucide-react';
import { AUTHORS_DATA } from '../data/books';

interface AuthorsViewProps {
  onNavigateCatalog: () => void;
  onNavigateManuscript: () => void;
}

export const AuthorsView: React.FC<AuthorsViewProps> = ({
  onNavigateCatalog,
  onNavigateManuscript,
}) => {
  return (
    <div className="py-12 sm:py-20 bg-[#070d19] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Penulis */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block">
            Keluarga Besar Sastrawan & Akademisi
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Penulis SIAK PUBLISHER
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Mereka yang mendedikasikan pikiran dan pena untuk mengabadikan peradaban. Dari sejarawan maritim, budayawan sepuh, hingga novelis generasi baru.
          </p>
        </div>

        {/* Grid Profil Penulis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {AUTHORS_DATA.map((author) => (
            <div
              key={author.id}
              className="bg-[#0b1426] border border-[#1b2a4a] hover:border-[#d4af37]/60 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Avatar Penulis */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#d4af37]/50 shadow-md">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#d4af37] text-[#091122] rounded-full p-1.5 shadow">
                  <Award className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Data Penulis */}
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-lg font-display font-bold text-white">
                    {author.name}
                  </h3>
                  <span className="text-xs text-[#d4af37] font-medium block">
                    {author.role}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {author.bio}
                </p>

                <div className="pt-3 border-t border-[#172545] space-y-1.5 text-xs">
                  <div className="text-slate-400">
                    Karya Pilihan: <strong className="text-slate-200">{author.notableBook}</strong>
                  </div>
                  <div className="text-slate-400 font-mono">
                    Total Judul Terbit: <span className="text-amber-300 font-semibold">{author.totalBooks} Buku</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ajakan Bergabung Menjadi Penulis */}
        <div className="bg-gradient-to-r from-[#0d1b36] via-[#13274e] to-[#0d1b36] border border-[#233a69] rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl space-y-6">
          <div className="inline-flex p-3 rounded-full bg-[#d4af37]/15 text-[#d4af37] mb-2">
            <Feather className="w-6 h-6" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Ingin Nama Anda Tercatat Sebagai Penulis Resmi Kami?
          </h2>

          <p className="text-slate-300 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            SIAK PUBLISHER membuka pintu seluas-luasnya bagi penulis muda, peneliti, dosen, guru, dan sastrawan untuk menerbitkan gagasan terbaiknya ke dalam buku ber-ISBN.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onNavigateManuscript}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#091122] font-bold text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-[#d4af37]/20 transition-all flex items-center gap-2"
            >
              <Feather className="w-4 h-4" />
              <span>Kirim Naskah Anda Sekarang</span>
            </button>

            <button
              onClick={onNavigateCatalog}
              className="px-6 py-3 rounded-xl bg-[#0b1426] hover:bg-[#132344] border border-[#233863] text-slate-200 text-xs sm:text-sm font-medium transition-all flex items-center gap-2"
            >
              <span>Jelajahi Buku Penulis Lain</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
