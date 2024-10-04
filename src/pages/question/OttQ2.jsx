import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/question/OttQ2.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";

const OttQ2 = () => {
  const [selected, setSelected] = useState("");
  const timeOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();

  const handleClick = (ottTime) => {
    if (selected === ottTime) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(ottTime); // 클릭된 버튼을 선택
    }
  };

  const goNext = () => {
    if (selected) {
      navigate('/ottq3'); 
    } else {
      alert('옵션을 선택해주세요.'); 
    }
  };

  return (
    <div className={styles.container}>
      <Back/>
      <Home/>
      <div className={styles.questionStep}>
        <div className={styles.line}>
          <img src={line} alt="line" className={styles.line} />
        </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.activePage}>Step 2</div>
        <div className={styles.midcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>하루 평균 시청 시간은 어느 정도인가요?</p>
      </div>
      <div className={styles.options} ref={timeOptionsRef}>
        <button
          className={`${styles.optionBtn} ${selected.includes("onehourmore") ? styles.selected : ""}`}
          onClick={() => handleClick("onehourmore")}
        >
          1시간 이상
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("onehourtothreehours") ? styles.selected : ""}`}
          onClick={() => handleClick("onehourtothreehours")}
        >
          1~3시간
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("threehoursmore") ? styles.selected : ""}`}
          onClick={() => handleClick("threehoursmore")}
        >
          3시간 이상
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

export default OttQ2;
