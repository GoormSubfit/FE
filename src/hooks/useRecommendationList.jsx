import { useState, useEffect } from 'react';
import axiosInstance from '../axios/axios_instance'; // Axios 인스턴스 가져오기

const useRecommendationList = () => {
  const [data, setData] = useState([]); // 데이터를 저장할 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  // 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.get('/recommendation/list', {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const filteredData = response.data.map(item => ({
          id: item.id, // ID 추가 (삭제를 위한)
          type: item.type,
          serviceName: item.serviceName,
          price: item.price,
          userAnswer: item.userAnswer,
          createdAt: item.createdAt
        }));

        setData(filteredData);
        setLoading(false);
      } catch (err) {
        console.error('데이터 요청 실패:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 데이터 삭제 요청
  const deleteRecommendation = async (id) => {
    try {
      await axiosInstance.delete(`/recommendation/delete/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // 삭제 성공 후 데이터 상태에서 해당 항목 삭제
      setData(prevData => prevData.filter(item => item.id !== id));
    } catch (err) {
      console.error('삭제 실패:', err);
      setError(err);
    }
  };

  return { data, loading, error, deleteRecommendation };
};

export default useRecommendationList;