import React, { useState, useEffect, useRef } from "react";
import styles from '../../styles/question/Question1_5.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";
import Back from "../../components/Back";

const Question1_5 = () => {
  const [selected, setSelected] = useState([]);
  const prefOptionsRef = useRef(null);  // 스크롤 영역 참조
  const [isAtBottom, setIsAtBottom] = useState(false);  // 스크롤 상태

  const handleClick = (ottpref) => {
    if (selected.includes(ottpref)) {
      setSelected(selected.filter((item) => item !== ottpref));
    } else {
      setSelected([...selected, ottpref]);
    }
  };

  // 스크롤 이벤트를 통해 스크롤이 맨 아래에 도달했는지 감지
  const handleScroll = () => {
    const scrollHeight = prefOptionsRef.current.scrollHeight;
    const scrollTop = prefOptionsRef.current.scrollTop;
    const clientHeight = prefOptionsRef.current.clientHeight;

    setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
  };

  useEffect(() => {
    const prefOptionsEl = prefOptionsRef.current;
    prefOptionsEl.addEventListener("scroll", handleScroll);

    return () => {
      prefOptionsEl.removeEventListener("scroll", handleScroll);
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
        <div className={styles.activePage}>Step 5</div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>해외 콘텐츠(미국, 유럽, 일본 등)에<br/>대한 선호도는 어떤가요?</p>
      </div>
      <div className={styles.prefOptions} ref={prefOptionsRef}>
        <button
          className={`${styles.ottprefBtn} ${selected.includes("hpref") ? styles.selected : ""}`}
          onClick={() => handleClick("hpref")}
        >
          매우 선호
        </button>
        <button
          className={`${styles.ottprefBtn} ${selected.includes("pref") ? styles.selected : ""}`}
          onClick={() => handleClick("pref")}
        >
          선호
        </button>
        <button
          className={`${styles.ottprefBtn} ${
            selected.includes("npref") ? styles.selected : ""
          }`}
          onClick={() => handleClick("npref")}
        >
          선호하지 않음
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

export default Question1_5;
