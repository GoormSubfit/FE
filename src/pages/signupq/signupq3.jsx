import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Arrow from '../../assets/images/signupq/arrow.svg';
import styles from '../../styles/signupq/signupq3.module.css';
import useSignupForm3 from '../../hooks/useSignupForm3';
import axios from 'axios';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, age, job, mobile, gender, userId, password } = location.state; // gender 추가

  const { card, setCard, allFieldsFilled } = useSignupForm3();

  const cardMapping = {
    '삼성카드': 'SAMSUNG',
    '현대카드': 'HYUNDAI',
    '국민카드': 'KB',
    '신한카드': 'SHINHAN',
    'BC카드': 'BC',
    '우리카드': 'WOORI',
    '롯데카드': 'LOTTE',
    '농협카드': 'NH',
    '씨티카드': 'CITI',
    '하나카드': 'HANA',
    '전북카드': 'JEONBUK',
    '광주카드': 'GWANGJU',
    '수협카드': 'SUHYEOP',
    '제주카드': 'JEJU',
    'IBK카드': 'IBK'
  };

  const handleSubmit = async () => {
    if (allFieldsFilled()) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('age', age);
      formData.append('job', job);
      formData.append('mobile', mobile);
      formData.append('gender', gender);
      formData.append('userId', userId);
      formData.append('password', password);
      
      const mappedCard = cardMapping[card];
      formData.append('card', mappedCard); 

      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      try {
        const response = await axios.post('http://15.164.28.108:8080/users/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('성공:', response.data);
        navigate('/profile', { state: { name } }); 
      } catch (error) {
        console.error('에러 발생:', error.response ? error.response.data : error.message);
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
        onClick={handleSubmit} 
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