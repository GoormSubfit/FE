import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from '../../styles/signupq/signupq.module.css';
import CustomDropdown from '../../components/dropdown'; // 성별 선택을 위한 컴포넌트
import useSignupForm from '../../hooks/useSignupForm';

function App() {
  const navigate = useNavigate(); 
  const { name, setName, age, setAge, job, setJob, gender, setGender, allFieldsFilled } = useSignupForm();

  const handleButtonClick = () => {
    if (allFieldsFilled()) {
      navigate('/signupq2', { state: { name, age, job, gender } }); // 성별(gender)도 함께 전달
    }
  };

  return (
    <div className={styles["app-container"]}>
      <p className={styles["title"]}>회원가입</p>
      <div className={styles["comment-container"]}>
        <h2 className={styles["comment1"]}>환영합니다!</h2>
        <h2 className={styles["comment2"]}>당신에 대해 자유롭게 입력해 주세요!</h2>
        <p className={styles["comment3"]}>프로필 정보 입력 후 효과적인 서비스를 위해</p>
        <p className={styles["comment4"]}>몇 가지 간단한 질문이 있을 예정입니다.</p>
      </div>
      <div className={styles["q-container"]}>
        {/* 이름 입력 필드 */}
        <div className={styles["container1"]}>
          <input
            className={`${styles["input-name"]} ${name.trim() ? styles["input-filled"] : ""}`}
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (/\d/.test(e.key)) {
                e.preventDefault();
              }
            }}
          />
          <p className={styles["comment-name"]}>8글자 이내 ex. 홍길동, 커피머신</p>
        </div>
        
        {/* 성별 선택 컴포넌트 */}
        <CustomDropdown setGender={setGender} /> {/* setGender로 성별 값을 업데이트 */}

        {/* 나이 입력 필드 */}
        <div className={styles["container2"]}>
          <input
            className={`${styles["input-age"]} ${age.trim() ? styles["input-filled"] : ""}`}
            type="number"
            placeholder="나이"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        {/* 직업 입력 필드 */}
        <div className={styles["container3"]}>
          <input
            className={`${styles["input-job"]} ${job.trim() ? styles["input-filled"] : ""}`}
            type="text"
            placeholder="직업"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            onKeyDown={(e) => {
              if (/\d/.test(e.key)) {
                e.preventDefault();
              }
            }}
          />
          <p className={styles["comment-job"]}>ex. 학생, 백수</p>
        </div>

        {/* 다음 버튼 */}
        <button
          className={`${styles["q-start"]} ${allFieldsFilled() ? styles["active"] : ""}`}
          disabled={!allFieldsFilled()}
          onClick={handleButtonClick} // navigate 호출 시 gender도 함께 전달
          style={{
            backgroundColor: allFieldsFilled() ? '#528DFF' : '#D9D9D9',
          }}
        >
          회원가입 질문 시작
        </button>
      </div>
    </div>
  );
}

export default App;
