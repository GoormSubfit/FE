import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/question/EbookQ3.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";

const EbookQ3 = () => {
  const [selected, setSelected] = useState("");
  const prefOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();

  const handleClick = (ebookPref) => {
    if (selected === ebookPref) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(ebookPref); // 클릭된 버튼을 선택
    }
  };

  const goNext = () => {
    if (selected) {
      navigate('/ebookq4'); 
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
          className={`${styles.optionBtn} ${selected.includes("novel") ? styles.selected : ""}`}
          onClick={() => handleClick("novel")}
        >
          소설
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("selfhelp") ? styles.selected : ""}`}
          onClick={() => handleClick("selfhelp")}
        >
          자기계발서
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("business") ? styles.selected : ""}`}
          onClick={() => handleClick("business")}
        >
          비즈니스
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("history") ? styles.selected : ""}`}
          onClick={() => handleClick("history")}
        >
          역사
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("science") ? styles.selected : ""}`}
          onClick={() => handleClick("science")}
        >
          과학
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("comics") ? styles.selected : ""}`}
          onClick={() => handleClick("comics")}
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
