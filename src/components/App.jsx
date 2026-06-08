import { useState } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Error from './Error';
import NavBar from './NavBar';
import Home from './Home';
import TodoList from './TodoList';
import TodoViewer from './TodoViewer';


const productData = {
  books: {
    '101': { name: '리액트 입문', price: 18000 },
    '102': { name: '자바스크립트 입문', price: 22000 }
  },
  electronics: {
    '201': { name: '마우스', price: 25000 },
    '202': { name: '키보드', price: 55000 }
  }
};

// 3. 상품 상세 컴포넌트
function ProductDetail() {
  const { category, id } = useParams();
  const categoryData = productData[category];
  const product = categoryData ? categoryData[id] : null;

  return (
    <div>
      <h2>상품 상세 정보</h2>
      <p>카테고리: {category}</p>
      <p>상품 ID: {id}</p>
      {product ? (
        <>
          <p>상품 이름: {product.name}</p>
          <p>가격: {product.price}원</p>
        </>
      ) : (
        <p>해당 상품 정보를 찾을 수 없습니다.</p>
      )}
    </div>
  );
}

// 4. 라우터 설정 예시 (상위 컴포넌트)
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 상품 상세 보기 경로 */}
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<TodoList/>} />
        <Route path="/todolist/:id" element={<TodoViewer/>} />
        <Route path="/product/:category/:id" element={<ProductDetail />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}