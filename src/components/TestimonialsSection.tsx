import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="khach-hang" className="py-20 lg:py-28 bg-[#F5EFEB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#2D5A3A] uppercase mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Đồng Hành Cùng Sức Khỏe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E3B27] tracking-tight">
            Cảm Nhận Từ Khách Hàng
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A5046] font-light leading-relaxed">
            Sự an yên và thuyên giảm đau nhức của mỗi khách hàng là niềm hạnh phúc lớn nhất của đội ngũ Dưỡng Sinh An An.
          </p>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E8E1D7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Rating stars */}
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-[#8C3A27]">
                    5.0 / 5.0
                  </span>
                </div>

                {/* Treatment used */}
                <div className="text-xs text-[#7A7061] font-medium mb-3">
                  Trải nghiệm: <span className="text-[#2D5A3A] font-semibold">{testimonial.treatment}</span>
                </div>

                {/* Quote text */}
                <p className="text-sm text-[#4A4036] leading-relaxed italic relative">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="mt-6 pt-5 border-t border-[#F0EBE3] flex items-center gap-3.5">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#E8E1D7]"
                  />
                  <span
                    className="absolute -bottom-1 -right-1 bg-[#2D5A3A] text-white p-0.5 rounded-full"
                    title="Khách hàng đã trải nghiệm thực tế"
                  >
                    <CheckCircle2 className="w-3 h-3" />
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-display font-bold text-[#1E3B27]">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-[#7A7061]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Satisfaction proof bar */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-[#E8E1D7] flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#1E3B27] font-mono tabular-nums">
              98.5%
            </div>
            <div className="text-xs text-[#7A7061] mt-1">Khách hàng cảm nhận giảm đau mỏi ngay buổi đầu</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-[#E8E1D7]" />
          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#1E3B27] font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs text-[#7A7061] mt-1">Nước thảo mộc nấu tươi sạch trong ngày</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-[#E8E1D7]" />
          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#1E3B27] font-mono tabular-nums">
              5.000+
            </div>
            <div className="text-xs text-[#7A7061] mt-1">Lượt khách hàng văn phòng phục hồi sức khỏe</div>
          </div>
        </div>
      </div>
    </section>
  );
};
