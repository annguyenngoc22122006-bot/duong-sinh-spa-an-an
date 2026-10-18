import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Send,
  X
} from 'lucide-react';
import { SERVICES, FACILITY_INFO } from '../data/mockData';
import { validateBooking, BookingFormData } from '../utils/wellness';

interface BookingSectionProps {
  preselectedServiceId?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ preselectedServiceId }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    serviceId: preselectedServiceId || SERVICES[0].id,
    date: new Date().toISOString().split('T')[0],
    time: '14:00',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingFormData | null>(null);

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBooking(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate instantaneous booking confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedBooking({ ...formData });
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        serviceId: SERVICES[0].id,
        date: new Date().toISOString().split('T')[0],
        time: '14:00',
        notes: '',
      });
      setErrors({});
    }, 600);
  };

  const selectedServiceObj = SERVICES.find((s) => s.id === formData.serviceId);

  return (
    <section id="dat-lich" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#2D5A3A] uppercase mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Trải Nghiệm Thư Thái</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E3B27] tracking-tight">
            Đặt Lịch Hẹn & Liên Hệ
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A5046] font-light leading-relaxed">
            Hãy dành cho bản thân những phút giây thư thái. Đặt lịch trước giúp chúng tôi chuẩn bị nước thảo dược ấm chu đáo nhất cho quý khách.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Facility Information & Hotline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E8E1D7] shadow-sm space-y-6">
              <div className="border-b border-[#F0EBE3] pb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C3A27]">
                  Trung Tâm Trị Liệu
                </span>
                <h3 className="text-2xl font-display font-bold text-[#1E3B27] mt-1">
                  {FACILITY_INFO.name}
                </h3>
                <p className="text-xs text-[#7A7061] mt-1 italic">
                  "{FACILITY_INFO.slogan}"
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#E9EFE9] text-[#2D5A3A] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A7061]">
                    Địa chỉ cơ sở
                  </h4>
                  <p className="text-sm font-medium text-[#1E3B27] mt-1 leading-snug">
                    {FACILITY_INFO.address}
                  </p>
                  <span className="text-xs text-[#7A7061] block mt-0.5">
                    Có chỗ để xe ô tô & xe máy an toàn, miễn phí
                  </span>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#E9EFE9] text-[#2D5A3A] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A7061]">
                    Giờ mở cửa phục vụ
                  </h4>
                  <p className="text-sm font-semibold text-[#1E3B27] mt-1 font-mono">
                    {FACILITY_INFO.hours}
                  </p>
                  <span className="text-xs text-[#2D5A3A] block mt-0.5">
                    Phục vụ xuyên trưa cho khách văn phòng nghỉ ngơi
                  </span>
                </div>
              </div>

              {/* Prominent Hotline with Gentle Pulsing */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A7061] mb-2">
                  Hotline đặt lịch & Tư vấn nhanh
                </h4>
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#2D5A3A] to-[#1E3B27] text-white flex items-center justify-between shadow-md">
                  <div>
                    <span className="text-xs text-emerald-200 block">Hỗ trợ 24/7:</span>
                    <span className="text-xl font-bold font-mono tracking-wider tabular-nums">
                      {FACILITY_INFO.hotline}
                    </span>
                  </div>

                  {/* Pulsing Call Now button */}
                  <a
                    href={`tel:${FACILITY_INFO.hotlineRaw}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#E2B777] hover:bg-[#D5A764] text-stone-900 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 animate-gentle-pulse"
                  >
                    <Phone className="w-4 h-4 fill-stone-900" />
                    <span>Gọi Ngay</span>
                  </a>
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E1D7] text-xs text-[#5A5046] space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#2D5A3A]" />
                  <span>Nước trà dưỡng sinh & chè dưỡng nhan miễn phí khi đến</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#2D5A3A]" />
                  <span>Khăn ấm và đồ thay tiệt trùng riêng biệt từng khách</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-7 sm:p-10 border border-[#E8E1D7] shadow-sm">
              <h3 className="text-2xl font-display font-bold text-[#1E3B27] mb-2">
                Đăng Ký Đặt Lịch Hẹn
              </h3>
              <p className="text-xs sm:text-sm text-[#7A7061] mb-8">
                Điền thông tin bên dưới để giữ chỗ và kỹ thuật viên phù hợp nhất.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#4A4036] mb-1.5">
                      Họ và tên của bạn <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ví dụ: Nguyễn Minh Anh"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1E3B27] bg-[#FAF8F5] focus:bg-white focus:outline-none transition-colors ${
                        errors.fullName
                          ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400'
                          : 'border-[#E8E1D7] focus:border-[#2D5A3A] focus:ring-1 focus:ring-[#2D5A3A]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#4A4036] mb-1.5">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ví dụ: 0912 345 678"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1E3B27] bg-[#FAF8F5] focus:bg-white focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400'
                          : 'border-[#E8E1D7] focus:border-[#2D5A3A] focus:ring-1 focus:ring-[#2D5A3A]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="serviceId" className="block text-xs font-semibold uppercase tracking-wider text-[#4A4036] mb-1.5">
                    Chọn dịch vụ mong muốn <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="serviceId"
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E1D7] text-sm text-[#1E3B27] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#2D5A3A] focus:ring-1 focus:ring-[#2D5A3A] transition-colors cursor-pointer"
                  >
                    {SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.title} ({srv.duration} - {srv.priceFormatted})
                      </option>
                    ))}
                  </select>
                  {selectedServiceObj && (
                    <p className="mt-1.5 text-xs text-[#7A7061] italic">
                      Mô tả: {selectedServiceObj.description}
                    </p>
                  )}
                </div>

                {/* Date & Time Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="date" className="block text-xs font-semibold uppercase tracking-wider text-[#4A4036] mb-1.5">
                      Ngày hẹn <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1E3B27] bg-[#FAF8F5] focus:bg-white focus:outline-none transition-colors ${
                        errors.date
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-[#E8E1D7] focus:border-[#2D5A3A]'
                      }`}
                    />
                    {errors.date && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.date}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-xs font-semibold uppercase tracking-wider text-[#4A4036] mb-1.5">
                      Khung giờ hẹn <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E1D7] text-sm text-[#1E3B27] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#2D5A3A] transition-colors cursor-pointer"
                    >
                      <option value="09:30">09:30 (Buổi sáng thanh tịnh)</option>
                      <option value="11:30">11:30 (Nghỉ trưa văn phòng)</option>
                      <option value="12:30">12:30 (Nghỉ trưa phục hồi)</option>
                      <option value="14:00">14:00 (Đầu giờ chiều)</option>
                      <option value="16:00">16:00 (Chiều mát)</option>
                      <option value="17:30">17:30 (Tan sở giảm đau vai)</option>
                      <option value="19:00">19:00 (Buổi tối thư giãn sâu)</option>
                      <option value="20:00">20:00 (Liệu trình ngủ ngon)</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-[#4A4036] mb-1.5">
                    Ghi chú thêm (vùng đau mỏi, yêu cầu kỹ thuật viên,...)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Ví dụ: Mình bị đau nhức bên vai phải do ngồi làm việc nhiều, cần lực ấn vừa phải..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E1D7] text-sm text-[#1E3B27] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#2D5A3A] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-[#2D5A3A] hover:bg-[#23472E] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Đang xác nhận lịch hẹn...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Xác Nhận Đặt Lịch Hẹn Ngay</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmedBooking && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-success-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E8E1D7] relative text-center">
            <button
              onClick={() => setConfirmedBooking(null)}
              aria-label="Đóng thông báo"
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-[#E9EFE9] text-[#2D5A3A] mx-auto flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 id="booking-success-title" className="text-2xl font-display font-bold text-[#1E3B27]">
              Đặt Lịch Thành Công!
            </h3>
            
            <p className="mt-2 text-sm text-[#5A5046]">
              Cảm ơn <strong className="text-[#1E3B27]">{confirmedBooking.fullName}</strong>. Dưỡng Sinh An An đã ghi nhận lịch hẹn của bạn và sẽ gọi điện xác nhận trong ít phút.
            </p>

            {/* Ticket details */}
            <div className="mt-6 p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E1D7] text-left text-xs sm:text-sm space-y-2.5">
              <div className="flex justify-between">
                <span className="text-[#7A7061]">Dịch vụ:</span>
                <span className="font-semibold text-[#1E3B27]">
                  {SERVICES.find((s) => s.id === confirmedBooking.serviceId)?.title}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A7061]">Thời gian:</span>
                <span className="font-semibold text-[#1E3B27] font-mono">
                  {confirmedBooking.time} - {confirmedBooking.date}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A7061]">Số điện thoại:</span>
                <span className="font-semibold text-[#1E3B27] font-mono">
                  {confirmedBooking.phone}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A7061]">Địa chỉ tiếp đón:</span>
                <span className="font-semibold text-[#1E3B27] text-right">
                  {FACILITY_INFO.address}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${FACILITY_INFO.hotlineRaw}`}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#E9EFE9] text-[#2D5A3A] font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Hotline: {FACILITY_INFO.hotline}</span>
              </a>
              <button
                onClick={() => setConfirmedBooking(null)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#2D5A3A] hover:bg-[#23472E] text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Hoàn tất
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
