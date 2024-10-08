import { useState } from "react";
import axios from "axios";

const useDeleteSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const deleteSubscribe = async (subscriptionId) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const token = localStorage.getItem("token"); // JWT 토큰을 localStorage에서 가져옴
      const response = await axios.delete(`http://15.164.28.108:8080/subscribe/delete/${subscriptionId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess(true);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { deleteSubscribe, loading, error, success };
};

export default useDeleteSubscribe;
