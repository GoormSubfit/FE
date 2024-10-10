import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from '../../styles/question/MusicQ5.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";
import useRecommendation from "../../hooks/useRecommendation";

const MusicQ5 = () => {
  const [selected, setSelected] = useState("");
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
      const answer5 = { question: "오프라인에서 음악을 듣는 기능이 필요하신가요?", answer: selected };

      // 기존 배열에 새 답변을 추가
      const updatedAnswers = [...previousAnswers, answer5];

      // 다음 페이지로 배열을 전달
      navigate('/musicq6', {
        state: {
          type, answers: updatedAnswers // 배열로 전달
        }
      });
      console.log("Updated answers with MusicQ5 (as array):", updatedAnswers); 
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
        <div className={styles.smallcircle}> </div>
        <div className={styles.activePage}>Step 5</div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}> 오프라인에서 음악을 듣는 기능이<br/> 필요하신가요?</p>
      </div>
      <div className={styles.options}>
      <button
          className={`${styles.optionBtn} ${selected.includes("오프라인 재생 기능이 필요함") ? styles.selected : ""}`}
          onClick={() => handleClick("오프라인 재생 기능이 필요함")}
        >
          네
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("항상 온라인으로 사용함") ? styles.selected : ""}`}
          onClick={() => handleClick("항상 온라인으로 사용함")}
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

export default MusicQ5;
