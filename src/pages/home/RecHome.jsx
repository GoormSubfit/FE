// src/pages/home/RecHome.jsx
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // 라우팅을 위한 훅 가져오기
import styles from "../../styles/home/RecHome.module.css";
import arrowIcon from "/src/assets/images/arrow.svg";
import Home from "../../components/Home";

const RecHome = () => {
  const [selected, setSelected] = useState(""); // 단일 선택 상태 관리 (문자열)
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅 사용

  const handleClick = (buttonName) => {
    // 클릭된 버튼이 현재 선택된 버튼과 같다면 선택 해제
    if (selected === buttonName) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(buttonName); // 클릭된 버튼을 선택
    }
  };

  // '다음' 버튼 클릭 시 CloudQ1 페이지로 이동
  const goNext = () => {
    if (selected === "cloud") {
      navigate('/cloudq1'); // 클라우드 버튼 선택 시 CloudQ1 페이지로 이동
    } else if (selected === "ebook") {
      navigate('/ebookq1'); // ebook 버튼 선택 시 EbookQ1 페이지로 이동
    } else if (selected === "music") {
      navigate('/musicq1'); // 음악 버튼 선택 시 MusicQ1 페이지로 이동
    } else if (selected === "ott") {
      navigate('/ottq1'); // OTT 버튼 선택 시 OttQ1 페이지로 이동
    } else if (selected === "delivery") {
      navigate('/deliveryq1'); // 배송 버튼 선택 시 DeliveryQ1 페이지로 이동
    }
  };

  return (
    <div className={styles.container}>
      <Home/>
      <div className={styles.question}>
        <p className={styles.p}>추천을 받고 싶은 항목을<br />선택해 주세요!</p>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.optionsGrid}>
          <div className={styles.column1}>
            <button
              className={`${styles.ebook} ${
                selected.includes("ebook") ? styles.selectEbook : ""
              }`}
              onClick={() => handleClick("ebook")}
            >
              <span className={styles.text}>ebook</span>
            </button>
            <button
              className={`${styles.ott} ${
                selected.includes("ott") ? styles.selectOtt : ""
              }`}
              onClick={() => handleClick("ott")}
            >
              <span className={styles.text}>OTT</span>
            </button>
            <button
              className={`${styles.delivery} ${
                selected.includes("delivery") ? styles.selectDelivery : ""
              }`}
              onClick={() => handleClick("delivery")}
            >
              <span className={styles.text}>배송<br />멤버십</span>
            </button>
          </div>
          <div className={styles.column2}>
            <button
              className={`${styles.cloud} ${
                selected.includes("cloud") ? styles.selectCloud : ""
              }`}
              onClick={() => handleClick("cloud")}
            >
              <span className={styles.text}>클라우드</span>
            </button>

            <button
              className={`${styles.music} ${
                selected.includes("music") ? styles.selectMusic : ""
              }`}
              onClick={() => handleClick("music")}
            >
              <span className={styles.text}>음악</span>
            </button>
          </div>
        </div>
        <button className={styles.next} onClick={goNext}>
          <img src={arrowIcon} alt="arrow" className={styles.arrow} />
        </button>
      </div>
    </div>
  );
};

export default RecHome;
