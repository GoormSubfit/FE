import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from '../../styles/question/EbookQ1.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";
import useRecommendation from "../../hooks/useRecommendation";

const EbookQ1 = () => {
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
      const answer1 = { question: "하루 평균 독서 시간은 얼마나 되나요?", answer: selected };
      const updatedAnswers = [...previousAnswers, answer1];

      // 상태 업데이트 확인
      console.log("Updating answers with:", updatedAnswers);
      updateAnswer(updatedAnswers);

      console.log("Updated answers with EbookQ1:", updatedAnswers); 
      navigate('/ebookq2', { state: {type, answers: updatedAnswers } });
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
        <p className={styles.p}>하루 평균 독서 시간은 얼마나 되나요?</p>
      </div>
      <div className={styles.options}>
        <button
          className={`${styles.optionBtn} ${selected === "하루 1시간 이하 독서" ? styles.selected : ""}`}
          onClick={() => handleClick("하루 1시간 이하 독서")}
        >
          1시간 이하
        </button>
        <button
          className={`${styles.optionBtn} ${selected === "하루 2시간 독서" ? styles.selected : ""}`}
          onClick={() => handleClick("하루 2시간 독서")}
        >
          2시간
        </button>
        <button
          className={`${styles.optionBtn} ${
            selected === "하루 3시간 이상 독서" ? styles.selected : ""
          }`}
          onClick={() => handleClick("하루 3시간 이상 독서")}
        >
          3시간 이상
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

export default EbookQ1;