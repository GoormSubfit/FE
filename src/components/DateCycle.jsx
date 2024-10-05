import React, { useState, useEffect } from 'react';
import cycleSvg from '../assets/images/Cycle.svg';  // 업로드한 파일 경로로 수정

const DateCycle = () => {
  // 현재 날짜를 가져옴
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentDate = today.getDate(); // 1일부터 31일까지의 현재 날짜

  // 31일까지, 하루당 12도씩 회전
  const rotationAngle = (currentDate - 1) * 12;

  return (
    <div style={{ position: 'relative', width: '125px', height: '125px' }}>
      {/* 이미지 */}
      <img 
        src={cycleSvg} 
        alt="Rotating Cycle" 
        style={{ 
          transform: `rotate(${rotationAngle}deg)`, 
          transition: 'transform 0.5s ease', 
          width: '100%', 
          height: '100%' 
        }} 
      />
      
      {/* 텍스트 */}
      <div style={{
        position: 'absolute',
        top: '43%',
        left: '51%',
        transform: 'translate(-50%, -50%)',
        color: '#404040',
        fontSize: '20px',
        fontWeight: '500',
      }}>
        {currentMonth}월
      </div>
      <div style={{
        position: 'absolute',
        top: '63%',
        left: '51%',
        transform: 'translate(-50%, -50%)',
        color: '#404040',
        fontSize: '12px',
        fontWeight: '500',
      }}>
        {currentDate}일
      </div>
    </div>
  );
};

export default DateCycle;
