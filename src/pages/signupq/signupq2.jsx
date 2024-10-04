import React, { useState } from 'react';
import Arrow from '../../assets/images/signupq/arrow.svg';
import styles from '../../styles/signupq/signupq2.module.css';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);

  const cards = [
    'SKT','KT','LG'
  ];

  const handleCardClick = (card) => {
    if (selectedCards.includes(card)) {
      setSelectedCards(selectedCards.filter(c => c !== card));
    } else {
      setSelectedCards([...selectedCards, card]);
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
            className={`${styles["card-button"]} ${selectedCards.includes(card) ? styles["selected"] : ""}`}
            onClick={() => handleCardClick(card)}
          >
            {card}
          </div>
        ))}
      </div>
      <button className={styles["bottom-button"]}>
      <img src={Arrow} alt="Arrow Icon" className={styles["arrow-icon"]} />
      </button>
    </div>
  );
}

export default App;
