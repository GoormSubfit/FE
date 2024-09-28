import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/question/DeliveryQ1.module.css';
import line from "/src/assets/images/question-line.svg";
import backBtn from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeBtn from "/src/assets/images/home-button.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";

const DeliveryQ1 = () => {
  const [selected, setSelected] = useState("");
  const fdfreqOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();
  
  const handleClick = (deliveryFdfreq) => {
    if (selected === deliveryFdfreq) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(deliveryFdfreq); // 클릭된 버튼을 선택
    }
  };

  const goNext = () => {
    if (selected) {
      navigate('/deliveryq2'); 
    } else {
      alert('옵션을 선택해주세요.'); 
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.back} onClick={goBack}>
          <img src={backBtn} alt="backbutton" className={styles.backbutton} />
        </button>
        <button className={styles.home}>
          <img src={homeBtn} alt="homebutton" className={styles.homebutton} />
        </button>
      </header>
      <div className={styles.questionStep}>
        <div className={styles.line}>
          <img src={line} alt="line" className={styles.line} />
        </div>
        <div className={styles.activePage}>Step 1</div>
        <div className={styles.midcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>배달 음식을 얼마나 자주 주문하시나요?</p>
      </div>
      <div className={styles.fdfreqOptions} ref={fdfreqOptionsRef}>
        <button
          className={`${styles.deliveryFdfreqBtn} ${selected.includes(" dailyfreq") ? styles.selected : ""}`}
          onClick={() => handleClick(" dailyfreq")}
        >
          매일
        </button>
        <button
          className={`${styles.deliveryFdfreqBtn} ${selected.includes("weekly1to2") ? styles.selected : ""}`}
          onClick={() => handleClick("weekly1to2")}
        >
          일주일에 1~2회
        </button>
        <button
          className={`${styles.deliveryFdfreqBtn} ${
            selected.includes("monthly1to2") ? styles.selected : ""
          }`}
          onClick={() => handleClick("monthly1to2")}
        >
          한 달에 1~2회
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

export default DeliveryQ1;
