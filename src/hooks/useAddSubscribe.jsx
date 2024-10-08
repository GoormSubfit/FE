import { useState } from 'react';
import axios from 'axios';

const useAddSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const addSubscribe = async (formData, token) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post('http://15.164.28.108:8080/subscribe/add', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setResponse(res.data);
    } catch (err) {
      setError(err.response?.data?.message || '구독 추가 실패');
    } finally {
      setLoading(false);
    }
  };

  return { addSubscribe, loading, error, response };
};

export default useAddSubscribe;
