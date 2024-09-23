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
          className={`${styles.button} ${
            selected.includes("ebook") ? styles.select_ebook : ""
          }`}
          onClick={() => handleClick("ebook")}
        >
          ebook
        </button>

        <button
          className={`${styles.button} ${
            selected.includes("ott") ? styles.select_ott : ""
          }`}
          onClick={() => handleClick("ott")}
        >
          OTT
        </button>

        <button
          className={`${styles.button} ${
            selected.includes("deliver") ? styles.select_deliver : ""
          }`}
          onClick={() => handleClick("deliver")}
        >
          배송<br />멤버십
        </button>

        <button
          className={`${styles.button} ${
            selected.includes("cloud") ? styles.select_cloud : ""
          }`}
          onClick={() => handleClick("cloud")}
        >
          클라우드
        </button>

        <button
          className={`${styles.button} ${
            selected.includes("music") ? styles.select_music : ""
          }`}
          onClick={() => handleClick("music")}
        >
          음악
        </button>

        <button className={styles.next}>
          <img src={arrowIcon} alt="arrow" className={styles.arrow} />
        </button>
      </div>
    </div>
  );
};

export default Home;
