import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'; 
import styles from '../../styles/recommend/recommend.module.css';
import useRecommendationList from '../../hooks/useRecommendationList'; // 방금 만든 훅을 import

function App() {
  const [category, setCategory] = useState('OTT'); // 기본 카테고리 설정
  const { data, loading, error } = useRecommendationList(); // 데이터 가져오기
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setCategory(category); // 선택된 카테고리로 설정
  };

  // 선택된 카테고리별로 데이터를 필터링
  const filteredData = data.filter(item => item.type === category);

  return (
    <div className={styles["app-container"]}>
      <div className={styles["history-container"]}>
        <p className={styles["top-comment"]}>김서현님의 질문 모음</p>
        <p className={styles["history-comment"]}>히스토리</p>
        <div className={styles["button-group"]}>
          <button onClick={() => handleCategoryClick('OTT')} className={styles["small-button"]}>OTT</button>
          <button onClick={() => handleCategoryClick('MUSIC')} className={styles["small-button"]}>Music</button>
          <button onClick={() => handleCategoryClick('DELIVERY')} className={styles["small-button"]}>Delivery</button>
          <button onClick={() => handleCategoryClick('CLOUD')} className={styles["small-button"]}>Cloud</button>
          <button onClick={() => handleCategoryClick('EBOOK')} className={styles["small-button"]}>E-book</button>
        </div>
      </div>

      <div className={styles["result-container"]}>
        <div className={styles["rcomment-container"]}>
          <p className={styles["result-comment1"]}>총 {filteredData.length}건의 결과가 있어요</p>
          <button className={styles["array"]}>정렬 조건</button>
        </div>

        {/* 로딩 상태 */}
        {loading && <p>로딩 중...</p>}

        {/* 에러 처리 */}
        {error && <p>에러 발생: {error.message}</p>}

        {/* 슬라이더에 필터된 결과 표시 */}
        <div className={styles["slider-container"]}>
          <div className={styles["slider"]}>
            {filteredData.map((item, index) => (
              <div className={styles["result-box"]}>
  <div className={styles["left-section"]}>
    <h3 className={styles["type"]}>{item.type}</h3>
    <h3 className={styles["serviceName"]}>{item.serviceName}</h3>
  </div>
  <div className={styles["seperate-line"]}></div> {/* 분리선 */}
  <div className={styles["right-section"]}>
  <p className={styles["createdAt"]}>{item.createdAt}</p>
   <p className={styles["price"]}>가격: {item.price}</p>
    <p className={styles["userAnswer"]}> {item.userAnswer}</p>

  </div>
</div>

            ))}
          </div>
        </div>

        <button className={styles["bottom-button"]} onClick={() => navigate('/RecHome')}>
          새로운 추천 시작
        </button>
      </div>
    </div>
  );
}

export default App;
