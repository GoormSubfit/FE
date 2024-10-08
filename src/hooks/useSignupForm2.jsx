import { useState } from 'react';
import axiosInstance from '../axios/axios_instance'; // Axios 인스턴스 가져오기

const useSignupForm2 = () => {
  const [mobile, setMobile] = useState(''); 

  const allFieldsFilled = () => {
    return mobile.trim() !== ''; 
  };

  const handleSubmit = async () => {
    if (allFieldsFilled()) {
      const formData = new FormData();
      formData.append('mobile', mobile); 

      try {
        // Axios 인스턴스를 사용해 POST 요청
        const response = await axiosInstance.post('/users/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('성공:', response.data);
      } catch (error) {
        console.error('에러 발생:', error);
      }
    }
  };

  return {
    mobile,
    setMobile,
    allFieldsFilled,
    handleSubmit,
  };
};

export default useSignupForm2;
