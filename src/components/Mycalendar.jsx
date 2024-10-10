import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../styles/components/Mycalendar.module.css'; // 필요한 스타일 파일


const MyCustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // 현재 월의 시작일과 마지막 날짜 계산
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = () => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const firstDay = getFirstDayOfMonth();
    const totalSlots = firstDay + daysInMonth;

    const daysArray = [];
    
    // 앞쪽 빈칸 추가
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(<div className={styles["empty"]} key={`empty-${i}`}></div>);
    }

    // 날짜 추가
    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(<div className={styles["day"]} key={day}>{day}</div>);
    }

    return daysArray;
  };

  const getMonthYear = () => {
    const options = { year: 'numeric', month: 'long' };
    return currentDate.toLocaleDateString('ko-KR', options);
  };

  return (
    <div className={styles["calendar-container"]}>
      <div className={styles["calendar-header"]}>
        <button onClick={handlePrevMonth} className={styles["nav-button"]}>&lt;</button>
        <span className={styles["month-year"]}>{getMonthYear()}</span>
        <button onClick={handleNextMonth} className={styles["nav-button"]}>&gt;</button>
      </div>


      {/* 날짜 표시 */}
      <div className={styles["calendar-grid"]}>
        {renderDays()}
      </div>
    </div>
  );
};

export default MyCustomCalendar;
