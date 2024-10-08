// ProfileHook.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useProfile = (token) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://15.164.28.108:8080/users/profile', {
        headers: {
          Authorization: `Bearer ${token}`,  // JWT 토큰을 헤더에 추가
        },
      });
      console.log("Profile Data:", response.data);
      setProfile(response.data);  // 프로필 데이터 저장
    } catch (err) {
      setError(err);  // 오류 처리
    } finally {
      setLoading(false);  // 로딩 상태 해제
    }
  };

  // token이 변경되거나 컴포넌트가 처음 마운트될 때 자동으로 호출
  useEffect(() => {
    if (token) {
      fetchProfile();
    } else {
      setError(new Error("Token is missing")); // 토큰이 없을 때 에러 처리
      setLoading(false);  // 로딩 해제
    }
  }, [token]);
  

  return { profile, loading, error, fetchProfile };
};