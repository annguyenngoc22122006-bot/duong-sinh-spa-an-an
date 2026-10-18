/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { HandbookSection } from './components/HandbookSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { CartDrawer } from './components/CartDrawer';
import { FloatingHotline } from './components/FloatingHotline';
import { Footer } from './components/Footer';
import { CartItem, calculateItemCount } from './utils/wellness';
import { Product } from './types';
import { Check, ArrowRight } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string>('co-vai-gay');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const cartCount = calculateItemCount(cartItems);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
          unit: product.unit,
        },
      ];
    });
    showToast(`Đã thêm "${product.name}" vào giỏ hàng`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (elementId: string) => {
    const el = document.getElementById(elementId);
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

  const handleSelectServiceForBooking = (serviceId: string) => {
    setPreselectedServiceId(serviceId);
    scrollToSection('dat-lich');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C241E] flex flex-col font-sans selection:bg-[#2D5A3A] selection:text-white">
      {/* Fixed Navigation Bar */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateBooking={() => scrollToSection('dat-lich')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreServices={() => scrollToSection('dich-vu')}
          onBookNow={() => scrollToSection('dat-lich')}
        />

        {/* 1. Dịch Vụ Dưỡng Sinh */}
        <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* 2. Sản Phẩm Dưỡng Sinh Đông Y */}
        <ProductsSection onAddToCart={handleAddToCart} />

        {/* 3. Cẩm Nang Sức Khỏe */}
        <HandbookSection />

        {/* 4. Cảm Nhận Khách Hàng */}
        <TestimonialsSection />

        {/* 5. Đặt Lịch & Liên Hệ */}
        <BookingSection preselectedServiceId={preselectedServiceId} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Hotline & Booking Button */}
      <FloatingHotline onQuickBook={() => scrollToSection('dat-lich')} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#1E3B27] text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-3 text-xs sm:text-sm border border-emerald-600/30 animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
          <button
            onClick={() => {
              setToastMessage(null);
              setIsCartOpen(true);
            }}
            className="ml-2 font-semibold text-emerald-300 hover:text-white underline flex items-center gap-1 cursor-pointer"
          >
            <span>Xem giỏ</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
}
