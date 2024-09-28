import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/question/OttQ1.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";

const OttQ1 = () => {
  const [selected, setSelected] = useState("");
  const contentsOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();

  const handleClick = (ottContents) => {
    if (selected === ottContents) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(ottContents); // 클릭된 버튼을 선택
    }
  };

  const goNext = () => {
    if (selected) {
      navigate('/ottq2'); 
    } else {
      alert('옵션을 선택해주세요.'); 
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.back}>
          <img src={backIcon} alt="backbutton" className={styles.backbutton} />
        </button>
        <button className={styles.home}>
          <img src={homeIcon} alt="homebutton" className={styles.homebutton} />
        </button>
      </header>
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
        <p className={styles.p}>주로 시청하는 콘텐츠 유형은 무엇인가요?</p>
      </div>
      <div className={styles.contentsOptions} ref={contentsOptionsRef}>
        <button
          className={`${styles.ottContentsBtn} ${selected.includes("movie") ? styles.selected : ""}`}
          onClick={() => handleClick("movie")}
        >
          영화
        </button>
        <button
          className={`${styles.ottContentsBtn} ${selected.includes("drama") ? styles.selected : ""}`}
          onClick={() => handleClick("drama")}
        >
          드라마
        </button>
        <button
          className={`${styles.ottContentsBtn} ${
            selected.includes("documentary") ? styles.selected : ""
          }`}
          onClick={() => handleClick("documentary")}
        >
          다큐멘터리
        </button>
        <button
          className={`${styles.ottContentsBtn} ${
            selected.includes("animation") ? styles.selected : ""
          }`}
          onClick={() => handleClick("animation")}
        >
          애니메이션
        </button>
        <button
          className={`${styles.ottContentsBtn} ${
            selected.includes("sports") ? styles.selected : ""
          }`}
          onClick={() => handleClick("sports")}
        >
          스포츠
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

export default OttQ1;
