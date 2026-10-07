import React from 'react';

interface SiakLogoProps {
  variant?: 'full' | 'mark' | 'horizontal';
  theme?: 'dark' | 'light';
  className?: string;
  size?: number;
}

export const SiakLogo: React.FC<SiakLogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  className = '',
  size = 48,
}) => {
  // Colors based on uploaded Logo.jpg
  // In light theme: Navy (#0a2540) + Gold (#c6922b)
  // In dark theme: Gold (#e5be49 / #c6922b) + White/Navy for maximum elegance on dark navy canvas
  const goldPrimary = theme === 'dark' ? '#d4af37' : '#c6922b';
  const goldSecondary = theme === 'dark' ? '#f5d468' : '#dfa938';
  const navyColor = theme === 'dark' ? '#e2e8f0' : '#0a2540';
  const navyAccent = theme === 'dark' ? '#38bdf8' : '#0a2540';
  const penColor = theme === 'dark' ? '#f8fafc' : '#0a2540';

  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 200 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: (size * 150) / 200 }}
        aria-label="Logo SIAK PUBLISHER"
      >
        {/* === MAHKOTA EMAS (CROWN) === */}
        <g id="crown">
          {/* Base bar of crown */}
          <rect x="75" y="48" width="50" height="4" rx="1" fill={goldPrimary} />
          
          {/* Main Crown Outline & Spikes */}
          <path
            d="M72 46L68 28L86 38L100 20L114 38L132 28L128 46H72Z"
            fill={goldPrimary}
          />
          
          {/* Crown internal geometric diamond cutouts */}
          <path
            d="M84 44L100 28L116 44H84Z"
            fill="#091122"
          />
          <path
            d="M100 32L108 42H92L100 32Z"
            fill={goldSecondary}
          />
          <circle cx="100" cy="20" r="2.5" fill={goldSecondary} />
          <circle cx="68" cy="28" r="2" fill={goldSecondary} />
          <circle cx="132" cy="28" r="2" fill={goldSecondary} />
        </g>

        {/* === MATA PENA (FOUNTAIN PEN NIB) === */}
        <g id="pen-nib">
          {/* Nib body */}
          <path
            d="M94 54H106L104 68L100 84L96 68L94 54Z"
            fill={penColor}
          />
          {/* Nib breather hole and slit */}
          <circle cx="100" cy="65" r="1.5" fill="#091122" />
          <line x1="100" y1="66.5" x2="100" y2="84" stroke="#091122" strokeWidth="1" />
        </g>

        {/* === BUKU TERBUKA (OPEN BOOK) === */}
        <g id="open-book">
          {/* Layer 1: Outer Gold Leaf Pages */}
          {/* Left page upper */}
          <path
            d="M97 82C75 75 48 70 38 75L35 98C46 93 74 88 97 94V82Z"
            fill={goldPrimary}
          />
          {/* Right page upper */}
          <path
            d="M103 82C125 75 152 70 162 75L165 98C154 93 126 88 103 94V82Z"
            fill={goldPrimary}
          />

          {/* Layer 2: Middle Golden Flourish Pages */}
          <path
            d="M97 86C78 80 54 78 45 82L42 104C53 100 78 96 97 101V86Z"
            fill={goldSecondary}
            opacity="0.9"
          />
          <path
            d="M103 86C122 80 146 78 155 82L158 104C147 100 122 96 103 101V86Z"
            fill={goldSecondary}
            opacity="0.9"
          />

          {/* Layer 3: Solid Bottom Spine Curve (Navy / Base) */}
          <path
            d="M32 102C55 98 84 96 100 108C116 96 145 98 168 102L165 107C142 102 115 101 100 114C85 101 58 102 35 107L32 102Z"
            fill={theme === 'dark' ? '#38bdf8' : '#0a2540'}
          />
        </g>
      </svg>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* Emblem Top */}
        <svg
          viewBox="0 0 200 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-44 sm:w-52 h-auto"
        >
          {/* Crown */}
          <g id="crown-full">
            <rect x="74" y="38" width="52" height="4" rx="1" fill={goldPrimary} />
            <path
              d="M70 36L65 18L85 28L100 8L115 28L135 18L130 36H70Z"
              fill={goldPrimary}
            />
            <path
              d="M82 34L100 16L118 34H82Z"
              fill="#070d19"
            />
            <path
              d="M100 20L108 32H92L100 20Z"
              fill={goldSecondary}
            />
            <circle cx="100" cy="8" r="2.5" fill={goldSecondary} />
            <circle cx="65" cy="18" r="2" fill={goldSecondary} />
            <circle cx="135" cy="18" r="2" fill={goldSecondary} />
          </g>

          {/* Pen Nib */}
          <g id="pen-nib-full">
            <path
              d="M93 44H107L105 60L100 76L95 60L93 44Z"
              fill={penColor}
            />
            <circle cx="100" cy="58" r="1.5" fill="#070d19" />
            <line x1="100" y1="59.5" x2="100" y2="76" stroke="#070d19" strokeWidth="1" />
          </g>

          {/* Book */}
          <g id="open-book-full">
            <path
              d="M96 74C72 66 45 62 34 67L31 90C43 85 73 80 96 86V74Z"
              fill={goldPrimary}
            />
            <path
              d="M104 74C128 66 155 62 166 67L169 90C157 85 127 80 104 86V74Z"
              fill={goldPrimary}
            />
            <path
              d="M96 79C75 73 50 71 41 75L38 97C50 93 76 89 96 94V79Z"
              fill={goldSecondary}
            />
            <path
              d="M104 79C125 73 150 71 159 75L162 97C150 93 124 89 104 94V79Z"
              fill={goldSecondary}
            />
            <path
              d="M28 95C52 91 82 89 100 101C118 89 148 91 172 95L169 100C145 95 117 94 100 107C83 94 55 95 31 100L28 95Z"
              fill={theme === 'dark' ? '#38bdf8' : '#0a2540'}
            />
          </g>
        </svg>

        {/* Wordmark Typography */}
        <div className="mt-2 flex flex-col items-center">
          <span
            className="font-display font-extrabold text-2xl sm:text-3xl tracking-[0.12em]"
            style={{ color: theme === 'dark' ? '#ffffff' : '#0a2540' }}
          >
            SIAK
          </span>
          <span
            className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.32em] uppercase mt-0.5"
            style={{ color: theme === 'dark' ? '#cbd5e1' : '#0a2540' }}
          >
            PUBLISHER
          </span>
        </div>
      </div>
    );
  }

  // Variant horizontal (used in Header & Navigation)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Mark */}
      <svg
        viewBox="0 0 200 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 sm:w-12 h-auto shrink-0"
        aria-hidden="true"
      >
        {/* Crown */}
        <rect x="74" y="38" width="52" height="4" rx="1" fill={goldPrimary} />
        <path
          d="M70 36L65 18L85 28L100 8L115 28L135 18L130 36H70Z"
          fill={goldPrimary}
        />
        <path d="M82 34L100 16L118 34H82Z" fill="#070d19" />
        <path d="M100 20L108 32H92L100 20Z" fill={goldSecondary} />
        <circle cx="100" cy="8" r="2.5" fill={goldSecondary} />
        <circle cx="65" cy="18" r="2" fill={goldSecondary} />
        <circle cx="135" cy="18" r="2" fill={goldSecondary} />

        {/* Pen Nib */}
        <path d="M93 44H107L105 60L100 76L95 60L93 44Z" fill={penColor} />
        <circle cx="100" cy="58" r="1.5" fill="#070d19" />
        <line x1="100" y1="59.5" x2="100" y2="76" stroke="#070d19" strokeWidth="1" />

        {/* Book */}
        <path d="M96 74C72 66 45 62 34 67L31 90C43 85 73 80 96 86V74Z" fill={goldPrimary} />
        <path d="M104 74C128 66 155 62 166 67L169 90C157 85 127 80 104 86V74Z" fill={goldPrimary} />
        <path d="M96 79C75 73 50 71 41 75L38 97C50 93 76 89 96 94V79Z" fill={goldSecondary} />
        <path d="M104 79C125 73 150 71 159 75L162 97C150 93 124 89 104 94V79Z" fill={goldSecondary} />
        <path
          d="M28 95C52 91 82 89 100 101C118 89 148 91 172 95L169 100C145 95 117 94 100 107C83 94 55 95 31 100L28 95Z"
          fill={theme === 'dark' ? '#38bdf8' : '#0a2540'}
        />
      </svg>

      {/* Brand Wordmark Text */}
      <div className="flex flex-col text-left">
        <span className="font-display font-extrabold text-lg sm:text-xl text-white tracking-[0.1em] leading-tight">
          SIAK
        </span>
        <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] text-[#cbd5e1] uppercase">
          PUBLISHER
        </span>
      </div>
    </div>
  );
};
