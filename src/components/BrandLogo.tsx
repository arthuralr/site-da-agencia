import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md' }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* High-tech modern emerald logo icon */}
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-slate-950 font-black shadow-lg shadow-emerald-500/20 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4/6 h-4/6 text-slate-950"
        >
          <path d="M4 14l5-5 4 4 7-7" />
          <path d="M14 6h6v6" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`font-display font-extrabold tracking-tight text-white ${textSizes[size]}`}>
          Venda Mais <span className="text-emerald-400">Online</span>
        </span>
      </div>
    </div>
  );
};
