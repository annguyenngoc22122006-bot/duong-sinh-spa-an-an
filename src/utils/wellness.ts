export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  unit: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  date: string;
  time: string;
  notes?: string;
}

export interface OrderFormData {
  fullName: string;
  phone: string;
  address: string;
  notes?: string;
}

export function formatVND(amount: number): string {
  if (typeof amount !== 'number' || isNaN(amount)) {
    return '0 ₫';
  }
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateCartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + (item.price * Math.max(0, item.quantity)), 0);
}

export function calculateItemCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + Math.max(0, item.quantity), 0);
}

export function isValidVietnamesePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s.-]/g, '');
  // Accepts Vietnamese phone formats: 0912345678, +84912345678, 84912345678 (10-11 digits)
  const regex = /^(?:\+84|84|0)(?:3[2-9]|5[6|8|9]|7[0|6-9]|8[1-9]|9[0-9])[0-9]{7}$/;
  return regex.test(cleaned);
}

export function validateBooking(data: BookingFormData): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Vui lòng nhập họ và tên hợp lệ (tối thiểu 2 ký tự)';
  }

  if (!data.phone || !isValidVietnamesePhone(data.phone)) {
    errors.phone = 'Vui lòng nhập số điện thoại Việt Nam hợp lệ (ví dụ: 0912 345 678)';
  }

  if (!data.serviceId || data.serviceId.trim() === '') {
    errors.serviceId = 'Vui lòng chọn dịch vụ bạn muốn trải nghiệm';
  }

  if (!data.date) {
    errors.date = 'Vui lòng chọn ngày hẹn';
  } else {
    const selectedDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.date = 'Ngày hẹn không thể trong quá khứ';
    }
  }

  if (!data.time || data.time.trim() === '') {
    errors.time = 'Vui lòng chọn khung giờ hẹn (09:00 - 21:00)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateOrder(data: OrderFormData): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Vui lòng nhập họ tên người nhận';
  }

  if (!data.phone || !isValidVietnamesePhone(data.phone)) {
    errors.phone = 'Vui lòng nhập số điện thoại giao hàng hợp lệ';
  }

  if (!data.address || data.address.trim().length < 5) {
    errors.address = 'Vui lòng nhập địa chỉ giao hàng chi tiết';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
