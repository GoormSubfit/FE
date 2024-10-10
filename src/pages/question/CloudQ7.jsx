import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../../styles/question/CloudQ7.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";
import useRecommendation from "../../hooks/useRecommendation";

const CloudQ7 = () => {
  const [selected, setSelected] = useState(""); // 선택된 옵션 상태
  const navigate = useNavigate();
  const location = useLocation(); // useLocation을 호출
  const { updateAnswer, submitRecommendation } = useRecommendation();
  const {type, answers} = location.state;
  const previousAnswers = location.state?.answers || [];
  console.log('previousAnswers:', previousAnswers); // 배열 확인

  // 옵션 선택 핸들러
  const handleClick = (option) => {
    setSelected(option); // 선택된 옵션 상태 업데이트
  };

  // 다음 단계로 이동 및 답변 제출 핸들러
  const goNext = async () => {
    if (selected) {
      const answer7 = {
        question: "여러 플랫폼(윈도우, 맥, 안드로이드, iOS 등)에서 접근할 필요가 있나요?",
        answer: selected
      };
  
      // 이전 답변에 7번째 답변을 추가한 배열을 생성
      const allAnswers = [...previousAnswers, answer7];
  
      // 전체 답변 배열을 업데이트
      await updateAnswer(allAnswers);  // 비동기적으로 업데이트가 완료되기를 기다림
  
      try {
        // 모든 답변을 서버로 제출
        console.log('1');
        await submitRecommendation(type, allAnswers);  // 이후에 추천을 제출
        navigate(`/result`, { state: { type, answers: allAnswers } });
      } catch (error) {
        console.error("제출 중 오류 발생:", error);
        alert("제출 중 문제가 발생했습니다.");
      }
    } else {
      alert('옵션을 선택해주세요.');
    }
  };
  

  return (
    <div className={styles.container}>
      <Back />
      <Home />
      <div className={styles.questionStep}>
        <div className={styles.line}>
          <img src={line} alt="line" className={styles.line} />
        </div>
        <div className={styles.smallcircle}></div>
        <div className={styles.smallcircle}></div>
        <div className={styles.smallcircle}></div>
        <div className={styles.smallcircle}></div>
        <div className={styles.activePage}>Step 7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>여러 플랫폼(윈도우, 맥, 안드로이드,<br/>iOS 등)에서 접근할 필요가 있나요?</p>
      </div>
      <div className={styles.options}>
        <button
          className={`${styles.optionBtn} ${selected === "여러 플랫폼에서 사용함" ? styles.selected : ""}`}
          onClick={() => handleClick("여러 플랫폼에서 사용함")}
        >
          네
        </button>
        <button
          className={`${styles.optionBtn} ${selected === "특정 기기에서만 사용함" ? styles.selected : ""}`}
          onClick={() => handleClick("특정 기기에서만 사용함")}
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

export default CloudQ7;
