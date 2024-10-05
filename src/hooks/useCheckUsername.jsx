import { useState } from 'react';
import axios from 'axios';

function useCheckUsername() {
  const [isDuplicate, setIsDuplicate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkUsername = async (userId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://15.164.28.108:8080/users/check-userid?userId=${userId}`);
      setIsDuplicate(response.data.exists); 
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
//아이디 중복확인