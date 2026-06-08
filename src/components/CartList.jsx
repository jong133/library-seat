import React from 'react';

export default function CartList({ items, onIncrease, onDecrease, onRemove }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      {items.map((item) => (
        <div 
          key={item.id} 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '10px', 
            borderBottom: '1px solid #ddd',
            alignItems: 'center'
          }}
        >
          <div>
            <strong>{item.name}</strong>
            <div style={{ fontSize: '0.9em', color: '#666' }}>
              {(item.price * item.quantity).toLocaleString()}원
            </div>
          </div>
          
          <div>
            <button 
              onClick={() => onDecrease(item.id)}
              disabled={item.quantity <= 1} // 1개일 때 비활성화
            >
              -
            </button>
            {/* item.id 대신 item.quantity로 수정 */}
            <span style={{ margin: '0 10px' }}>{item.quantity}</span>
            <button onClick={() => onIncrease(item.id)}>+</button>
            <button 
              onClick={() => onRemove(item.id)} 
              style={{ marginLeft: '10px', color: 'red' }}
            >
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}