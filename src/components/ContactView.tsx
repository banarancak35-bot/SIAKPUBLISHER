import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { PUBLISHER_INFO, FAQS } from '../data/books';

export const ContactView: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Pemesanan Buku',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWA = () => {
    const text = encodeURIComponent(
      `Halo SIAK PUBLISHER,\nSaya: ${formData.name || 'Pengunjung Website'}\nEmail: ${formData.email}\nPerihal: ${formData.subject}\n\nPesan:\n${formData.message}`
    );
    window.open(`https://wa.me/${PUBLISHER_INFO.waNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="py-12 sm:py-20 bg-[#070d19] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Kontak */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block">
            Layanan Terpadu Redaksi & Pembaca
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Hubungi SIAK PUBLISHER
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Tim kami siap menyambut pertanyaan Anda seputar pemesanan buku, status naskah, kerja sama kemitraan, maupun konsultasi penerbitan.
          </p>
        </div>

        {/* 3 Kartu Saluran Kontak Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* WhatsApp / HP */}
          <div className="bg-[#0b1426] border border-[#1b2a4a] hover:border-[#d4af37]/60 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#14264d] border border-[#233f7d] flex items-center justify-center text-[#d4af37]">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block">WhatsApp & Telepon Resmi</span>
              <a
                href={`https://wa.me/${PUBLISHER_INFO.waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold font-mono text-white hover:text-[#d4af37] transition-colors"
              >
                {PUBLISHER_INFO.phoneFormatted}
              </a>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Layanan respons cepat untuk konsultasi naskah dan pemesanan buku langsung.
            </p>
            <a
              href={`https://wa.me/${PUBLISHER_INFO.waNumber}?text=Halo%20SIAK%20PUBLISHER,%20saya%20ingin%20bertanya.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:text-[#f3c853]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Buka Chat WhatsApp Langsung →</span>
            </a>
          </div>

          {/* Email Resmi */}
          <div className="bg-[#0b1426] border border-[#1b2a4a] hover:border-[#d4af37]/60 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#14264d] border border-[#233f7d] flex items-center justify-center text-[#d4af37]">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Surel / Email Redaksi</span>
              <a
                href={`mailto:${PUBLISHER_INFO.email}`}
                className="text-base font-bold text-white hover:text-[#d4af37] transition-colors break-all"
              >
                {PUBLISHER_INFO.email}
              </a>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Kirim naskah lengkap, proposal kerjasama, dan surat undangan resmi penerbitan.
            </p>
            <a
              href={`mailto:${PUBLISHER_INFO.email}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:text-[#f3c853]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Kirim Email Redaksi →</span>
            </a>
          </div>

          {/* Alamat Kantor */}
          <div className="bg-[#0b1426] border border-[#1b2a4a] hover:border-[#d4af37]/60 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#14264d] border border-[#233f7d] flex items-center justify-center text-[#d4af37]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Kantor & Galeri Pustaka</span>
              <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                {PUBLISHER_INFO.address}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-light">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{PUBLISHER_INFO.officeHours}</span>
            </div>
          </div>
        </div>

        {/* Form Kirim Pesan & FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Kolom Kiri: Form Pesan */}
          <div className="lg:col-span-7 bg-[#0b1426] border border-[#1b2a4a] rounded-2xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
              Kirim Pesan / Permintaan Informasi
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-6 font-light">
              Tuliskan pesan Anda di bawah ini. Redaksi kami akan menanggapi dalam waktu 1x24 jam kerja.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#0f2547] border border-[#25457a] text-center space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-[#d4af37] mx-auto" />
                <h3 className="font-display font-bold text-lg text-white">Terima Kasih, Pesan Telah Siap!</h3>
                <p className="text-xs text-slate-300">
                  Untuk mempercepat respons, Anda dapat meneruskan pesan ini langsung ke nomor WhatsApp resmi kami.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <button
                    onClick={handleSendWA}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#091122] font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Lanjutkan ke WhatsApp ({PUBLISHER_INFO.phoneFormatted})</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 rounded-xl bg-[#142345] text-slate-300 text-xs hover:text-white"
                  >
                    Tulis Pesan Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nama Anda"
                      className="w-full px-3.5 py-2.5 bg-[#070d19] border border-[#1e3258] rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">No. WhatsApp / HP</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-3.5 py-2.5 bg-[#070d19] border border-[#1e3258] rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@contoh.com"
                      className="w-full px-3.5 py-2.5 bg-[#070d19] border border-[#1e3258] rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Perihal Pesan</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#070d19] border border-[#1e3258] rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="Pemesanan Buku">Pemesanan / Pembelian Buku</option>
                      <option value="Konsultasi Penerbitan Naskah">Konsultasi Penerbitan Naskah</option>
                      <option value="Kerjasama Institusi / Kampus">Kerjasama Institusi / Kampus</option>
                      <option value="Pertanyaan Lain">Pertanyaan Lain</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Isi Pesan</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pertanyaan atau kebutuhan Anda secara jelas..."
                    className="w-full px-3.5 py-2.5 bg-[#070d19] border border-[#1e3258] rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#091122] font-bold text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-[#d4af37]/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </form>
            )}
          </div>

          {/* Kolom Kanan: FAQ Singkat */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-[#d4af37] mb-2">
              <HelpCircle className="w-5 h-5" />
              <h2 className="font-display font-bold text-xl text-white">
                Pertanyaan Sering Diajukan (FAQ)
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-[#0b1426] border border-[#1b2a4a] rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-200 hover:text-[#d4af37] transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#d4af37] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs text-slate-300 font-light leading-relaxed border-t border-[#172545]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
