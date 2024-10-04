import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/question/DeliveryQ7.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";

const DeliveryQ7 = () => {
  const [selected, setSelected] = useState("");
  const ffOrderOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();

  const handleClick = (deliveryffOrder) => {
    if (selected === deliveryffOrder) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(deliveryffOrder); // 클릭된 버튼을 선택
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
        <div className={styles.smallcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.activePage}>Step 7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>신선 식품을 주문하실 계획이 있나요?</p>
      </div>
      <div className={styles.options} ref={ffOrderOptionsRef}>
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
        <button className={styles.next}>
          <img src={arrowIcon} alt="arrow" className={styles.arrow} />
        </button>
      </div>
    </div>
  );
};

export default DeliveryQ7;
