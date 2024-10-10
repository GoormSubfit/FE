import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import circlePlaceholder from '../../assets/images/signupq/circle.svg'; 
import edit from '../../assets/images/signupq/edit.svg'; 
import styles from '../../styles/signupq/profile.module.css';
import useUploadProfileImage from '../../hooks/useUploadProfileImage'; // 새로 만든 훅을 import

function App() {
  const [profileImage, setProfileImage] = useState(null); // 파일을 저장하도록 수정
  const navigate = useNavigate();
  const location = useLocation(); 
  const { name } = location.state; 

  const { uploadImage, loading, error } = useUploadProfileImage(); // 훅에서 필요한 값들 가져오기

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file); // 파일 자체를 상태에 저장
      const reader = new FileReader();
      reader.onload = () => {
        // 미리보기를 위해 base64 데이터로 보여주기
        setProfileImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCompleteSignup = async () => {
    if (profileImage) {
      try {
        await uploadImage(profileImage, name); // 업로드 함수 호출
        navigate('/RecHome'); // 업로드 성공시 페이지 이동
      } catch (err) {
        console.error('이미지 업로드 실패:', err);
      }
    } else {
      console.log('프로필 이미지가 선택되지 않았습니다.');
    }
  };

  return (
    <div className={styles["app-container"]}>
      <div className={styles["top-container"]}>
        <p className={styles["top-comment"]}>
          {name}님만의<br/><br/>
          프로필 사진을 설정해주세요!
        </p>
      </div>

      <div className={styles["middle-container"]}>
        <div className={styles["background-circle"]}>
          <div className={styles["profile-circle"]}>
            {profileImage ? (
              <img src={URL.createObjectURL(profileImage)} alt="profile" className={styles["profile-image"]} />
            ) : (
              <img src={circlePlaceholder} alt="default" className={styles["profile-image"]} />
            )}
          </div>

          <label htmlFor="imageUpload">
            <img src={edit} alt="edit" className={styles["edit-button"]} />
          </label>
          <input
            type="file"
            id="imageUpload"
            style={{ display: 'none' }} 
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <p className={styles["name"]}>
          {name} 
        </p>
      </div>

      <div className={styles["bottom-container"]}>
        <button 
          className={styles["bottom-button"]}
          onClick={handleCompleteSignup} 
          disabled={loading} // 업로드 중일 때 버튼 비활성화
        >
          {loading ? '업로드 중...' : '회원가입 완료'}
        </button>
        {error && <p className={styles["error-message"]}>이미지 업로드 실패: {error.message}</p>}
      </div>
    </div>
  );
}

export default App;