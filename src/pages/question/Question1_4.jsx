import React, { useState, useEffect, useRef } from "react";
import styles from '../../styles/question/Question1_4.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";

const Question1_4 = () => {
  const [selected, setSelected] = useState([]);
  const genreOptionsRef = useRef(null);  // 스크롤 영역 참조
  const [isAtBottom, setIsAtBottom] = useState(false);  // 스크롤 상태

  const handleClick = (ottgenre) => {
    if (selected.includes(ottgenre)) {
      setSelected(selected.filter((item) => item !== ottgenre));
    } else {
      setSelected([...selected, ottgenre]);
    }
  };

  // 스크롤 이벤트를 통해 스크롤이 맨 아래에 도달했는지 감지
  const handleScroll = () => {
    const scrollHeight = genreOptionsRef.current.scrollHeight;
    const scrollTop = genreOptionsRef.current.scrollTop;
    const clientHeight = genreOptionsRef.current.clientHeight;

    setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
  };

  useEffect(() => {
    const contentsOptionsEl = genreOptionsRef.current;
    contentsOptionsEl.addEventListener("scroll", handleScroll);

    return () => {
      contentsOptionsEl.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <div className={styles.smallcircle1}> </div>
        <div className={styles.smallcircle2}> </div>
        <div className={styles.activePage}>Step 4</div>
        <div className={styles.smallcircle3}> </div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>선호하는 영상의 장르는 무엇인가요?</p>
      </div>
      <div className={styles.genreOptions} ref={genreOptionsRef}>
        <button
          className={`${styles.ottgenreBtn} ${selected.includes("action") ? styles.selected : ""}`}
          onClick={() => handleClick("action")}
        >
          액션
        </button>
        <button
          className={`${styles.ottgenreBtn} ${selected.includes("romance") ? styles.selected : ""}`}
          onClick={() => handleClick("romance")}
        >
          로맨스
        </button>
        <button
          className={`${styles.ottgenreBtn} ${
            selected.includes("comedy") ? styles.selected : ""
          }`}
          onClick={() => handleClick("comedy")}
        >
          코미디
        </button>
        <button
          className={`${styles.ottgenreBtn} ${selected.includes("thriller") ? styles.selected : ""}`}
          onClick={() => handleClick("thriller")}
        >
          스릴러
        </button>
        <button
          className={`${styles.ottgenreBtn} ${selected.includes("horror") ? styles.selected : ""}`}
          onClick={() => handleClick("horror")}
        >
          공포
        </button>
        <button
          className={`${styles.ottgenreBtn} ${selected.includes("fantasy") ? styles.selected : ""}`}
          onClick={() => handleClick("fantasy")}
        >
          판타지
        </button>
        <button
          className={`${styles.ottgenreBtn} ${selected.includes("sciencefiction") ? styles.selected : ""}`}
          onClick={() => handleClick("sciencefiction")}
        >
          SF
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

export default Question1_4;
