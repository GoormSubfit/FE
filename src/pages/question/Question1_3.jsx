import React, { useState, useEffect, useRef } from "react";
import styles from '../../styles/question/Question1_3.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";

const Question1_3 = () => {
  const [selected, setSelected] = useState([]);
  const deviceOptionsRef = useRef(null);  // 스크롤 영역 참조
  const [isAtBottom, setIsAtBottom] = useState(false);  // 스크롤 상태

  const handleClick = (ottdevice) => {
    if (selected.includes(ottdevice)) {
      setSelected(selected.filter((item) => item !== ottdevice));
    } else {
      setSelected([...selected, ottdevice]);
    }
  };

  // 스크롤 이벤트를 통해 스크롤이 맨 아래에 도달했는지 감지
  const handleScroll = () => {
    const scrollHeight = deviceOptionsRef.current.scrollHeight;
    const scrollTop = deviceOptionsRef.current.scrollTop;
    const clientHeight = deviceOptionsRef.current.clientHeight;

    setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
  };

  useEffect(() => {
    const contentsOptionsEl = deviceOptionsRef.current;
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
        <div className={styles.activePage}>Step 3</div>
        <div className={styles.smallcircle2}> </div>
        <div className={styles.smallcircle3}> </div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <h2 className={styles.h2}>동시 시청이 필요한 디바이스 수는 몇 대인가요?</h2>
      <div className={styles.deviceOptions} ref={deviceOptionsRef}>
        <button
          className={`${styles.ottdeviceButton} ${selected.includes("one") ? styles.selected : ""}`}
          onClick={() => handleClick("one")}
        >
          1대
        </button>
        <button
          className={`${styles.ottdeviceButton} ${selected.includes("two") ? styles.selected : ""}`}
          onClick={() => handleClick("two")}
        >
          2대
        </button>
        <button
          className={`${styles.ottdeviceButton} ${
            selected.includes("threemore") ? styles.selected : ""
          }`}
          onClick={() => handleClick("threemore")}
        >
          3대 이상
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

export default Question1_3;
