
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <div className="relative flex items-center justify-center">
        {/* Decorative Floral Background (Dahlias) */}
        <div className="absolute -z-10 flex gap-4 opacity-30">
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-pink-400 animate-pulse">
            <path fill="currentColor" d="M50 0 A10 10 0 0 1 60 10 L60 40 A10 10 0 0 1 50 50 A10 10 0 0 1 40 40 L40 10 A10 10 0 0 1 50 0 Z" transform="rotate(0 50 50)"/>
            <path fill="currentColor" d="M50 0 A10 10 0 0 1 60 10 L60 40 A10 10 0 0 1 50 50 A10 10 0 0 1 40 40 L40 10 A10 10 0 0 1 50 0 Z" transform="rotate(45 50 50)"/>
            <path fill="currentColor" d="M50 0 A10 10 0 0 1 60 10 L60 40 A10 10 0 0 1 50 50 A10 10 0 0 1 40 40 L40 10 A10 10 0 0 1 50 0 Z" transform="rotate(90 50 50)"/>
            <path fill="currentColor" d="M50 0 A10 10 0 0 1 60 10 L60 40 A10 10 0 0 1 50 50 A10 10 0 0 1 40 40 L40 10 A10 10 0 0 1 50 0 Z" transform="rotate(135 50 50)"/>
            <path fill="currentColor" d="M50 0 A10 10 0 0 1 60 10 L60 40 A10 10 0 0 1 50 50 A10 10 0 0 1 40 40 L40 10 A10 10 0 0 1 50 0 Z" transform="rotate(180 50 50)"/>
            <path fill="currentColor" d="M50 0 A10 10 0 0 1 60 10 L60 40 A10 10 0 0 1 50 50 A10 10 0 0 1 40 40 L40 10 A10 10 0 0 1 50 0 Z" transform="rotate(225 50 50)"/>
            <path fill="currentColor" d="M50 0 A10 10 0 0 1 60 10 L60 40 A10 10 0 0 1 50 50 A10 10 0 0 1 40 40 L40 10 A10 10 0 0 1 50 0 Z" transform="rotate(270 50 50)"/>
            <path fill="currentColor" d="M50 0 A10 10 0 0 1 60 10 L60 40 A10 10 0 0 1 50 50 A10 10 0 0 1 40 40 L40 10 A10 10 0 0 1 50 0 Z" transform="rotate(315 50 50)"/>
          </svg>
          <svg viewBox="0 0 100 100" className="w-12 h-12 text-yellow-300">
            <circle cx="50" cy="50" r="20" fill="currentColor"/>
            <path fill="currentColor" d="M50 10 Q60 0 70 10 T90 30 T70 50 T50 70 T30 50 T10 30 T30 10 Z" opacity="0.6"/>
          </svg>
        </div>

        {/* Brand Text */}
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-serif text-[#d81b60] font-black tracking-tight drop-shadow-sm">
            Hana Flowers
          </h1>
          <div className="flex items-center justify-center gap-2 mt-1">
             <div className="h-px w-8 bg-pink-200"></div>
             <span className="text-[#ad1457] text-xs font-bold tracking-widest uppercase">Boutique de Chaussures</span>
             <div className="h-px w-8 bg-pink-200"></div>
          </div>
        </div>
      </div>
      
      {/* Small Dahlia Icons below */}
      <div className="flex gap-3 mt-2 text-fuchsia-400">
        <span className="animate-bounce" style={{animationDelay: '0.1s'}}>❁</span>
        <span className="animate-bounce" style={{animationDelay: '0.3s'}}>❀</span>
        <span className="animate-bounce" style={{animationDelay: '0.5s'}}>❁</span>
      </div>
    </div>
  );
};

export default Logo;
