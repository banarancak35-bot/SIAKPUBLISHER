import React from 'react';
import { Phone, Mail, Clock, Code2, MessageCircle } from 'lucide-react';
import { PUBLISHER_INFO } from '../data/books';

interface TopBarProps {
  onOpenHtmlModal: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenHtmlModal }) => {
  return (
    <div className="bg-[#050a14] border-b border-[#1e293b] text-slate-300 text-xs py-2 px-4 sm:px-6 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Info Kontak Utama (Email & WhatsApp) */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-slate-300">
          <a
            href={`mailto:${PUBLISHER_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]"
            title="Kirim Email ke Siak Publisher"
          >
            <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="font-medium">{PUBLISHER_INFO.email}</span>
          </a>

          <span className="text-slate-600 hidden sm:inline" aria-hidden="true">|</span>

          <a
            href={`https://wa.me/${PUBLISHER_INFO.waNumber}?text=Halo%20SIAK%20PUBLISHER,%20saya%20ingin%20bertanya%20mengenai%20layanan%20dan%20buku.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]"
            title="Hubungi via WhatsApp"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="font-medium tracking-wide">WA: {PUBLISHER_INFO.phoneFormatted}</span>
          </a>

          <span className="text-slate-600 hidden lg:inline" aria-hidden="true">|</span>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>{PUBLISHER_INFO.officeHours}</span>
          </div>
        </div>

        {/* Action Cepat & Tombol Salin Kode HTML Standalone */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${PUBLISHER_INFO.waNumber}?text=Halo%20SIAK%20PUBLISHER,%20saya%20ingin%20konsultasi%20naskah.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#d4af37] hover:text-[#f3c853] font-medium transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat Redaksi</span>
          </a>

          <span className="text-slate-600" aria-hidden="true">·</span>

          <button
            onClick={onOpenHtmlModal}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white bg-[#0f1d38] hover:bg-[#16274b] border border-[#233863] px-2.5 py-0.5 rounded text-[11px] font-medium transition-all"
            title="Lihat Kode HTML & Tailwind Mandiri (1 File)"
          >
            <Code2 className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Kode HTML 1-File</span>
          </button>
        </div>
      </div>
    </div>
  );
};
