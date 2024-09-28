import React, { useState, useRef } from "react";
import styles from '../../styles/question/OttQ_2.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";

const OttQ_2 = () => {
  const [selected, setSelected] = useState("");
  const timeOptionsRef = useRef(null);  // 스크롤 영역 참조

  const handleClick = (otttime) => {
    if (selected === otttime) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(otttime); // 클릭된 버튼을 선택
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.back}>
            <img src={backIcon} alt="backbutton" className={styles.backbutton} />
        </button>
        <button className={styles.home}>
          <img src={homeIcon} alt="homebtn" className={styles.homebtn} />
        </button>
      </div>
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
        <p className={styles.p}>하루 평균 시청 시간은 어느 정도인가요?</p>
      </div>
      <div className={styles.timeOptions} ref={timeOptionsRef}>
        <button
          className={`${styles.otttimeBtn} ${selected.includes("onehourmore") ? styles.selected : ""}`}
          onClick={() => handleClick("onehourmore")}
        >
          1시간 이상
        </button>
        <button
          className={`${styles.otttimeBtn} ${selected.includes("onehourtothreehours") ? styles.selected : ""}`}
          onClick={() => handleClick("onehourtothreehours")}
        >
          1~3시간
        </button>
        <button
          className={`${styles.otttimeBtn} ${selected.includes("threehoursmore") ? styles.selected : ""}`}
          onClick={() => handleClick("threehoursmore")}
        >
          3시간 이상
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

export default OttQ_2;
