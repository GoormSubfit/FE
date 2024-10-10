import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from '../../styles/question/EbookQ1.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";
import useRecommendation from "../../hooks/useRecommendation";

const MusicQ1 = () => {
  const [selected, setSelected] = useState("");
  const genreOptionsRef = useRef(null);  // 스크롤 영역 참조
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
      const answer1 = { question: "주로 듣는 음악 장르는 무엇인가요?", answer: selected };
      const updatedAnswers = [...previousAnswers, answer1];

      // 상태 업데이트 확인
      console.log("Updating answers with:", updatedAnswers);
      updateAnswer(updatedAnswers);

      console.log("Updated answers with MusicQ1:", updatedAnswers); 
      navigate('/musicq2', { state: { type, answers: updatedAnswers } });
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
        <p className={styles.p}>주로 듣는 음악 장르는 무엇인가요?</p>
      </div>
      <div className={styles.options} ref={genreOptionsRef}>
        <button
          className={`${styles.optionBtn} ${selected.includes("팝") ? styles.selected : ""}`}
          onClick={() => handleClick("팝")}
        >
          팝
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("힙합") ? styles.selected : ""}`}
          onClick={() => handleClick("힙합")}
        >
          힙합
        </button>
        <button
          className={`${styles.optionBtn} ${
            selected.includes("클래식") ? styles.selected : ""
          }`}
          onClick={() => handleClick("클래식")}
        >
          클래식
        </button>
        <button
          className={`${styles.optionBtn} ${
            selected.includes("재즈") ? styles.selected : ""
          }`}
          onClick={() => handleClick("재즈")}
        >
          재즈
        </button>
        <button
          className={`${styles.optionBtn} ${
            selected.includes("K-pop") ? styles.selected : ""
          }`}
          onClick={() => handleClick("K-pop")}
        >
          K-pop
        </button>
        <button
          className={`${styles.optionBtn} ${
            selected.includes("EDM") ? styles.selected : ""
          }`}
          onClick={() => handleClick("EDM")}
        >
          EDM
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

export default MusicQ1;