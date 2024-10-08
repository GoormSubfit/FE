import { useState, useEffect } from 'react';
import axiosInstance from '../axios/axios_instance'; // Axios 인스턴스 가져오기

const useRecommendationList = () => {
  const [data, setData] = useState([]); // 데이터를 저장할 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

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

        // 서버에서 필요한 필드만 추출하여 상태에 저장
        const filteredData = response.data.map(item => ({
          type: item.type,
          serviceName: item.serviceName,
          price: item.price,
          userAnswer: item.userAnswer,
          createdAt: item.createdAt
        }));

        // 받아온 데이터 로그 출력
        console.log('받아온 데이터:', filteredData);

        setData(filteredData);
        setLoading(false);
      } catch (err) {
        console.error('데이터 요청 실패:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData(); // 데이터 가져오기 실행
  }, []);

  return { data, loading, error };
};

export default useRecommendationList;
