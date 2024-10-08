import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchUserName() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await axios.get('https://api.example.com/user'); 
        setName(response.data.name); 
      } catch (err) {
        setError(err); 
      } finally {
        setLoading(false); 
      }
    };

    fetchUserName(); 
  }, []);

  return { name, loading, error };
}

export default useFetchUserName;
