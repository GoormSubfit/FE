import React from 'react';
import Background from '../../assets/images/login/background.svg'
import Icon from '../../assets/images/login/icon.svg'
import styles from '../../styles/login/login.module.css'

function App() {
    return (
      <div className={styles["app-container"]}>
        <img src={Background} className={styles["background"]} alt="Background" />
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
        <p className={styles["comment4"]}>
          간편로그인 후
          이용이 가능합니다.
        </p>
        <button className={styles["login-button"]}>
      로그인
    </button>
      </div>
    );
  }
  
  export default App;
  