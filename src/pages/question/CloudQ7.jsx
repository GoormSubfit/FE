import React, { useState, useRef } from "react";
import styles from '../../styles/question/CloudQ7.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";
import Back from "../../components/Back";

const CloudQ7 = () => {
  const [selected, setSelected] = useState("");
  const accessOptionsRef = useRef(null);  // 스크롤 영역 참조

  const handleClick = (cloudAccess) => {
    if (selected === cloudAccess) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(cloudAccess); // 클릭된 버튼을 선택
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
        <div className={styles.smallcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.activePage}>Step 7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>여러 플랫폼(윈도우, 맥, 안드로이드,<br/>iOS 등)에서 접근할 필요가 있나요?</p>
      </div>
      <div className={styles.accessOptions} ref={accessOptionsRef}>
        <button
          className={`${styles.cloudAccessBtn} ${selected.includes("yes") ? styles.selected : ""}`}
          onClick={() => handleClick("yes")}
        >
          네
        </button>
        <button
          className={`${styles.cloudAccessBtn} ${selected.includes("no") ? styles.selected : ""}`}
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

export default CloudQ7;
