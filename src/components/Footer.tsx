import React from 'react';
import { Sparkles, MapPin, Clock, Phone, Mail, Heart } from 'lucide-react';
import { FACILITY_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#172E1E] text-stone-300 pt-16 pb-12 border-t border-[#23472E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand info - 5 cols */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-2xl font-display font-bold text-white">
              <span className="w-8 h-8 rounded-full bg-[#E2B777]/20 text-[#E2B777] flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </span>
              <span>Dưỡng Sinh An An</span>
            </div>
            
            <p className="text-sm text-stone-300/80 leading-relaxed max-w-sm">
              Không gian trị liệu và thư giãn toàn diện cho người bận rộn. Kết hợp tinh hoa y học cổ truyền, thảo mộc thiên nhiên và kỹ thuật ấn huyệt chuyên sâu.
            </p>

            <div className="pt-2 text-xs text-emerald-300/80">
              Chân thành cảm ơn quý khách đã tin tưởng trao gửi sức khỏe cho An An.
            </div>
          </div>

          {/* Quick links - 3 cols */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Danh Mục Chính
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#trang-chu"
                  onClick={(e) => scrollTo(e, '#trang-chu')}
                  className="hover:text-white transition-colors"
                >
                  Trang Chủ
                </a>
              </li>
              <li>
                <a
                  href="#dich-vu"
                  onClick={(e) => scrollTo(e, '#dich-vu')}
                  className="hover:text-white transition-colors"
                >
                  Dịch Vụ Dưỡng Sinh
                </a>
              </li>
              <li>
                <a
                  href="#san-pham"
                  onClick={(e) => scrollTo(e, '#san-pham')}
                  className="hover:text-white transition-colors"
                >
                  Sản Phẩm Đông Y
                </a>
              </li>
              <li>
                <a
                  href="#cam-nang"
                  onClick={(e) => scrollTo(e, '#cam-nang')}
                  className="hover:text-white transition-colors"
                >
                  Cẩm Nang Sức Khỏe
                </a>
              </li>
              <li>
                <a
                  href="#khach-hang"
                  onClick={(e) => scrollTo(e, '#khach-hang')}
                  className="hover:text-white transition-colors"
                >
                  Cảm Nhận Khách Hàng
                </a>
              </li>
              <li>
                <a
                  href="#dat-lich"
                  onClick={(e) => scrollTo(e, '#dat-lich')}
                  className="hover:text-white transition-colors"
                >
                  Đặt Lịch Trải Nghiệm
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details - 4 cols */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Thông Tin Cơ Sở
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{FACILITY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{FACILITY_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Hotline:{' '}
                  <a
                    href={`tel:${FACILITY_INFO.hotlineRaw}`}
                    className="font-mono font-bold text-white hover:text-emerald-300 tabular-nums"
                  >
                    {FACILITY_INFO.hotline}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{FACILITY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} {FACILITY_INFO.name}. Tất cả các quyền được bảo lưu.</p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Dưỡng sinh mộc mạc</span>
            <span>·</span>
            <span>Nuôi dưỡng thân tâm an lạc</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
