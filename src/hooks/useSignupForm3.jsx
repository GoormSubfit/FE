import { useState } from 'react';
import axios from 'axios';

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
        const response = await axios.post('http://15.164.28.108:8080/users/register', formData, {
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
