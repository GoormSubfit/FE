import { useState } from 'react';
import axios from 'axios';

function useLoginValidation() {
  const [loginError, setLoginError] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateLogin = async (userId, password) => { 
    setLoading(true);
    setLoginError(null); 

    try {
      console.log('로그인 시도 중: ', { userId, password }); // 전송하려는 데이터 확인
      const response = await axios.post('http://15.164.28.108:8080/users/login', {
        userId,   
        password
      });

      console.log('서버 응답: ', response.data); // 서버 응답 확인

      // 서버 응답에 토큰이 있으면 로그인 성공으로 간주
      if (response.data.token) {
        return response.data; // 성공 시 전체 응답 반환 (token 포함)
      } else {
        setLoginError('아이디 또는 비밀번호가 잘못되었습니다.');
        return false;
      }
    } catch (error) {
      console.error('로그인 오류 발생: ', error);
      setLoginError('서버 오류가 발생했습니다. 다시 시도해주세요.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { validateLogin, loginError, loading };
}

export default useLoginValidation;
