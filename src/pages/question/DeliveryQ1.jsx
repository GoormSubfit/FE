import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../../styles/question/DeliveryQ1.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";
import useRecommendation from "../../hooks/useRecommendation";

const DeliveryQ1 = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { updateAnswer } = useRecommendation(); 
  const {type} = location.state;

  const previousAnswers = location.state?.answers || [];


  const handleClick = (option) => {
    setSelected(option);
  };
  
  const goNext = () => {
    if (selected) {
      const answer1 = { question: "배달 음식을 얼마나 자주 주문하시나요?", answer: selected };
      const updatedAnswers = [...previousAnswers, answer1];

      // 상태 업데이트 확인
      console.log("Updating answers with:", updatedAnswers);
      updateAnswer(updatedAnswers);

      console.log("Updated answers with DeliveryQ1:", updatedAnswers); 
      navigate('/deliveryq2', { state: { type, answers: updatedAnswers } });
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
      <div className={styles.options}>
        <button
          className={`${styles.optionBtn} ${selected === "매일 주문함" ? styles.selected : ""}`}
          onClick={() => handleClick("매일 주문함")}
        >
          매일
        </button>
        <button
          className={`${styles.optionBtn} ${selected === "일주일에 1-2회 주문함" ? styles.selected : ""}`}
          onClick={() => handleClick("일주일에 1-2회 주문함")}
        >
          일주일에 1~2회
        </button>
        <button
          className={`${styles.optionBtn} ${
            selected === "한 달에 1-2회 주문함" ? styles.selected : ""
          }`}
          onClick={() => handleClick("한 달에 1-2회 주문함")}
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
