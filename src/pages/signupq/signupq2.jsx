import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Arrow from '../../assets/images/signupq/arrow.svg';
import styles from '../../styles/signupq/signupq2.module.css';
import useSignupForm2 from '../../hooks/useSignupForm2'; 

function App() {
  const navigate = useNavigate(); 
  const { mobile, setMobile, allFieldsFilled, handleSubmit } = useSignupForm2(); 

  const cards = ['SKT', 'KT', 'LG'];

  const handleCardClick = (card) => {
    setMobile(card);
  };

  const handleButtonClick = () => {
    if (allFieldsFilled()) {
      handleSubmit(); 
      navigate('/signupq3'); 
    }
  };

  return (
    <div className={styles["app-container"]}>
      <p className={styles["title"]}>회원가입</p>
      <h2 className={styles["q1"]}>사용중인 통신사를 선택해 주세요</h2>
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
          cursor: allFieldsFilled() ? 'pointer' : 'not-allowed', 
        }}
      >
        <img src={Arrow} alt="Arrow Icon" className={styles["arrow-icon"]} />
      </button>
    </div>
  );
}

export default App;
