import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기
import styles from '../../styles/question/CloudQ2.module.css';
import line from "/src/assets/images/question-line.svg";
import arrowIcon from "/src/assets/images/arrow.svg";
import Back from "../../components/Back";
import Home from "../../components/Home";

const CloudQ2 = () => {
  const [selected, setSelected] = useState("");
  const storageOptionsRef = useRef(null);  // 스크롤 영역 참조
  const navigate = useNavigate(); // useNavigate를 사용하여 navigate 함수 생성

  const handleClick = (cloudStorage) => {
    if (selected === cloudStorage) {
      setSelected(""); // 선택 해제
    } else {
      setSelected(cloudStorage); // 클릭된 버튼을 선택
    }
  };

  const goNext = () => {
    if (selected) {
      navigate('/cloudq3');
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
        <p className={styles.p}>필요한 저장 용량은 얼마나 되나요?</p>
      </div>
      <div className={styles.options} ref={storageOptionsRef}>
        <button
          className={`${styles.optionBtn} ${selected.includes("lte5GB") ? styles.selected : ""}`}
          onClick={() => handleClick("lte5GB")}
        >
          5GB 이하
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("lte50GB") ? styles.selected : ""}`}
          onClick={() => handleClick("lte50GB")}
        >
          50GB 이하
        </button>
        <button
          className={`${styles.optionBtn} ${selected.includes("gte1TB") ? styles.selected : ""}`}
          onClick={() => handleClick("gte1TB")}
        >
          1TB 이상
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

export default CloudQ2;
