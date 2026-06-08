import React, { useState } from "react";
import CartList from './CartList';
import CartSummary from './CartSummary';

const initialCartData = [
  { id: 1, name: '기계식 키보드', price: 120000, quantity: 1 },
  { id: 2, name: '무선 마우스', price: 85000, quantity: 2 },
  { id: 3, name: 'QHD 모니터', price: 350000, quantity: 1 }
];

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState(initialCartData);

  // 수량 증가
  const handleIncrease = (id) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // 수량 감소 (1 미만 방지)
  const handleDecrease = (id) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    ));
  };

  // 항목 삭제
  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // 계산 로직
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>장바구니</h2>
      <CartList
        items={cartItems}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
      />
      <CartSummary
        totalQuantity={totalQuantity}
        totalPrice={totalPrice}
      />
    </div>
  );
}