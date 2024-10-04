import React, { useState } from 'react';
import styles from '../../styles/recommend/recommend.module.css';

function App() {
    const [category, setCategory] = useState('OTT'); 

    const handleCategoryClick = (category) => {
        setCategory(category); 
    };

    return (
      <div className={styles["app-container"]}>
        <div className={styles["history-container"]}>
          <p className={styles["top-comment"]}>김서현님의 질문 모음</p>
          <p className={styles["history-comment"]}>히스토리</p>
          <div className={styles["button-group"]}>
            <button onClick={() => handleCategoryClick('OTT')} className={styles["small-button"]}>OTT</button>
            <button onClick={() => handleCategoryClick('Music')} className={styles["small-button"]}>Music</button>
            <button onClick={() => handleCategoryClick('Delivery')} className={styles["small-button"]}>Delivery</button>
            <button onClick={() => handleCategoryClick('Cloud')} className={styles["small-button"]}>Cloud</button>
            <button onClick={() => handleCategoryClick('E-book')} className={styles["small-button"]}>E-book</button>
          </div>
        </div>
        
        <div className={styles["result-container"]}>
            <div className={styles["rcomment-container"]}> 
            <p className={styles["result-comment1"]}>총 3건의 결과가 있어요</p>
            <button className={styles["array"]}>정렬 조건</button>
          </div>
          <div className={styles["slider-container"]}>
            <div className={styles["slider"]}>
              <div className={styles["result-box"]}>결과 1</div>
              <div className={styles["result-box"]}>결과 2</div>
              <div className={styles["result-box"]}>결과 3</div>
              <div className={styles["result-box"]}>결과 4</div>
            </div>
          </div>
          <button className={styles["bottom-button"]}>
        새로운 추천 시작
          </button>
        </div>
      </div>
    );
  }
  
export default App;
