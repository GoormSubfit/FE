// src/pages/home/Home.jsx
import React, { useState } from "react";
import styles from "../../styles/home/Home.module.css";
import arrowIcon from "/src/assets/images/arrow.svg";

const Home = () => {
  const [selected, setSelected] = useState([]); // 복수 선택 상태 관리 (배열)

  const handleClick = (buttonName) => {
    if (selected.includes(buttonName)) {
      // 이미 선택된 경우 배열에서 제거
      setSelected(selected.filter((item) => item !== buttonName));
    } else {
      // 선택되지 않은 경우 배열에 추가
      setSelected([...selected, buttonName]);
    }
  };

  return (
    <div className={styles.homeContainer}>
      <h2>구독중인 서비스를 모두 선택해주세요</h2>
      <div className={styles.optionsGrid}>
        <button
          className={`${styles.ebook} ${
            selected.includes("ebook") ? styles.selectEbook : ""
          }`}
          onClick={() => handleClick("ebook")}
        >
          <span className={styles.text}>ebook</span>
        </button>

        <button
          className={`${styles.ott} ${
            selected.includes("ott") ? styles.selectOtt : ""
          }`}
          onClick={() => handleClick("ott")}
        >
          <span className={styles.text}>OTT</span>
        </button>

        <button
          className={`${styles.deliver} ${
            selected.includes("deliver") ? styles.selectDeliver : ""
          }`}
          onClick={() => handleClick("deliver")}
        >
          <span className={styles.text}>배송<br />멤버십</span>
        </button>

        <button
          className={`${styles.cloud} ${
            selected.includes("cloud") ? styles.selectCloud : ""
          }`}
          onClick={() => handleClick("cloud")}
        >
          <span className={styles.text}>클라우드</span>
        </button>

        <button
          className={`${styles.music} ${
            selected.includes("music") ? styles.selectMusic : ""
          }`}
          onClick={() => handleClick("music")}
        >
          <span className={styles.text}>음악</span>
        </button>

        <button className={styles.next}>
          <img src={arrowIcon} alt="arrow" className={styles.arrow} />
        </button>
      </div>
    </div>
  );
};

export default Home;
