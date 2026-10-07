import React, { useState } from 'react';
import { X, Star, ShoppingBag, MessageCircle, BookOpen, BookmarkCheck, FileText, Share2, Check } from 'lucide-react';
import { Book, PUBLISHER_INFO } from '../data/books';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({ book, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'sinopsis' | 'cuplikan' | 'penulis'>('sinopsis');

  if (!book) return null;

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Halo SIAK PUBLISHER,\nSaya tertarik membeli buku:\n` +
      `Judul: *${book.title}*\n` +
      `Penulis: ${book.author}\n` +
      `ISBN: ${book.isbn}\n` +
      `Harga: ${book.formattedPrice}\n\n` +
      `Mohon info ketersediaan stok buku dan estimasi ongkir. Terima kasih!`
    );
    window.open(`https://wa.me/${PUBLISHER_INFO.waNumber}?text=${text}`, '_blank');
  };

  const handleCopyShare = () => {
    const text = `${book.title} oleh ${book.author} - Terbitan SIAK PUBLISHER. Info & pemesanan hubungi WA 085271219108.`;
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Card */}
      <div 
        className="relative bg-[#0b1426] border border-[#223963] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl my-8 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol Tutup */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#142345] hover:bg-[#1f3463] text-slate-300 hover:text-white transition-colors"
          aria-label="Tutup detail buku"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Kolom Kiri: Cover & Beli Cepat */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative aspect-[3/4] w-full max-w-[240px] rounded-lg shadow-2xl overflow-hidden group">
              <img
                src={book.coverImage}
                alt={book.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/50 via-white/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded pointer-events-none" />
            </div>

            <div className="w-full max-w-[240px] mt-4 space-y-2">
              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b8860b] text-[#091122] font-bold text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan via WhatsApp</span>
              </button>

              <button
                onClick={handleCopyShare}
                className="w-full py-2 px-3 rounded-lg bg-[#142345] hover:bg-[#1c305c] border border-[#233863] text-slate-300 text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Teks Pesanan Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Bagikan Informasi Buku</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Rincian Lengkap */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-4">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="text-[#d4af37] font-semibold uppercase tracking-wider">{book.category}</span>
                <div className="flex items-center gap-1 text-amber-300 font-mono">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{book.rating} / 5.0</span>
                </div>
              </div>

              {/* Title & Author */}
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white leading-snug mb-1">
                {book.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Penulis: <strong className="text-white font-medium">{book.author}</strong>
              </p>

              {/* Price */}
              <div className="mt-3 p-3 rounded-xl bg-[#070d19] border border-[#1b2a4a] flex items-center justify-between">
                <span className="text-xs text-slate-400">Harga Resmi Buku:</span>
                <span className="text-xl font-bold font-mono text-[#fef08a]">{book.formattedPrice}</span>
              </div>

              {/* Spesifikasi Buku Tabular */}
              <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] bg-[#091122] p-3 rounded-xl border border-[#172545]">
                <div>
                  <span className="text-slate-400 block">Nomor ISBN:</span>
                  <span className="font-mono text-slate-200">{book.isbn}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Tahun Terbit:</span>
                  <span className="font-mono text-slate-200">{book.year}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Jumlah Halaman:</span>
                  <span className="text-slate-200">{book.pages} Halaman</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Format Cetak:</span>
                  <span className="text-slate-200 truncate block">{book.format}</span>
                </div>
              </div>

              {/* Tabs Nav: Sinopsis / Cuplikan / Tentang Penulis */}
              <div className="flex items-center gap-2 mt-5 border-b border-[#1b2a4a] pb-2 text-xs">
                <button
                  onClick={() => setActiveTab('sinopsis')}
                  className={`pb-1 font-semibold transition-colors ${
                    activeTab === 'sinopsis'
                      ? 'text-[#d4af37] border-b-2 border-[#d4af37]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Sinopsis Lengkap
                </button>
                <button
                  onClick={() => setActiveTab('cuplikan')}
                  className={`pb-1 font-semibold transition-colors ${
                    activeTab === 'cuplikan'
                      ? 'text-[#d4af37] border-b-2 border-[#d4af37]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Cuplikan Teks
                </button>
                <button
                  onClick={() => setActiveTab('penulis')}
                  className={`pb-1 font-semibold transition-colors ${
                    activeTab === 'penulis'
                      ? 'text-[#d4af37] border-b-2 border-[#d4af37]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Tentang Penulis
                </button>
              </div>

              {/* Konten Tab */}
              <div className="mt-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-h-48 overflow-y-auto pr-1">
                {activeTab === 'sinopsis' && (
                  <p>{book.synopsis}</p>
                )}

                {activeTab === 'cuplikan' && (
                  <blockquote className="italic border-l-2 border-[#d4af37] pl-3 py-1 font-reading text-slate-200">
                    "{book.excerpt || 'Cuplikan belum tersedia untuk edisi ini.'}"
                  </blockquote>
                )}

                {activeTab === 'penulis' && (
                  <p>{book.authorBio || `Karya berharga dari ${book.author} diterbitkan eksklusif oleh SIAK PUBLISHER.`}</p>
                )}
              </div>
            </div>

            {/* Catatan Pelayanan */}
            <div className="pt-3 border-t border-[#172545] text-[11px] text-slate-400">
              * Pengiriman melayani seluruh wilayah Indonesia via JNE, SiCepat, Pos Indonesia, dan kurir kilat.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
