import React, { useState, useEffect, useRef } from "react";
import styles from '../../styles/question/Question1_1.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";

const Question1_1 = () => {
  const [selected, setSelected] = useState([]);
  const contentsOptionsRef = useRef(null);  // 스크롤 영역 참조
  const [isAtBottom, setIsAtBottom] = useState(false);  // 스크롤 상태

  const handleClick = (ottcontents) => {
    if (selected.includes(ottcontents)) {
      setSelected(selected.filter((item) => item !== ottcontents));
    } else {
      setSelected([...selected, ottcontents]);
    }
  };

  // 스크롤 이벤트를 통해 스크롤이 맨 아래에 도달했는지 감지
  const handleScroll = () => {
    const scrollHeight = contentsOptionsRef.current.scrollHeight;
    const scrollTop = contentsOptionsRef.current.scrollTop;
    const clientHeight = contentsOptionsRef.current.clientHeight;

    setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
  };

  useEffect(() => {
    const contentsOptionsEl = contentsOptionsRef.current;
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
      <nav>
        <div className={styles.pageNumbers}>
          <div className={styles.line}>
            <img src={line} alt="line" className={styles.line} />
          </div>
          <button className={styles.activePage}>OTT</button>
          <button className={styles.pageNumber2}>2</button>
          <button className={styles.pageNumber3}>3</button>
          <button className={styles.pageNumber4}>4</button>
        </div>
      </nav>
      <h2>주로 시청하는 콘텐츠 유형은 무엇인가요?</h2>
      <div className={styles.contentsOptions} ref={contentsOptionsRef}>
        <button
          className={`${styles.ottcontentsButton} ${selected.includes("movie") ? styles.selected : ""}`}
          onClick={() => handleClick("movie")}
        >
          영화
        </button>
        <button
          className={`${styles.ottcontentsButton} ${selected.includes("drama") ? styles.selected : ""}`}
          onClick={() => handleClick("drama")}
        >
          드라마
        </button>
        <button
          className={`${styles.ottcontentsButton} ${
            selected.includes("documentary") ? styles.selected : ""
          }`}
          onClick={() => handleClick("documentary")}
        >
          다큐멘터리
        </button>
        <button
          className={`${styles.ottcontentsButton} ${
            selected.includes("animation") ? styles.selected : ""
          }`}
          onClick={() => handleClick("animation")}
        >
          애니메이션
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

export default Question1_1;
