import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../styles/components/Mycalendar.module.css'; // 필요한 스타일 파일

const MyCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={styles["calendar-container"]}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
      />
    </div>
  );
};

export default MyCalendar;
