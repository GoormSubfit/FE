import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Arrow from '../../assets/images/signupq/arrow.svg';
import styles from '../../styles/signupq/signupq2.module.css';
import useSignupForm2 from '../../hooks/useSignupForm2';

function App() {
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const { name, age, job, gender, userId, password } = location.state; // gender 추가

  const { mobile, setMobile, allFieldsFilled } = useSignupForm2(); 

  const handleCardClick = (card) => {
    setMobile(card);
  };

  const handleButtonClick = () => {
    if (allFieldsFilled()) {
      // signupq3로 gender를 포함하여 상태 전달
      navigate('/signupq3', { state: { name, age, job, gender, mobile, userId, password } });
    }
  };

  const cards = ['SKT', 'KT', 'LG'];

  return (
    <div className={styles["app-container"]}>
      <p className={styles["title"]}>회원가입</p>
      <h2 className={styles["q1"]}>사용 중인 통신사를 선택해 주세요</h2>
      <div className={styles["q-container"]}>
        {cards.map(card => (
          <div
            key={card}
            className={`${styles["card-button"]} ${mobile === card ? styles["selected"] : ""}`}
            onClick={() => handleCardClick(card)}
          >
            {card}
          </div>
        ))}
      </div>
      <button
        className={styles["bottom-button"]}
        onClick={handleButtonClick}
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
