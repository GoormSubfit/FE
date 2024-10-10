import React, { useEffect, useState } from 'react';
import Mycalendar from '../../components/Mycalendar';
import Slider from '../../components/silder';
import styles from '../../styles/calendar/calendar.module.css';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  // URL에서 query parameters 추출
  const searchParams = new URLSearchParams(location.search);
  const [subscribeDate, setSubscribeDate] = useState(searchParams.get('subscribeDate'));
  const [previousPayDate, setPreviousPayDate] = useState(searchParams.get('previousPayDate'));
  const [nextPayDate, setNextPayDate] = useState(searchParams.get('nextPayDate'));
  const [newSubName, setNewSubName] = useState(searchParams.get('newSubName'));
  const [newSubPrice, setNewSubPrice] = useState(searchParams.get('newSubPrice'));

  // 처음 렌더링될 때만 query parameters를 상태로 설정
  useEffect(() => {
    // query parameters가 업데이트되면 상태에 저장
    if (searchParams.get('subscribeDate')) setSubscribeDate(searchParams.get('subscribeDate'));
    if (searchParams.get('previousPayDate')) setPreviousPayDate(searchParams.get('previousPayDate'));
    if (searchParams.get('nextPayDate')) setNextPayDate(searchParams.get('nextPayDate'));
    if (searchParams.get('newSubName')) setNewSubName(searchParams.get('newSubName'));
    if (searchParams.get('newSubPrice')) setNewSubPrice(searchParams.get('newSubPrice'));

    console.log('전달받은 Query Parameters:', {
      subscribeDate,
      previousPayDate,
      nextPayDate,
      newSubName,
      newSubPrice,
    });
  }, []);

  return (
    <div className={styles["app-container"]}>
      <div className={styles["top-container"]}>   
        <p className={styles["top-comment"]}>   
          금융 캘린더
        </p>
        {/* nextPayDate를 Slider 컴포넌트로 전달 */}
        <Slider nextPayDate={nextPayDate} />
        <div className={styles["top-box"]}>
          <div className={styles["comment-container"]}>
            <p className={styles["top-bcomment"]}>   
              총 지출 {newSubPrice}원
            </p>
            <p className={styles["top-bcomment1"]}> 
              "{newSubName}"의 구독 요금입니다.
            </p>
          </div>
        </div>
        {/* <div className={styles["calendar-container"]}>
          <Mycalendar />
        </div>
        <div className={styles["bottom-container"]}>
          <div className={styles["bottom-box"]}></div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
