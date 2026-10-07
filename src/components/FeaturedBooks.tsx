import React, { useState } from 'react';
import { 
  BookOpen, Star, ArrowRight, Info, MessageCircle, Feather, 
  Sparkles, CheckCircle2, ShieldCheck, Eye, EyeOff
} from 'lucide-react';
import { Book, PUBLISHER_INFO } from '../data/books';

interface FeaturedBooksProps {
  books: Book[];
  onOpenBookDetail: (book: Book) => void;
  onNavigateCatalog: () => void;
  onNavigateManuscript: () => void;
}

export const FeaturedBooks: React.FC<FeaturedBooksProps> = ({
  books,
  onOpenBookDetail,
  onNavigateCatalog,
  onNavigateManuscript,
}) => {
  // Default is clean (karena belum ada karya jadi masih bersih)
  const [showSimulation, setShowSimulation] = useState<boolean>(false);

  const handleQuickWhatsAppOrder = (book: Book, e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Halo SIAK PUBLISHER,\nSaya tertarik memesan buku:\nJudul: *${book.title}*\nPenulis: ${book.author}\nHarga: ${book.formattedPrice}\n\nMohon info ketersediaan stok & pengiriman.`
    );
    window.open(`https://wa.me/${PUBLISHER_INFO.waNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-24 bg-[#070d19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-[#d4af37] text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Koleksi & Status Penerbitan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
              Karya Terbitan SIAK PUBLISHER
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light">
              Penerbitan baru berintegritas tinggi. Setiap naskah yang lolos kurasi akan disiapkan dengan legalitas ISBN resmi Perpustakaan Nasional RI.
            </p>
          </div>

          {/* Toggle opsional untuk melihat simulasi tampilan buku */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowSimulation(!showSimulation)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1b34] hover:bg-[#152749] border border-[#233a69] text-xs text-slate-300 transition-colors"
              title="Alihkan status tampilan katalog"
            >
              {showSimulation ? <EyeOff className="w-3.5 h-3.5 text-amber-400" /> : <Eye className="w-3.5 h-3.5 text-[#d4af37]" />}
              <span>{showSimulation ? 'Kembali ke Tampilan Bersih' : 'Pratinjau Contoh Grid'}</span>
            </button>
          </div>
        </div>

        {/* TAMPILAN BERSIH (DEFAULT: BELUM ADA KARYA TERBIT) */}
        {!showSimulation ? (
          <div className="bg-gradient-to-b from-[#0c162b] to-[#081020] border border-[#1e2f52] rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-1/3 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="w-16 h-16 rounded-2xl bg-[#14264d] border border-[#24417f] text-[#d4af37] flex items-center justify-center mx-auto mb-6 shadow-md">
              <Feather className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#122244] border border-[#233a69] text-xs font-semibold text-[#fef08a] mb-4">
              <span>Status: Katalog Masih Bersih (Siap Terbit Perdana)</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
              Belum Ada Karya yang Diterbitkan
            </h3>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed mb-8">
              SIAK PUBLISHER baru saja resmi diluncurkan. Kami sedang membuka penerimaan naskah perdana untuk novel, puisi, buku ajar perguruan tinggi, dan kajian budaya. <strong>Jadilah penulis pertama yang namanya diabadikan di bawah naungan SIAK PUBLISHER!</strong>
            </p>

            {/* 3 Keuntungan Menjadi Penulis Perdana */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
              <div className="p-4 rounded-xl bg-[#070d19]/80 border border-[#1b2b4a] space-y-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-semibold text-xs text-white">Prioritas Redaksi</span>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Naskah perdana mendapatkan asistensi kurasi dan penyuntingan intensif langsung dari dewan redaksi.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070d19]/80 border border-[#1b2b4a] space-y-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-semibold text-xs text-white">Pengurusan ISBN Kilat</span>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Pendaftaran legalitas resmi ke Perpustakaan Nasional RI dan barcode buku berstandar internasional.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070d19]/80 border border-[#1b2b4a] space-y-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-semibold text-xs text-white">Desain Cover Eksklusif</span>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Perancangan sampul estetik dan tata letak artistik disesuaikan dengan karakter khas karya Anda.
                </p>
              </div>
            </div>

            {/* Tombol Ajakan */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onNavigateManuscript}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b8860b] text-[#091122] font-bold text-sm hover:brightness-110 shadow-lg shadow-[#d4af37]/20 transition-all flex items-center gap-2"
              >
                <Feather className="w-4 h-4" />
                <span>Kirimkan Naskah Perdana Anda Sekarang</span>
              </button>

              <a
                href={`https://wa.me/${PUBLISHER_INFO.waNumber}?text=Halo%20SIAK%20PUBLISHER,%20saya%20tertarik%20mengajukan%20naskah%20buku%20perdana.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#0f1e3c] hover:bg-[#162a53] border border-[#243c6b] text-slate-200 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#d4af37]" />
                <span>Konsultasi WhatsApp (085271219108)</span>
              </a>
            </div>

          </div>
        ) : (
          /* TAMPILAN SIMULASI GRID KETIKA NANTI ADA KARYA */
          <div>
            <div className="p-3 bg-amber-950/40 border border-amber-800/60 rounded-xl text-xs text-amber-200 mb-6 flex items-center justify-between">
              <span>ℹ️ Mode Pratinjau Contoh: Menampilkan simulasi layout grid buku ketika karya telah diterbitkan kelak.</span>
              <button
                onClick={() => setShowSimulation(false)}
                className="underline hover:text-white"
              >
                Tutup Pratinjau
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {books.map((book) => (
                <article
                  key={book.id}
                  onClick={() => onOpenBookDetail(book)}
                  className="group cursor-pointer bg-[#0d1629] rounded-xl border border-[#1b2a4a] hover:border-[#d4af37]/60 overflow-hidden shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[3/4] w-full bg-[#080e1b] overflow-hidden flex items-center justify-center p-4">
                    <div className="relative w-full h-full rounded shadow-xl overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
                      <img
                        src={book.coverImage}
                        alt={`Sampul buku ${book.title}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/50 via-white/10 to-transparent pointer-events-none" />
                    </div>

                    <div className="absolute top-3 right-3 bg-[#091122]/90 border border-[#223963] px-2 py-1 rounded text-[11px] font-medium text-amber-300 flex items-center gap-1 font-mono">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{book.rating}</span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="text-[#d4af37] font-medium">{book.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono">{book.year}</span>
                      </div>

                      <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#d4af37] transition-colors line-clamp-2">
                        {book.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300">
                        Oleh: <span className="font-medium text-slate-100">{book.author}</span>
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#192742] flex items-center justify-between gap-2">
                      <span className="font-bold font-mono text-base text-[#fef08a]">
                        {book.formattedPrice}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenBookDetail(book);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-[#142345] hover:bg-[#1c305c] border border-[#273f6e] text-xs font-medium text-slate-200"
                        >
                          Detail
                        </button>
                        <button
                          onClick={(e) => handleQuickWhatsAppOrder(book, e)}
                          className="px-3 py-1.5 rounded-lg bg-[#d4af37] text-[#091122] text-xs font-bold"
                        >
                          Pesan
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Banner Ajakan Terbit Karya Sendiri */}
        <div className="mt-16 bg-gradient-to-r from-[#0c1730] via-[#102042] to-[#0c1730] border border-[#233863] rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Punya Naskah Buku yang Ingin Diterbitkan?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl font-light">
              Percayakan naskah Anda kepada redaksi SIAK PUBLISHER. Kami bantu pengurusan ISBN resmi, tata letak, desain cover estetik, hingga siap beredar.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${PUBLISHER_INFO.waNumber}?text=Halo%20SIAK%20PUBLISHER,%20saya%20ingin%20konsultasi%20menerbitkan%20naskah.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#091122] font-bold text-sm hover:brightness-110 shadow-lg shadow-[#d4af37]/20 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi Naskah via WA</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
