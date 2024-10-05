import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import circlePlaceholder from '../../assets/images/signupq/circle.svg'; 
import edit from '../../assets/images/signupq/edit.svg'; 
import styles from '../../styles/signupq/profile.module.css';

function App() {
  const [profileImage, setProfileImage] = useState(''); 
  const navigate = useNavigate();
  const location = useLocation(); 

  const { name } = location.state; 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCompleteSignup = () => {
    navigate('/RecHome'); 
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
              <img src={profileImage} alt="profile" className={styles["profile-image"]} />
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
        >
          회원가입 완료
        </button>
      </div>
    </div>
  );
}

export default App;
