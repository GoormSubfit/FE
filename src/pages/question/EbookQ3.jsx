import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from '../../styles/question/EbookQ1.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";
import useRecommendation from "../../hooks/useRecommendation";

const EbookQ3 = () => {
  const prefOptionsRef = useRef(null);
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
      const answer3 = { question: "선호하는 책의 장르는 무엇인가요?", answer: selected };

      // 기존 배열에 새 답변을 추가
      const updatedAnswers = [...previousAnswers, answer3];

      // 다음 페이지로 배열을 전달
      navigate('/ebookq4', {
        state: {
          type, answers: updatedAnswers // 배열로 전달
        }
      });
      console.log("Updated answers with EbookQ3 (as array):", updatedAnswers); 
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
        <div className={styles.activePage}>Step 3</div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>선호하는 책의 장르는 무엇인가요?</p>
      </div>
      <div className={styles.options} ref={prefOptionsRef}>
      <button
          className={`${styles.optionBtn} ${selected.includes("소설 선호") ? styles.selected : ""}`}
          onClick={() => handleClick("소설 선호")}
        >
          소설 선호
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("자기계발서 선호") ? styles.selected : ""}`}
          onClick={() => handleClick("자기계발서 선호")}
        >
          자기계발서
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("비즈시스 선호") ? styles.selected : ""}`}
          onClick={() => handleClick("비즈시스 선호")}
        >
          비즈니스
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("역사 선호") ? styles.selected : ""}`}
          onClick={() => handleClick("역사 선호")}
        >
          역사
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("과학 선호") ? styles.selected : ""}`}
          onClick={() => handleClick("과학 선호")}
        >
          과학
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("만화 선호") ? styles.selected : ""}`}
          onClick={() => handleClick("만화 선호")}
        >
          만화
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

export default EbookQ3;