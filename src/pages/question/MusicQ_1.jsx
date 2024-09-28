import React, { useState, useRef } from "react";
import styles from '../../styles/question/MusicQ_1.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";
import Back from "../../components/Back";

const MusicQ_1 = () => {
  const [selected, setSelected] = useState("");
  const genreOptionsRef = useRef(null);  // 스크롤 영역 참조

  const handleClick = (musicgenre) => {
    if (selected === musicgenre) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(musicgenre); // 클릭된 버튼을 선택
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
        <p className={styles.p}>주로 듣는 음악 장르는 무엇인가요?</p>
      </div>
      <div className={styles.genreOptions} ref={genreOptionsRef}>
        <button
          className={`${styles.musicgenreBtn} ${selected.includes("pop") ? styles.selected : ""}`}
          onClick={() => handleClick("pop")}
        >
          팝
        </button>
        <button
          className={`${styles.musicgenreBtn} ${selected.includes("hiphop") ? styles.selected : ""}`}
          onClick={() => handleClick("hiphop")}
        >
          힙합
        </button>
        <button
          className={`${styles.musicgenreBtn} ${
            selected.includes("classic") ? styles.selected : ""
          }`}
          onClick={() => handleClick("classic")}
        >
          클래식
        </button>
        <button
          className={`${styles.musicgenreBtn} ${
            selected.includes("jazz") ? styles.selected : ""
          }`}
          onClick={() => handleClick("jazz")}
        >
          재즈
        </button>
        <button
          className={`${styles.musicgenreBtn} ${
            selected.includes("k-pop") ? styles.selected : ""
          }`}
          onClick={() => handleClick("k-pop")}
        >
          K-pop
        </button>
        <button
          className={`${styles.musicgenreBtn} ${
            selected.includes("edm") ? styles.selected : ""
          }`}
          onClick={() => handleClick("edm")}
        >
          EDM
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

export default MusicQ_1;
