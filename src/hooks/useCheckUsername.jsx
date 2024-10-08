import { useState } from 'react';
import axiosInstance from '../axios/axios_instance'; // Axios 인스턴스 가져오기

function useCheckUsername() {
  const [isDuplicate, setIsDuplicate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkUsername = async (userId) => {
    setLoading(true);
    setError(null);

    try {
      // Axios 인스턴스를 사용해 요청
      const response = await axiosInstance.get(`/users/check-userid?userId=${userId}`);
      setIsDuplicate(response.data.exists); // 중복 여부 설정
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setIsDuplicate(true);
      } else {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return { isDuplicate, loading, error, checkUsername };
}

export default useCheckUsername;