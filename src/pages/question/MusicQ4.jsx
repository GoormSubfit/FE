import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/question/MusicQ4.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";

const MusicQ4 = () => {
  const [selected, setSelected] = useState("");
  const sqOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();
  const handleClick = (musicSq) => {
    if (selected === musicSq) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(musicSq); // 클릭된 버튼을 선택
    }
  };

  const goNext = () => {
    if (selected) {
      navigate('/musicq5'); 
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
        <p className={styles.p}>음질에 대해 중요하게 생각하시나요?
        </p>
      </div>
      <div className={styles.sqOptions} ref={sqOptionsRef}>
      <button
          className={`${styles.musicSqBtn} ${selected.includes("yes") ? styles.selected : ""}`}
          onClick={() => handleClick("yes")}
        >
          네
        </button>
        <button
          className={`${styles.musicSqBtn} ${selected.includes("no") ? styles.selected : ""}`}
          onClick={() => handleClick("no")}
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

export default MusicQ4;
