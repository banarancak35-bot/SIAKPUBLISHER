export interface Book {
  id: string;
  title: string;
  author: string;
  authorBio?: string;
  category: 'Fiksi & Sastra' | 'Non-Fiksi' | 'Pendidikan' | 'Sejarah & Kebudayaan' | 'Anak & Remaja';
  price: number;
  formattedPrice: string;
  coverImage: string;
  year: number;
  isbn: string;
  pages: number;
  format: string;
  synopsis: string;
  excerpt?: string;
  isFeatured: boolean;
  isNewRelease?: boolean;
  rating: number;
  reviewsCount: number;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  totalBooks: number;
  notableBook: string;
}

export interface PublishingPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  recommendedFor: string;
  features: string[];
  isPopular?: boolean;
}

export const PUBLISHER_INFO = {
  name: 'SIAK PUBLISHER',
  tagline: 'Mengabadikan Karya, Merawat Peradaban',
  phone: '085271219108',
  phoneFormatted: '0852-7121-9108',
  waNumber: '6285271219108',
  email: 'siakpublisher@gmail.com',
  address: 'Jl. Sultan Syarif Kasim No. 45, Siak Sri Indrapura, Kabupaten Siak, Riau 28671',
  officeHours: 'Senin - Sabtu: 08.30 - 17.00 WIB',
  social: {
    instagram: '@siakpublisher',
    facebook: 'Siak Publisher Official',
    youtube: 'Siak Publisher Media',
  }
};

export const CATEGORIES = [
  { id: 'all', name: 'Semua Genre', count: 8 },
  { id: 'Sejarah & Kebudayaan', name: 'Sejarah & Kebudayaan', count: 2, icon: 'scroll' },
  { id: 'Fiksi & Sastra', name: 'Fiksi & Sastra', count: 2, icon: 'feather' },
  { id: 'Pendidikan', name: 'Pendidikan', count: 2, icon: 'graduation-cap' },
  { id: 'Non-Fiksi', name: 'Non-Fiksi', count: 1, icon: 'compass' },
  { id: 'Anak & Remaja', name: 'Anak & Remaja', count: 1, icon: 'sparkles' },
];

export const BOOKS_DATA: Book[] = [
  {
    id: 'mutiara-sungai-jantan',
    title: 'Mutiara Sungai Jantan: Kilau Sejarah Siak Sri Indrapura',
    author: 'Dr. Mahadir Ahmad, M.Hum',
    authorBio: 'Sejarawan budaya maritim Melayu dan dosen pascasarjana dengan fokus kajian diplomasi Kesultanan Siak di kawasan Selat Malaka.',
    category: 'Sejarah & Kebudayaan',
    price: 125000,
    formattedPrice: 'Rp 125.000',
    coverImage: '/src/assets/images/book_cover_sejarah_siak_1791351921208.jpg',
    year: 2026,
    isbn: '978-623-98210-4-1',
    pages: 348,
    format: 'Softcover Lux (Bookpaper 72gr)',
    synopsis: 'Sebuah telaah historiografi mendalam atas kegemilangan Kesultanan Siak Sri Indrapura. Membedah strategi diplomasi bahari di Selat Malaka, integrasi luhur Sultan Syarif Kasim II membela kemerdekaan Indonesia, serta bagaimana pusaka kebudayaan ini terus menjadi mercusuar peradaban nusantara.',
    excerpt: 'Matahari di atas Sungai Jantan tidak sekadar membiaskan kilau perak air pasang, melainkan menyalakan memori tentang ratusan bahtera yang pernah bersandar di dermaga keemasan Siak...',
    isFeatured: true,
    isNewRelease: true,
    rating: 4.9,
    reviewsCount: 38,
  },
  {
    id: 'nyanyian-hilir',
    title: 'Nyanyian Hilir',
    author: 'Ratih Kumala Dewi',
    authorBio: 'Sastrawati peraih anugerah prosa nusantara yang tekun merajut roman sosial bertema tanah kelahiran dan sungai.',
    category: 'Fiksi & Sastra',
    price: 88000,
    formattedPrice: 'Rp 88.000',
    coverImage: '/src/assets/images/book_cover_sastra_jiwa_1791351949722.jpg',
    year: 2026,
    isbn: '978-623-98210-5-8',
    pages: 260,
    format: 'Softcover Doff Emboss (Bookpaper 70gr)',
    synopsis: 'Kisah cinta, perantauan, dan kerinduan anak tepian sungai yang terombang-ambing antara hingar-bingar metropolis dan aroma pekat tanah gambut kelahirannya. Sebuah novel puitis yang menghangatkan nurani.',
    excerpt: 'Arus ini selalu tahu ke mana ia harus pulang. Hanya hati manusia yang kerap berselisih haluan dengan muara asalnya...',
    isFeatured: true,
    isNewRelease: true,
    rating: 4.8,
    reviewsCount: 42,
  },
  {
    id: 'pendidikan-berakar-nilai',
    title: 'Pendidikan Berakar Nilai: Paradigma Guru Masa Depan',
    author: 'Prof. Dr. Zulkifli Mansur, M.Pd',
    authorBio: 'Pakar pedagogi nasional dan konsultan kurikulum berbasis karakter dan kearifan lokal.',
    category: 'Pendidikan',
    price: 98000,
    formattedPrice: 'Rp 98.000',
    coverImage: '/src/assets/images/book_cover_pendidikan_karakter_1791351959956.jpg',
    year: 2025,
    isbn: '978-623-98210-2-7',
    pages: 312,
    format: 'Softcover Laminasi Glossy (Bookpaper 72gr)',
    synopsis: 'Meneguhkan kembali marwah pendidik di tengah gempuran disrupsi kecerdasan buatan. Buku pegangan esensial bagi guru, dosen, dan pemerhati pendidikan dalam membangun generasi berakal budi, kritis, dan berintegritas.',
    excerpt: 'Pendidikan tanpa sentuhan rasa kasih hanyalah transfer algoritma mekanis yang membekukan kemanusiaan murid-murid kita...',
    isFeatured: true,
    isNewRelease: false,
    rating: 4.9,
    reviewsCount: 29,
  },
  {
    id: 'tunjuk-ajar-melayu',
    title: 'Tunjuk Ajar & Adat Melayu: Petuah Luhur Sepanjang Zaman',
    author: 'H. Al-Azhar Iskandar & Tim Lembaga Adat',
    authorBio: 'Budayawan sepuh Lembaga Adat Melayu yang telah mengabdi lebih dari empat dekade mendokumentasikan tradisi lisan.',
    category: 'Sejarah & Kebudayaan',
    price: 140000,
    formattedPrice: 'Rp 140.000',
    coverImage: '/src/assets/images/book_cover_budaya_melayu_1791352041207.jpg',
    year: 2026,
    isbn: '978-623-98210-7-2',
    pages: 420,
    format: 'Hardcover Gold Foil Eksklusif (Imperial Paper)',
    synopsis: 'Kompilasi komprehensif petuah adat Melayu Siak, filosofi pantun, hukum adat bersendikan syarak, serta pedoman adab hidup bermasyarakat yang tak lekang ditelan zaman.',
    excerpt: 'Yang disebut adat Melayu, berdiri tegak menjaga marwah, tunduk merunduk menaruh santun...',
    isFeatured: true,
    isNewRelease: true,
    rating: 5.0,
    reviewsCount: 51,
  },
  {
    id: 'cahaya-istana-kuning',
    title: 'Cahaya dari Istana Kuning',
    author: 'Tengku Syarifah Nurhaliza',
    authorBio: 'Peneliti independen sejarah perempuan dan penulis esai kebudayaan Melayu.',
    category: 'Non-Fiksi',
    price: 110000,
    formattedPrice: 'Rp 110.000',
    coverImage: '/src/assets/images/book_cover_sejarah_siak_1791351921208.jpg',
    year: 2025,
    isbn: '978-623-98210-3-4',
    pages: 288,
    format: 'Softcover Spot UV (Bookpaper 72gr)',
    synopsis: 'Catatan biografi inspiratif para perempuan bangsawan dan tokoh pergerakan Riau yang berjuang membuka akses pendidikan bagi rakyat jelata pada paruh pertama abad ke-20.',
    excerpt: 'Di balik dinding megah Istana Asserayah Hasyimiah, pena-pena lembut para permaisuri dan guru wanita bergerak diam-diam menyalakan pelita pengetahuan...',
    isFeatured: true,
    isNewRelease: false,
    rating: 4.7,
    reviewsCount: 22,
  },
  {
    id: 'kembara-si-kancil',
    title: 'Kembara Si Kancil di Belantara Rimbang',
    author: 'Nurul Hidayati',
    authorBio: 'Penulis buku cerita anak berilustrasi yang mencintai satwa dan hutan tropis Sumatera.',
    category: 'Anak & Remaja',
    price: 65000,
    formattedPrice: 'Rp 65.000',
    coverImage: '/src/assets/images/book_cover_sastra_jiwa_1791351949722.jpg',
    year: 2026,
    isbn: '978-623-98210-8-9',
    pages: 96,
    format: 'Full Color Art Paper 120gr (Softcover)',
    synopsis: 'Fabel nusantara modern berima penuh hikmah tentang keberanian, toleransi antar-penghuni rimba, dan pentingnya menjaga kelestarian hutan adat bagi masa depan.',
    excerpt: 'Bukan dengan kekuatan taring kita menjaga rimba, melainkan dengan kecerdikan dan rasa saling melindungi...',
    isFeatured: true,
    isNewRelease: false,
    rating: 4.9,
    reviewsCount: 34,
  },
  {
    id: 'bisik-hujan-siak',
    title: 'Bisik Hujan di Batang Siak',
    author: 'Wan Ahmad Fadli',
    authorBio: 'Penyair generasi baru Riau yang karyanya telah dimuat di pelbagai harian nasional.',
    category: 'Fiksi & Sastra',
    price: 72000,
    formattedPrice: 'Rp 72.000',
    coverImage: '/src/assets/images/book_cover_sastra_jiwa_1791351949722.jpg',
    year: 2025,
    isbn: '978-623-98210-1-0',
    pages: 164,
    format: 'Softcover Minimalis (Bookpaper 70gr)',
    synopsis: 'Antologi 80 bait puisi renungan tentang arus waktu, perjumpaan di tepian dermaga feri, dan cinta yang tenang mengalir tak lekang oleh masa.',
    excerpt: 'Hujan menepi di tiang jembatan, menghapus jejak langkah yang pernah kita janjikan untuk kembali...',
    isFeatured: false,
    isNewRelease: false,
    rating: 4.7,
    reviewsCount: 19,
  },
  {
    id: 'metodologi-humaniora',
    title: 'Metodologi Riset Humaniora Kontekstual',
    author: 'Dr. Rosmaini, M.Si',
    authorBio: 'Dosen metodologi penelitian dan konsultan riset sosial budaya pada beberapa perguruan tinggi ternama.',
    category: 'Pendidikan',
    price: 105000,
    formattedPrice: 'Rp 105.000',
    coverImage: '/src/assets/images/book_cover_pendidikan_karakter_1791351959956.jpg',
    year: 2025,
    isbn: '978-623-98210-6-5',
    pages: 340,
    format: 'Softcover Lux (Bookpaper 72gr)',
    synopsis: 'Panduan komprehensif metodologi penelitian kualitatif, etnografi, dan telaah arsip sejarah lokal untuk peneliti pemula maupun mahasiswa pascasarjana.',
    excerpt: 'Data kuantitatif memberi kita angka, tetapi humaniora yang teliti memberikan makna atas kehadiran manusia di panggung waktu...',
    isFeatured: false,
    isNewRelease: false,
    rating: 4.8,
    reviewsCount: 25,
  }
];

export const AUTHORS_DATA: Author[] = [
  {
    id: 'mahadir-ahmad',
    name: 'Dr. Mahadir Ahmad, M.Hum',
    role: 'Sejarawan & Akademisi',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    bio: 'Meneliti dinamika kerajaan Melayu pesisir dan diplomasi maritim Asia Tenggara.',
    totalBooks: 4,
    notableBook: 'Mutiara Sungai Jantan: Kilau Sejarah Siak Sri Indrapura'
  },
  {
    id: 'ratih-kumala',
    name: 'Ratih Kumala Dewi',
    role: 'Novelis & Esais',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    bio: 'Penulis fiksi yang mengangkat tema cinta tanah kelahiran dan psikologi generasi perantau.',
    totalBooks: 3,
    notableBook: 'Nyanyian Hilir'
  },
  {
    id: 'zulkifli-mansur',
    name: 'Prof. Dr. Zulkifli Mansur, M.Pd',
    role: 'Pakar Pendidikan Karakter',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    bio: 'Guru besar yang aktif mengadvokasi kemandirian kurikulum bertumpu budi pekerti lokal.',
    totalBooks: 6,
    notableBook: 'Pendidikan Berakar Nilai'
  },
  {
    id: 'al-azhar-iskandar',
    name: 'H. Al-Azhar Iskandar',
    role: 'Budayawan & Tokoh Adat',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    bio: 'Penjaga warisan naskah kuno dan petuah luhur adat Melayu Riau bersendikan syarak.',
    totalBooks: 5,
    notableBook: 'Tunjuk Ajar & Adat Melayu'
  }
];

export const PUBLISHING_PACKAGES: PublishingPackage[] = [
  {
    id: 'mandiri',
    name: 'Paket Karsa (Mandiri / Indie)',
    tagline: 'Ideal bagi penulis baru yang ingin karya perdananya terbit resmi dan ber-ISBN.',
    price: 'Rp 1.450.000',
    recommendedFor: 'Penulis Pemula, Puisi, Cerpen, Memoar Pribadi',
    features: [
      'Pendaftaran ISBN & Barcode Resmi Perpusnas',
      'Desain Cover Depan & Belakang Custom',
      'Tata Letak (Layout) Standar Penerbitan (hingga 180 hal)',
      'Proofreading Ringan (Typo & Ejaan KBBI)',
      'Cetak Bukti Terbit 5 Eksemplar Penulis',
      'Sertifikat Penulis Ber-Barcode',
      'Hak Royalti 100% untuk Cetak Mandiri',
    ]
  },
  {
    id: 'reguler',
    name: 'Paket Peradaban (Reguler Prioritas)',
    tagline: 'Layanan lengkap dengan distribusi marketplace dan promosi media sosial.',
    price: 'Rp 2.850.000',
    recommendedFor: 'Novelis, Buku Non-Fiksi Populer, Praktisi',
    isPopular: true,
    features: [
      'Semua fasilitas Paket Karsa',
      'Pendaftaran ISBN & Hak Cipta (e-Katalog)',
      'Editing Komprehensif (Gaya Bahasa & Keutuhan Cerita)',
      'Desain Cover Eksklusif 3 Pilihan Konsep',
      'Layout Artistik dengan Ornamen Bab',
      'Cetak Eksklusif 15 Eksemplar untuk Penulis',
      'Distribusi di Tokopedia, Shopee, & Web Resmi Siak Publisher',
      'Flyer Digital & Rilis Promosi Media Sosial',
      'Royalti Penjualan 20% Bersih Setiap Bulan'
    ]
  },
  {
    id: 'akademik',
    name: 'Paket Mahaguru (Akademik & Monograf)',
    tagline: 'Standar ketat sesuai regulasi LLDIKTI untuk angka kredit Dosen & Peneliti.',
    price: 'Rp 3.600.000',
    recommendedFor: 'Dosen, Peneliti, Buku Ajar, Monograf, Referensi Kampus',
    features: [
      'Pendaftaran ISBN & Surat Keterangan Penerbitan untuk BKD/KUM',
      'Reviewers & Editorial Board Bersertifikasi',
      'Pengecekan Plagiarisme (Turnitin) Resmi < 20%',
      'Layout Standar Format UNESCO (15.5 x 23 cm)',
      'Cetak 10 Eksemplar Wajib Simpan (Perpusnas, Perpusda & Penulis)',
      'Distribusi Akses Open Repository / e-Book Ber-DOI (Opsional)',
      'Bimbingan Penyesuaian Naskah Disertasi/Tesis ke Format Buku Populer'
    ]
  }
];

export const FAQS = [
  {
    question: 'Berapa lama proses penerbitan buku di SIAK PUBLISHER?',
    answer: 'Rata-rata proses penerbitan memakan waktu 14 hingga 25 hari kerja setelah naskah final disepakati, bergantung pada kecepatan verifikasi ISBN oleh Perpusnas.'
  },
  {
    question: 'Apakah naskah saya dijamin mendapatkan ISBN resmi?',
    answer: 'Ya. SIAK PUBLISHER adalah anggota resmi IKAPI dan terdaftar di Perpustakaan Nasional RI. Semua buku yang diterbitkan akan diproseskan ISBN dan Barcode legal.'
  },
  {
    question: 'Bagaimana cara pemesanan buku untuk pembaca umum?',
    answer: 'Pembaca dapat memesan langsung melalui tombol WhatsApp (085271219108) di website ini, marketplace resmi kami, atau berkunjung ke gerai kantor kami di Siak Sri Indrapura.'
  },
  {
    question: 'Apakah melayani cetak sesuai pesanan (Print on Demand)?',
    answer: 'Tentu saja. Penulis atau instansi dapat mencetak ulang bukunya mulai dari oplah kecil (10 eks) hingga ribuan eksemplar dengan harga cetak khusus penerbit.'
  }
];
