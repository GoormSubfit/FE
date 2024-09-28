import React, { useState, useRef } from "react";
import styles from '../../styles/question/CloudQ1.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";
import Back from "../../components/Back";

const CloudQ1 = () => {
  const [selected, setSelected] = useState("");
  const useOptionsRef = useRef(null);  // 스크롤 영역 참조

  const handleClick = (cloudUse) => {
    if (selected === cloudUse) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(cloudUse); // 클릭된 버튼을 선택
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
        <p className={styles.p}>클라우드를 주로 어떤 용도로<br/>사용하시나요?</p>
      </div>
      <div className={styles.useOptions} ref={useOptionsRef}>
        <button
          className={`${styles.cloudUseBtn} ${selected.includes("FB") ? styles.selected : ""}`}
          onClick={() => handleClick("FB")}
        >
          파일 백업
        </button>
        <button
          className={`${styles.cloudUseBtn} ${selected.includes("DS") ? styles.selected : ""}`}
          onClick={() => handleClick("DS")}
        >
          문서 공유
        </button>
        <button
          className={`${styles.cloudUseBtn} ${
            selected.includes("PVS") ? styles.selected : ""
          }`}
          onClick={() => handleClick("PVS")}
        >
          사진 및 동영상 저장
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

export default CloudQ1;
