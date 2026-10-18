import React, { useState } from 'react';
import { ShoppingBag, Check, Sparkles, Leaf } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { Product } from '../types';
import { formatVND } from '../utils/wellness';

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onAddToCart }) => {
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1500);
  };

  return (
    <section id="san-pham" className="py-20 lg:py-28 bg-[#F5EFEB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#8C3A27] uppercase mb-3">
            <Leaf className="w-3.5 h-3.5" />
            <span>Chăm Sóc Tại Nhà</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E3B27] tracking-tight">
            Sản Phẩm Dưỡng Sinh Đông Y
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A5046] font-light leading-relaxed">
            Các sản phẩm thảo mộc tự nhiên được bào chế theo phương pháp cổ truyền, tiện lợi mang theo hoặc sử dụng hàng ngày tại gia đình.
          </p>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => {
            const isJustAdded = addedProductId === product.id;

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8E1D7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E8E1D7]">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#8C3A27] uppercase tracking-wider">
                      Đông Y Gia Truyền
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-[#1E3B27] group-hover:text-[#8C3A27] transition-colors">
                      {product.name}
                    </h3>

                    {/* Ingredients */}
                    <div className="mt-2 text-xs text-[#7A7061] line-clamp-1">
                      <span className="font-semibold text-[#4A4036]">Thành phần:</span> {product.ingredients}
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-sm text-[#5A5046] leading-relaxed">
                      {product.description}
                    </p>

                    {/* Usage note */}
                    <div className="mt-4 p-3 rounded-lg bg-[#FAF8F5] border border-[#E8E1D7]/60 text-xs text-[#5A5046] flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#2D5A3A] shrink-0 mt-0.5" />
                      <span>{product.usage}</span>
                    </div>
                  </div>
                </div>

                {/* Footer with Price and Add to Cart */}
                <div className="p-6 pt-0 mt-2">
                  <div className="pt-4 border-t border-[#F0EBE3] flex items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-[#7A7061] block">Đơn giá</span>
                      <span className="text-xl font-bold text-[#8C3A27] font-mono tabular-nums">
                        {formatVND(product.price)}
                      </span>
                      <span className="text-xs text-[#7A7061]">/{product.unit}</span>
                    </div>

                    <button
                      onClick={() => handleAdd(product)}
                      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                        isJustAdded
                          ? 'bg-[#2D5A3A] text-white shadow-md'
                          : 'bg-[#1E3B27] hover:bg-[#2D5A3A] text-white shadow hover:shadow-md'
                      }`}
                      aria-label={`Thêm sản phẩm ${product.name} vào giỏ hàng`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Đã thêm!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Thêm vào giỏ hàng</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
