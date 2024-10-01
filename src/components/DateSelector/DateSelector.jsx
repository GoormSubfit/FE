import React, { useState } from 'react';
import styles from "../DateSelector/DateSelector.module.css"

const DateSelector = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);

  const years = Array.from({ length: 10 }, (_, index) => currentYear + index);
  const months = Array.from({ length: 12 }, (_, index) => index + 1);
  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
        {years.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      
      <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
        {months.map(month => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>

      <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
        {days.map(day => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>
    </div>
  );
};

export default DateSelector;
