import React, { useState, useEffect, useRef } from "react";
import styles from '../../styles/question/ServiceQuestion1_1.module.css';
import backIcon from "/src/assets/images/backbutton.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/homebutton.svg";

const ServiceQuestion1_1 = () => {
  const [selected, setSelected] = useState([]);
  const serviceOptionsRef = useRef(null);  // 스크롤 영역 참조
  const [isAtBottom, setIsAtBottom] = useState(false);  // 스크롤 상태

  const handleClick = (ottService) => {
    if (selected.includes(ottService)) {
      setSelected(selected.filter((item) => item !== ottService));
    } else {
      setSelected([...selected, ottService]);
    }
  };

  // 스크롤 이벤트를 통해 스크롤이 맨 아래에 도달했는지 감지
  const handleScroll = () => {
    const scrollHeight = serviceOptionsRef.current.scrollHeight;
    const scrollTop = serviceOptionsRef.current.scrollTop;
    const clientHeight = serviceOptionsRef.current.clientHeight;

        // 스크롤이 마지막에 도달했는지 확인
   if (scrollTop + clientHeight >= scrollHeight) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };
  
  useEffect(() => {
    const serviceOptionsEl = serviceOptionsRef.current;
    serviceOptionsEl.addEventListener("scroll", handleScroll);

    return () => {
      serviceOptionsEl.removeEventListener("scroll", handleScroll);
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
          <button className={styles.activePage}>OTT</button>
          <button className={styles.pageNumber2}>2</button>
          <button className={styles.pageNumber3}>3</button>
          <button className={styles.pageNumber4}>4</button>
        </div>
      </nav>
      <h2>어떤 서비스를 사용하고 계신가요?</h2>
      <div className={styles.serviceOptions} ref={serviceOptionsRef}>
        <button
          className={`${styles.ottserviceButton} ${selected.includes("netflix") ? styles.selected : ""}`}
          onClick={() => handleClick("netflix")}
        >
          넷플릭스
        </button>
        <button
          className={`${styles.ottserviceButton} ${selected.includes("tving") ? styles.selected : ""}`}
          onClick={() => handleClick("tving")}
        >
          티빙
        </button>
        <button
          className={`${styles.ottserviceButton} ${
            selected.includes("youtubePremium") ? styles.selected : ""
          }`}
          onClick={() => handleClick("youtubePremium")}
        >
          유튜브 프리미엄
        </button>
        <button
          className={`${styles.ottserviceButton} ${
            selected.includes("watcha") ? styles.selected : ""
          }`}
          onClick={() => handleClick("watcha")}
        >
          왓챠
        </button>
        <button
          className={`${styles.ottserviceButton} ${
            selected.includes("wavve") ? styles.selected : ""
          }`}
          onClick={() => handleClick("wavve")}
        >
          웨이브
        </button>
        <button
          className={`${styles.ottserviceButton} ${
            selected.includes("disneyplus") ? styles.selected : ""
          }`}
          onClick={() => handleClick("disneyplus")}
        >
         디즈니+
        </button>
        <button
          className={`${styles.ottserviceButton} ${
            selected.includes("amazonprimevideo") ? styles.selected: ""
          }`}
          onClick={() => handleClick("amazonprimevideo")}
        >
         아마존 프라임 비디오
        </button>
        <button
          className={`${styles.ottserviceButton} ${
            selected.includes("appletvplus") ? styles.selected: ""
          }`}
          onClick={() => handleClick("appletvplus")}
        >
         애플 TV+
        </button>
        <button
          className={`${styles.ottserviceButton} ${
            selected.includes("coupangplay") ? styles.selected: ""
          }`}
          onClick={() => handleClick("coupangplay")}
        >
         쿠팡 플레이
        </button>
        <button
          className={`${styles.ottserviceButton} ${
            selected.includes("serieson") ? styles.selected: ""
          }`}
          onClick={() => handleClick("serieson")}
        >
         시리즈온
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

export default ServiceQuestion1_1;
