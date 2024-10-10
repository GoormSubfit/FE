// src/pages/home/RecHome.jsx
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // 라우팅을 위한 훅 가져오기
import styles from "../../styles/home/RecHome.module.css";
import arrowIcon from "/src/assets/images/arrow.svg";
import Home from "../../components/Home";
import useRecommendation from '../../hooks/useRecommendation'; 

const RecHome = () => {
  const { changeType } = useRecommendation();
  const [selected, setSelected] = useState("EBOOK"); // 단일 선택 상태 관리 (문자열)
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅 사용

  const handleClick = (buttonName) => {
    const newType = buttonName.toUpperCase(); // 변수 선언 위치를 변경하여 스코프 확장
    if (selected === buttonName) {
      setSelected("");
      changeType(""); // 선택된 타입 초기화
      console.log('선택 해제됨'); // 선택 해제 로그
    } else {
      setSelected(buttonName);
      changeType(newType); // 변경된 함수 호출
      console.log('선택된 타입:', newType); // 현재 선택된 타입 로그
    }
  };
  
  // '다음' 버튼 클릭 시 CloudQ1 페이지로 이동
  const goNext = () => {
    const newType = selected.toUpperCase();
    if (selected === "CLOUD") {
      console.log('타입', newType);
      changeType("CLOUD");
      navigate('/cloudq1', {state: {type:"CLOUD"}});  // 클라우드 버튼 선택 시 CloudQ1 페이지로 이동
    } else if (selected === "EBOOK") {
      changeType("EBOOK");
      navigate('/ebookq1', {state: {type:"EBOOK"}}); // ebook 버튼 선택 시 EbookQ1 페이지로 이동
    } else if (selected === "MUSIC") {
      changeType("MUSIC");
      navigate('/musicq1', {state: {type:"MUSIC"}});// 음악 버튼 선택 시 MusicQ1 페이지로 이동
    } else if (selected === "OTT") {
      changeType("OTT");
      navigate('/ottq1', {state: {type:"OTT"}}); // OTT 버튼 선택 시 OttQ1 페이지로 이동
    } else if (selected === "DELIVERY") {
      changeType("DELIVERY");
      navigate('/deliveryq1', {state: {type:"DELIVERY"}});// 배송 버튼 선택 시 DeliveryQ1 페이지로 이동
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
                selected.includes("EBOOK") ? styles.selectEbook : ""
              }`}
              onClick={() => handleClick("EBOOK")}
            >
              <span className={styles.text}>ebook</span>
            </button>
            <button
              className={`${styles.ott} ${
                selected.includes("OTT") ? styles.selectOtt : ""
              }`}
              onClick={() => handleClick("OTT")}
            >
              <span className={styles.text}>OTT</span>
            </button>
            <button
              className={`${styles.delivery} ${
                selected.includes("DELIVERY") ? styles.selectDelivery : ""
              }`}
              onClick={() => handleClick("DELIVERY")}
            >
              <span className={styles.text}>배송<br />멤버십</span>
            </button>
          </div>
          <div className={styles.column2}>
            <button
              className={`${styles.cloud} ${
                selected.includes("CLOUD") ? styles.selectCloud : ""
              }`}
              onClick={() => {handleClick("CLOUD");}}
            >
              <span className={styles.text}>클라우드</span>
            </button>

            <button
              className={`${styles.music} ${
                selected.includes("MUSIC") ? styles.selectMusic : ""
              }`}
              onClick={() => handleClick("MUSIC")}
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