import React from 'react';
import Back from '../../components/back'
import styles from '../../styles/result/result.module.css'

function App() {
    return (
      <div className={styles["app-container"]}>
       <div className={styles["top-container"]}>
        <p className={styles["top-comment"]}>
        서현님께<br />"넷플릭스"를 추천합니다!
        </p>
       </div>
      </div>
    );
  }
  
  export default App;
  


