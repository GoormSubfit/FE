import React, { useState, useEffect, useRef } from "react";
import styles from '../../styles/question/Question1_2.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";

const Question1_2 = () => {
  const [selected, setSelected] = useState([]);
  const timeOptionsRef = useRef(null);  // 스크롤 영역 참조
  const [isAtBottom, setIsAtBottom] = useState(false);  // 스크롤 상태

  const handleClick = (otttime) => {
    if (selected.includes(otttime)) {
      setSelected(selected.filter((item) => item !== otttime));
    } else {
      setSelected([...selected, otttime]);
    }
  };

  // 스크롤 이벤트를 통해 스크롤이 맨 아래에 도달했는지 감지
  const handleScroll = () => {
    const scrollHeight = timeOptionsRef.current.scrollHeight;
    const scrollTop = timeOptionsRef.current.scrollTop;
    const clientHeight = timeOptionsRef.current.clientHeight;

    setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
  };

  useEffect(() => {
    const contentsOptionsEl = timeOptionsRef.current;
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
        <div className={styles.activePage}>Step 2</div>
        <div className={styles.midcircle1}> </div>
        <div className={styles.smallcircle2}> </div>
        <div className={styles.midcircle2}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <h2 className={styles.h2}>하루 평균 시청 시간은 어느 정도인가요?</h2>
      <div className={styles.timeOptions} ref={timeOptionsRef}>
        <button
          className={`${styles.otttimeButton} ${selected.includes("onehourless") ? styles.selected : ""}`}
          onClick={() => handleClick("onehourless")}
        >
          1시간 이하
        </button>
        <button
          className={`${styles.otttimeButton} ${selected.includes("onehourtothreehours") ? styles.selected : ""}`}
          onClick={() => handleClick("onehourtothreehours")}
        >
          1~3시간
        </button>
        <button
          className={`${styles.otttimeButton} ${
            selected.includes("threehoursmore") ? styles.selected : ""
          }`}
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

export default Question1_2;
