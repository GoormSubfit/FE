import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/question/EbookQ1.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";

const EbookQ1 = () => {
  const [selected, setSelected] = useState("");
  const timeOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();

  const handleClick = (ebookTime) => {
    if (selected === ebookTime) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(ebookTime); // 클릭된 버튼을 선택
    }
  };

  const goNext = () => {
    if (selected) {
      navigate('/ebookq2'); 
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
      <div className={styles.timeOptions} ref={timeOptionsRef}>
        <button
          className={`${styles.ebookTimeBtn} ${selected.includes("lte1h") ? styles.selected : ""}`}
          onClick={() => handleClick("lte1h")}
        >
          1시간 이하
        </button>
        <button
          className={`${styles.ebookTimeBtn} ${selected.includes("2h") ? styles.selected : ""}`}
          onClick={() => handleClick("2h")}
        >
          2시간
        </button>
        <button
          className={`${styles.ebookTimeBtn} ${
            selected.includes("gte3h") ? styles.selected : ""
          }`}
          onClick={() => handleClick("gte3h")}
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
