import React, { useState } from 'react';
import styles from '../../styles/signupq/signupq.module.css';
import CustomDropdown from '../../components/dropdown'; 

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [job, setJob] = useState('');

  const allFieldsFilled = () => {
    return name.trim() !== '' && age.trim() !== '' && job.trim() !== '';
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

        <CustomDropdown />

        <input
          className={`${styles["input-age"]} ${age.trim() ? styles["input-filled"] : ""}`}
          type="number"
          placeholder="나이"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
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
        disabled={!allFieldsFilled()}
      >
        회원가입 질문 시작
      </button>
    </div>
  );
}

export default App;
