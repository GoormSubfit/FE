import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet을 사용하여 자식 컴포넌트를 렌더링
import Back from './Back'; // Back 컴포넌트 가져오기

export default function Layout() {
  return (
    <div>
      <header>
        <Back /> {/* 뒤로 가기 버튼을 넣음 */}
      </header>
      
      <main>
        <Outlet /> {/* 이 부분에 각 페이지의 콘텐츠가 들어감 */}
      </main>
    </div>
  );
}
