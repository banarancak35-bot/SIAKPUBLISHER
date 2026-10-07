import React from 'react';
import { BookMarked, Landmark, Sparkles, GraduationCap, Compass, BookOpen, ArrowRight } from 'lucide-react';

interface CategorySectionProps {
  onSelectCategory: (categoryName: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  const genres = [
    {
      title: 'Sejarah & Kebudayaan',
      description: 'Kajian kesultanan Siak, peradaban maritim Selat Malaka, dan manuskrip warisan Melayu nusantara.',
      count: '42+ Judul',
      icon: Landmark,
      color: 'from-amber-500/20 to-amber-900/10',
      accent: 'text-amber-300',
    },
    {
      title: 'Fiksi & Sastra',
      description: 'Novel pembangun jiwa, antologi puisi kontemporer, dan kumpulan cerpen kaya metafora.',
      count: '68+ Judul',
      icon: BookMarked,
      color: 'from-blue-500/20 to-blue-900/10',
      accent: 'text-blue-300',
    },
    {
      title: 'Pendidikan',
      description: 'Buku teks perguruan tinggi, monograf ilmiah, dan panduan pedagogi guru masa depan.',
      count: '85+ Judul',
      icon: GraduationCap,
      color: 'from-emerald-500/20 to-emerald-900/10',
      accent: 'text-emerald-300',
    },
    {
      title: 'Non-Fiksi',
      description: 'Biografi tokoh teladan, memoar sejarah, kepemimpinan, dan esai pemikiran sosial.',
      count: '34+ Judul',
      icon: Compass,
      color: 'from-purple-500/20 to-purple-900/10',
      accent: 'text-purple-300',
    },
    {
      title: 'Anak & Remaja',
      description: 'Fabel nusantara sarat moral, dongeng cerita rakyat berilustrasi warna, dan serial edukatif.',
      count: '29+ Judul',
      icon: Sparkles,
      color: 'from-rose-500/20 to-rose-900/10',
      accent: 'text-rose-300',
    },
    {
      title: 'Agama & Filsafat',
      description: 'Telaah akhlak tasawuf, kearifan adat bersendikan syarak, dan renungan spiritual.',
      count: '38+ Judul',
      icon: BookOpen,
      color: 'from-cyan-500/20 to-cyan-900/10',
      accent: 'text-cyan-300',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#091122] border-t border-b border-[#1b2a4a]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block">
            Jelajahi Berdasarkan Minat
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
            Kategori & Genre Buku
          </h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Temukan bacaan berkualitas dalam berbagai cabang ilmu pengetahuan dan karya sastra yang telah melalui kurasi redaksional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {genres.map((genre) => {
            const Icon = genre.icon;
            return (
              <div
                key={genre.title}
                onClick={() => onSelectCategory(genre.title)}
                className="group cursor-pointer bg-[#0c162c] hover:bg-[#101d3a] border border-[#1e2f52] hover:border-[#d4af37]/70 rounded-xl p-6 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#d4af37]/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-[#142345] border border-[#233a69] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className={`w-5 h-5 ${genre.accent}`} />
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                      {genre.count}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-[#d4af37] transition-colors mb-2">
                    {genre.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {genre.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#182847] flex items-center justify-between text-xs font-medium text-slate-300 group-hover:text-[#d4af37]">
                  <span>Buka Koleksi Buku</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
