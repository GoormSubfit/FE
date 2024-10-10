import { useState } from 'react';
import axiosInstance from '../axios/axios_instance'; // Axios 인스턴스 가져오기

const useUploadProfileImage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadImage = async (profileImage) => {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('profileImage', profileImage); // 이미지 파일 추가

      // Axios 인스턴스를 사용해 백엔드로 POST 요청
      const response = await axiosInstance.post('/users/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setLoading(false);
      console.log('이미지 업로드 성공:', response.data); // 업로드 성공 로그
      return response.data; // 성공적으로 응답 받음
    } catch (err) {
      setLoading(false);
      setError(err);
      console.error('이미지 업로드 실패:', err); // 업로드 실패 로그
    }
  };

  return { uploadImage, loading, error };
};

export default useUploadProfileImage;