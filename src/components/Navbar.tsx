import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, Sparkles } from 'lucide-react';
import { FACILITY_INFO } from '../data/mockData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigateBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onNavigateBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trang Chủ', href: '#trang-chu' },
    { label: 'Dịch Vụ', href: '#dich-vu' },
    { label: 'Sản Phẩm', href: '#san-pham' },
    { label: 'Cẩm Nang', href: '#cam-nang' },
    { label: 'Khách Hàng', href: '#khach-hang' },
    { label: 'Đặt Lịch', href: '#dat-lich' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E1D7] py-3'
          : 'bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#E8E1D7]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 md:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#trang-chu"
            onClick={(e) => handleLinkClick(e, '#trang-chu')}
            className="flex items-center gap-2 text-xl sm:text-2xl font-display font-semibold text-[#1E3B27] tracking-tight whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 rounded-full bg-[#2D5A3A]/10 text-[#2D5A3A] flex items-center justify-center group-hover:bg-[#2D5A3A] group-hover:text-white transition-colors duration-200">
              <Sparkles className="w-4 h-4" />
            </span>
            <span>Dưỡng Sinh An An</span>
          </a>

          {/* Zone 2: 5-6 Single-line Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A4036]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#2D5A3A] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2D5A3A] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Cart & CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick Hotline on Desktop */}
            <a
              href={`tel:${FACILITY_INFO.hotlineRaw}`}
              aria-label={`Gọi hotline ${FACILITY_INFO.hotline}`}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#2D5A3A] bg-[#E9EFE9] rounded-lg hover:bg-[#DCE7DC] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-mono tabular-nums">{FACILITY_INFO.hotline}</span>
            </a>

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              aria-label={`Xem giỏ hàng, hiện có ${cartCount} sản phẩm`}
              className="relative p-2 text-[#4A4036] hover:text-[#2D5A3A] rounded-lg hover:bg-[#EDE8E0] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#8C3A27] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onNavigateBooking}
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#2D5A3A] rounded-lg hover:bg-[#23472E] shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Đặt Lịch Ngay
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Mở menu điều hướng"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-[#4A4036] hover:text-[#2D5A3A] rounded-lg hover:bg-[#EDE8E0] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E1D7] px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-[#4A4036] hover:text-[#2D5A3A] hover:bg-[#EDE8E0]/70 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#E8E1D7] flex flex-col gap-3">
              <a
                href={`tel:${FACILITY_INFO.hotlineRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#2D5A3A] bg-[#E9EFE9] rounded-lg"
              >
                <Phone className="w-4 h-4" />
                Hotline: {FACILITY_INFO.hotline}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateBooking();
                }}
                className="w-full py-2.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#2D5A3A] rounded-lg hover:bg-[#23472E] transition-colors"
              >
                Đặt Lịch Hẹn Ngay
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
