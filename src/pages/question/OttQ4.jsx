import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from '../../styles/question/EbookQ1.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";
import useRecommendation from "../../hooks/useRecommendation";

const OttQ4 = () => {
  const [selected, setSelected] = useState("");
  const genreOptionsRef = useRef(null);  // 스크롤 영역 참조
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
      const answer4 = { question: "선호하는 영상의 장르는 무엇인가요?", answer: selected };

      // 기존 배열에 새 답변을 추가
      const updatedAnswers = [...previousAnswers, answer4];

      // 다음 페이지로 배열을 전달
      navigate('/ottq5', {
        state: {
          type, answers: updatedAnswers // 배열로 전달
        }
      });
      console.log("Updated answers with OttQ4 (as array):", updatedAnswers); 
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
        <div className={styles.activePage}>Step 4</div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>선호하는 영상의 장르는 무엇인가요?</p>
      </div>
      <div className={styles.options} ref={genreOptionsRef}>
        <button
          className={`${styles.optionBtn} ${selected.includes("액선 선호") ? styles.selected : ""}`}
          onClick={() => handleClick("액선 선호")}
        >
          액션
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("로맨스 선호") ? styles.selected : ""}`}
          onClick={() => handleClick("로맨스 선호")}
        >
          로맨스
        </button>
        <button
          className={`${styles.optionBtn} ${
            selected.includes("코미디 선호") ? styles.selected : ""
          }`}
          onClick={() => handleClick("코미디 선호")}
        >
          코미디
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("스릴러 선호") ? styles.selected : ""}`}
          onClick={() => handleClick("스릴러 선호")}
        >
          스릴러
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("공포 선호") ? styles.selected : ""}`}
          onClick={() => handleClick("공포 선호")}
        >
          공포
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("판타지 선호") ? styles.selected : ""}`}
          onClick={() => handleClick("판타지 선호")}
        >
          판타지
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("SF 선호") ? styles.selected : ""}`}
          onClick={() => handleClick("SF 선호")}
        >
          SF
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

export default OttQ4;
