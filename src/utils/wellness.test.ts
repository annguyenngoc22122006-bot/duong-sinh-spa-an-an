import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatVND,
  calculateCartTotal,
  calculateItemCount,
  isValidVietnamesePhone,
  validateBooking,
  validateOrder,
} from './wellness.ts';
import type { CartItem, BookingFormData, OrderFormData } from './wellness.ts';

test('formatVND correctly formats currency numbers', () => {
  const result = formatVND(150000);
  assert.ok(result.includes('150.000'));
  assert.ok(result.includes('₫') || result.includes('VND'));
});

test('calculateCartTotal computes total value accurately', () => {
  const items: CartItem[] = [
    { id: 'tea', name: 'Trà Thảo Mộc', price: 150000, quantity: 2, image: '', unit: 'hộp' },
    { id: 'oil', name: 'Tinh Dầu', price: 220000, quantity: 1, image: '', unit: 'lọ' }
  ];
  assert.equal(calculateCartTotal(items), 150000 * 2 + 220000);
  assert.equal(calculateItemCount(items), 3);
});

test('isValidVietnamesePhone validates Vietnamese mobile prefixes correctly', () => {
  assert.equal(isValidVietnamesePhone('0912345678'), true);
  assert.equal(isValidVietnamesePhone('+84912345678'), true);
  assert.equal(isValidVietnamesePhone('0389123456'), true);
  assert.equal(isValidVietnamesePhone('0912 345 678'), true);
  assert.equal(isValidVietnamesePhone('12345'), false);
  assert.equal(isValidVietnamesePhone('0123456789'), false); // Old invalid prefix
});

test('validateBooking checks for required fields and reasonable dates', () => {
  const validData: BookingFormData = {
    fullName: 'Nguyễn Văn An',
    phone: '0912345678',
    serviceId: 'co-vai-gay',
    date: '2099-12-31',
    time: '14:00',
    notes: 'Đau mỏi cổ bên trái'
  };
  const validRes = validateBooking(validData);
  assert.equal(validRes.isValid, true);
  assert.equal(Object.keys(validRes.errors).length, 0);

  const invalidData: BookingFormData = {
    fullName: '',
    phone: 'invalid',
    serviceId: '',
    date: '2020-01-01',
    time: ''
  };
  const invalidRes = validateBooking(invalidData);
  assert.equal(invalidRes.isValid, false);
  assert.ok(invalidRes.errors.fullName);
  assert.ok(invalidRes.errors.phone);
  assert.ok(invalidRes.errors.serviceId);
  assert.ok(invalidRes.errors.date);
  assert.ok(invalidRes.errors.time);
});

test('validateOrder checks customer checkout information', () => {
  const validOrder: OrderFormData = {
    fullName: 'Trần Thị Mai',
    phone: '0987654321',
    address: 'Số 12 Ngõ 80 Chùa Láng, Đống Đa, Hà Nội',
    notes: 'Giao giờ hành chính'
  };
  const res = validateOrder(validOrder);
  assert.equal(res.isValid, true);

  const invalidOrder: OrderFormData = {
    fullName: 'T',
    phone: '00000',
    address: 'Nhà'
  };
  const invalidRes = validateOrder(invalidOrder);
  assert.equal(invalidRes.isValid, false);
  assert.ok(invalidRes.errors.fullName);
  assert.ok(invalidRes.errors.phone);
  assert.ok(invalidRes.errors.address);
});
