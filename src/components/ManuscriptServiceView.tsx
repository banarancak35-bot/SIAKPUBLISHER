import React, { useState } from 'react';
import { 
  FileText, CheckCircle2, Send, HelpCircle, AlertCircle, 
  Sparkles, Award, ShieldCheck, Mail, Phone, UploadCloud, Copy, Check
} from 'lucide-react';
import { PUBLISHING_PACKAGES, PUBLISHER_INFO } from '../data/books';

export const ManuscriptServiceView: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('reguler');
  const [authorName, setAuthorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [genre, setGenre] = useState('Fiksi & Sastra');
  const [synopsis, setSynopsis] = useState('');
  const [manuscriptLink, setManuscriptLink] = useState('');
  const [wordCount, setWordCount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedWA, setCopiedWA] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 800);
  };

  const generateWhatsAppSubmissionText = () => {
    return encodeURIComponent(
      `*PENGAJUAN NASKAH BARU - SIAK PUBLISHER*\n\n` +
      `Nama Penulis: ${authorName || '[Nama Penulis]'}\n` +
      `No. WhatsApp: ${phone || '[Nomor WA]'}\n` +
      `Email: ${email || '[Email Penulis]'}\n\n` +
      `Judul Naskah: *${bookTitle || '[Judul Naskah]'}*\n` +
      `Genre/Kategori: ${genre}\n` +
      `Estimasi Jumlah Kata/Hal: ${wordCount || 'Sekitar 150 halaman'}\n` +
      `Pilihan Paket: Paket ${selectedPackage.toUpperCase()}\n` +
      `Link Naskah (Google Drive / Dokumen): ${manuscriptLink || 'Akan dikirim via chat / email'}\n\n` +
      `*Sinopsis Singkat:*\n${synopsis || 'Terlampir dalam draft.'}\n\n` +
      `Mohon konfirmasi penerimaan naskah dan tahap kurasi redaksi. Terima kasih SIAK PUBLISHER!`
    );
  };

  const handleSendViaWhatsApp = () => {
    window.open(`https://wa.me/${PUBLISHER_INFO.waNumber}?text=${generateWhatsAppSubmissionText()}`, '_blank');
  };

  const handleSendViaEmail = () => {
    const subject = encodeURIComponent(`Pengajuan Naskah: ${bookTitle || 'Naskah Baru'} - ${authorName || 'Penulis'}`);
    const body = encodeURIComponent(
      `Kepada Tim Redaksi SIAK PUBLISHER,\n\n` +
      `Saya bermaksud mengajukan naskah buku dengan rincian sebagai berikut:\n\n` +
      `Nama Penulis: ${authorName}\n` +
      `Kontak HP/WA: ${phone}\n` +
      `Email: ${email}\n` +
      `Judul Buku: ${bookTitle}\n` +
      `Genre: ${genre}\n` +
      `Jumlah Kata: ${wordCount}\n` +
      `Pilihan Paket: ${selectedPackage}\n` +
      `Tautan Naskah / Google Drive: ${manuscriptLink}\n\n` +
      `Sinopsis:\n${synopsis}\n\n` +
      `Demikian pengajuan naskah ini saya sampaikan. Besar harapan saya agar karya ini dapat diterbitkan di bawah naungan SIAK PUBLISHER.\n\n` +
      `Salam hangat,\n${authorName}`
    );
    window.location.href = `mailto:${PUBLISHER_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="py-12 sm:py-20 bg-[#070d19] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Layanan Naskah */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block">
            Pintu Gerbang Karya Anda
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Layanan & Pengiriman Naskah
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Wujudkan impian memiliki buku ber-ISBN resmi Perpustakaan Nasional RI. Kami mendampingi setiap tahap mulai dari penyelarasan bahasa, perancangan tata letak, desain cover eksklusif, hingga distribusi.
          </p>
        </div>

        {/* 3 Paket Penerbitan Buku */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              Pilihan Paket Penerbitan
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Pilih paket yang paling sesuai dengan target pembaca dan kebutuhan akademis/komersial Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PUBLISHING_PACKAGES.map((pkg) => {
              const isSelected = selectedPackage === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`relative cursor-pointer rounded-2xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0f1d38] border-2 border-[#d4af37] shadow-xl shadow-[#d4af37]/10 -translate-y-1'
                      : 'bg-[#0a1426] border border-[#1b2a4a] hover:border-[#274070]'
                  }`}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#091122] text-[10px] uppercase font-extrabold tracking-wider px-3 py-1 rounded-full shadow-md">
                      Paling Banyak Dipilih
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-display font-bold text-white mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-400 mb-4 min-h-[36px]">
                      {pkg.tagline}
                    </p>

                    <div className="mb-6 pt-4 border-t border-[#1a2b4c]">
                      <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#fef08a] block">
                        {pkg.price}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Untuk: <strong className="text-slate-200">{pkg.recommendedFor}</strong>
                      </span>
                    </div>

                    <div className="space-y-3 mb-8">
                      <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                        Fasilitas yang Didapatkan:
                      </span>
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-[#d4af37] text-[#091122]'
                        : 'bg-[#152342] text-slate-200 hover:bg-[#1f3461]'
                    }`}
                  >
                    {isSelected ? '✓ Paket Terpilih' : 'Pilih Paket Ini'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Syarat & Ketentuan Naskah */}
        <div className="bg-[#0b1426] border border-[#1b2a4a] rounded-2xl p-6 sm:p-10 mb-16 shadow-lg">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-[#d4af37]">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="font-display font-bold text-lg text-white">
                Syarat & Ketentuan Pengiriman Naskah
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300 leading-relaxed">
              <div className="bg-[#070d19] p-4 rounded-xl border border-[#192a4a] space-y-1.5">
                <span className="font-semibold text-white block">1. Orisinalitas Naskah</span>
                <p>Naskah merupakan karya asli penulis, bukan plagiat, dan bebas dari sengketa hak cipta pihak ketiga.</p>
              </div>

              <div className="bg-[#070d19] p-4 rounded-xl border border-[#192a4a] space-y-1.5">
                <span className="font-semibold text-white block">2. Format Dokumen</span>
                <p>Naskah diketik dalam format Microsoft Word (.docx) atau PDF, huruf Times New Roman 12pt, spasi 1.5, ukuran kertas A4.</p>
              </div>

              <div className="bg-[#070d19] p-4 rounded-xl border border-[#192a4a] space-y-1.5">
                <span className="font-semibold text-white block">3. Kelengkapan Berkas</span>
                <p>Sertakan sinopsis lengkap naskah (1–2 halaman), daftar isi, dan biodata singkat penulis beserta kontak aktif.</p>
              </div>

              <div className="bg-[#070d19] p-4 rounded-xl border border-[#192a4a] space-y-1.5">
                <span className="font-semibold text-white block">4. Tidak Melanggar Norma</span>
                <p>Naskah tidak memuat konten ujaran kebencian, fitnah, pornografi, atau materi yang melanggar hukum negara.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulir Pengiriman Naskah */}
        <div className="bg-gradient-to-b from-[#0b162c] to-[#081020] border border-[#233a69] rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Sisi Kiri: Petunjuk Kontak Cepat */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs text-[#d4af37] font-semibold uppercase tracking-wider block">
                  Kirim Naskah Langsung
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Formulir Naskah Penulis
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Isi formulir di samping. Sistem akan otomatis memvalidasi data Anda dan menyiapkan draf pengiriman ke Redaksi via WhatsApp atau Email resmi.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#1b2a4a]">
                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Kirim via Email:</span>
                    <a href={`mailto:${PUBLISHER_INFO.email}`} className="text-white font-medium hover:text-[#d4af37]">
                      {PUBLISHER_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Konsultasi WhatsApp Redaktur:</span>
                    <a href={`https://wa.me/${PUBLISHER_INFO.waNumber}`} className="text-white font-medium hover:text-[#d4af37]">
                      {PUBLISHER_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>

              {/* Box Info Jaminan ISBN */}
              <div className="p-4 rounded-xl bg-[#070d19]/80 border border-[#1e3258] space-y-2 text-xs">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#d4af37]" />
                  <span>Jaminan Legalitas ISBN</span>
                </span>
                <p className="text-slate-400 leading-relaxed">
                  Semua naskah yang lolos kurasi akan diajukan ISBN resminya ke Perpustakaan Nasional RI atas nama SIAK PUBLISHER.
                </p>
              </div>
            </div>

            {/* Sisi Kanan: Form Input */}
            <div className="lg:col-span-7">
              {submitSuccess ? (
                <div className="p-8 rounded-xl bg-[#0f2444] border border-[#2b4c80] text-center space-y-5 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-display font-bold text-white">Naskah Siap Dikirimkan!</h3>
                    <p className="text-xs text-slate-300">
                      Rincian naskah <strong>"{bookTitle}"</strong> telah dirangkum. Silakan lanjutkan pengiriman langsung ke tim redaksi kami.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#091122] font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim ke WhatsApp Redaksi ({PUBLISHER_INFO.phoneFormatted})</span>
                    </button>

                    <button
                      onClick={handleSendViaEmail}
                      className="px-5 py-3 rounded-xl bg-[#14264a] hover:bg-[#1b3363] border border-[#254378] text-slate-200 font-semibold text-xs flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-[#d4af37]" />
                      <span>Kirim via Email</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-xs text-slate-400 hover:text-white pt-4 block mx-auto underline"
                  >
                    Edit Data Formulir Kembali
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Nama Lengkap Penulis *
                      </label>
                      <input
                        type="text"
                        required
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        placeholder="Contoh: Rahmat Hidayat, M.Pd"
                        className="w-full px-3.5 py-2.5 bg-[#070d19] border border-[#1e3258] rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Nomor WhatsApp Aktif *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Contoh: 08123456789"
                        className="w-full px-3.5 py-2.5 bg-[#070d19] border border-[#1e3258] rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Alamat Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="emailanda@gmail.com"
                        className="w-full px-3.5 py-2.5 bg-[#070d19] border border-[#1e3258] rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Genre / Bidang Ilmu *
                      </label>
                      <select
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#070d19] border border-[#1e3258] rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#d4af37]"
                      >
                        <option value="Fiksi & Sastra">Fiksi & Sastra (Novel, Cerpen, Puisi)</option>
                        <option value="Sejarah & Kebudayaan">Sejarah & Kebudayaan Melayu</option>
                        <option value="Pendidikan">Pendidikan & Buku Teks Kampus</option>
                        <option value="Non-Fiksi">Non-Fiksi (Biografi, Motivasi)</option>
                        <option value="Anak & Remaja">Buku Cerita Anak & Remaja</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Judul / Usulan Judul Naskah *
                    </label>
                    <input
                      type="text"
                      required
                      value={bookTitle}
                      onChange={(e) => setBookTitle(e.target.value)}
                      placeholder="Masukkan usulan judul naskah buku Anda"
                      className="w-full px-3.5 py-2.5 bg-[#070d19] border border-[#1e3258] rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Estimasi Halaman / Jumlah Kata
                      </label>
                      <input
                        type="text"
                        value={wordCount}
                        onChange={(e) => setWordCount(e.target.value)}
                        placeholder="Contoh: 180 halaman / 45.000 kata"
                        className="w-full px-3.5 py-2.5 bg-[#070d19] border border-[#1e3258] rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        Tautan Naskah (Google Drive / Dropbox)
                      </label>
                      <input
                        type="url"
                        value={manuscriptLink}
                        onChange={(e) => setManuscriptLink(e.target.value)}
                        placeholder="https://drive.google.com/..."
                        className="w-full px-3.5 py-2.5 bg-[#070d19] border border-[#1e3258] rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Sinopsis Singkat & Keunikan Naskah *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={synopsis}
                      onChange={(e) => setSynopsis(e.target.value)}
                      placeholder="Ceritakan gambaran besar naskah, pesan utama, dan siapa sasaran pembaca utama..."
                      className="w-full px-3.5 py-2.5 bg-[#070d19] border border-[#1e3258] rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b8860b] text-[#091122] font-bold text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-[#d4af37]/20 transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Memproses formulir...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Kirim & Ajukan Naskah ke Redaksi</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
