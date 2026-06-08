import React from 'react';

export default function CartSummary({ totalQuantity, totalPrice }) {
  return (
    <div style={{ 
      padding: '15px', 
      backgroundColor: '#f9f9f9', 
      borderRadius: '8px', 
      textAlign: 'right' 
    }}>
      <h3>결제 예정 금액</h3>
      <p>총 상품 수량: <strong>{totalQuantity}개</strong></p>
      <p style={{ fontSize: '1.2em' }}>
        총 결제 금액: <strong>{totalPrice.toLocaleString()}원</strong>
      </p>
    </div>
  );
}