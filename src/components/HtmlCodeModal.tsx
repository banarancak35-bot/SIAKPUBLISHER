import React, { useState } from 'react';
import { X, Copy, Check, Download, Code2, ExternalLink } from 'lucide-react';
import { PUBLISHER_INFO } from '../data/books';

interface HtmlCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HtmlCodeModal: React.FC<HtmlCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SIAK PUBLISHER - Mengabadikan Karya, Merawat Peradaban</title>
  <meta name="description" content="Penerbit buku resmi ber-ISBN SIAK PUBLISHER. Layanan penerbitan naskah profesional, buku fiksi, non-fiksi, pendidikan, dan sejarah." />

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              navyDark: '#070d19',
              navyCard: '#0b1426',
              navyBorder: '#1b2a4a',
              gold: '#d4af37',
              goldLight: '#fef08a',
              goldHover: '#e5c158'
            }
          },
          fontFamily: {
            serif: ['Georgia', 'serif'],
            sans: ['system-ui', '-apple-system', 'sans-serif']
          }
        }
      }
    }
  </script>
</head>
<body class="bg-[#070d19] text-slate-100 font-sans antialiased selection:bg-[#d4af37]/30 selection:text-white">

  <!-- ========================================== -->
  <!-- 1. TOP BAR: INFORMASI KONTAK RESMI         -->
  <!-- ========================================== -->
  <div class="bg-[#050a14] border-b border-[#1b2a4a] text-slate-300 text-xs py-2 px-4">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
      <!-- Kontak: Email & No. HP/WhatsApp -->
      <div class="flex items-center gap-4 sm:gap-6">
        <a href="mailto:siakpublisher@gmail.com" class="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
          <span>✉️</span>
          <span>siakpublisher@gmail.com</span>
        </a>
        <span class="text-slate-600">|</span>
        <a href="https://wa.me/6285271219108" target="_blank" class="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 font-medium">
          <span>📱</span>
          <span>WhatsApp / HP: 085271219108</span>
        </a>
      </div>
      <!-- Jam Operasional -->
      <div class="text-slate-400 text-[11px]">
        Senin - Sabtu: 08.30 - 17.00 WIB · Siak Sri Indrapura, Riau
      </div>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- 2. HEADER & NAVIGASI UTAMA                 -->
  <!-- ========================================== -->
  <header class="sticky top-0 z-40 bg-[#091122]/95 backdrop-blur border-b border-[#1b2a4a] shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-20">
        <!-- Logo & Identitas Penerbit -->
        <a href="#" class="flex items-center gap-3">
          <svg viewBox="0 0 200 130" fill="none" class="w-11 h-auto" xmlns="http://www.w3.org/2000/svg">
            <rect x="74" y="38" width="52" height="4" rx="1" fill="#d4af37" />
            <path d="M70 36L65 18L85 28L100 8L115 28L135 18L130 36H70Z" fill="#d4af37" />
            <path d="M82 34L100 16L118 34H82Z" fill="#070d19" />
            <path d="M100 20L108 32H92L100 20Z" fill="#f5d468" />
            <circle cx="100" cy="8" r="2.5" fill="#f5d468" />
            <path d="M93 44H107L105 60L100 76L95 60L93 44Z" fill="#ffffff" />
            <circle cx="100" cy="58" r="1.5" fill="#070d19" />
            <line x1="100" y1="59.5" x2="100" y2="76" stroke="#070d19" stroke-width="1" />
            <path d="M96 74C72 66 45 62 34 67L31 90C43 85 73 80 96 86V74Z" fill="#d4af37" />
            <path d="M104 74C128 66 155 62 166 67L169 90C157 85 127 80 104 86V74Z" fill="#d4af37" />
            <path d="M96 79C75 73 50 71 41 75L38 97C50 93 76 89 96 94V79Z" fill="#f5d468" />
            <path d="M104 79C125 73 150 71 159 75L162 97C150 93 124 89 104 94V79Z" fill="#f5d468" />
            <path d="M28 95C52 91 82 89 100 101C118 89 148 91 172 95L169 100C145 95 117 94 100 107C83 94 55 95 31 100L28 95Z" fill="#38bdf8" />
          </svg>
          <div>
            <span class="font-serif font-bold text-lg text-white tracking-wider block">
              SIAK <span class="text-[#d4af37]">PUBLISHER</span>
            </span>
            <p class="text-[10px] text-slate-400">Mengabadikan Karya, Merawat Peradaban</p>
          </div>
        </a>

        <!-- Menu Navigasi Desktop -->
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#beranda" class="text-[#d4af37]">Beranda</a>
          <a href="#katalog" class="hover:text-white transition-colors">Katalog Buku</a>
          <a href="#kategori" class="hover:text-white transition-colors">Kategori</a>
          <a href="#layanan-naskah" class="hover:text-white transition-colors">Layanan Naskah</a>
          <a href="#tentang-kami" class="hover:text-white transition-colors">Tentang Kami</a>
          <a href="#kontak" class="hover:text-white transition-colors">Kontak</a>
        </nav>

        <!-- Tombol Aksi Header -->
        <div class="flex items-center gap-3">
          <a href="#layanan-naskah" class="px-4 py-2 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#091122] font-bold text-xs sm:text-sm hover:brightness-110 shadow-sm transition-all">
            Kirim Naskah
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- ========================================== -->
  <!-- 3. BANNER UTAMA (HERO SECTION)             -->
  <!-- ========================================== -->
  <section id="beranda" class="relative py-16 sm:py-20 bg-gradient-to-b from-[#091122] via-[#0b162c] to-[#070d19] border-b border-[#1b2a4a]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Kolom Teks Promosi Hero -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-block px-3 py-1 rounded-full bg-[#122244] border border-[#233a69] text-xs font-semibold text-[#fef08a] uppercase">
            ✦ Rilisan Terbaru Pilihan Redaksi 2026
          </div>
          <h1 class="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight">
            Mengabadikan Karya,<br>
            <span class="text-[#d4af37]">Merawat Peradaban.</span>
          </h1>
          <p class="text-slate-300 text-base leading-relaxed">
            Penerbit buku profesional di bawah naungan legalitas resmi Perpustakaan Nasional RI. Kami mendampingi penulis dan akademisi menghadirkan buku berkualitas lux dengan pengurusan ISBN legal, tata letak estetik, dan distribusi terpercaya.
          </p>
          <div class="flex flex-wrap gap-4 pt-2">
            <a href="https://wa.me/6285271219108?text=Halo%20SIAK%20PUBLISHER,%20saya%20ingin%20memesan%20buku%20rilisan%20terbaru." target="_blank" class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#091122] font-bold text-sm hover:brightness-110 transition-all shadow-lg">
              Beli Sekarang via WhatsApp
            </a>
            <a href="#layanan-naskah" class="px-6 py-3.5 rounded-xl bg-[#0f1e3c] border border-[#243c6b] text-slate-200 font-semibold text-sm hover:bg-[#162a53] transition-all">
              Pelajari Layanan Naskah
            </a>
          </div>
        </div>

        <!-- Kolom Showcase Cover Buku Pilihan -->
        <div class="lg:col-span-5 flex justify-center">
          <div class="bg-[#0d1830] border border-[#223963] rounded-2xl p-6 shadow-2xl max-w-sm w-full">
            <div class="text-xs text-[#d4af37] font-semibold uppercase mb-2">Buku Paling Direkomendasikan</div>
            <div class="aspect-[3/4] bg-[#070d19] rounded-lg overflow-hidden border border-[#1b2a4a] mb-4 flex items-center justify-center relative shadow-inner">
              <div class="text-center p-6 space-y-2">
                <span class="text-xs text-amber-400 font-mono">SEJARAH & KEBUDAYAAN</span>
                <h3 class="font-serif font-bold text-lg text-white">Mutiara Sungai Jantan</h3>
                <p class="text-xs text-slate-400">Kilau Sejarah Siak Sri Indrapura</p>
                <div class="text-[11px] text-slate-500 pt-2">Dr. Mahadir Ahmad, M.Hum</div>
              </div>
            </div>
            <div class="flex items-center justify-between pt-2">
              <div>
                <span class="text-[10px] text-slate-400 block uppercase">Harga Resmi</span>
                <span class="text-xl font-bold font-mono text-[#fef08a]">Rp 125.000</span>
              </div>
              <a href="https://wa.me/6285271219108?text=Halo%20SIAK%20PUBLISHER,%20saya%20ingin%20memesan%20buku%20Mutiara%20Sungai%20Jantan." target="_blank" class="px-3.5 py-2 rounded-lg bg-[#d4af37] text-[#091122] font-bold text-xs hover:bg-[#e5c158]">
                Pesan Buku
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 4. BAGIAN BUKU UNGGULAN (BESTSELLERS)      -->
  <!-- ========================================== -->
  <section id="katalog" class="py-16 sm:py-20 bg-[#070d19]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-[#d4af37] text-xs font-semibold uppercase tracking-wider block">Karya Terpilih</span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-white">Buku Unggulan SIAK PUBLISHER</h2>
        <p class="text-slate-400 text-sm mt-1">Koleksi terpopuler dengan cetak lux dan ISBN resmi</p>
      </div>

      <!-- Grid 4-6 Cover Buku -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Buku 1 -->
        <div class="bg-[#0b1426] border border-[#1b2a4a] hover:border-[#d4af37]/60 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <div class="aspect-[3/4] bg-[#070d19] rounded border border-[#1e2f52] mb-4 flex flex-col items-center justify-center p-4 text-center">
              <span class="text-[10px] text-[#d4af37] font-semibold">SEJARAH & ADAT</span>
              <h4 class="font-serif font-bold text-base text-white mt-2">Tunjuk Ajar & Adat Melayu</h4>
              <p class="text-xs text-slate-400 mt-1">H. Al-Azhar Iskandar</p>
            </div>
            <span class="text-[11px] text-[#d4af37]">Kebudayaan · 420 Hal</span>
            <h3 class="font-serif font-bold text-white text-base mt-1">Tunjuk Ajar & Adat Melayu</h3>
            <p class="text-xs text-slate-300">Penulis: H. Al-Azhar Iskandar</p>
          </div>
          <div class="flex items-center justify-between pt-4 mt-4 border-t border-[#182847]">
            <span class="font-bold font-mono text-[#fef08a]">Rp 140.000</span>
            <a href="https://wa.me/6285271219108?text=Halo%20saya%20pesan%20buku%20Tunjuk%20Ajar%20Melayu" target="_blank" class="px-3 py-1.5 bg-[#d4af37] text-[#091122] rounded text-xs font-bold">Pesan</a>
          </div>
        </div>

        <!-- Buku 2 -->
        <div class="bg-[#0b1426] border border-[#1b2a4a] hover:border-[#d4af37]/60 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <div class="aspect-[3/4] bg-[#070d19] rounded border border-[#1e2f52] mb-4 flex flex-col items-center justify-center p-4 text-center">
              <span class="text-[10px] text-[#d4af37] font-semibold">SASTRA NUSANTARA</span>
              <h4 class="font-serif font-bold text-base text-white mt-2">Nyanyian Hilir</h4>
              <p class="text-xs text-slate-400 mt-1">Ratih Kumala Dewi</p>
            </div>
            <span class="text-[11px] text-[#d4af37]">Fiksi & Sastra · 260 Hal</span>
            <h3 class="font-serif font-bold text-white text-base mt-1">Nyanyian Hilir</h3>
            <p class="text-xs text-slate-300">Penulis: Ratih Kumala Dewi</p>
          </div>
          <div class="flex items-center justify-between pt-4 mt-4 border-t border-[#182847]">
            <span class="font-bold font-mono text-[#fef08a]">Rp 88.000</span>
            <a href="https://wa.me/6285271219108?text=Halo%20saya%20pesan%20buku%20Nyanyian%20Hilir" target="_blank" class="px-3 py-1.5 bg-[#d4af37] text-[#091122] rounded text-xs font-bold">Pesan</a>
          </div>
        </div>

        <!-- Buku 3 -->
        <div class="bg-[#0b1426] border border-[#1b2a4a] hover:border-[#d4af37]/60 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <div class="aspect-[3/4] bg-[#070d19] rounded border border-[#1e2f52] mb-4 flex flex-col items-center justify-center p-4 text-center">
              <span class="text-[10px] text-[#d4af37] font-semibold">PENDIDIKAN</span>
              <h4 class="font-serif font-bold text-base text-white mt-2">Pendidikan Berakar Nilai</h4>
              <p class="text-xs text-slate-400 mt-1">Prof. Dr. Zulkifli Mansur, M.Pd</p>
            </div>
            <span class="text-[11px] text-[#d4af37]">Pendidikan · 312 Hal</span>
            <h3 class="font-serif font-bold text-white text-base mt-1">Pendidikan Berakar Nilai</h3>
            <p class="text-xs text-slate-300">Penulis: Prof. Dr. Zulkifli Mansur</p>
          </div>
          <div class="flex items-center justify-between pt-4 mt-4 border-t border-[#182847]">
            <span class="font-bold font-mono text-[#fef08a]">Rp 98.000</span>
            <a href="https://wa.me/6285271219108?text=Halo%20saya%20pesan%20buku%20Pendidikan%20Berakar%20Nilai" target="_blank" class="px-3 py-1.5 bg-[#d4af37] text-[#091122] rounded text-xs font-bold">Pesan</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 5. KATEGORI / GENRE BUKU                   -->
  <!-- ========================================== -->
  <section id="kategori" class="py-16 bg-[#091122] border-t border-b border-[#1b2a4a]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-10">
        <h2 class="text-2xl font-serif font-bold text-white">Kategori & Genre Buku</h2>
        <p class="text-slate-400 text-xs sm:text-sm">Jelajahi koleksi bacaan berkualitas tinggi</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-4 bg-[#0c162c] border border-[#1e2f52] rounded-xl text-center">
          <div class="text-2xl mb-1">📜</div>
          <h4 class="font-bold text-white text-sm">Sejarah & Budaya</h4>
          <span class="text-[11px] text-slate-400">Kesultanan & Melayu</span>
        </div>
        <div class="p-4 bg-[#0c162c] border border-[#1e2f52] rounded-xl text-center">
          <div class="text-2xl mb-1">✍️</div>
          <h4 class="font-bold text-white text-sm">Fiksi & Sastra</h4>
          <span class="text-[11px] text-slate-400">Novel, Puisi, Cerpen</span>
        </div>
        <div class="p-4 bg-[#0c162c] border border-[#1e2f52] rounded-xl text-center">
          <div class="text-2xl mb-1">🎓</div>
          <h4 class="font-bold text-white text-sm">Pendidikan</h4>
          <span class="text-[11px] text-slate-400">Buku Ajar & Monograf</span>
        </div>
        <div class="p-4 bg-[#0c162c] border border-[#1e2f52] rounded-xl text-center">
          <div class="text-2xl mb-1">✨</div>
          <h4 class="font-bold text-white text-sm">Anak & Remaja</h4>
          <span class="text-[11px] text-slate-400">Fabel & Dongeng Edukatif</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 6. LAYANAN & PENGIRIMAN NASKAH             -->
  <!-- ========================================== -->
  <section id="layanan-naskah" class="py-16 bg-[#070d19]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-10 space-y-2">
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-white">Layanan Kirim Naskah</h2>
        <p class="text-slate-300 text-xs sm:text-sm">Syarat: Naskah asli, format Word/PDF, sertakan sinopsis dan biodata penulis.</p>
      </div>

      <div class="bg-[#0b1426] border border-[#1b2a4a] rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 class="font-serif font-bold text-lg text-white">Kirim Naskah Anda ke Redaksi SIAK PUBLISHER</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Kirimkan berkas naskah Anda langsung melalui surel atau konsultasikan via WhatsApp ke tim editor kami:
        </p>
        <div class="flex flex-col sm:flex-row gap-4 pt-2">
          <a href="mailto:siakpublisher@gmail.com?subject=Pengajuan%20Naskah%20Buku" class="flex-1 py-3 px-4 rounded-xl bg-[#14264a] text-center text-xs font-semibold text-slate-200 hover:text-white border border-[#233a69]">
            ✉️ Kirim via Email: siakpublisher@gmail.com
          </a>
          <a href="https://wa.me/6285271219108?text=Halo%20SIAK%20PUBLISHER,%20saya%20ingin%20mengirimkan%20naskah%20buku." target="_blank" class="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#091122] text-center text-xs font-bold">
            📱 Kirim via WhatsApp: 085271219108
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================== -->
  <!-- 7. TENTANG KAMI & FOOTER                   -->
  <!-- ========================================== -->
  <footer id="kontak" class="bg-[#050a14] border-t border-[#1b2a4a] pt-14 pb-8 text-xs text-slate-400">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
      <div class="space-y-3">
        <h3 class="font-serif font-bold text-white text-base">SIAK PUBLISHER</h3>
        <p class="text-slate-400 leading-relaxed">"Mengabadikan Karya, Merawat Peradaban"</p>
        <p class="text-slate-500">Penerbit buku ber-ISBN resmi Perpustakaan Nasional RI.</p>
      </div>

      <div class="space-y-2">
        <h4 class="font-bold text-white">Navigasi</h4>
        <ul class="space-y-1.5">
          <li><a href="#beranda" class="hover:text-[#d4af37]">Beranda</a></li>
          <li><a href="#katalog" class="hover:text-[#d4af37]">Katalog Buku</a></li>
          <li><a href="#layanan-naskah" class="hover:text-[#d4af37]">Kirim Naskah</a></li>
        </ul>
      </div>

      <div class="space-y-2">
        <h4 class="font-bold text-white">Kontak Resmi</h4>
        <p>WhatsApp: <strong class="text-white">085271219108</strong></p>
        <p>Email: <strong class="text-white">siakpublisher@gmail.com</strong></p>
        <p>Alamat: Siak Sri Indrapura, Kabupaten Siak, Riau</p>
      </div>

      <div class="space-y-2">
        <h4 class="font-bold text-white">Newsletter</h4>
        <p class="text-slate-500">Dapatkan katalog buku terbaru dan info promo.</p>
        <input type="email" placeholder="Email Anda" class="w-full px-3 py-2 bg-[#0a1224] border border-[#1e2f52] rounded text-slate-200 text-xs" />
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 pt-6 border-t border-[#142345] text-center text-slate-500">
      &copy; 2026 SIAK PUBLISHER. Seluruh Hak Cipta Dilindungi Undang-Undang.
    </div>
  </footer>

</body>
</html>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'siak-publisher-standalone.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-[#0b1426] border border-[#223963] rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl my-8 text-slate-200 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="p-4 sm:p-6 border-b border-[#1b2a4a] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#142345] text-[#d4af37]">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Kode HTML & Tailwind CSS Mandiri (1 File Saja)
              </h3>
              <p className="text-xs text-slate-400">
                Sesuai instruksi tugas: kerangka tunggal yang siap dibuka langsung di peramban (browser) apa pun tanpa konfigurasi server.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#142345]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="bg-[#070d19] px-4 sm:px-6 py-3 border-b border-[#172545] flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-slate-400 font-mono">
            File: index.html (Pure Single-File HTML5 + Tailwind CDN)
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#d4af37] text-[#091122] font-bold text-xs hover:bg-[#e5c158] transition-colors shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Tersalin ke Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Salin Semua Kode HTML</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#142345] hover:bg-[#1f3463] text-slate-200 border border-[#243c6b] text-xs font-medium transition-colors"
            >
              <Download className="w-4 h-4 text-[#d4af37]" />
              <span>Unduh .html</span>
            </button>
          </div>
        </div>

        {/* Code Viewer */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 font-mono text-xs text-slate-300 bg-[#060a14]">
          <pre className="whitespace-pre-wrap leading-relaxed select-all">
            <code>{standaloneHtmlCode}</code>
          </pre>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#091122] border-t border-[#1b2a4a] text-xs text-slate-400 flex items-center justify-between">
          <span>Struktur rapi lengkap dengan komentar bahasa Indonesia agar mudah disesuaikan.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#142345] text-white hover:bg-[#1a2d59]"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
