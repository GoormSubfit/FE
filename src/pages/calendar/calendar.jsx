import React from 'react';
import Mycalendar from '../../components/Mycalendar';
import Slider from '../../components/silder'
import styles from '../../styles/calendar/calendar.module.css';

function App() {
    return (
      <div className={styles["app-container"]}>
        <div className={styles["top-container"]}>   
        <p className={styles["top-comment"]}>   
        금융 캘린더
        </p>
        <Slider/>
        <div className={styles["top-box"]}>
        <div className={styles["comment-container"]}>
            <p className={styles["top-bcomment"]}>   
            총 지출 4,900원
            </p>
            <p className={styles["top-bcomment1"]}> 
            오늘은 넷플릭스 구독요금 지불일 입니다.
        </p>
        </div>
        </div>
        <div className={styles["calendar-container"]}>
            <Mycalendar/>
        </div>
        </div>
      </div>
    );
  }
  
  export default App;

