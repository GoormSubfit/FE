import { useState } from 'react';
import axiosInstance from '../axios/axios_instance'; // Axios 인스턴스 가져오기

const useSignupForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [job, setJob] = useState('');
  const [gender, setGender] = useState('true'); 

  const allFieldsFilled = () => {
    return name.trim() !== '' && age.trim() !== '' && job.trim() !== '';
  };

  const handleSubmit = async () => {
    if (allFieldsFilled()) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('gender', gender);
      formData.append('age', age);
      formData.append('job', job);

      try {
        // Axios 인스턴스를 사용해 POST 요청
        const response = await axiosInstance.post('/users/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('성공:', response.data);
      } catch (error) {
        console.error('에러 발생:', error);
      }
    }
  };

  return {
    name,
    setName,
    age,
    setAge,
    job,
    setJob,
    gender,
    setGender,
    allFieldsFilled,
    handleSubmit,
  };
};

export default useSignupForm;