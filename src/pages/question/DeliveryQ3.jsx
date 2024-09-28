import React, { useState, useRef } from "react";
import styles from '../../styles/question/DeliveryQ3.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";

const DeliveryQ3 = () => {
  const [selected, setSelected] = useState("");
  const peoplecntOptionsRef = useRef(null);  // 스크롤 영역 참조

  const handleClick = (deliveryPeoplecnt) => {
    if (selected === deliveryPeoplecnt) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(deliveryPeoplecnt); // 클릭된 버튼을 선택
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.back}>
          <img src={backIcon} alt="backbutton" className={styles.backbutton} />
        </button>
        <button className={styles.home}>
          <img src={homeIcon} alt="homebutton" className={styles.homebutton} />
        </button>
      </header>
      <div className={styles.questionStep}>
        <div className={styles.line}>
          <img src={line} alt="line" className={styles.line} />
        </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.activePage}>Step 3</div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>주로 배달 음식을 몇 명이 함께 먹나요?</p>
      </div>
      <div className={styles.peoplecntOptions} ref={peoplecntOptionsRef}>
      <button
          className={`${styles.deliveryPeoplecntBtn} ${selected.includes("aloneGroup") ? styles.selected : ""}`}
          onClick={() => handleClick("aloneGroup")}
        >
          혼자
        </button>
        <button
          className={`${styles.deliveryPeoplecntBtn} ${selected.includes("group2to6") ? styles.selected : ""}`}
          onClick={() => handleClick("group2to6")}
        >
          2-6명
        </button>
        <button
          className={`${styles.deliveryPeoplecntBtn} ${selected.includes("largeGroup") ? styles.selected : ""}`}
          onClick={() => handleClick("largeGroup")}
        >
          6명 이상(단체)
        </button>
      </div>
      <div>
        <button className={styles.next}>
          <img src={arrowIcon} alt="arrow" className={styles.arrow} />
        </button>
      </div>
    </div>
  );
};

export default DeliveryQ3;
