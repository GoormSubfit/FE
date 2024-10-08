import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/question/DeliveryQ3.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";

const DeliveryQ3 = () => {
  const [selected, setSelected] = useState("");
  const peoplecntOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();

  const handleClick = (deliveryPeoplecnt) => {
    if (selected === deliveryPeoplecnt) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(deliveryPeoplecnt); // 클릭된 버튼을 선택
    }
  };

  const goNext = () => {
    if (selected) {
      navigate('/deliveryq4'); 
    } else {
      alert('옵션을 선택해주세요.'); 
    }
  };

  return (
    <div className={styles.container}>
      <Back/>
      <Home/>
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
      <div className={styles.options} ref={peoplecntOptionsRef}>
      <button
          className={`${styles.optionBtn} ${selected.includes("aloneGroup") ? styles.selected : ""}`}
          onClick={() => handleClick("aloneGroup")}
        >
          혼자
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("group2to6") ? styles.selected : ""}`}
          onClick={() => handleClick("group2to6")}
        >
          2-6명
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("largeGroup") ? styles.selected : ""}`}
          onClick={() => handleClick("largeGroup")}
        >
          6명 이상(단체)
        </button>
      </div>
      <div>
        <button className={styles.next} onClick={goNext}>
          <img src={arrowIcon} alt="arrow" className={styles.arrow} />
        </button>
      </div>
    </div>
  );
};

export default DeliveryQ3;
