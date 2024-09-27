// src/pages/home/RecommendationHome.jsx
import React, { useState } from "react";
import styles from "../../styles/home/RecommendationHome.module.css";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";

const RecommendationHome = () => {
  const [selected, setSelected] = useState(""); // 단일 선택 상태 관리 (문자열)

  const handleClick = (buttonName) => {
    // 클릭된 버튼이 현재 선택된 버튼과 같다면 선택 해제
    if (selected === buttonName) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(buttonName); // 클릭된 버튼을 선택
    }
  };

  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <button className={styles.home}>
          <img src={homeIcon} alt="homebutton" className={styles.homebutton} />
        </button>
      </header>
      <div className={styles.question}>
        <p className={styles.p}>추천을 받고 싶은 항목을<br />선택해 주세요!</p>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.optionsGrid}>
          <div className={styles.column1}>
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
              className={`${styles.delivery} ${
                selected.includes("delivery") ? styles.selectDelivery : ""
              }`}
              onClick={() => handleClick("delivery")}
            >
              <span className={styles.text}>배송<br />멤버십</span>
            </button>
          </div>
          <div className={styles.column2}>
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
          </div>
        </div>
        <button className={styles.next}>
          <img src={arrowIcon} alt="arrow" className={styles.arrow} />
        </button>
      </div>
    </div>
  );
};

export default RecommendationHome;
