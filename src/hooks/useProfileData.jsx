import { useState, useEffect } from 'react';
import axiosInstance from '../axios/axios_instance'; // Axios 인스턴스를 가져오기

const useProfileData = () => {
  const [name, setName] = useState(''); // 이름 상태 관리

  useEffect(() => {
    const fetchName = async () => {
      try {
        // Axios 인스턴스를 사용해 요청
        const response = await axiosInstance.get('/users/profile'); // 토큰이 자동으로 포함된 요청

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
