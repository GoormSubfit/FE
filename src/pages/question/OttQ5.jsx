import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from '../../styles/question/EbookQ1.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";
import useRecommendation from "../../hooks/useRecommendation";

const OttQ5 = () => {
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
      const answer5 = { question: "해외 콘텐츠(미국, 유럽, 일본 등)에 대한 선호도는 어떤가요?", answer: selected };

      // 기존 배열에 새 답변을 추가
      const updatedAnswers = [...previousAnswers, answer5];

      // 다음 페이지로 배열을 전달
      navigate('/ottq6', {
        state: {
          type, answers: updatedAnswers // 배열로 전달
        }
      });
      console.log("Updated answers with OttQ5 (as array):", updatedAnswers); 
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
        <p className={styles.p}>해외 콘텐츠(미국, 유럽, 일본 등)에<br/>대한 선호도는 어떤가요?</p>
      </div>
      <div className={styles.options}>
        <button
          className={`${styles.optionBtn} ${selected === "해외 콘텐츠 매우 선호함" ? styles.selected : ""}`}
          onClick={() => handleClick("해외 콘텐츠 매우 선호함")}
        >
          매우 선호
        </button>
        <button
          className={`${styles.optionBtn} ${selected === "해외 콘텐츠 어느 정도 선호함" ? styles.selected : ""}`}
          onClick={() => handleClick("해외 콘텐츠 어느 정도 선호함")}
        >
          선호
        </button>
        <button
          className={`${styles.optionBtn} ${selected === "해외 콘텐츠 선호하지 않음" ? styles.selected : ""}`}
          onClick={() => handleClick("해외 콘텐츠 선호하지 않음")}
        >
          선호하지 않음
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

export default OttQ5;
