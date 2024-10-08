import { useEffect, useState } from 'react';
import axios from 'axios';

const useSubscribeList = (token) => {
    const [subscribeList, setSubscribeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchSubscribeList = async () => {
      try {
        const response = await axios.get('http://15.164.28.108:8080/subscribe/list', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSubscribeList(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      if (token) {
        fetchSubscribeList();
      }
    }, [token]);
  
    return { subscribeList, loading, error, fetchSubscribeList }; // fetchSubscribeList 반환
  };
  
  export default useSubscribeList;