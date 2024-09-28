import React, { useState, useRef } from "react";
import styles from '../../styles/question/DeliveryQ4.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";

const DeliveryQ4 = () => {
  const [selected, setSelected] = useState("");
  const useDpOptionsRef = useRef(null);  // 스크롤 영역 참조

  const handleClick = (deliveryUseDp) => {
    if (selected === deliveryUseDp) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(deliveryUseDp); // 클릭된 버튼을 선택
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
        <div className={styles.smallcircle}> </div>
        <div className={styles.activePage}>Step 4</div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}> 결제 시 포인트 적립이나 할인 혜택을<br/>자주 사용하시나요?</p>
      </div>
      <div className={styles.useDpOptions} ref={useDpOptionsRef}>
      <button
          className={`${styles.deliveryUseDpBtn} ${selected.includes("yes") ? styles.selected : ""}`}
          onClick={() => handleClick("yes")}
        >
          네
        </button>
        <button
          className={`${styles.deliveryUseDpBtn} ${selected.includes("no") ? styles.selected : ""}`}
          onClick={() => handleClick("no")}
        >
          아니요
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

export default DeliveryQ4;
