import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from '../../styles/question/EbookQ1.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";
import useRecommendation from "../../hooks/useRecommendation";

const MusicQ6 = () => {
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
      const answer6 = { question: "음악 외에 팟캐스트나 오디오북도 자주 들으시나요?", answer: selected };

      // 기존 배열에 새 답변을 추가
      const updatedAnswers = [...previousAnswers, answer6];

      // 다음 페이지로 배열을 전달
      navigate('/musicq7', {
        state: {
          type, answers: updatedAnswers // 배열로 전달
        }
      });
      console.log("Updated answers with MusicQ6 (as array):", updatedAnswers); 
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
        <div className={styles.smallcircle}> </div>
        <div className={styles.activePage}>Step 6</div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>음악 외에 팟캐스트나 오디오북도<br/> 자주 들으시나요?
        </p>
      </div>
      <div className={styles.options}>
        <button
          className={`${styles.optionBtn} ${selected.includes("팟캐스트/오디오북도 즐겨 사용함") ? styles.selected : ""}`}
          onClick={() => handleClick("팟캐스트/오디오북도 즐겨 사용함")}
        >
          네
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("팟캐스트/오디오북도 자주 사용 안함") ? styles.selected : ""}`}
          onClick={() => handleClick("팟캐스트/오디오북도 자주 사용 안함")}
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

export default MusicQ6;