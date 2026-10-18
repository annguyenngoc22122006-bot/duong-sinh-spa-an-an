import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { FACILITY_INFO } from '../data/mockData';

interface FloatingHotlineProps {
  onQuickBook: () => void;
}

export const FloatingHotline: React.FC<FloatingHotlineProps> = ({ onQuickBook }) => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
      {/* Quick Book pill on tablet & desktop */}
      <button
        onClick={onQuickBook}
        aria-label="Đặt lịch nhanh"
        className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1E3B27] text-white text-xs font-semibold shadow-lg hover:bg-[#2D5A3A] transition-all duration-200 hover:scale-105 cursor-pointer border border-white/20"
      >
        <Calendar className="w-3.5 h-3.5 text-[#E2B777]" />
        <span>Đặt lịch giữ chỗ</span>
      </button>

      {/* Pulsing Hotline Call Button - Compact circle on mobile, comfortable pill on desktop */}
      <a
        href={`tel:${FACILITY_INFO.hotlineRaw}`}
        aria-label={`Gọi ngay Hotline ${FACILITY_INFO.hotline}`}
        className="group relative inline-flex items-center gap-2.5 p-2.5 sm:pl-3 sm:pr-4 sm:py-2.5 rounded-full bg-[#8C3A27] text-white font-semibold text-xs shadow-xl hover:bg-[#722E1F] transition-all duration-200 animate-gentle-pulse"
      >
        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <Phone className="w-4 h-4 text-white fill-white" />
        </span>
        <div className="text-left hidden sm:block">
          <span className="text-[10px] uppercase font-bold text-amber-200 block leading-tight">
            Gọi Ngay
          </span>
          <span className="text-xs font-mono tracking-wider tabular-nums font-bold">
            {FACILITY_INFO.hotline}
          </span>
        </div>
      </a>
    </div>
  );
};
