import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from '../../styles/login/login_signup.module.css'; 
import EyeIcon from '../../assets/images/login_signup/eyeopened.svg';
import EyeOffIcon from '../../assets/images/login_signup/eyeclosed.svg';
import CheckedIcon from '../../assets/images/login_signup/checked.svg'; 
import UncheckedIcon from '../../assets/images/login_signup/unchecked.svg'; 
import useLoginValidation from '../../hooks/useLoginValidation';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberId, setRememberId] = useState(false);
  const [userId, setUserId] = useState(''); 
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false); 
  const navigate = useNavigate();
  const { validateLogin, loginError, loading } = useLoginValidation();

  useEffect(() => {
    setIsFormValid(userId.trim() !== '' && password.trim() !== '');
  }, [userId, password]);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleRememberId = () => {
    setRememberId(prevState => !prevState);
  };

  const handleLogin = async () => {
    const success = await validateLogin(userId, password);
    if (success && success.token) { 
      const token = success.token; 
      localStorage.setItem('token', token); 
      navigate('/HomePage'); 
    }
  };

  const handleInput = (e, setState) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9]*$/; // 영어와 숫자만 허용
    if (regex.test(value)) {
      setState(value);
    }
  };

  return (
    <div className={styles["app-container"]}>
      <div className={styles["signin-container"]}>
        <p className={styles["login"]}> 
          로그인
        </p>
        <div className={styles["input-id"]}>
          <input 
            className={styles["input-field"]} 
            type="text" 
            placeholder="아이디" 
            value={userId} 
            onChange={(e) => handleInput(e, setUserId)} // 입력 제한 적용
          />
        </div>
        <div className={styles["input-pwd"]}>
          <input 
            className={styles["input-field-pwd"]} 
            type={showPassword ? "text" : "password"} 
            placeholder="비밀번호 영문, 숫자 포함 8자 이상" 
            value={password} 
            onChange={(e) => handleInput(e, setPassword)} // 입력 제한 적용
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

      {loginError && <p className={styles["error-message"]}>{loginError}</p>} 

      <div className={styles["find-container"]}>
        <a className={styles["find-id"]}>아이디 찾기</a>
        <hr className={styles["divider"]} /> 
        <a className={styles["find-id"]}>비밀번호 찾기</a>
        <hr className={styles["divider"]} /> 
        <a 
          className={styles["signup"]} 
          href="#"
          onClick={() => navigate('/signup')} 
        >
          회원가입
        </a>
      </div>

      <button 
        className={styles["login-button"]} 
        onClick={handleLogin} 
        disabled={!isFormValid || loading}  
        style={{
          backgroundColor: isFormValid ? '#528DFF' : '#D9D9D9'  
        }}
      >
        {loading ? '로그인 중...' : '로그인'}
      </button>
    </div>
  );
}

export default App;