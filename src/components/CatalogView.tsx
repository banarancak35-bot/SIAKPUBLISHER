import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, Star, Info, MessageCircle, X, RotateCcw } from 'lucide-react';
import { Book, BOOKS_DATA, CATEGORIES, PUBLISHER_INFO } from '../data/books';

interface CatalogViewProps {
  initialCategory?: string;
  onOpenBookDetail: (book: Book) => void;
  onNavigateManuscript?: () => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  initialCategory = 'all',
  onOpenBookDetail,
  onNavigateManuscript,
}) => {
  // Default is clean (karena belum ada karya jadi masih bersih)
  const [isCleanMode, setIsCleanMode] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'terbaru' | 'harga-terendah' | 'harga-tertinggi' | 'rating'>('terbaru');

  // Filter and sort computation
  const filteredBooks = useMemo(() => {
    return BOOKS_DATA.filter((book) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || book.category === selectedCategory;

      // Year filter
      const matchesYear =
        selectedYear === 'all' || book.year.toString() === selectedYear;

      // Search filter (title, author, synopsis, isbn)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        book.isbn.toLowerCase().includes(q) ||
        book.synopsis.toLowerCase().includes(q);

      return matchesCategory && matchesYear && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'terbaru') return b.year - a.year;
      if (sortBy === 'harga-terendah') return a.price - b.price;
      if (sortBy === 'harga-tertinggi') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, selectedYear, searchQuery, sortBy]);

  const handleQuickWhatsAppOrder = (book: Book, e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Halo SIAK PUBLISHER,\nSaya ingin memesan buku dari Katalog:\nJudul: *${book.title}*\nPenulis: ${book.author}\nISBN: ${book.isbn}\nHarga: ${book.formattedPrice}\n\nMohon informasi ketersediaan stok & ongkir ke kota saya.`
    );
    window.open(`https://wa.me/${PUBLISHER_INFO.waNumber}?text=${message}`, '_blank');
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedYear('all');
    setSearchQuery('');
    setSortBy('terbaru');
  };

  return (
    <div className="py-12 sm:py-16 bg-[#070d19] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Katalog */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block">
            Daftar Pustaka & Koleksi Terbitan
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Katalog Buku SIAK PUBLISHER
          </h1>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Rumah penerbitan resmi ber-ISBN Perpustakaan Nasional RI. Menjaga orisinalitas pemikiran, keindahan bahasa, dan ketahanan fisik buku.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setIsCleanMode(!isCleanMode)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0e1a32] hover:bg-[#152547] border border-[#21355c] text-xs text-slate-300 transition-colors"
            >
              <span>{isCleanMode ? '🔍 Lihat Simulasi Filter Katalog' : '← Kembali ke Tampilan Bersih'}</span>
            </button>
          </div>
        </div>

        {/* JIKA MODE BERSIH (DEFAULT: BELUM ADA KARYA TERBIT) */}
        {isCleanMode ? (
          <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#0b1426] to-[#081020] border border-[#1e2f52] rounded-3xl p-8 sm:p-14 text-center shadow-2xl space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#14264d] border border-[#24417f] text-[#d4af37] flex items-center justify-center mx-auto shadow-md">
              <RotateCcw className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#122244] border border-[#233a69] text-xs font-semibold text-[#fef08a]">
              <span>Katalog Masih Bersih (Penerimaan Naskah Perdana Dibuka)</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Belum Ada Buku yang Diterbitkan
            </h2>

            <p className="text-slate-300 text-sm font-light leading-relaxed max-w-xl mx-auto">
              Saat ini SIAK PUBLISHER baru saja resmi memulai operasional penerbitan. Naskah perdana sedang dalam proses pendaftaran dan kurasi redaksi. Anda berkesempatan menjadi penulis pionir yang bukunya meluncur resmi ber-ISBN di katalog ini.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              {onNavigateManuscript && (
                <button
                  onClick={onNavigateManuscript}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b8860b] text-[#091122] font-bold text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-[#d4af37]/20 transition-all"
                >
                  Ajukan Naskah Perdana Anda
                </button>
              )}

              <a
                href={`https://wa.me/${PUBLISHER_INFO.waNumber}?text=Halo%20SIAK%20PUBLISHER,%20saya%20ingin%20konsultasi%20menerbitkan%20buku%20perdana.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#12213f] hover:bg-[#1a2e57] border border-[#243c6b] text-slate-200 font-semibold text-xs sm:text-sm transition-all"
              >
                Konsultasi WhatsApp Redaksi
              </a>
            </div>
          </div>
        ) : (
          /* JIKA MODE SIMULASI KATALOG DIAKTIFKAN */
          <div>
            {/* Bar Filter & Pencarian */}
            <div className="bg-[#0b1426] border border-[#1b2a4a] rounded-2xl p-4 sm:p-6 mb-8 shadow-xl">
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Input Pencarian */}
                <div className="md:col-span-5 relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari judul buku, penulis, atau ISBN..."
                    className="w-full pl-10 pr-9 py-2.5 bg-[#070d19] border border-[#223963] focus:border-[#d4af37] rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                      aria-label="Hapus kata kunci pencarian"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Filter Dropdown Tahun Terbit */}
                <div className="md:col-span-3">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full py-2.5 px-3 bg-[#070d19] border border-[#223963] focus:border-[#d4af37] rounded-xl text-sm text-slate-300 focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                  >
                    <option value="all">Semua Tahun Terbit</option>
                    <option value="2026">Tahun 2026 (Terbaru)</option>
                    <option value="2025">Tahun 2025</option>
                  </select>
                </div>

                {/* Pengurutan (Sorting) */}
                <div className="md:col-span-4 flex items-center gap-2">
                  <ArrowUpDown className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full py-2.5 px-3 bg-[#070d19] border border-[#223963] focus:border-[#d4af37] rounded-xl text-sm text-slate-300 focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                  >
                    <option value="terbaru">Urutkan: Terbitan Terbaru</option>
                    <option value="rating">Urutkan: Rating Tertinggi</option>
                    <option value="harga-terendah">Urutkan: Harga Terendah</option>
                    <option value="harga-tertinggi">Urutkan: Harga Tertinggi</option>
                  </select>
                </div>

              </div>

              {/* Tab Kategori / Genre */}
              <div className="mt-5 pt-4 border-t border-[#172545] flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                <span className="text-xs text-slate-400 shrink-0 font-medium mr-1 flex items-center gap-1">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Genre:</span>
                </span>

                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.name || (cat.id === 'all' && selectedCategory === 'all');
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id === 'all' ? 'all' : cat.name)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                        isActive
                          ? 'bg-[#d4af37] text-[#091122] font-semibold shadow-sm'
                          : 'bg-[#0e1a32] text-slate-300 hover:bg-[#152547] hover:text-white border border-[#1e2f52]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  );
                })}

                {(selectedCategory !== 'all' || selectedYear !== 'all' || searchQuery !== '') && (
                  <button
                    onClick={handleResetFilters}
                    className="ml-auto inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 px-2 py-1 rounded bg-amber-950/40 border border-amber-800/50 shrink-0"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset Filter</span>
                  </button>
                )}
              </div>

            </div>

        {/* Counter Hasil */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
          <span>Menampilkan <strong className="text-white font-mono">{filteredBooks.length}</strong> buku</span>
          {selectedCategory !== 'all' && (
            <span>Kategori aktif: <span className="text-[#d4af37] font-medium">{selectedCategory}</span></span>
          )}
        </div>

        {/* Daftar Buku */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <article
                key={book.id}
                onClick={() => onOpenBookDetail(book)}
                className="group cursor-pointer bg-[#0c162b] rounded-xl border border-[#1b2b4d] hover:border-[#d4af37]/70 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#d4af37]/5 transition-all duration-300 flex flex-col"
              >
                {/* Cover Frame */}
                <div className="relative aspect-[3/4] w-full bg-[#080f1d] p-3 flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full rounded shadow-md overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src={book.coverImage}
                      alt={`Cover buku ${book.title}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-black/50 via-white/10 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded pointer-events-none" />
                  </div>

                  <div className="absolute top-2.5 right-2.5 bg-[#091122]/90 border border-[#223963] px-2 py-0.5 rounded text-[11px] text-amber-300 flex items-center gap-1 font-mono">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{book.rating}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <span className="text-[#d4af37] font-medium truncate max-w-[150px]">{book.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{book.year}</span>
                    </div>

                    <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-[#d4af37] transition-colors line-clamp-2 leading-snug">
                      {book.title}
                    </h3>

                    <p className="text-xs text-slate-300">
                      Penulis: <span className="text-slate-100 font-medium">{book.author}</span>
                    </p>
                  </div>

                  {/* Price & Actions */}
                  <div className="pt-3 border-t border-[#172545] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Harga</span>
                      <span className="font-bold font-mono text-sm sm:text-base text-[#fef08a]">
                        {book.formattedPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBookDetail(book);
                        }}
                        className="p-1.5 rounded-lg bg-[#142345] hover:bg-[#1d325e] text-slate-300 hover:text-white transition-colors border border-[#243b67]"
                        title="Lihat Detail Naskah & Sinopsis"
                      >
                        <Info className="w-4 h-4 text-[#d4af37]" />
                      </button>

                      <button
                        onClick={(e) => handleQuickWhatsAppOrder(book, e)}
                        className="px-2.5 py-1.5 rounded-lg bg-[#d4af37] hover:bg-[#e5c158] text-[#091122] text-xs font-bold transition-all flex items-center gap-1"
                        title="Pesan via WhatsApp 085271219108"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Pesan</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#0b1426] border border-[#1b2a4a] rounded-2xl p-8 max-w-md mx-auto space-y-4">
            <p className="text-slate-300 font-medium">Tidak ada buku yang sesuai dengan pencarian Anda.</p>
            <p className="text-xs text-slate-500">Coba ubah kata kunci atau reset filter genre.</p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-[#d4af37] text-[#091122] font-semibold text-xs rounded-lg"
            >
              Tampilkan Semua Koleksi
            </button>
          </div>
        )}
          </div>
        )}

      </div>
    </div>
  );
};
