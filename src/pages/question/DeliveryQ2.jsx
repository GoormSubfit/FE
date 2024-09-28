import React, { useState, useRef } from "react";
import styles from '../../styles/question/DeliveryQ2.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";

const DeliveryQ2 = () => {
  const [selected, setSelected] = useState("");
  const fdcostOptionsRef = useRef(null);  // 스크롤 영역 참조

  const handleClick = (deliveryFdcost) => {
    if (selected === deliveryFdcost) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(deliveryFdcost); // 클릭된 버튼을 선택
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.back}>
            <img src={backIcon} alt="backbutton" className={styles.backbutton} />
        </button>
        <button className={styles.home}>
          <img src={homeIcon} alt="homebtn" className={styles.homebtn} />
        </button>
      </div>
      <div className={styles.questionStep}>
        <div className={styles.line}>
          <img src={line} alt="line" className={styles.line} />
        </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.activePage}>Step 2</div>
        <div className={styles.midcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>배달 음식의 평균 가격대는 얼마인가요?</p>
      </div>
      <div className={styles.fdcostOptions} ref={fdcostOptionsRef}>
        <button
          className={`${styles.deliveryFdcostBtn} ${selected.includes("lte10000") ? styles.selected : ""}`}
          onClick={() => handleClick("lte10000")}
        >
          10,000원 이하
        </button>
        <button
          className={`${styles.deliveryFdcostBtn} ${selected.includes("10000to20000") ? styles.selected : ""}`}
          onClick={() => handleClick("10000to20000")}
        >
          10,000원~20,000원
        </button>
        <button
          className={`${styles.deliveryFdcostBtn} ${selected.includes(" gte20000") ? styles.selected : ""}`}
          onClick={() => handleClick(" gte20000")}
        >
          20,000원 이상
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

export default DeliveryQ2;
