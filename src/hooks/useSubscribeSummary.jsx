import { useState, useEffect } from "react";
import axios from "axios";

const useSubscribeSummary = (token) => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSubscribeSummary = async () => {
    try {
      const response = await axios.get('http://15.164.28.108:8080/subscribe/summary', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSummary(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchSubscribeSummary();
    }
  }, [token]);

  return { summary, loading, error, fetchSubscribeSummary }; // fetchSubscribeSummary 반환
};

export default useSubscribeSummary;
