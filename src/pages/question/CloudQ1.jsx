import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../../styles/question/CloudQ1.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";
import useRecommendation from "../../hooks/useRecommendation";

const CloudQ1 = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const {type} = location.state;
  const { result, updateAnswer } = useRecommendation(); 

  const previousAnswers = location.state?.answers || [];


  const handleClick = (option) => {
    setSelected(option);
  };
  
  const goNext = () => {
    if (selected) {
      const answer1 = { question: "클라우드를 주로 어떤 용도로 사용하시나요?", answer: selected };
      const updatedAnswers = [...previousAnswers, answer1];

      // 상태 업데이트 확인
      console.log("Updating answers with:", updatedAnswers);
      updateAnswer(updatedAnswers);

      console.log("Updated answers with CloudQ1:", updatedAnswers); 
      navigate('/cloudq2', { state: { type, answers: updatedAnswers } });
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
        <div className={styles.midcircle}></div>
        <div className={styles.smallcircle}></div>
        <div className={styles.smallcircle}></div>
        <div className={styles.midcircle}></div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>클라우드를 주로 어떤 용도로<br/>사용하시나요?</p>
      </div>
      <div className={styles.options}>
        <button
          className={`${styles.optionBtn} ${selected === "파일 백업 용도로 주로 사용" ? styles.selected : ""}`}
          onClick={() => handleClick("파일 백업 용도로 주로 사용")}
        >
          파일 백업
        </button>
        <button
          className={`${styles.optionBtn} ${selected === "문서 공유 용도로 주로 사용" ? styles.selected : ""}`}
          onClick={() => handleClick("문서 공유 용도로 주로 사용")}
        >
          문서 공유
        </button>
        <button
          className={`${styles.optionBtn} ${selected === "사진 및 동영상 저장 용도로 주로 사용" ? styles.selected : ""}`}
          onClick={() => handleClick("사진 및 동영상 저장 용도로 주로 사용")}
        >
          사진 및 동영상 저장
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

export default CloudQ1;
