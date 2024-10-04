import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/question/DeliveryQ4.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";

const DeliveryQ4 = () => {
  const [selected, setSelected] = useState("");
  const useDpOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();
  const handleClick = (deliveryUseDp) => {
    if (selected === deliveryUseDp) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(deliveryUseDp); // 클릭된 버튼을 선택
    }
  };

  const goNext = () => {
    if (selected) {
      navigate('/deliveryq5'); 
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
        <div className={styles.smallcircle}> </div>
        <div className={styles.activePage}>Step 4</div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}> 결제 시 포인트 적립이나 할인 혜택을<br/>자주 사용하시나요?</p>
      </div>
      <div className={styles.options} ref={useDpOptionsRef}>
      <button
          className={`${styles.optionBtn} ${selected.includes("yes") ? styles.selected : ""}`}
          onClick={() => handleClick("yes")}
        >
          네
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("no") ? styles.selected : ""}`}
          onClick={() => handleClick("no")}
        >
          아니요
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

export default DeliveryQ4;
