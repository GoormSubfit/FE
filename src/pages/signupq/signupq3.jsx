import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가
import Arrow from '../../assets/images/signupq/arrow.svg';
import styles from '../../styles/signupq/signupq3.module.css';
import useSignupForm3 from '../../hooks/useSignupForm3'; // useSignupForm3 훅 사용

function App() {
  const navigate = useNavigate(); // navigate 함수 사용
  const { card, setCard, allFieldsFilled, handleSubmit } = useSignupForm3(); // 훅에서 필요한 값 가져오기

  const cards = [
    '삼성카드', '현대카드', '국민카드', '신한카드', 'BC카드', '우리카드',
    '롯데카드', '농협카드', '씨티카드', '하나카드', '전북카드', '광주카드',
    '수협카드', '제주카드', 'IBK카드'
  ];

  const handleCardClick = (selectedCard) => {
    if (card === selectedCard) {
      setCard(''); 
    } else {
      setCard(selectedCard); 
    }
  };

  const handleButtonClick = () => {
    if (allFieldsFilled()) {
      handleSubmit(); 
      navigate('/profile'); 
    }
  };

  return (
    <div className={styles["app-container"]}>
      <p className={styles["title"]}>회원가입</p>
      <h2 className={styles["q1"]}>이용 중인 카드를 선택해 주세요</h2>
      <div className={styles["q-container"]}>
        {cards.map((cardItem) => (
          <div
            key={cardItem}
            className={`${styles["card-button"]} ${card === cardItem ? styles["selected"] : ""}`} // 선택된 카드 강조
            onClick={() => handleCardClick(cardItem)}
          >
            {cardItem}
          </div>
        ))}
      </div>
      <button
        className={styles["bottom-button"]}
        onClick={handleButtonClick} 
        disabled={!allFieldsFilled()} 
        style={{
          backgroundColor: allFieldsFilled() ? '#528DFF' : '#D9D9D9', 
          cursor: allFieldsFilled() ? 'pointer' : 'not-allowed' 
        }}
      >
        <img src={Arrow} alt="Arrow Icon" className={styles["arrow-icon"]} />
      </button>
    </div>
  );
}

export default App;
