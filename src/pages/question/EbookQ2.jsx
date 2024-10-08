import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/question/EbookQ2.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";

const EbookQ2 = () => {
  const [selected, setSelected] = useState("");
  const mbcountOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();
  
  const handleClick = (ebookMbcount) => {
    if (selected === ebookMbcount) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(ebookMbcount); // 클릭된 버튼을 선택
    }
  };

  const goNext = () => {
    if (selected) {
      navigate('/ebookq3'); 
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
      <div className={styles.options} ref={mbcountOptionsRef}>
        <button
          className={`${styles.optionBtn} ${selected.includes("lte1Book") ? styles.selected : ""}`}
          onClick={() => handleClick("lte1Book")}
        >
          1권 이하
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("2to4Books") ? styles.selected : ""}`}
          onClick={() => handleClick("2to4Books")}
        >
          2~4권
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("gte5Books") ? styles.selected : ""}`}
          onClick={() => handleClick("gte5Books")}
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
