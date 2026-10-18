import React, { useState } from 'react';
import { Clock, CheckCircle2, X, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="dich-vu" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#2D5A3A] uppercase mb-3">
            <span className="w-6 h-[1px] bg-[#2D5A3A]" />
            <span>Liệu Pháp Tự Nhiên</span>
            <span className="w-6 h-[1px] bg-[#2D5A3A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E3B27] tracking-tight">
            Dịch Vụ Dưỡng Sinh Trị Liệu
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A5046] font-light leading-relaxed">
            Thiết kế riêng cho người đi làm và người cần phục hồi năng lượng, kết hợp bấm huyệt chuyên sâu và thảo mộc tự nhiên.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <article
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8E1D7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
            >
              {/* Image Container with smooth zoom on hover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E1D7]">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Duration Tag */}
                <div className="absolute bottom-3 left-3 bg-[#FAF8F5]/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-medium text-[#2D5A3A] flex items-center gap-1 shadow-sm">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{service.duration}</span>
                </div>

                {/* Number Index */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-xs font-mono flex items-center justify-center">
                  0{idx + 1}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold text-[#1E3B27] group-hover:text-[#2D5A3A] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-[#5A5046] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#F0EBE3] flex items-center justify-between text-xs text-[#7A7061]">
                    <span>Giá trải nghiệm</span>
                    <span className="font-semibold text-base text-[#8C3A27] font-mono tabular-nums">
                      {service.priceFormatted}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 pt-2 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    aria-label={`Xem chi tiết ${service.title}`}
                    className="flex-1 py-2.5 px-4 text-xs font-semibold text-[#2D5A3A] bg-[#E9EFE9] hover:bg-[#DCE7DC] rounded-xl transition-colors cursor-pointer"
                  >
                    Xem chi tiết
                  </button>
                  <button
                    onClick={() => onSelectServiceForBooking(service.id)}
                    aria-label={`Đặt lịch ngay ${service.title}`}
                    className="py-2.5 px-3.5 text-xs font-semibold text-white bg-[#2D5A3A] hover:bg-[#23472E] rounded-xl transition-colors flex items-center gap-1 cursor-pointer"
                    title="Đặt lịch ngay cho dịch vụ này"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Đặt ngay</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-[#FAF8F5] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E8E1D7] flex flex-col">
            {/* Modal Header Image */}
            <div className="relative aspect-[21/9] overflow-hidden bg-stone-200">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Đóng cửa sổ chi tiết"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                  {selectedService.tagline}
                </span>
                <h3 id="modal-service-title" className="text-2xl font-display font-bold text-white mt-1">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6 flex-1">
              {/* Overview & Duration/Price */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-white border border-[#E8E1D7]">
                <div className="flex items-center gap-2 text-sm text-[#4A4036]">
                  <Clock className="w-4 h-4 text-[#2D5A3A]" />
                  <span>Thời lượng: <strong className="text-[#1E3B27]">{selectedService.duration}</strong></span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#7A7061] block">Chi phí liệu trình</span>
                  <span className="text-lg font-bold text-[#8C3A27] font-mono tabular-nums">
                    {selectedService.priceFormatted}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#4A4036] leading-relaxed">
                {selectedService.description}
              </p>

              {/* Core Benefits */}
              <div>
                <h4 className="text-sm font-bold text-[#1E3B27] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#2D5A3A]" />
                  <span>Hiệu quả trị liệu mang lại</span>
                </h4>
                <ul className="grid grid-cols-1 gap-2.5">
                  {selectedService.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4036]">
                      <CheckCircle2 className="w-4 h-4 text-[#2D5A3A] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps of Treatment */}
              <div>
                <h4 className="text-sm font-bold text-[#1E3B27] uppercase tracking-wider mb-3">
                  Quy trình trị liệu 4 bước chuẩn hóa
                </h4>
                <div className="space-y-2.5">
                  {selectedService.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-[#E8E1D7]/70 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#2D5A3A]/10 text-[#2D5A3A] font-mono font-semibold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[#4A4036]">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-6 bg-white border-t border-[#E8E1D7] flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 text-xs font-semibold text-[#5A5046] hover:bg-[#F0EBE3] rounded-xl transition-colors cursor-pointer"
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  const id = selectedService.id;
                  setSelectedService(null);
                  onSelectServiceForBooking(id);
                }}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2D5A3A] hover:bg-[#23472E] rounded-xl shadow transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Đặt lịch liệu trình này</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
