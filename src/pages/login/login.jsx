import { useState, useRef } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'; 
import React from 'react';
import Background from '../../assets/images/login/background.svg'
import Icon from '../../assets/images/login/icon.svg'
import styles from '../../styles/login/login.module.css'

function App() {
  const navigate = useNavigate();
  
    return (
      <div className={styles["app-container"]}>
        <img src={Icon} className={styles["icon"]} alt="Icon" />
        <p className={styles["comment0"]}>
          Subfit
        </p>
        <h1 className={styles["comment1"]}>
           나에게
        </h1>
        <h1 className={styles["comment2"]}>
           꼭 맞는
        </h1>
        <h1 className={styles["comment3"]}>
           구독 플랫폼은?
        </h1>
        <p className={styles["comment5"]}>
          간편로그인 후 <br/><br/>이용이 가능합니다.
        </p>
        <button className={styles["login-button"]}  onClick={() => navigate('/login_s')}>
      로그인
    </button>
      </div>
    );
  }
  
  export default App;
  