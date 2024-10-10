import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://15.164.28.108:8080', // 백엔드의 baseURL
});

// 요청 인터셉터 설정: 요청이 실행되기 전에 토큰을 추가하고 로그로 출력
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // localStorage에서 토큰 가져오기
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Authorization 헤더에 토큰 추가
    console.log('사용 중인 토큰:', token); // 토큰을 콘솔에 출력
  } else {
    console.log('토큰이 없습니다.');
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;