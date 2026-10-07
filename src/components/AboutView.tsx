import React from 'react';
import { Compass, Target, BookOpen, CheckCircle2 } from 'lucide-react';
import { PUBLISHER_INFO } from '../data/books';
import { SiakLogo } from './SiakLogo';

export const AboutView: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-[#070d19] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Tentang Kami & Logo */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center mb-2">
            <div className="p-4 rounded-3xl bg-[#0b1426] border border-[#1e2f52] shadow-xl inline-block">
              <SiakLogo variant="full" theme="dark" />
            </div>
          </div>
          <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest block">
            Mengenal Lebih Dekat
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Tentang SIAK PUBLISHER
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            "{PUBLISHER_INFO.tagline}"
          </p>
        </div>

        {/* Kisah & Sejarah Penerbit */}
        <div className="bg-[#0b1426] border border-[#1b2a4a] rounded-2xl p-6 sm:p-12 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Akar Sejarah & Gagasan Kelahiran</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
                Terinspirasi dari Mercusuar Literasi Kesultanan Siak Sri Indrapura
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Negeri Siak Sri Indrapura di bumi Lancang Kuning memiliki sejarah panjang sebagai salah satu pusat kebudayaan, diplomasi, dan kecerdasan intelektual Melayu nusantara. Sejak era kesultanan, aksara dan warkat berharga telah menjadi alat penjaga kedaulatan serta penyambung peradaban antarbangsa.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed font-light">
                <strong className="text-white font-medium">SIAK PUBLISHER</strong> lahir dari tekad luhur para pegiat literasi, akademisi, dan budayawan lokal untuk melanjutkan marwah tersebut ke panggung modern. Kami hadir sebagai jembatan yang merawat pemikiran-pemikiran penting, mendokumentasikan kearifan sejarah, dan memfasilitasi riset ilmu pengetahuan masa depan agar tidak lekang tergerus zaman.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-1.5 bg-[#070d19] px-3 py-1.5 rounded-lg border border-[#1e2f54]">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Terdaftar Resmi Perpustakaan Nasional RI</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#070d19] px-3 py-1.5 rounded-lg border border-[#1e2f54]">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Standar Standarisasi Penerbitan IKAPI</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#0e1c38] to-[#071022] border border-[#233a69] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="space-y-2">
                  <span className="text-xs text-[#d4af37] font-bold uppercase tracking-wider">Komitmen Penerbit</span>
                  <h3 className="text-xl font-display font-bold text-white">4 Pilar Pelayanan Redaksi</h3>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                      <strong className="text-white block font-medium">Kurasi Kualitas Teks</strong>
                      Penyuntingan teliti sesuai kaidah PUEBI tanpa menghilangkan karakter suara unik penulis.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                      <strong className="text-white block font-medium">Estetika Sampul & Tata Letak</strong>
                      Desain visual elegan yang menonjolkan marwah buku di rak toko maupun etalase daring.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                      <strong className="text-white block font-medium">Kepastian Legalitas & Hak Moral</strong>
                      Perlindungan hak cipta seutuhnya bagi penulis serta transparansi laporan royalti.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center font-bold shrink-0">4</div>
                    <div>
                      <strong className="text-white block font-medium">Jejaring Distribusi Nasional</strong>
                      Kemitraan marketplace, perpustakaan daerah, dan pameran buku tahunan.
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Visi & Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Visi */}
          <div className="bg-[#0b1426] border border-[#1b2a4a] rounded-2xl p-8 space-y-4 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-[#14264d] border border-[#233f7d] flex items-center justify-center text-[#d4af37]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white">Visi Kami</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Menjadi lembaga penerbitan terdepan yang terpercaya di tingkat nasional dalam melahirkan buku-buku bermutu tinggi, berakar pada nilai-nilai kearifan kebudayaan nusantara, serta mendorong kemajuan peradaban ilmiah dunia.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-[#0b1426] border border-[#1b2a4a] rounded-2xl p-8 space-y-4 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-[#14264d] border border-[#233f7d] flex items-center justify-center text-[#d4af37]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white">Misi Kami</h3>
            <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#d4af37] font-bold">1.</span>
                <span>Menyediakan ekosistem penerbitan yang ramah, profesional, dan transparan bagi semua kalangan penulis.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#d4af37] font-bold">2.</span>
                <span>Menggali, mendokumentasikan, dan menerbitkan kekayaan riset sejarah, adat, dan kebudayaan Melayu.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#d4af37] font-bold">3.</span>
                <span>Mendukung kemajuan dunia pendidikan tinggi melalui penerbitan monograf dan buku ajar berstandar akreditasi.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#d4af37] font-bold">4.</span>
                <span>Menghidupkan budaya membaca dan minat literasi generasi muda di seluruh pelosok tanah air.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};
