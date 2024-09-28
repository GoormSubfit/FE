import React, { useState, useRef } from "react";
import styles from '../../styles/question/CloudQ4.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";

const CloudQ4 = () => {
  const [selected, setSelected] = useState("");
  const deviceOptionsRef = useRef(null);  // 스크롤 영역 참조

  const handleClick = (cloudDevice) => {
    if (selected === cloudDevice) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(cloudDevice); // 클릭된 버튼을 선택
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
        <div className={styles.activePage}>Step 4</div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}> 주로 어떤 기기에서 클라우드 서비스를<br/>사용하시나요?</p>
      </div>
      <div className={styles.deviceOptions} ref={deviceOptionsRef}>
        <button
          className={`${styles.cloudDeviceBtn} ${selected.includes("smartphone") ? styles.selected : ""}`}
          onClick={() => handleClick("smartphone")}
        >
          스마트폰
        </button>
        <button
          className={`${styles.cloudDeviceBtn} ${selected.includes("tablet") ? styles.selected : ""}`}
          onClick={() => handleClick("tablet")}
        >
          태블릿
        </button>
        <button
          className={`${styles.cloudDeviceBtn} ${selected.includes("pc") ? styles.selected : ""}`}
          onClick={() => handleClick("pc")}
        >
          PC
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

export default CloudQ4;
