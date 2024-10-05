import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/question/EbookQ7.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/back";
import Home from "../../components/Home";

const EbookQ7 = () => {
  const [selected, setSelected] = useState("");
  const opOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();
  
  const handleClick = (ebookOp) => {
    if (selected === ebookOp) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(ebookOp); // 클릭된 버튼을 선택
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
      <div className={styles.options} ref={opOptionsRef}>
        <button
          className={`${styles.optionBtn} ${selected.includes("yes") ? styles.selected : ""}`}
          onClick={() => handleClick("yes")}
        >
          네
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("no") ? styles.selected : ""}`}
          onClick={() => handleClick("no")}
        >
          아니요
        </button>
      </div>
      <div>
        <button className={styles.next}>
          <img src={arrowIcon} alt="arrow" className={styles.arrow} />
        </button>
      </div>
    </div>
  );
};

export default EbookQ7;
