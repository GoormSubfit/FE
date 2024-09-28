import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/question/OttQ4.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";

const OttQ4 = () => {
  const [selected, setSelected] = useState("");
  const genreOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();

  const handleClick = (ottGenre) => {
    if (selected === ottGenre) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(ottGenre); // 클릭된 버튼을 선택
    }
  };

  const goNext = () => {
    if (selected) {
      navigate('/ottq5'); 
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
        <div className={styles.smallcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.activePage}>Step 4</div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>선호하는 영상의 장르는 무엇인가요?</p>
      </div>
      <div className={styles.genreOptions} ref={genreOptionsRef}>
        <button
          className={`${styles.ottGenreBtn} ${selected.includes("action") ? styles.selected : ""}`}
          onClick={() => handleClick("action")}
        >
          액션
        </button>
        <button
          className={`${styles.ottGenreBtn} ${selected.includes("romance") ? styles.selected : ""}`}
          onClick={() => handleClick("romance")}
        >
          로맨스
        </button>
        <button
          className={`${styles.ottGenreBtn} ${
            selected.includes("comedy") ? styles.selected : ""
          }`}
          onClick={() => handleClick("comedy")}
        >
          코미디
        </button>
        <button
          className={`${styles.ottGenreBtn} ${selected.includes("thriller") ? styles.selected : ""}`}
          onClick={() => handleClick("thriller")}
        >
          스릴러
        </button>
        <button
          className={`${styles.ottGenreBtn} ${selected.includes("horror") ? styles.selected : ""}`}
          onClick={() => handleClick("horror")}
        >
          공포
        </button>
        <button
          className={`${styles.ottGenreBtn} ${selected.includes("fantasy") ? styles.selected : ""}`}
          onClick={() => handleClick("fantasy")}
        >
          판타지
        </button>
        <button
          className={`${styles.ottGenreBtn} ${selected.includes("sciencefiction") ? styles.selected : ""}`}
          onClick={() => handleClick("sciencefiction")}
        >
          SF
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

export default OttQ4;
