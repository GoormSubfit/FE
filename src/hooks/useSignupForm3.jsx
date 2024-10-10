import { useState } from 'react';
import axiosInstance from '../axios/axios_instance'; // Axios 인스턴스 가져오기

const useSignupForm3 = () => {
  const [card, setCard] = useState(''); 

  const allFieldsFilled = () => {
    return card.trim() !== '';
  };

  const handleSubmit = async () => {
    if (allFieldsFilled()) {
      const formData = new FormData();
      formData.append('card', card);

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
    card,
    setCard,
    allFieldsFilled,
    handleSubmit,
  };
};

export default useSignupForm3;