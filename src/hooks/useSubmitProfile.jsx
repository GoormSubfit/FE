import axiosInstance from '../axios/axios_instance'; // Axios 인스턴스 가져오기

const useSubmitProfile = () => {
  const submitProfile = async (name, profileImage, placeholderImage) => {
    const formData = new FormData();

    formData.append('name', name);

    // 이미지가 없는 경우 기본 플레이스홀더 이미지를 전송
    if (profileImage) {
      formData.append('profileImage', profileImage); // 업로드한 이미지 파일
    } else {
      formData.append('profileImage', placeholderImage); // 플레이스홀더 이미지
    }

    try {
      // Axios 인스턴스를 사용해 POST 요청
      const response = await axiosInstance.post('/users/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('프로필 업데이트 성공:', response.data);
    } catch (error) {
      console.error('프로필 업데이트 실패:', error);
    }
  };

  return { submitProfile };
};

export default useSubmitProfile;
