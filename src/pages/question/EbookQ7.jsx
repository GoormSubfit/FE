import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from '../../styles/question/EbookQ1.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";
import useRecommendation from "../../hooks/useRecommendation";

const EbookQ7 = () => {
  const [selected, setSelected] = useState(""); // 선택된 옵션 상태
  const navigate = useNavigate();
  const location = useLocation(); // useLocation을 호출
  const { updateAnswer, submitRecommendation } = useRecommendation();
  const { type, answers } = location.state; 
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
        question: "오프라인에서 읽는 기능이 필요하신가요?",
        answer: selected
      };
  
      // 이전 답변에 7번째 답변을 추가한 배열을 생성
      const allAnswers = [...previousAnswers, answer7];
  
      // 전체 답변 배열을 업데이트
      await updateAnswer(allAnswers);  // 비동기적으로 업데이트가 완료되기를 기다림
  
      try {
        // 모든 답변을 서버로 제출
        const response = await submitRecommendation(type, allAnswers); // 이후에 추천을 제출
        console.log("1");
        console.log('Received response:', response); // response 전체 구조 확인
    
        // 결과 페이지로 이동
        navigate(`/result`, {
          state: { type, answers: allAnswers, recommendation: response },
        });
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
        <div className={styles.smallcircle}> </div>
        <div className={styles.activePage}>Step 7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>오프라인에서 읽는 기능이 필요하신가요?</p>
      </div>
      <div className={styles.options}>
        <button
          className={`${styles.optionBtn} ${selected.includes("오프라인 읽기 기능 필요함") ? styles.selected : ""}`}
          onClick={() => handleClick("오프라인 읽기 기능 필요함")}
        >
          네
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("항상 온라인에서 읽음") ? styles.selected : ""}`}
          onClick={() => handleClick("항상 온라인에서 읽음")}
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

export default EbookQ7;