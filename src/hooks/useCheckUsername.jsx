import { useState } from 'react';
import axios from 'axios';

function useCheckUsername() {
  const [isDuplicate, setIsDuplicate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkUsername = async (username) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.example.com/check-username?username=${username}`);
      setIsDuplicate(response.data.exists); 
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { isDuplicate, loading, error, checkUsername };
}

export default useCheckUsername;
