import { useState, useEffect, useCallback } from 'react';
import axiosInstance from '../axios/axios_instance';

const useRecommendation = () => {
  const [answers, setAnswers] = useState([]); // 답변 배열
  const [type, setType] = useState(''); // 서비스 유형
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    console.log("Type updated:", type); // 타입 변경시 로그
    console.log("Answers updated:", answers); // 답변 변경시 로그
  }, [type, answers]);

  const changeType = (newType) => {
    console.log('Changing type to:', newType); // 타입 변경 확인
    setType(newType);
  };

  const updateAnswer = (newAnswers) => {
    console.log('Updating answers with:', newAnswers);
    setAnswers(newAnswers);
  };

  const generateUserAnswerString = useCallback(() => {
    const answerString = answers.map(answer => answer.answer).join(" / ");
    console.log("Generated userAnswer:", answerString);
    return answerString;
  }, [answers]);

  const submitRecommendation = useCallback(async (type, allAnswers) => {
    console.log(3);
    console.log('answers', answers);
    console.log('Submitting with type:', type);
    // JSON 파일 형태의 페이로드 구성
    const payload = {
      type,
        // 서비스 유형
      questionAnswers: allAnswers.map(answer => ({
        question: answer.question || "",  // 질문이 없을 경우 빈 문자열
        answer: answer.answer || ""        // 답변이 없을 경우 빈 문자열
      }))  // questionAnswers 배열로 답변 전송
    };

    console.log('payload', payload);

    // JSON.stringify를 사용하여 가독성 높은 JSON 형식으로 변환
    const jsonPayload = JSON.stringify(payload, null, 2);

    console.log('Submitting recommendation with payload:', jsonPayload);
    console.log('reere');

    setLoading(true);

    try {
      const response = await axiosInstance.post('/recommendation/create', payload, {
        headers: {
          'Content-Type': 'application/json'  // JSON 형식으로 전송
        }
      });
      console.log('Received response:', response.data);
      setResult(response.data);
      setError(null);
    } catch (error) {
      console.error('Error submitting recommendation:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [type]);

  return { changeType, updateAnswer, submitRecommendation, answers, loading, error, result };
};

export default useRecommendation;
