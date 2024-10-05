import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/question/DeliveryQ2.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/back";
import Home from "../../components/Home";

const DeliveryQ2 = () => {
  const [selected, setSelected] = useState("");
  const fdcostOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();

  const handleClick = (deliveryFdcost) => {
    if (selected === deliveryFdcost) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(deliveryFdcost); // 클릭된 버튼을 선택
    }
  };

  const goNext = () => {
    if (selected) {
      navigate('/deliveryq3'); 
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
        <div className={styles.activePage}>Step 2</div>
        <div className={styles.midcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>배달 음식의 평균 가격대는 얼마인가요?</p>
      </div>
      <div className={styles.options} ref={fdcostOptionsRef}>
        <button
          className={`${styles.optionBtn} ${selected.includes("lte10000") ? styles.selected : ""}`}
          onClick={() => handleClick("lte10000")}
        >
          10,000원 이하
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("10000to20000") ? styles.selected : ""}`}
          onClick={() => handleClick("10000to20000")}
        >
          10,000원~20,000원
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes(" gte20000") ? styles.selected : ""}`}
          onClick={() => handleClick(" gte20000")}
        >
          20,000원 이상
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

export default DeliveryQ2;
