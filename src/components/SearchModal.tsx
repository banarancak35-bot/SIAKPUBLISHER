import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Star, ArrowRight } from 'lucide-react';
import { Book, BOOKS_DATA } from '../data/books';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBook: (book: Book) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectBook,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut listener (Cmd/Ctrl + K or Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = BOOKS_DATA.filter((b) => {
    const q = query.toLowerCase().trim();
    if (!q) return false;
    return (
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.isbn.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-fadeIn">
      <div 
        className="bg-[#0b1426] border border-[#223963] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative p-4 border-b border-[#1b2a4a] flex items-center">
          <Search className="w-5 h-5 text-[#d4af37] absolute left-5 pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ketik judul buku, nama penulis, atau genre..."
            className="w-full pl-10 pr-10 py-2.5 bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-xs text-slate-500">
              <BookOpen className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <span>Ketik minimal 1 karakter untuk mencari koleksi SIAK PUBLISHER</span>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              <span className="text-[11px] text-slate-400 px-2 block font-mono">
                Ditemukan {results.length} buku:
              </span>
              {results.map((book) => (
                <div
                  key={book.id}
                  onClick={() => {
                    onSelectBook(book);
                    onClose();
                  }}
                  className="p-3 rounded-xl bg-[#070d19] hover:bg-[#122244] border border-[#172545] hover:border-[#d4af37]/50 cursor-pointer flex items-center gap-3 transition-colors"
                >
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    referrerPolicy="no-referrer"
                    className="w-10 h-14 object-cover rounded shadow shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-semibold text-white truncate">
                      {book.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 truncate">
                      Oleh: {book.author} · <span className="text-[#d4af37]">{book.category}</span>
                    </p>
                    <span className="text-xs font-mono font-bold text-[#fef08a]">
                      {book.formattedPrice}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 shrink-0" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-xs text-slate-400">
              Tidak menemukan buku dengan kata kunci "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
