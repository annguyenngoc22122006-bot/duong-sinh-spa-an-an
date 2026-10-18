import React, { useState } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Truck,
  AlertCircle
} from 'lucide-react';
import { CartItem, formatVND, calculateCartTotal, validateOrder, OrderFormData } from '../utils/wellness';
import { FACILITY_INFO } from '../data/mockData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [orderForm, setOrderForm] = useState<OrderFormData>({
    fullName: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [placedOrder, setPlacedOrder] = useState<{
    orderId: string;
    items: CartItem[];
    total: number;
    customer: OrderFormData;
  } | null>(null);

  if (!isOpen) return null;

  const total = calculateCartTotal(items);
  const freeShippingThreshold = 400000;
  const isFreeShipping = total >= freeShippingThreshold;

  const handleOrderChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setOrderForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateOrder(orderForm);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setPlacedOrder({
        orderId: `ANAN-${Math.floor(100000 + Math.random() * 900000)}`,
        items: [...items],
        total,
        customer: { ...orderForm },
      });
      setStep('success');
      onClearCart();
    }, 700);
  };

  const handleCloseAll = () => {
    setStep('cart');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Backdrop */}
      <div
        onClick={handleCloseAll}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col justify-between border-l border-[#E8E1D7] animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-5 sm:p-6 bg-white border-b border-[#E8E1D7] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#2D5A3A]" />
              <h3 id="cart-title" className="text-lg font-display font-bold text-[#1E3B27]">
                {step === 'cart' && 'Giỏ Hàng Dưỡng Sinh'}
                {step === 'checkout' && 'Thông Tin Giao Hàng'}
                {step === 'success' && 'Đặt Hàng Thành Công'}
              </h3>
            </div>
            <button
              onClick={handleCloseAll}
              aria-label="Đóng giỏ hàng"
              className="p-1.5 text-stone-400 hover:text-stone-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {step === 'cart' && (
              <>
                {items.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <div className="w-16 h-16 rounded-full bg-[#E9EFE9] text-[#2D5A3A] mx-auto flex items-center justify-center">
                      <ShoppingBag className="w-8 h-8 opacity-50" />
                    </div>
                    <p className="text-sm text-[#7A7061]">
                      Giỏ hàng của bạn đang trống
                    </p>
                    <button
                      onClick={handleCloseAll}
                      className="px-4 py-2 text-xs font-semibold text-[#2D5A3A] bg-[#E9EFE9] hover:bg-[#DCE7DC] rounded-lg transition-colors cursor-pointer"
                    >
                      Khám phá sản phẩm Đông Y
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Free shipping banner */}
                    <div className="p-3 rounded-xl bg-white border border-[#E8E1D7] text-xs flex items-center gap-2.5">
                      <Truck className="w-4 h-4 text-[#2D5A3A] shrink-0" />
                      {isFreeShipping ? (
                        <span className="text-[#2D5A3A] font-semibold">
                          Chúc mừng! Bạn được MIỄN PHÍ vận chuyển toàn quốc.
                        </span>
                      ) : (
                        <span className="text-[#5A5046]">
                          Mua thêm{' '}
                          <strong className="text-[#8C3A27] font-mono tabular-nums">
                            {formatVND(freeShippingThreshold - total)}
                          </strong>{' '}
                          để nhận Free Ship toàn quốc.
                        </span>
                      )}
                    </div>

                    {/* Item list */}
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="p-3.5 rounded-xl bg-white border border-[#E8E1D7] flex gap-3 items-center"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            referrerPolicy="no-referrer"
                            className="w-16 h-16 rounded-lg object-cover bg-stone-100 shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs sm:text-sm font-semibold text-[#1E3B27] truncate">
                              {item.name}
                            </h4>
                            <div className="text-xs text-[#8C3A27] font-mono font-medium tabular-nums mt-0.5">
                              {formatVND(item.price)}
                            </div>

                            {/* Quantity controls */}
                            <div className="flex items-center gap-2 mt-2">
                              <div className="inline-flex items-center border border-[#E8E1D7] rounded-md bg-[#FAF8F5]">
                                <button
                                  onClick={() => onUpdateQuantity(item.id, -1)}
                                  aria-label={`Giảm số lượng ${item.name}`}
                                  className="p-1 hover:text-[#8C3A27] transition-colors"
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="px-2.5 text-xs font-mono font-semibold tabular-nums">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => onUpdateQuantity(item.id, 1)}
                                  aria-label={`Tăng số lượng ${item.name}`}
                                  className="p-1 hover:text-[#2D5A3A] transition-colors"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <button
                                onClick={() => onRemoveItem(item.id)}
                                aria-label={`Xóa ${item.name}`}
                                className="text-stone-400 hover:text-red-600 p-1 transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}

            {step === 'checkout' && (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="p-3 rounded-xl bg-white border border-[#E8E1D7] text-xs space-y-1">
                  <div className="flex justify-between text-[#7A7061]">
                    <span>Số lượng sản phẩm:</span>
                    <span className="font-mono tabular-nums text-[#1E3B27] font-medium">
                      {items.reduce((acc, it) => acc + it.quantity, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#7A7061]">
                    <span>Tổng tiền thanh toán:</span>
                    <span className="font-mono tabular-nums text-[#8C3A27] font-bold text-sm">
                      {formatVND(total)}
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="order-fullName" className="block text-xs font-semibold text-[#4A4036] uppercase mb-1">
                    Họ và tên người nhận <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="order-fullName"
                    name="fullName"
                    value={orderForm.fullName}
                    onChange={handleOrderChange}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E1D7] text-sm bg-white focus:outline-none focus:border-[#2D5A3A]"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="order-phone" className="block text-xs font-semibold text-[#4A4036] uppercase mb-1">
                    Số điện thoại nhận hàng <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="order-phone"
                    name="phone"
                    value={orderForm.phone}
                    onChange={handleOrderChange}
                    placeholder="0912 345 678"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E1D7] text-sm bg-white focus:outline-none focus:border-[#2D5A3A]"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="order-address" className="block text-xs font-semibold text-[#4A4036] uppercase mb-1">
                    Địa chỉ nhận hàng chi tiết <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="order-address"
                    name="address"
                    value={orderForm.address}
                    onChange={handleOrderChange}
                    placeholder="Số nhà, tên ngõ, đường, phường, quận/huyện, tỉnh/TP"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E1D7] text-sm bg-white focus:outline-none focus:border-[#2D5A3A]"
                  />
                  {errors.address && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.address}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="order-notes" className="block text-xs font-semibold text-[#4A4036] uppercase mb-1">
                    Ghi chú giao hàng
                  </label>
                  <textarea
                    id="order-notes"
                    name="notes"
                    rows={2}
                    value={orderForm.notes}
                    onChange={handleOrderChange}
                    placeholder="Giao trong giờ hành chính, gọi trước khi đến..."
                    className="w-full px-3.5 py-2 rounded-lg border border-[#E8E1D7] text-sm bg-white focus:outline-none focus:border-[#2D5A3A] resize-none"
                  />
                </div>

                <div className="p-3 rounded-lg bg-[#E9EFE9] text-xs text-[#2D5A3A] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Hình thức: Thanh toán tiền mặt khi nhận hàng (COD) sau khi kiểm tra.</span>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep('cart')}
                    className="py-2.5 px-4 text-xs font-semibold text-stone-600 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Quay lại
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#2D5A3A] hover:bg-[#23472E] rounded-lg shadow transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? 'Đang gửi đơn hàng...' : 'Xác Nhận Đặt Hàng'}
                  </button>
                </div>
              </form>
            )}

            {step === 'success' && placedOrder && (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#E9EFE9] text-[#2D5A3A] mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-display font-bold text-[#1E3B27]">
                  Đã Nhận Đơn Hàng!
                </h4>
                <p className="text-xs text-[#7A7061]">
                  Mã đơn hàng: <strong className="text-[#1E3B27] font-mono">{placedOrder.orderId}</strong>
                </p>
                <div className="p-4 rounded-xl bg-white border border-[#E8E1D7] text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#7A7061]">Người nhận:</span>
                    <span className="font-semibold text-[#1E3B27]">{placedOrder.customer.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A7061]">Điện thoại:</span>
                    <span className="font-mono text-[#1E3B27]">{placedOrder.customer.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A7061]">Địa chỉ giao:</span>
                    <span className="text-[#1E3B27] text-right font-medium max-w-[200px] truncate">
                      {placedOrder.customer.address}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#F0EBE3]">
                    <span className="text-[#7A7061]">Tổng thanh toán:</span>
                    <span className="font-bold text-[#8C3A27] font-mono tabular-nums text-sm">
                      {formatVND(placedOrder.total)}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#5A5046]">
                  Chúng tôi sẽ đóng gói và bàn giao cho đơn vị vận chuyển sớm nhất. Mọi hỗ trợ xin gọi {FACILITY_INFO.hotline}.
                </p>
                <button
                  onClick={handleCloseAll}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#2D5A3A] hover:bg-[#23472E] rounded-xl transition-colors cursor-pointer"
                >
                  Tiếp tục tham quan website
                </button>
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {step === 'cart' && items.length > 0 && (
            <div className="p-5 sm:p-6 bg-white border-t border-[#E8E1D7] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#7A7061]">Tạm tính ({items.length} món):</span>
                <span className="text-lg font-bold text-[#8C3A27] font-mono tabular-nums">
                  {formatVND(total)}
                </span>
              </div>
              <button
                onClick={() => setStep('checkout')}
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#2D5A3A] hover:bg-[#23472E] shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Tiến Hành Đặt Mua (COD)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
