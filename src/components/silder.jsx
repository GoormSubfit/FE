// DateSlider.jsx
import React, { useState, useEffect } from 'react';
import styles from '../styles/components/slider.module.css';

const DateSlider = ({ nextPayDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [highlightedDate, setHighlightedDate] = useState(null);
  console.log('Next Pay Date:', nextPayDate);

  // 해당 월의 일수를 계산하는 함수
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // nextPayDate 문자열을 Date 객체로 변환하는 함수
  const parseDate = (dateStr) => {
    if (!dateStr) return null;
  
    const [monthStr, dayStr] = dateStr.trim().split(' '); // 공백을 기준으로 월과 일 분리
    const monthMap = {
      '1월': 0,
      '2월': 1,
      '3월': 2,
      '4월': 3,
      '5월': 4,
      '6월': 5,
      '7월': 6,
      '8월': 7,
      '9월': 8,
      '10월': 9,
      '11월': 10,
      '12월': 11
    };
  
    const month = monthMap[monthStr]; // 월을 숫자로 변환
    const day = parseInt(dayStr, 10); // 일을 숫자로 변환
  
    if (isNaN(month) || isNaN(day)) {
      console.error('날짜 파싱 오류: 유효하지 않은 형식', dateStr);
      return null; // 유효하지 않은 날짜 형식 처리
    }
    return new Date(currentDate.getFullYear(), month, parseInt(day));
  };

  useEffect(() => {
    const month = currentDate.getMonth(); // 현재 월
    const year = currentDate.getFullYear(); // 현재 연도
    const numDays = getDaysInMonth(month, year); // 해당 월의 일수 계산

    // 1일부터 마지막 날까지 배열 생성
    const daysArray = Array.from({ length: numDays }, (_, i) => i + 1);
    setDaysInMonth(daysArray);

    // nextPayDate가 있을 경우 강조할 날짜 설정
    if (nextPayDate) {
      const nextDate = parseDate(nextPayDate);
      setHighlightedDate(nextDate.getDate()); // 해당 월의 날짜만 강조
    }
  }, [currentDate, nextPayDate]);

  return (
    <div className={styles["slider-container"]}>
      <div className={styles["date-slider"]}>
        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`${styles["date-item"]} ${
              day === highlightedDate ? styles["selected-day"] : ''}`} // nextPayDate만 강조
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateSlider;
