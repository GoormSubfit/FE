import React, { useState } from 'react';
import EyeIcon from '../../assets/images/login_signup/eyeopened.svg';
import EyeOffIcon from '../../assets/images/login_signup/eyeclosed.svg';
import styles from '../../styles/signup/signup.module.css';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const togglePasswordCheckVisibility = () => {
    setShowPasswordCheck(prevState => !prevState);
  };

  return (
    <div className={styles["app-container"]}>
      <p className={styles["title"]}>
        회원가입
      </p>
      <div className={styles["input-container"]}>
        <h2 className={styles["top-comment"]}>
          안녕하세요 섭핏입니다
        </h2>

        <div className={styles["input-id"]}>
          <input className={styles["input-field-id"]} type="text" placeholder="아이디" />
          <button className={styles["duplicate-check"]}>
            중복확인
          </button>
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
        
        <div className={styles["input-pwd-check"]}>
          <input 
            className={styles["input-field-check"]} 
            type={showPasswordCheck ? "text" : "password"} 
            placeholder="비밀번호 확인" 
          />
          <span className={styles["toggle-password"]} onClick={togglePasswordCheckVisibility}>
            <img src={showPasswordCheck ? EyeOffIcon : EyeIcon} alt="Toggle Password Visibility" />
          </span>
        </div>
      </div>
      <button className={styles["bottom-button"]}>
            다음
          </button>
    </div>
  );
}

export default App;
