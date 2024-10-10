import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../../styles/question/CloudQ3.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";
import useRecommendation from "../../hooks/useRecommendation";

const CloudQ4 = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const {type, answers} = location.state; // 이전 페이지의 답변을 가져옵니다.

  const previousAnswers = location.state?.answers || [];

  const handleClick = (option) => {
    setSelected(option);
  };

  const goNext = () => {
    if (selected) {
      // 새로운 질문-답변을 배열에 추가
      const answer4 = { question: "주로 어떤 기기에서 클라우드 서비스를 사용하시나요?", answer: selected };

      // 기존 배열에 새 답변을 추가
      const updatedAnswers = [...previousAnswers, answer4];

      // 다음 페이지로 배열을 전달
      navigate('/cloudq5', {
        state: {
          type, answers: updatedAnswers // 배열로 전달
        }
      });
      console.log("Updated answers with CloudQ4 (as array):", updatedAnswers); 
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
        <p className={styles.p}> 주로 어떤 기기에서 클라우드 서비스를<br/>사용하시나요?</p>
      </div>
      <div className={styles.options}>
        <button
          className={`${styles.optionBtn} ${selected === "스마트폰 주로 사용" ? styles.selected : ""}`}
          onClick={() => handleClick("스마트폰 주로 사용")}
        >
          스마트폰
        </button>
        <button
          className={`${styles.optionBtn} ${selected === "태블릿 주로 사용" ? styles.selected : ""}`}
          onClick={() => handleClick("태블릿 주로 사용")}
        >
          태블릿
        </button>
        <button
          className={`${styles.optionBtn} ${selected === "PC 주로 사용" ? styles.selected : ""}`}
          onClick={() => handleClick("PC 주로 사용")}
        >
          PC
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

export default CloudQ4;