import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/question/OttQ3.module.css';
import line from "/src/assets/images/question-line.svg";
import backIcon from "/src/assets/images/back-button.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import homeIcon from "/src/assets/images/home-button.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";

const OttQ3 = () => {
  const [selected, setSelected] = useState("");
  const deviceOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate();

  const handleClick = (ottDevice) => {
    if (selected === ottDevice) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(ottDevice); // 클릭된 버튼을 선택
    }
  };

  const goNext = () => {
    if (selected) {
      navigate('/ottq4'); 
    } else {
      alert('옵션을 선택해주세요.'); 
    }
  };


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
        <div className={styles.activePage}>Step 3</div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.smallcircle}> </div>
        <div className={styles.midcircle}> </div>
        <div className={styles.bigcircle}>7</div>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>동시 시청이 필요한 디바이스<br/> 수는 몇 대인가요?</p>
      </div>
      <div className={styles.deviceOptions} ref={deviceOptionsRef}>
        <button
          className={`${styles.ottDeviceBtn} ${selected.includes("one") ? styles.selected : ""}`}
          onClick={() => handleClick("one")}
        >
          1대
        </button>
        <button
          className={`${styles.ottDeviceBtn} ${selected.includes("two") ? styles.selected : ""}`}
          onClick={() => handleClick("two")}
        >
          2대
        </button>
        <button
          className={`${styles.ottDeviceBtn} ${
            selected.includes("threemore") ? styles.selected : ""
          }`}
          onClick={() => handleClick("threemore")}
        >
          3대 이상
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

export default OttQ3;
