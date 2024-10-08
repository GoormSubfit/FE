import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/question/MusicQ1.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";

const MusicQ1 = () => {
  const [selected, setSelected] = useState("");
  const genreOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();

  const handleClick = (musicGenre) => {
    if (selected === musicGenre) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(musicGenre); // 클릭된 버튼을 선택
    }
  };

  const goNext = () => {
    if (selected) {
      navigate('/musicq2'); 
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
        <p className={styles.p}>주로 듣는 음악 장르는 무엇인가요?</p>
      </div>
      <div className={styles.options} ref={genreOptionsRef}>
        <button
          className={`${styles.optionBtn} ${selected.includes("pop") ? styles.selected : ""}`}
          onClick={() => handleClick("pop")}
        >
          팝
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("hiphop") ? styles.selected : ""}`}
          onClick={() => handleClick("hiphop")}
        >
          힙합
        </button>
        <button
          className={`${styles.optionBtn} ${
            selected.includes("classic") ? styles.selected : ""
          }`}
          onClick={() => handleClick("classic")}
        >
          클래식
        </button>
        <button
          className={`${styles.optionBtn} ${
            selected.includes("jazz") ? styles.selected : ""
          }`}
          onClick={() => handleClick("jazz")}
        >
          재즈
        </button>
        <button
          className={`${styles.optionBtn} ${
            selected.includes("k-pop") ? styles.selected : ""
          }`}
          onClick={() => handleClick("k-pop")}
        >
          K-pop
        </button>
        <button
          className={`${styles.optionBtn} ${
            selected.includes("edm") ? styles.selected : ""
          }`}
          onClick={() => handleClick("edm")}
        >
          EDM
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

export default MusicQ1;
