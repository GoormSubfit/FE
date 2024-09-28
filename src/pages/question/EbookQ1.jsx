import React, { useState, useRef } from "react";
import styles from '../../styles/question/EbookQ1.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";
import Back from "../../components/Back";

const EbookQ1 = () => {
  const [selected, setSelected] = useState("");
  const timeOptionsRef = useRef(null);  // 스크롤 영역 참조

  const handleClick = (ebookTime) => {
    if (selected === ebookTime) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(ebookTime); // 클릭된 버튼을 선택
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
        <button className={styles.next}>
          <img src={arrowIcon} alt="arrow" className={styles.arrow} />
        </button>
      </div>
    </div>
  );
};

export default EbookQ1;
