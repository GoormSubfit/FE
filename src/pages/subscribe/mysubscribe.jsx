import React from 'react';
import Alarm from '../../assets/images/menubar/bell.svg'
import styles from '../../styles/subscribe/subscribe.module.css'

function App() {
    return (
      <div className={styles["app-container"]}>
        <div className={styles["top-container"]}>
        <h2 className={styles["name"]}>김서현님</h2>
        <img src={Alarm} className={styles["alarm"]} alt="Alarm" />
        </div>
      </div>
    );
  }
  
  export default App;
  
