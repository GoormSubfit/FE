import React, { useState } from 'react';
import styles from '../../styles/login/login_signup.module.css'; 
import EyeIcon from '../../assets/images/login_signup/eyeopened.svg';
import EyeOffIcon from '../../assets/images/login_signup/eyeclosed.svg';
import CheckedIcon from '../../assets/images/login_signup/checked.svg'; // 체크된 아이콘
import UncheckedIcon from '../../assets/images/login_signup/unchecked.svg'; // 체크되지 않은 아이콘

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberId, setRememberId] = useState(false); // 아이디 저장 상태 관리

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleRememberId = () => {
    setRememberId(prevState => !prevState);
  };

  return (
    <div className={styles["app-container"]}>
      <div className={styles["signin-container"]}>
        <p className={styles["login"]}> 
          로그인
        </p>
        <div className={styles["input-id"]}>
          <input className={styles["input-field"]} type="text" placeholder="아이디" />
        </div>
        <div className={styles["input-pwd"]}>
          <input 
            className={styles["input-field-pwd"]} 
            type={showPassword ? "text" : "password"} 
            placeholder="비밀번호 영문, 숫자 포함 8자 이상" 
          />
          <span className={styles["toggle-password"]} onClick={togglePasswordVisibility}>
            <img src={showPassword ? EyeOffIcon : EyeIcon} alt="Toggle Password Visibility" />
          </span>
        </div>
        <div className={styles["remember-id-container"]} onClick={toggleRememberId}>
          <img
            src={rememberId ? CheckedIcon : UncheckedIcon}
            alt="Remember ID"
            className={styles["remember-id-icon"]}
          />
          <span className={styles["remember-id-text"]}>아이디 저장</span>
        </div>
      </div>
      <div className={styles["find-container"]}>
        <a className={styles["find-id"]}>아이디 찾기</a>
        <hr className={styles["divider"]} /> 
        <a className={styles["find-id"]}>비밀번호 찾기</a>
        <hr className={styles["divider"]} /> 
        <a className={styles["signup"]}>회원가입</a>
      </div>

      <button className={styles["login-button"]}>로그인</button>
    </div>
  );
}

export default App;
