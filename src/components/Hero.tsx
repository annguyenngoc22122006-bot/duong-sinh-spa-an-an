import React from 'react';
import { ArrowDown, Calendar, ShieldCheck, HeartPulse, Clock, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onBookNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onBookNow }) => {
  return (
    <section id="trang-chu" className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 overflow-hidden">
      {/* Background with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
          alt="Không gian dưỡng sinh thảo dược An An"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Multilayer gradient scrim for rich organic herbal aesthetic and WCAG text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#172E1E]/95 via-[#1D3B26]/85 to-[#243328]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14261A] via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 lg:pt-20">
        <div className="max-w-3xl">
          {/* Subtle nature kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs sm:text-sm font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Tinh hoa Y học cổ truyền phương Đông</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.18] sm:leading-[1.15] text-balance mb-6 drop-shadow-sm">
            Dưỡng Sinh An An <span className="block text-emerald-300/90 font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 font-normal">Phục Hồi Thân Tâm, Cân Bằng Cuộc Sống</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-stone-200/95 leading-relaxed font-light mb-8 sm:mb-10 max-w-2xl text-pretty">
            Giải pháp trị liệu chuyên sâu và thư giãn toàn diện dành riêng cho người bận rộn, kết hợp tinh hoa y học cổ truyền.
          </p>

          {/* Call-to-actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12 sm:mb-16">
            <button
              onClick={onBookNow}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-stone-900 bg-[#E2B777] hover:bg-[#D5A764] rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.99] cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-stone-900" />
              <span>Đặt lịch ngay</span>
            </button>

            <button
              onClick={onExploreServices}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 rounded-xl transition-all duration-200 active:scale-[0.99] cursor-pointer"
            >
              <span>Khám phá dịch vụ</span>
              <ArrowDown className="w-4 h-4 text-emerald-300 animate-bounce" />
            </button>
          </div>
        </div>

        {/* 4 Trust Highlights Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/15">
          <div className="p-3.5 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">100% Thảo Dược Tự Nhiên</h4>
              <p className="text-xs text-stone-300 mt-0.5">Nấu tươi hàng ngày, không chất bảo quản</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Liệu Trình Chuyên Sâu</h4>
              <p className="text-xs text-stone-300 mt-0.5">Bấm huyệt trị liệu chuẩn Đông y cổ truyền</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Linh Hoạt Thời Gian</h4>
              <p className="text-xs text-stone-300 mt-0.5">Mở cửa 09:00 - 21:00 cả tuần</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Không Gian Tĩnh Lặng</h4>
              <p className="text-xs text-stone-300 mt-0.5">Hương tinh dầu thơm dịu và thiền nhạc</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
