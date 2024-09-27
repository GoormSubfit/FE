import React, { useState, useEffect, useRef } from "react";
import styles from '../../styles/question/Question1_6.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";
import Back from "../../components/Back";

const Question1_6 = () => {
  const [selected, setSelected] = useState([]);
  const dwnldOptionsRef = useRef(null);  // 스크롤 영역 참조
  const [isAtBottom, setIsAtBottom] = useState(false);  // 스크롤 상태

  const handleClick = (ottdwnld) => {
    if (selected.includes(ottdwnld)) {
      setSelected(selected.filter((item) => item !== ottdwnld));
    } else {
      setSelected([...selected, ottdwnld]);
    }
  };

  // 스크롤 이벤트를 통해 스크롤이 맨 아래에 도달했는지 감지
  const handleScroll = () => {
    const scrollHeight = dwnldOptionsRef.current.scrollHeight;
    const scrollTop = dwnldOptionsRef.current.scrollTop;
    const clientHeight = dwnldOptionsRef.current.clientHeight;

    setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
  };

  useEffect(() => {
    const dwnldOptionsEl = dwnldOptionsRef.current;
    dwnldOptionsEl.addEventListener("scroll", handleScroll);

    return () => {
      dwnldOptionsEl.removeEventListener("scroll", handleScroll);
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
        <div className={styles.smallcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.activePage}>Step 6</div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>즐겨보는 콘텐츠를 다운로드해서<br/>오프라인으로 시청하시나요?
        </p>
      </div>
      <div className={styles.dwnldOptions} ref={dwnldOptionsRef}>
        <button
          className={`${styles.ottdwnldBtn} ${selected.includes("yes") ? styles.selected : ""}`}
          onClick={() => handleClick("yes")}
        >
          네
        </button>
        <button
          className={`${styles.ottdwnldBtn} ${selected.includes("no") ? styles.selected : ""}`}
          onClick={() => handleClick("no")}
        >
          아니요
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

export default Question1_6;
