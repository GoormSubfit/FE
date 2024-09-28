import React, { useState, useRef } from "react";
import styles from '../../styles/question/CloudQ2.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";

const CloudQ2 = () => {
  const [selected, setSelected] = useState("");
  const storageOptionsRef = useRef(null);  // 스크롤 영역 참조

  const handleClick = (cloudStorage) => {
    if (selected === cloudStorage) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(cloudStorage); // 클릭된 버튼을 선택
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
        <p className={styles.p}>필요한 저장 용량은 얼마나 되나요?</p>
      </div>
      <div className={styles.storageOptions} ref={storageOptionsRef}>
        <button
          className={`${styles.cloudStorageBtn} ${selected.includes("lte5GB") ? styles.selected : ""}`}
          onClick={() => handleClick("lte5GB")}
        >
          5GB 이하
        </button>
        <button
          className={`${styles.cloudStorageBtn} ${selected.includes("lte50GB") ? styles.selected : ""}`}
          onClick={() => handleClick("lte50GB")}
        >
          50GB 이하
        </button>
        <button
          className={`${styles.cloudStorageBtn} ${selected.includes("gte1TB") ? styles.selected : ""}`}
          onClick={() => handleClick("gte1TB")}
        >
          1TB 이상
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

export default CloudQ2;
