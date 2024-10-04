import { useState } from 'react';
import axios from 'axios';

function useLoginValidation() {
  const [loginError, setLoginError] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateLogin = async (userId, password) => { 
    setLoading(true);
    setLoginError(null); 

    try {
      const response = await axios.post('http://15.164.28.108:8080/users/login', {
        userId,   
        password
      });

      if (response.data.success) {
        return true;
      } else {
        setLoginError('아이디 또는 비밀번호가 잘못되었습니다.');
        return false;
      }
    } catch (error) {
      setLoginError('서버 오류가 발생했습니다. 다시 시도해주세요.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { validateLogin, loginError, loading };
}

export default useLoginValidation;
