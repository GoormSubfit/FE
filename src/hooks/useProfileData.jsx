import { useState, useEffect } from 'react';
import axios from 'axios';

const useProfileData = () => {
  const [name, setName] = useState(''); // 이름 상태 관리

  useEffect(() => {
    const fetchName = async () => {
      try {
        const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰을 가져온다고 가정
        const response = await axios.get('http://15.164.28.108:8080/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰을 요청 헤더에 추가
          },
        });
        
        // 서버로부터 받은 이름 데이터를 상태에 설정
        const storedName = response.data.name; // 서버에서 받아온 name 데이터
        setName(storedName);
      } catch (error) {
        console.error('프로필 데이터를 불러오는 중 에러 발생:', error);
      }
    };

    fetchName();
  }, []);

  return { name };
};

export default useProfileData;
// 토큰으로 이름 가져오는 훅