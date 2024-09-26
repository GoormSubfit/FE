import React from 'react';
import styles from '../../styles/login/login_signup.module.css'; 
import MenuBar from '../../components/menubar';

function App() {
  return (
    <div className={styles["app-container"]}>
      <div className={styles["signin-container"]}>
        <div className={styles["input-id"]}>
          <label className={styles["input-label"]}>아이디</label>
          <input className={styles["input-field"]} type="text" placeholder="아이디" />
        </div>
        <div className={styles["input-pwd"]}>
          <label className={styles["input-label"]}>비밀번호</label>
          <input className={styles["input-field"]} type="password" placeholder="비밀번호" />
        </div>
      </div>
      <a className={styles["find"]}>
        아이디/비밀번호 찾기
      </a>
      <a className={styles["signup"]}>
        회원가입
      </a>
      <button className={styles["login-button"]}>
        로그인
      </button>
    </div>
  );
}

export default App;
