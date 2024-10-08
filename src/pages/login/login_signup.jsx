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
  const [isFormValid, setIsFormValid] = useState(false); // 폼 유효성 상태 관리
  const navigate = useNavigate();
  const { validateLogin, loginError, loading } = useLoginValidation();

  // 아이디와 비밀번호 입력이 모두 완료되면 폼을 유효하다고 설정
  useEffect(() => {
    setIsFormValid(userId.trim() !== '' && password.trim() !== ''); // 둘 다 입력되었는지 확인
  }, [userId, password]);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleRememberId = () => {
    setRememberId(prevState => !prevState);
  };

  const handleLogin = async () => {
    const success = await validateLogin(userId, password);
    if (success && success.token) {  // 성공하면 토큰이 있는지 확인
      const token = success.token;  // 서버로부터 받은 토큰
      localStorage.setItem('token', token);  // 토큰을 로컬 스토리지에 저장
      navigate('/HomePage');  // 로그인 성공 시 HomePage로 이동
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
            onChange={(e) => setUserId(e.target.value)} 
          />
        </div>
        <div className={styles["input-pwd"]}>
          <input 
            className={styles["input-field-pwd"]} 
            type={showPassword ? "text" : "password"} 
            placeholder="비밀번호 영문, 숫자 포함 8자 이상" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
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

      {loginError && <p className={styles["error-message"]}>{loginError}</p>} {/* 로그인 실패 시 에러 메시지 */}

      <div className={styles["find-container"]}>
        <a className={styles["find-id"]}>아이디 찾기</a>
        <hr className={styles["divider"]} /> 
        <a className={styles["find-id"]}>비밀번호 찾기</a>
        <hr className={styles["divider"]} /> 
        <a 
          className={styles["signup"]} 
          href="#"
          onClick={() => navigate('/signup')} // 회원가입 페이지로 이동
        >
          회원가입
        </a>
      </div>

      <button 
        className={styles["login-button"]} 
        onClick={handleLogin} 
        disabled={!isFormValid || loading}  // 폼 유효하지 않거나 로딩 중일 때 버튼 비활성화
        style={{
          backgroundColor: isFormValid ? '#528DFF' : '#D9D9D9'  // 유효하면 색상 변경
        }}
      >
        {loading ? '로그인 중...' : '로그인'}
      </button>
    </div>
  );
}

export default App;
