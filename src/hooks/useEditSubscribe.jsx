import { useForm } from 'react-hook-form';
import axios from 'axios';

const useEditSubscribe = () => {
    const { register, handleSubmit, reset } = useForm();
    const token = localStorage.getItem('token'); // JWT 토큰을 로컬 스토리지에서 가져옴

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('cycle', data.cycle);
        formData.append('subscribeDate', data.subscribeDate);

        axios.put(`http://15.164.28.108:8080/subscribe/update/${data.subscriptionId}`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log('업데이트 성공:', response.data);
            reset(); // 폼 초기화
        })
        .catch(error => {
            console.error('업데이트 에러:', error);
        });
    };

    return {
        register,
        handleSubmit,
        onSubmit
    };
};

export default useEditSubscribe;