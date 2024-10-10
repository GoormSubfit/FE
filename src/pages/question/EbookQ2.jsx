import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from '../../styles/question/EbookQ1.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";
import useRecommendation from "../../hooks/useRecommendation";

const EbookQ2 = () => {
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
      const answer2 = { question: "한 달에 몇 권 정도의 책을 읽으시나요?", answer: selected };

      // 기존 배열에 새 답변을 추가
      const updatedAnswers = [...previousAnswers, answer2];

      // 다음 페이지로 배열을 전달
      navigate('/ebookq3', {
        state: {
          type, answers: updatedAnswers // 배열로 전달
        }
      });
      console.log("Updated answers with EbookQ2 (as array):", updatedAnswers); 
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
        <p className={styles.p}>한 달에 몇 권 정도의 책을 읽으시나요?</p>
      </div>
      <div className={styles.options}>
        <button
          className={`${styles.optionBtn} ${selected.includes("한 달에 1권 이하") ? styles.selected : ""}`}
          onClick={() => handleClick("한 달에 1권 이하")}
        >
          1권 이하
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("한 달에 2-4권") ? styles.selected : ""}`}
          onClick={() => handleClick("한 달에 2-4권")}
        >
          2~4권
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("한 달에 5권 이상") ? styles.selected : ""}`}
          onClick={() => handleClick("한 달에 5권 이상")}
        >
          5권 이상
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

export default EbookQ2;
