import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import styles from '../../styles/signupq/signupq.module.css';
import CustomDropdown from '../../components/dropdown';
import useSignupForm from '../../hooks/useSignupForm';

function App() {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const {
    name,
    setName,
    age,
    setAge,
    job,
    setJob,
    allFieldsFilled,
    handleSubmit
  } = useSignupForm(); 

  const handleButtonClick = () => {
    if (allFieldsFilled()) {
      handleSubmit(); // 서버로 폼 데이터를 제출하는 로직 호출
      navigate('/signupq2'); // 조건을 만족하면 페이지 이동
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

        <CustomDropdown />

        <div className={styles["container2"]}>
          <input
            className={`${styles["input-age"]} ${age.trim() ? styles["input-filled"] : ""}`}
            type="number"
            placeholder="나이"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

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

        <button
          className={`${styles["q-start"]} ${allFieldsFilled() ? styles["active"] : ""}`}
          disabled={!allFieldsFilled()} // 버튼 비활성화
          onClick={handleButtonClick} // 조건이 만족되면 handleButtonClick 호출
          style={{
            backgroundColor: allFieldsFilled() ? '#528DFF' : '#D9D9D9' // 조건에 따라 색상 변경
          }}
        >
          회원가입 질문 시작
        </button>
      </div>
    </div>
  );
}

export default App;
