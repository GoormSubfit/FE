import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from '../../styles/question/MusicQ2.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";
import useRecommendation from "../../hooks/useRecommendation";

const MusicQ2 = () => {
  const [selected, setSelected] = useState("");
  const deviceOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();
  const location = useLocation();
  const { type, answers } = location.state; 

  const previousAnswers = location.state?.answers || [];

  const handleClick = (option) => {
    setSelected(option);
  };

  const goNext = () => {
    if (selected) {
      // 새로운 질문-답변을 배열에 추가
      const answer2 = { question: "주로 어떤 기기로 음악을 듣나요?", answer: selected };

      // 기존 배열에 새 답변을 추가
      const updatedAnswers = [...previousAnswers, answer2];

      // 다음 페이지로 배열을 전달
      navigate('/musicq3', {
        state: {
          type, answers: updatedAnswers // 배열로 전달
        }
      });
      console.log("Updated answers with MusicQ2 (as array):", updatedAnswers); 
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
        <p className={styles.p}>주로 어떤 기기로 음악을 듣나요?
        </p>
      </div>
      <div className={styles.options} ref={deviceOptionsRef}>
        <button
          className={`${styles.optionBtn} ${selected.includes("스마트폰 주로 사용") ? styles.selected : ""}`}
          onClick={() => handleClick("스마트폰 주로 사용")}
        >
          스마트폰
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("태블릿 주로 사용") ? styles.selected : ""}`}
          onClick={() => handleClick("태블릿 주로 사용")}
        >
          태블릿
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("스마트 스피커 주로 사용") ? styles.selected : ""}`}
          onClick={() => handleClick("스마트 스피커 주로 사용")}
        >
          스마트 스피커
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("PC 주로 사용") ? styles.selected : ""}`}
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

export default MusicQ2;
