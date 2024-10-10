import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginBack from './LoginBack'; // Back 컴포넌트 import

export default function BackLayout() {
  return (
    <div className="layout-container">
      <header>
        <LoginBack /> {/* 뒤로 가기 버튼 */}
      </header>

      <main>
        <Outlet /> {/* 각 페이지의 콘텐츠가 여기에 들어감 */}
      </main>
    </div>
  );
}