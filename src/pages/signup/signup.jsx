import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import EyeIcon from '../../assets/images/login_signup/eyeopened.svg';
import EyeOffIcon from '../../assets/images/login_signup/eyeclosed.svg';
import Typo from '../../assets/images/login_signup/typo.svg';
import styles from '../../styles/signup/signup.module.css';
import useCheckUsername from '../../hooks/useCheckUsername';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [passwordCheck, setPasswordCheck] = useState(''); 
  const [passwordError, setPasswordError] = useState(''); 
  const [passwordMatchError, setPasswordMatchError] = useState(''); 
  const [isFormValid, setIsFormValid] = useState(false); // 폼 유효성 상태
  const navigate = useNavigate(); // useNavigate 훅 사용
  const { isDuplicate, loading, error, checkUsername } = useCheckUsername();

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const togglePasswordCheckVisibility = () => {
    setShowPasswordCheck(prevState => !prevState);
  };

  const handleDuplicateCheck = async () => {
    if (username) {
      await checkUsername(username);
    }
  };

  const validatePassword = () => {
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);

    if (password.length < 8 || password.length > 20) {
      setPasswordError('비밀번호는 8자 이상 20자 이내여야 합니다.');
      return false;
    } else if (!hasNumber || !hasLetter) {
      setPasswordError('비밀번호에는 영문과 숫자가 포함되어야 합니다.');
      return false;
    }

    setPasswordError(''); 
    return true;
  };

  const validatePasswordMatch = () => {
    if (password !== passwordCheck) {
      setPasswordMatchError('비밀번호가 일치하지 않습니다.');
      return false;
    }
    setPasswordMatchError(''); 
    return true;
  };

  useEffect(() => {
    // 모든 조건을 확인해 폼이 유효한지 상태 설정
    const isValid = validatePassword() && validatePasswordMatch() && !isDuplicate && !loading;
    setIsFormValid(isValid);
  }, [password, passwordCheck, isDuplicate, loading]);

  const handleSubmit = () => {
    if (isFormValid) {
      navigate('/signupq', { state: { userId: username, password } });
    }
  };

  return (
    <div className={styles["app-container"]}>
      <p className={styles["title"]}>
        회원가입
      </p>
      <div className={styles["input-container"]}>
        <img src={Typo} className={styles["Typo"]} alt="Typo" />
        <h2 className={styles["top-comment"]}>
          안녕하세요 섭핏입니다
        </h2>

        <div className={styles["input-id"]}>
          <input 
            className={styles["input-field-id"]} 
            type="text" 
            placeholder="아이디" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />
          <button 
            className={styles["duplicate-check"]} 
            onClick={handleDuplicateCheck} 
            disabled={loading} 
          >
            {loading ? '확인 중...' : '중복확인'}
          </button>
        </div>

        {isDuplicate !== null && (
          <p className={`${styles["duplicate-result"]} ${isDuplicate ? styles["error-message"] : ''}`}>
            {isDuplicate ? '이미 사용 중인 아이디입니다.' : '사용 가능한 아이디입니다.'}
          </p>
        )}

        {error && <p className={styles["error-message"]}>중복 확인 중 오류가 발생했습니다.</p>}

        <div className={styles["input-pwd"]}>
          <input 
            className={styles["input-field-pwd"]} 
            type={showPassword ? "text" : "password"} 
            placeholder="비밀번호 영문, 숫자 포함 8자 이상" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            onBlur={validatePassword}
          />
          <span className={styles["toggle-password"]} onClick={togglePasswordVisibility}>
            <img src={showPassword ? EyeOffIcon : EyeIcon} alt="Toggle Password Visibility" />
          </span>
        </div>

        {passwordError && <p className={styles["error-message"]}>{passwordError}</p>}

        <div className={styles["input-pwd-check"]}>
          <input 
            className={styles["input-field-check"]} 
            type={showPasswordCheck ? "text" : "password"} 
            placeholder="비밀번호 확인" 
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)} 
            onBlur={validatePasswordMatch} 
          />
          <span className={styles["toggle-password"]} onClick={togglePasswordCheckVisibility}>
            <img src={showPasswordCheck ? EyeOffIcon : EyeIcon} alt="Toggle Password Visibility" />
          </span>
        </div>

        {passwordMatchError && <p className={styles["error-message"]}>{passwordMatchError}</p>}
      </div>
      
      <button 
        className={styles["bottom-button"]} 
        onClick={handleSubmit} 
        disabled={!isFormValid} // 폼 유효하지 않으면 버튼 비활성화
        style={{
          backgroundColor: isFormValid ? '#528DFF' : '#D9D9D9' // 유효하면 색상 변경
        }}
      >
        다음
      </button>
    </div>
  );
}

export default App;
