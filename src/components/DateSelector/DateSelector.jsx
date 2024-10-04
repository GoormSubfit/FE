import React, { useState, useEffect } from 'react';
import styles from "../DateSelector/DateSelector.module.css";

const DateSelector = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);

  // 년도 목록 생성
  const years = Array.from({ length: 10 }, (_, index) => currentYear + index);

  // 월 목록 생성
  const months = Array.from({ length: 12 }, (_, index) => index + 1);

  // 선택된 월에 따라 일 수를 결정하는 함수
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();  // 해당 월의 마지막 날짜를 반환
  };

  // 선택된 월에 맞춰 일 수를 설정
  const days = Array.from({ length: getDaysInMonth(selectedYear, selectedMonth) }, (_, index) => index + 1);

  // 선택된 월이나 년도가 변경될 때, 현재 선택된 일이 유효한지 확인
  useEffect(() => {
    if (selectedDay > getDaysInMonth(selectedYear, selectedMonth)) {
      setSelectedDay(1); // 선택된 일이 유효하지 않으면 1일로 설정
    }
  }, [selectedYear, selectedMonth]);

  return (
    <div className={styles.dateSelector}>
      <select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
        {years.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      
      <select value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))}>
        {months.map(month => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>

      <select value={selectedDay} onChange={(e) => setSelectedDay(Number(e.target.value))}>
        {days.map(day => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>
    </div>
  );
};

export default DateSelector;
