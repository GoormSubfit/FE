import React, { useState } from 'react';
import Arrow from '../../assets/images/signupq/arrow.svg';
import styles from '../../styles/signupq/signupq3.module.css';

function App() {
  const [selectedBanks, setSelectedBanks] = useState([]);

  const banks = [
    '카카오뱅크', '토스뱅크', '우리은행', '국민은행', '신한은행', '기업은행',
    'SC제일은행', '씨티은행', 'K뱅크', '지역농협', '우체국', '수협은행',
    '산업은행', '대구은행', '부산은행', '광주은행', '제주은행', '전북은행',
    '새마을금고', 'NH농협은행', '신협은행', 'SBI저축은행', '산림조합은행', '상호저축은행'
  ];

  const handleBankClick = (bank) => {
    if (selectedBanks.includes(bank)) {
      setSelectedBanks(selectedBanks.filter(b => b !== bank));
    } else {
      setSelectedBanks([...selectedBanks, bank]);
    }
  };

  return (
    <div className={styles["app-container"]}>
      <p className={styles["title"]}>회원가입</p>
      <h2 className={styles["q1"]}>이용 중인 은행을 선택해 주세요</h2>
      <div className={styles["q-container"]}>
        {banks.map(bank => (
          <div
            key={bank}
            className={`${styles["bank-button"]} ${selectedBanks.includes(bank) ? styles["selected"] : ""}`}
            onClick={() => handleBankClick(bank)}
          >
            {bank}
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
