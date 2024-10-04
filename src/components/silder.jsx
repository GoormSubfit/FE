import React, { useState, useEffect } from 'react';
import styles from '../styles/components/slider.module.css';

const DateSlider = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);

  // 해당 월의 일수를 계산하는 함수
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  useEffect(() => {
    const month = currentDate.getMonth(); // 현재 월
    const year = currentDate.getFullYear(); // 현재 연도
    const numDays = getDaysInMonth(month, year); // 해당 월의 일수 계산

    // 1일부터 마지막 날까지 배열 생성
    const daysArray = Array.from({ length: numDays }, (_, i) => i + 1);
    setDaysInMonth(daysArray);
  }, [currentDate]);

  const today = currentDate.getDate(); // 오늘 날짜

  return (
    <div className={styles["slider-container"]}>
      <div className={styles["date-slider"]}>
        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`${styles["date-item"]} ${day === today ? styles["selected-day"] : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateSlider;
