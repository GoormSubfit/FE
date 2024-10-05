import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Arrow from '../../assets/images/signupq/arrow.svg';
import styles from '../../styles/signupq/signupq3.module.css';
import useSignupForm3 from '../../hooks/useSignupForm3';
import axios from 'axios';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, age, job, mobile } = location.state; // 이전 단계에서 받은 모든 상태

  const { card, setCard, allFieldsFilled } = useSignupForm3();

  const handleSubmit = async () => {
    if (allFieldsFilled()) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('age', age);
      formData.append('job', job);
      formData.append('mobile', mobile);
      formData.append('card', card);

      try {
        const response = await axios.post('http://15.164.28.108:8080/users/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('성공:', response.data);
        navigate('/profile'); // 성공 시 프로필 페이지로 이동
      } catch (error) {
        console.error('에러 발생:', error);
      }
    }
  };

  const cards = [
    '삼성카드', '현대카드', '국민카드', '신한카드', 'BC카드', '우리카드',
    '롯데카드', '농협카드', '씨티카드', '하나카드', '전북카드', '광주카드',
    '수협카드', '제주카드', 'IBK카드'
  ];

  const handleCardClick = (selectedCard) => {
    setCard(selectedCard);
  };

  return (
    <div className={styles["app-container"]}>
      <p className={styles["title"]}>회원가입</p>
      <h2 className={styles["q1"]}>이용 중인 카드를 선택해 주세요</h2>
      <div className={styles["q-container"]}>
        {cards.map((cardItem) => (
          <div
            key={cardItem}
            className={`${styles["card-button"]} ${card === cardItem ? styles["selected"] : ""}`}
            onClick={() => handleCardClick(cardItem)}
          >
            {cardItem}
          </div>
        ))}
      </div>
      <button
        className={styles["bottom-button"]}
        onClick={handleSubmit} // 최종 POST 요청
        disabled={!allFieldsFilled()}
        style={{
          backgroundColor: allFieldsFilled() ? '#528DFF' : '#D9D9D9',
        }}
      >
        <img src={Arrow} alt="Arrow Icon" className={styles["arrow-icon"]} />
      </button>
    </div>
  );
}

export default App;
