// HomePage.jsx
import React, { useState, useEffect } from 'react';
import { motion, useDragControls } from 'framer-motion';  // Ensure you are using framer-motion or a similar library
import styles from '../../styles/home/HomePage.module.css';
import plusBtn from "../../assets/images/Plus.svg"; 
import subplusBtn from "../../assets/images/SubPlus.svg"; 
import profBtn from "../../assets/images/ProfileBtn.svg";
import calBtn from "../../assets/images/CalendarBtn.svg";
import qBtn from "../../assets/images/QuestionBtn.svg";
import netflixBtn from "../../assets/images/serviceBtn/Netflix.svg";
import disneyPlusBtn from "../../assets/images/serviceBtn/DisneyPlus.svg";
import appleTvBtn from "../../assets/images/serviceBtn/AppleTv.svg";
import coupangPlayBtn from "../../assets/images/serviceBtn/CoupangPlay.svg";
import primeVideoBtn from "../../assets/images/serviceBtn/PrimeVideo.svg";
import seriesOnBtn from "../../assets/images/serviceBtn/SeriesOn.svg";
import tvingBtn from "../../assets/images/serviceBtn/Tving.svg";
import wavveBtn from "../../assets/images/serviceBtn/Wavve.svg";
import youtubePremiumBtn from "../../assets/images/serviceBtn/YoutubePremium.svg";
import spotifyBtn from "../../assets/images/serviceBtn/Spotify.svg";
import appleMusicBtn from "../../assets/images/serviceBtn/AppleMusic.svg";
import bugsBtn from "../../assets/images/serviceBtn/Bugs.svg";
import floBtn from "../../assets/images/serviceBtn/Flo.svg";
import genieBtn from "../../assets/images/serviceBtn/Genie.svg";
import melonBtn from "../../assets/images/serviceBtn/Melon.svg";
import youtubeMusicBtn from "../../assets/images/serviceBtn/YoutubeMusic.svg";
import baeminBtn from "../../assets/images/serviceBtn/Baemin.svg";
import coupangEatsBtn from "../../assets/images/serviceBtn/CoupangEats.svg";
import kurlyBtn from "../../assets/images/serviceBtn/Kurly.svg";
import naverPlusBtn from "../../assets/images/serviceBtn/NaverPlus.svg";
import shinsegaeUniverseBtn from "../../assets/images/serviceBtn/ShinsegaeUniverse.svg";
import yogiyoBtn from "../../assets/images/serviceBtn/Yogiyo.svg";
import oneDriveBtn from "../../assets/images/serviceBtn/OneDrive.svg";
import dropBoxBtn from "../../assets/images/serviceBtn/DropBox.svg";
import googleDriveBtn from "../../assets/images/serviceBtn/GoogleDrive.svg";
import kakaoDriveBtn from "../../assets/images/serviceBtn/KakaoDrive.svg";
import iCloudBtn from "../../assets/images/serviceBtn/ICloud.svg";
import naverCloudBtn from "../../assets/images/serviceBtn/NaverCloud.svg";
import audienBtn from "../../assets/images/serviceBtn/Audien.svg";
import ridiBooksBtn from "../../assets/images/serviceBtn/RidiBooks.svg";
import millieBtn from "../../assets/images/serviceBtn/Millie.svg";
import yes24Btn from "../../assets/images/serviceBtn/Yes24.svg";
import kyoboBookBtn from "../../assets/images/serviceBtn/KyoboBook.svg";
import backBtn from "../../assets/images/back-button.svg"
import detailBtn from "../../assets/images/DetailBtn.svg"
import DateCycle from '../../components/DateCycle';
import line from "/src/assets/images/DateLine.svg";
import useAddSubscribe from '../../hooks/useAddSubscribe';
import { useProfile } from '../../hooks/useProfile';
import useSubscribeSummary from "../../hooks/useSubscribeSummary";
import useSubscribeList from '../../hooks/useSubscribeList'
import useDeleteSubscribe from "../../hooks/useDeleteSubscribe";
import useEditSubscribe from '../../hooks/useEditSubscribe';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const token = localStorage.getItem('token');
  console.log("Token received:", token);
  const navigate = useNavigate();
  // 훅을 무조건 호출합니다. (조건 안에서 호출하지 않음)
  const { profile, loading: profileLoading, error: profileError, fetchProfile } = useProfile(token);
  const { summary, loading: summaryLoading, error: summaryError, fetchSubscribeSummary} = useSubscribeSummary(token);
  const { subscribeList, loading: subscribeListLoading, error: subscribeListError, fetchSubscribeList} = useSubscribeList(token);
  const { addSubscribe, loading: addLoading, error: addError, response: addResponse } = useAddSubscribe();
  const { deleteSubscribe, loading, error, success } = useDeleteSubscribe();
  const { register, handleSubmit, onSubmit } = useEditSubscribe();

  const [totalSpent, setTotalSpent] = useState(0);
  const [showCat, setShowCat] = useState(false);
  const [activeCat, setActiveCat] = useState('');
  const [plusBtnActive, setPlusBtnActive] = useState(false);
  const [CatSelected, setCatSelected] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [editPage, setEditPage] = useState(1);
  const [selectedMySvc, setSelectedMySvc] = useState('');
  const [isAddModal, setIsAddModal] = useState(false);
  const [addPage, setAddPage] = useState(1);
  const [selectedSvc, setSelectedSvc] = useState('');
  const [newSubName, setNewSubName] = useState('');
  const [newSubPrice, setNewSubPrice] = useState(null);
  const [newSubCycle, setNewSubCycle] = useState('1개월');
  const [editSubName, setEditSubName] = useState('');
  const [editSubPrice, setEditSubPrice] = useState(null);
  const [editSubCycle, setEditSubCycle] = useState('1개월');
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const swipeDragControls = useDragControls();
  const [itemX, setItemX] = useState(0); 
  const [isOn, setIsOn] = useState(false);
  const serviceImageMap = {
    '넷플릭스': netflixBtn,
    '디즈니플러스': disneyPlusBtn,
    '티빙': tvingBtn,
    '웨이브': wavveBtn,
    '애플TV': appleTvBtn,
    '프라임비디오': primeVideoBtn,
    '유튜브 프리미엄': youtubePremiumBtn,
    '쿠팡플레이': coupangPlayBtn,
    '시리즈온': seriesOnBtn,
    '스포티파이': spotifyBtn,
    '애플 뮤직': appleMusicBtn,
    '벅스': bugsBtn,
    '플로': floBtn,
    '지니뮤직': genieBtn,
    '멜론': melonBtn,
    '유튜브 뮤직': youtubeMusicBtn,
    '배민 클럽': baeminBtn,
    '요기패스': yogiyoBtn,
    '쿠팡이츠': coupangEatsBtn,
    '신세계 유니버스': shinsegaeUniverseBtn,
    '마켓컬리': kurlyBtn,
    '네이버 플러스': naverPlusBtn,
    '네이버 클라우드': naverCloudBtn,
    '아이클라우드': iCloudBtn,
    '카카오 드라이브': kakaoDriveBtn,
    '구글 드라이브': googleDriveBtn,
    '드롭박스': dropBoxBtn,
    '원드라이브': oneDriveBtn,
    '밀리의 서재': millieBtn,
    '리디북스': ridiBooksBtn,
    '오디언': audienBtn,
    '교보문고 sam': kyoboBookBtn,
    '예스24 ebook': yes24Btn
  };

  // renderServiceImage 함수에서 serviceImageMap 사용
  const renderServiceImage = () => {
    // selectedMySvc의 logo 이미지가 있으면 우선적으로 표시
    if (selectedMySvc?.name && serviceImageMap[selectedMySvc?.name]) {
      return <img src={serviceImageMap[selectedMySvc?.name]} alt={`${selectedMySvc?.name} Button`} className={styles.serviceImage} />;
    }

    // selectedSvc의 logo 이미지가 있으면 표시
    if (selectedSvc && serviceImageMap[selectedSvc]) {
      return <img src={serviceImageMap[selectedSvc]} alt={`${selectedSvc} Button`} className={styles.serviceImage} />;
    }

    // 로고 이미지가 없으면 null 반환
    return null;
  };

  useEffect(() => {
    if (!token) {
      localStorage.setItem(
        'token',
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0VXNlcjEyMyIsImlhdCI6MTcyODM3MTM3MCwiZXhwIjoxNzI4NDU3NzcwfQ.ttbSuODfItpblGJAS4ICGW4gx_sUNtRZ8-hqZk-DHQs'
      );
    }
  }, []);  // 컴포넌트가 처음 렌더링될 때만 실행

    useEffect(() => {
    if (token) {
      fetchProfile();
      fetchSubscribeSummary();
      fetchSubscribeList();
    }
  }, [token]);
  
  useEffect(() => {
    if (selectedMySvc && selectedMySvc.subscribeDate) {
      const subscribeDate = new Date(selectedMySvc.subscribeDate);
      setSelectedYear(subscribeDate.getFullYear());
      setSelectedMonth(subscribeDate.getMonth() + 1); // 월은 0부터 시작하므로 +1
      setSelectedDay(subscribeDate.getDate());
    }
  }, [selectedMySvc]);

  useEffect(() => {
    if (selectedMySvc) {
      setNewSubName(selectedMySvc.name);
      setNewSubPrice(selectedMySvc.price);
      setNewSubCycle(selectedMySvc.cycle);
    }
  }, [selectedMySvc]);

  // 구독 금액 계산

  useEffect(() => {
    const totalSpending = subscribeList.reduce((acc, item) => acc + item.price, 0);
    setTotalSpent(totalSpending);
  }, [subscribeList]);

  useEffect(() => {
    if (!isAddModal && !isEditModal) {
      fetchSubscribeSummary();
      fetchSubscribeList();  // 모달이 닫힐 때 목록을 새로고침
    }
  }, [isAddModal, isEditModal]);

  
  const today = new Date();
  // 날짜에서 월과 일을 추출
  const getMonthAndDate = (date) => {
    return {
      month: date.getMonth() + 1,
      date: date.getDate(),
    };
  };
  
  // 날짜를 "9월 30일" 형식으로 변환
  const koreanDate = (date, option = "both") => {
    const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    switch (option) {
      case "month":
        return month;
      case "day":
        return day;
      case "both":
      default:
        return `${month} ${day}일`;
    }
  };

  const subscribeDate = new Date('2024-09-07'); // subscribeDate를 Date 객체로 변환

  //몇달 전 구독 시작인지 계산
  const monthsDifference = (today, subscribeDate) => {
    const yearsDiff = today.getFullYear() - subscribeDate.getFullYear();
    const monthsDiff = today.getMonth() - subscribeDate.getMonth();
    
    return yearsDiff * 12 + monthsDiff;
  };

  // 날짜 '~일뒤' 계산
  const calculateDday = (subscribeDate, today) => {
    // 시간 정보를 제거하고 순수한 날짜 비교를 위해 setHours를 사용합니다.
    const cleanToday = new Date(today.setHours(0, 0, 0, 0));
    const cleanSubscribeDate = new Date(subscribeDate.setHours(0, 0, 0, 0));
  
    // 날짜 차이 계산
    const diffTime = cleanSubscribeDate - cleanToday;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    // 같은 날짜인지 체크
    if (diffDays === 0) {
      return '오늘';
    } else if (diffDays > 0) {
      return `${diffDays}일 뒤`;
    }
  };

  // [1개월 또는 1년 주기 선택 가능] 처음 결제일로부터 다음 결제일을 주기에 따라 계산하는 함수 
  const calculateNextPayDate = (subscribeDate, cycle = '1개월') => {
    if (cycle === '1년') {
      return calculateNextYearlyPayDate(subscribeDate);
    } else {
      return calculateNextMonthlyPayDate(subscribeDate);
    }
  };

  // [1개월] 처음 결제일로부터 다음 결제일을 계산
  const calculateNextMonthlyPayDate = (subscribeDate) => {
    const { month: subscribeMonth, date: subscribeDay } = getMonthAndDate(subscribeDate);
    let previousPayDate = new Date(subscribeDate);
  
    // 이전 결제일 계산
    while (previousPayDate < today) {
      previousPayDate.setMonth(previousPayDate.getMonth() + 1);
    }

    // 이전 결제일이 오늘보다 크다면 한 달 빼기
    if (previousPayDate > today) {
      previousPayDate.setMonth(previousPayDate.getMonth() - 1);
    }

    // 다음 결제일 계산
    const nextPayDate = new Date(previousPayDate);
    nextPayDate.setMonth(nextPayDate.getMonth() + 1);

    // 그 달의 마지막 일을 넘지 않도록 조정 (예: 29일이 없을 경우 마지막 날짜로 설정)
    if (nextPayDate.getDate() !== subscribeDay) {
      nextPayDate.setDate(0); // 그 달의 마지막 날짜로 설정
    }

    return {
      subscribeDate,        // 처음 결제일
      previousPayDate,      // 이전 결제일
      nextPayDate           // 다음 결제일
    };
  };

  // [1년] 처음 결제일로부터 다음 결제일을 계산
  const calculateNextYearlyPayDate = (subscribeDate) => {
    const { month: subscribeMonth, date: subscribeDay } = getMonthAndDate(subscribeDate);
    let previousPayDate = new Date(subscribeDate);

    // 이전 결제일 계산 (1년씩 증가)
    while (previousPayDate < today) {
      previousPayDate.setFullYear(previousPayDate.getFullYear() + 1);
    }

    // 이전 결제일이 오늘보다 크다면 1년 빼기
    if (previousPayDate > today) {
      previousPayDate.setFullYear(previousPayDate.getFullYear() - 1);
    }

    // 다음 결제일 계산
    const nextPayDate = new Date(previousPayDate);
    nextPayDate.setFullYear(nextPayDate.getFullYear() + 1);

    // 그 달의 마지막 일을 넘지 않도록 조정 (예: 29일이 없을 경우 마지막 날짜로 설정)
    if (nextPayDate.getDate() !== subscribeDay) {
      nextPayDate.setDate(0); // 그 달의 마지막 날짜로 설정
    }

    return {
      subscribeDate,        // 처음 결제일
      previousPayDate,      // 이전 결제일
      nextPayDate           // 다음 결제일
    };
  };


  const getPreviousAndNextPayDates = (subscribeDate, option = "both", cycle = "1개월") => {
    const { previousPayDate, nextPayDate } = calculateNextPayDate(new Date(subscribeDate), cycle);
  
    const formatPreviousPayDate = koreanDate(previousPayDate, option);
    const formatNextPayDate = koreanDate(nextPayDate, option);
  
    return {
      formatPreviousPayDate,
      formatNextPayDate
    };
  };

   // [처음결제일 날짜 입력 목록] 연도
   const years = Array.from({ length: 10 }, (_, index) => currentYear - 3 + index);

   // [처음결제일 날짜 입력 목록] 월
   const months = Array.from({ length: 12 }, (_, index) => index + 1);
 
   // 선택된 월에 따라 일 수를 결정하는 함수
   const getDaysInMonth = (year, month) => {
     return new Date(year, month, 0).getDate();  // 해당 월의 마지막 날짜를 반환
   };
 
   // 선택된 월에 맞춰 일 수를 설정
   const days = Array.from({ length: getDaysInMonth(selectedYear, selectedMonth) }, (_, index) => index + 1);
 
   // 선택된 월이나 년도가 변경될 때, 현재 선택된 일이 유효한지 확인
   useEffect(() => {
     if (selectedDay > getDaysInMonth(selectedYear, selectedMonth)) {
       setSelectedDay(1); // 선택된 일이 유효하지 않으면 1일로 설정
     }
   }, [selectedYear, selectedMonth]);

   // 선택된 날짜를 YYYY-MM-DD 형식으로 저장하는 함수
  const formatSelectedDate = () => {
    const formattedMonth = String(selectedMonth).padStart(2, '0'); // 월을 두 자리로 포맷
    const formattedDay = String(selectedDay).padStart(2, '0'); // 일을 두 자리로 포맷
    return `${selectedYear}-${formattedMonth}-${formattedDay}`;
  };

  // 카테고리 버튼 클릭
  const cat = () => {
    setShowCat(prevState => !prevState);
    setPlusBtnActive(prevState => !prevState);
    if (CatSelected) setIsAddModal(true);
  };

  //카테고리 클릭 시 addModal open 
  const catClick = (category) => {
    setActiveCat(category);
    setCatSelected(true);
    document.body.classList.add('modal-open');
    setIsAddModal(true);
  };

    // 추가하고자 하는 구독 서비스 선택 후 정보저장
  const serviceClick = (serviceName) => {
    setSelectedSvc(serviceName);
  };

  // 추가 하고자 하는 구독 서비스 선택시에만 addModalPage2로 전환
  const selectClick = () => {
    if (selectedSvc) {  // selectedSvc가 null 또는 빈 값이 아닐 때만 실행
      setAddPage(2);
    } else {
      alert("서비스를 먼저 선택해주세요.");  // 서비스가 선택되지 않았을 때 알림
      setAddPage(1);
    }
  };
  
  //addModalPage2 에서 backBtn -> addModalPage1으로 전환
  const backAddModal = () => {
    setAddPage(1);
  }

  //addModalPage2 에서 backBtn -> addModal Close
  const closeAddModal = () => {  // selectedSvc가 null 또는 빈 값이 아닐 때만 실행
      console.log("Closing modal...");  
      setIsAddModal(false);
      setAddPage(1);  
      setShowCat(false);
      setPlusBtnActive(false);
      setActiveCat('');
      setCatSelected(false);
      setSelectedSvc('');
      setNewSubName('');
      setNewSubPrice(null);
      setSelectedYear(currentYear);
      setSelectedMonth(1);
      setSelectedDay('');
  }

  // DateSelector에서 전달된 날짜 값을 설정하는 함수
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const fetchImageAsFile = async (url) => {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const file = new File([blob], 'image.jpg', { type: blob.type });
        return file;
    } catch (error) {
        console.error('Error fetching image:', error);
        throw error;
    }
};

  // 새로운 구독을 추가하는 함수 (useAddSubscription 훅을 사용)
  const saveAddModal = async () => {
    if (newSubName.trim() && newSubPrice && selectedSvc && formatSelectedDate()) {
      const formData = new FormData();
      const price = parseInt(newSubPrice, 10);
      
      if (isNaN(price) || price <= 0) {
        alert('유효한 금액을 입력하세요');
        return;
      }
  
      formData.append('name', newSubName);
      formData.append('price', price);
      formData.append('cycle', newSubCycle);
      formData.append('subscribeDate', formatSelectedDate());
  
      const imageUrl = serviceImageMap[selectedSvc];
      let logoImage;
  
      try {
        logoImage = await fetchImageAsFile(imageUrl);
        formData.append('logoImage', logoImage);
      } catch (error) {
        alert('로고 이미지를 가져오는 데 실패했습니다.');
        return;
      }
  
      const token = localStorage.getItem('token');
      try {
        const response = await addSubscribe(formData, token);
        if (response) {
          console.log('Subscription added successfully');
          const subscribeDate = formatSelectedDate();  
          const { formatPreviousPayDate, formatNextPayDate } = getPreviousAndNextPayDates(subscribeDate, "both", newSubCycle);
  
          // URL에 newSubName, newSubPrice, subscribeDate, previousPayDate, nextPayDate 포함해서 전달
          navigate(`/calendar?subscribeDate=${subscribeDate}&previousPayDate=${formatPreviousPayDate}&nextPayDate=${formatNextPayDate}&newSubName=${newSubName}&newSubPrice=${newSubPrice}`);
        }
      } catch (error) {
        alert('구독 추가 중 오류가 발생했습니다.');
      } finally {
        await fetchSubscribeList();
        closeAddModal();
      }
    } else {
      alert('모든 내용을 입력해주세요.');
    }
  };
  
  
  


  //[나의 구독 서비스] 클릭한 버튼 정보저장
  const myServiceClick = (myService) => {
    setSelectedMySvc(myService);
  };

  const openEditModal = () => {
    setIsEditModal(true);
  }

  const editStart = () => {
    setEditPage(2);
  }

  const backEditModal = () => {
    setEditPage(1);
  }

  const closeEditModal = () => {
    setIsEditModal(false);
    setEditPage(1);  
    setSelectedMySvc('');
    setNewSubName('');
    setNewSubPrice(null);
  }

  const saveEditModal = handleSubmit(() => {
    if (newSubName.trim() && newSubPrice && formatSelectedDate()) {
      // 서버로 데이터를 보내는 로직
      onSubmit({
        subscriptionId: selectedMySvc.id,
        name: newSubName, // 입력된 새 구독 이름
        price: newSubPrice, // 입력된 새 가격
        cycle: newSubCycle, // 선택된 새 구독 주기
        subscribeDate: formatSelectedDate() // 선택된 새 시작 결제일
      });
  
      // 결제일, 이전 결제일, 다음 결제일을 계산
      const subscribeDate = formatSelectedDate();  // 처음 결제일
      const { formatPreviousPayDate, formatNextPayDate } = getPreviousAndNextPayDates(subscribeDate, "both", newSubCycle);
  
      // 정보를 URL에 쿼리 파라미터로 넘기면서 페이지 이동
      navigate(`/calendar?subscribeDate=${subscribeDate}&previousPayDate=${formatPreviousPayDate}&nextPayDate=${formatNextPayDate}&newSubName=${newSubName}&newSubPrice=${newSubPrice}`);
  
      // 모달을 닫고 초기 상태로 리셋
      setIsEditModal(false);
      setEditPage(1);  
      setSelectedMySvc('');
      setNewSubName('');
      setNewSubPrice(null);
      setSelectedYear(currentYear);
      setSelectedMonth(1); // 1월로 초기화
      setSelectedDay(1);   // 1일로 초기화
      setSelectedDate('');
      fetchSubscribeList();
    }
  });
  
  

  //스와이프해서 삭제버튼 활성화
  const handleDragEnd = (event, info, index) => {
    const swipeThreshold = -29; // 삭제 버튼 너비에 맞춤
    const currentX = info.offset.x;
  
    if (currentX < swipeThreshold) {
      event.target.closest(`.${styles.mySvcContainer}`).classList.add(styles.swiped);
      setItemX((prev) => ({
        ...prev,
        [index]: swipeThreshold,  // 스와이프가 -70px로 고정됨
      }));
    } else {
      event.target.closest(`.${styles.mySvcContainer}`).classList.remove(styles.swiped);
      setItemX((prev) => ({
        ...prev,
        [index]: 0,  // 원래 위치로 돌아감
      }));
    }
  };
  

  const deleteService = async (subscriptionId, index) => {
    try {
      await deleteSubscribe(subscriptionId); // 구독 삭제 API 호출
  
      // 구독 삭제 후 리스트를 새로 가져오기
      fetchSubscribeList();  // 최신 구독 리스트를 다시 가져옴
      fetchSubscribeSummary();

      // Reset the swipe position
      setItemX((prev) => {
        const updatedPositions = { ...prev };
        updatedPositions[index] = 0; // 해당 인덱스의 위치를 초기화
        return updatedPositions;
      });
  
    } catch (error) {
      console.error('Failed to delete subscription:', error);
      alert('구독 삭제 중 오류가 발생했습니다.');
    } 
  };
  
  const handleToggle = () => {
    setIsOn(!isOn); // 버튼을 클릭할 때마다 토글 상태를 반전시킴
  };
  

  // 프로필, 구독 요약 또는 구독 목록 로딩 상태 처리
  if (profileLoading || subscribeListLoading || summaryLoading) {
    return <div>Loading...</div>;
  }
    
  // 프로필, 구독 요약 또는 구독 목록 에러 처리
  if (profileError || subscribeListError || summaryError) {
    console.error("Error fetching subscription summary:", summaryError);
    console.error("Error fetching subscription list:", subscribeListError);
    console.error("Error fetching profile:", profileError);
    return <div>Error: {profileError?.message || subscribeListError?.message || summaryError?.message}</div>;
  }
    
  // 데이터가 없을 때의 처리
  if (!profile || !subscribeList || !summary) {
    return <div>No data available</div>;
  }

  return (
    <div className={styles.homeContainer}>
      {plusBtnActive && <div className={styles.overlay}></div>}
      {/* 사용자 정보 및 구독 정보 */}
      <div className={styles.container}>
        <div className={styles.userProfile}>
          <h2 className={styles.userName}>{profile.name}님</h2>
          <p className={styles.userJob}>{profile.job}</p>
        </div>
        <div className={styles.Summary}>
          <DateCycle/>
          <div className={styles.sumState}>
            <div className={styles.sumStatus}>구독 중</div>
            <div className={styles.sumCount}>{summary.totalSubscriptions}개</div>
          </div>
          <div className={styles.sumTotalExp}>
            <div className={styles.labelTotalExp}>지출 총액</div>
            <div className={styles.valueTotalExp}>{summary.totalSpending} 원</div>
          </div>
        </div>
      </div>

      {/* 구독 알림 */}
      <div className={styles.Notif}>
        <p className={styles.secNotif}>알림</p>
        <div className={styles.subNotifBox}>
          {subscribeList && subscribeList.length > 0 ? (
            subscribeList
              .map((item) => {
                const { nextPayDate } = calculateNextPayDate(new Date(item.subscribeDate), item.cycle || "1개월");
                const dueDateMessage = calculateDday(nextPayDate, today);
                return {
                  ...item,
                  dueDateMessage,
                  nextPayDate,
                };
              })
              .sort((a, b) => new Date(a.nextPayDate) - new Date(b.nextPayDate))
              .slice(0, 2) // 상위 2개 항목만 표시
              .map((item, index) => (
                <div key={index} className={styles.notifBox}>
                  {/* 다음 결제일을 포맷에 맞게 표시 */}
                  <p className={styles.notifDate}>{koreanDate(new Date(item.nextPayDate))}</p>
                  <p className={styles.notifPrice}>{item.price.toLocaleString()} 원</p>
                  <p className={styles.notifMsg}>
                    {item.dueDateMessage === '오늘' ? '오늘이 결제일이예요!' : item.dueDateMessage}
                  </p>
                  <div className={styles.notifLogo}>
                    {item.logoUrl && <img src={item.logoUrl} alt={`${item.name} logo`} />}
                  </div>
                </div>
              ))
          ) : (
            <p className={styles.notInfo}>구독 정보가 없습니다</p>
          )}
        </div>
      </div>


      {/* 구독 서비스 목록 */}
      <div className={styles.mySvc}>
        <p className={styles.secMySvc}>나의 구독 서비스</p>
        {subscribeList && subscribeList.length > 0 ? (
          subscribeList.map((item, index) => {
            const { nextPayDate } = calculateNextPayDate(new Date(item.subscribeDate), item.cycle || "1개월");
            const dDayMessage = calculateDday(nextPayDate, today);

            return (
              <div key={item.id} className={styles.mySvcContainer}> {/* item.id 사용 */}
                <motion.div
                  drag="x"
                  dragConstraints={{ left: -29, right: 0 }}
                  dragElastic={0.1}
                  dragControls={swipeDragControls}
                  onDragEnd={(event, info) => handleDragEnd(event, info, index)} // 핸들러에 index 전달
                  style={{ x: itemX[index] || 0 }}  // 개별 항목의 x 좌표 설정
                  className={styles.swipeContainer}
                >
                  <button className={styles.mySvcBox} onClick={() => {
                    myServiceClick(item);  // 서비스 클릭 시 선택된 서비스를 처리
                    openEditModal();  // 편집 모달 열기
                  }}>
                    <div className={styles.mySvcLogo}>
                      <img src={item.logoUrl} alt={`${item.name} logo`} className={styles.logoUrl} />
                    </div>
                    <div className={styles.mySvcInfo}>
                      <p className={styles.mySvcName}>{item.name}</p>
                      <p className={styles.mySvcPrice}>{item.price.toLocaleString()} 원 / {item.cycle}</p>
                    </div>
                    {/* 결제일에 따라 배경 색상 적용 */}
                    <p className={styles.mySvcDday} style={{ backgroundColor: dDayMessage === '오늘' ? '#FF594F' : '#528DFF' }}>
                      {dDayMessage}
                    </p>
                    <div className={styles.mySvcDetail}>
                      <img src={detailBtn} alt="detail Button" className={styles.detailBtn} />
                    </div>
                  </button>
                </motion.div>
                <motion.button
                  className={styles.deleteBtn}
                  onClick={() => deleteService(item.subscriptionId || item.id, index)}  // item.subscriptionId를 전달하여 삭제 후 위치 복구
                  initial={{ opacity: 0 }}
                  animate={{ opacity: itemX[index] === -29 ? 1 : 0 }}  // 삭제 버튼이 보이도록 설정
                >
                  삭제
                </motion.button>
              </div>
            );
          })
        ) : (
          <p className={styles.notInfo}>구독 정보가 없습니다</p>
        )}
      </div>


      {/* 나의 구독 서비스 편집 Modal*/}
      {isEditModal && (
        <div className={styles.editModalContainer}>
          {/* editModalPage1 */}
          {editPage === 1 && (
            <div className={`${styles.editModalPage1} ${editPage === 2 ? styles.page2 : ''}`}>
              <button className={styles.Back} onClick={closeEditModal}>
                <img src={backBtn} alt="back Button" className={styles.backBtn} />
              </button>
              <button className={styles.exitBtn} onClick={editStart}>편집</button>    
              <div className={styles.editModalPage1Content}>
                <div className={styles.editSvcInfo}>
                  <div className={styles.editSvcLogo}>
                    <img src={selectedMySvc?.logoUrl} alt={`${selectedMySvc?.name} logo`} className={styles.logoUrl} />
                  </div>
                  <div className={styles.editSvcName}>{selectedMySvc?.name}</div>
                  <div className={styles.editSvcPrice}>{selectedMySvc?.price?.toLocaleString()}원 / {selectedMySvc?.cycle}</div>
                </div>
                <div className={styles.editSvcPayDateBox}>
                      <p className={styles.editSvcDday}>오늘 결제</p>
                      <p className={styles.editSvcMessage}>
                        {selectedMySvc?.cycle === "1개월" 
                          ? `${monthsDifference(today, new Date(selectedMySvc?.subscribeDate))}달 전에 구독을 시작했어요`
                          : `${Math.floor(monthsDifference(today, new Date(selectedMySvc?.subscribeDate)) / 12)}년 전에 구독을 시작했어요`}
                      </p>
                      <div className={styles.editSvcCircle}> 
                        <div className={styles.line}>
                          <img src={line} alt="line" className={styles.line} />
                        </div>
                        <div className={styles.editCircle1}>
                          <div className={styles.month}>
                            {koreanDate(new Date(selectedMySvc?.subscribeDate), "month")}
                          </div>
                          <div className={styles.day}>
                            {koreanDate(new Date(selectedMySvc?.subscribeDate), "day")}
                          </div>
                        </div>
                        <div className={styles.editCircle2}>
                          <div className={styles.month}>
                            {getPreviousAndNextPayDates(selectedMySvc?.subscribeDate, "month", selectedMySvc?.cycle).formatPreviousPayDate}
                          </div>
                          <div className={styles.day}>
                            {getPreviousAndNextPayDates(selectedMySvc?.subscribeDate, "day", selectedMySvc?.cycle).formatPreviousPayDate}
                          </div>
                        </div>
                        <div className={styles.editCircle3}>
                          <div className={styles.nextMonth}>
                            {getPreviousAndNextPayDates(selectedMySvc?.subscribeDate, "month", selectedMySvc?.cycle).formatNextPayDate}
                          </div>
                          <div className={styles.nextDay}>
                            {getPreviousAndNextPayDates(selectedMySvc?.subscribeDate, "day", selectedMySvc?.cycle).formatNextPayDate}
                          </div>
                        </div>
                      </div>
                </div>
                <div className={styles.editSvcAlert}>
                  <p className={styles.editSvcAlertSet}>알림 설정</p>
                  <p className={styles.editSvcAlertMessage}>결제 전 알림</p>
                  <div className={`${styles.editSvcAlertBtn} ${isOn ? styles.activeBtn : ''}`} onClick={handleToggle}>
                    <div className={`${styles.btnCircle} ${isOn ? styles.active : ''}`} />
                  </div>
                  </div>
              </div>
            </div>
          )}

          {/* editModalPage2 */}
          {editPage === 2 && (
            <div className={styles.editModalPage2}>
              <button className={styles.Back} onClick={backEditModal}>
                <img src={backBtn} alt="back Button" className={styles.backBtn} />
              </button>
              <button className={styles.addOkay} onClick={() => { saveEditModal(); fetchSubscribeList();}}>완료</button>
              <div className={styles.editModalPage2Content}>
                <div className={styles.editSvcLogo}>
                  <img src={selectedMySvc?.logoUrl} alt={`${selectedMySvc?.name} logo`} className={styles.logoUrl} />
                </div>
                <p className={styles.updated}>마지막 작성일</p>   
                <div className={styles.updatedAt}>{selectedMySvc?.updatedAt}</div>         
                <div className={styles.inputGroup}>
                  <label>
                    <input 
                      className={styles.svsInput} 
                      type="text"
                      value={newSubName}
                      onChange={(e) => setNewSubName(e.target.value)} 
                      required 
                    />
                  </label>
                  <label>
                    <input
                      className={styles.svsInput}
                      type="text"
                      value={newSubPrice}
                      onChange={(e) => {
                        const value = e.target.value;
                        // 숫자만 입력되도록 필터링
                        const filteredValue = value.replace(/[^0-9]/g, '');
                        setNewSubPrice(filteredValue);
                      }}
                      required
                    />
                  </label>
                  <label>
                    <select
                      className={styles.svsInputSelect}
                      value={newSubCycle}
                      onChange={(e) => setNewSubCycle(e.target.value)}
                    >
                      <option className={styles.addSvsInputPerOption} value="1개월">1달</option>
                      <option className={styles.addSvsInputPerOption} value="1년">1년</option>
                    </select>
                  </label>
                  <div className={styles.payDateInput}>
                    처음<br/>결제일
                    <div className={styles.dateSelector}>
                      <select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
                        {years.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                      
                      <select value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))}>
                        {months.map(month => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>

                      <select value={selectedDay} onChange={(e) => setSelectedDay(Number(e.target.value))}>
                        {days.map(day => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>                
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 카테고리 선택 버튼 */}
      <div className={styles.addButtonContainer}>
        <button className={`${styles.addButton} ${plusBtnActive ? styles.activePlusButton : ''}`} onClick={cat}>
          <img src={plusBtnActive ? subplusBtn : plusBtn} alt={plusBtnActive ? "subplus" : "plus"} className={plusBtnActive ? styles.subPlusBtn : styles.plusBtn} />
        </button>
        {showCat && (
          <div className={styles.catBtns}>
            <button className={`${styles.catBtn} ${activeCat === 'E-book' ? styles.activeCat : ''}`} onClick={() => catClick('E-book')}>E-book</button>
            <button className={`${styles.catBtn} ${activeCat === 'Cloud' ? styles.activeCat : ''}`} onClick={() => catClick('Cloud')}>Cloud</button>
            <button className={`${styles.catBtn} ${activeCat === 'Delivery' ? styles.activeCat : ''}`} onClick={() => catClick('Delivery')}>Delivery</button>
            <button className={`${styles.catBtn} ${activeCat === 'Music' ? styles.activeCat : ''}`} onClick={() => catClick('Music')}>Music</button>
            <button className={`${styles.catBtn} ${activeCat === 'OTT' ? styles.activeCat : ''}`} onClick={() => catClick('OTT')}>OTT</button>
          </div>
        )}
      </div>

      {/* 구독 추가 Modal */}
      {isAddModal && (
        <div className={styles.addModalContainer}>
          {/* addModalPage1 */}
          {addPage === 1 && (
            <div className={`${styles.addModalPage1} ${addPage === 2 ? styles.page2 : ''}`}>
              <button className={styles.Back} onClick={closeAddModal}>
                <img src={backBtn} alt="back Button" className={styles.backBtn} />
              </button>
              <div className={styles.addModalPage1Content}>
                <div className={styles.addCatBtns}>
                  <button className={`${styles.addCatBtn} ${activeCat === 'OTT' ? styles.activeCat : ''}`} onClick={() => catClick('OTT')}>OTT</button>
                  <button className={`${styles.addCatBtn} ${activeCat === 'Music' ? styles.activeCat : ''}`} onClick={() => catClick('Music')}>Music</button>
                  <button className={`${styles.addCatBtn} ${activeCat === 'Delivery' ? styles.activeCat : ''}`} onClick={() => catClick('Delivery')}>Delivery</button>
                  <button className={`${styles.addCatBtn} ${activeCat === 'Cloud' ? styles.activeCat : ''}`} onClick={() => catClick('Cloud')}>Cloud</button>
                  <button className={`${styles.addCatBtn} ${activeCat === 'E-book' ? styles.activeCat : ''}`} onClick={() => catClick('E-book')}>E-book</button>
                </div>
                <div className={styles.addSvc}>
                  {/* 카테고리별 서비스 버튼 */}
                  {activeCat === 'OTT' && (
                    <div className={styles.addSvcBtns}>
                      <button className={styles.addSvcBtn} onClick={() => serviceClick('넷플릭스')}>
                        <img src={netflixBtn} alt="Netflix Button" className={styles.netflixBtn} />
                      </button>
                      <button className={styles.addSvcBtn} onClick={() => serviceClick('디즈니플러스')}>
                        <img src={disneyPlusBtn} alt="DisneyPlus Button" className={styles.disneyPlusBtn} />
                      </button>
                      <button className={styles.addSvcBtn} onClick={() => serviceClick('티빙')}>
                        <img src={tvingBtn} alt="Tving Button" className={styles.tvingBtn} />
                      </button>
                      <button className={styles.addSvcBtn} onClick={() => serviceClick('웨이브')}>
                        <img src={wavveBtn} alt="Wavve Button" className={styles.wavveBtn} />
                      </button>
                      <button className={styles.addSvcBtn} onClick={() => serviceClick('애플TV')}>
                        <img src={appleTvBtn} alt="Apple TV Button" className={styles.appleTvBtn} />
                      </button>
                      <button className={styles.addSvcBtn} onClick={() => serviceClick('프라임비디오')}>
                        <img src={primeVideoBtn} alt="PrimeVideo Button" className={styles.primeVideoBtn} />
                      </button>
                      <button className={styles.addSvcBtn} onClick={() => serviceClick('유튜브 프리미엄')}>
                        <img src={youtubePremiumBtn} alt="YouTube Premium Button" className={styles.youtubePremiumBtn} />
                      </button>
                      <button className={styles.addSvcBtn} onClick={() => serviceClick('쿠팡플레이')}>
                        <img src={coupangPlayBtn} alt="Coupang Play Button" className={styles.coupangPlayBtn} />
                      </button>
                      <button className={styles.addSvcBtn} onClick={() => serviceClick('시리즈온')}>
                        <img src={seriesOnBtn} alt="Series On Button" className={styles.seriesOnBtn} />
                      </button>
                    </div>
                  )}
                
                  {activeCat === 'Music' && (
                  <div className={styles.addSvcBtns}>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('스포티파이')}>
                      <img src={spotifyBtn} alt="Spotify Button" className={styles.spotifyBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('애플 뮤직')}>
                      <img src={appleMusicBtn} alt="Apple Music Button" className={styles.appleMusicBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('벅스')}>
                      <img src={bugsBtn} alt="Bugs Button" className={styles.bugsBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('플로')}>
                      <img src={floBtn} alt="Flo Button" className={styles.floBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('지니뮤직')}>
                      <img src={genieBtn} alt="Genie Button" className={styles.genieBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('멜론')}>
                      <img src={melonBtn} alt="Melon Button" className={styles.melonBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('유튜브 뮤직')}>
                      <img src={youtubeMusicBtn} alt="YouTube Music Button" className={styles.youtubeMusicBtn} />
                    </button>
                  </div>
                )}

                {activeCat === 'Delivery' && (
                  <div className={styles.addSvcBtns}>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('배민 클럽')}>
                      <img src={baeminBtn} alt="Baemin Button" className={styles.baeminBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('요기패스')}>
                      <img src={yogiyoBtn} alt="Yogiyo Button" className={styles.yogiyoBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('쿠팡이츠')}>
                      <img src={coupangEatsBtn} alt="Coupang Eats Button" className={styles.coupangEatsBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('신세계 유니버스')}>
                      <img src={shinsegaeUniverseBtn} alt="Shinsegae Universe Button" className={styles.shinsegaeUniverseBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('마켓컬리')}>
                      <img src={kurlyBtn} alt="Kurly Button" className={styles.kurlyBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('네이버 플러스')}>
                      <img src={naverPlusBtn} alt="Naver Plus Button" className={styles.naverPlusBtn} />
                    </button>
                  </div>
                )}

                {activeCat === 'Cloud' && (
                  <div className={styles.addSvcBtns}>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('네이버 클라우드')}>
                      <img src={naverCloudBtn} alt="Naver Cloud Button" className={styles.naverCloudBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('아이클라우드')}>
                      <img src={iCloudBtn} alt="iCloud Button" className={styles.iCloudBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('카카오 드라이브')}>
                      <img src={kakaoDriveBtn} alt="Kakao Drive Button" className={styles.kakaoDriveBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('구글 드라이브')}>
                      <img src={googleDriveBtn} alt="Google Drive Button" className={styles.googleDriveBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('드롭박스')}>
                      <img src={dropBoxBtn} alt="Dropbox Button" className={styles.dropBoxBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('원드라이브')}>
                      <img src={oneDriveBtn} alt="OneDrive Button" className={styles.oneDriveBtn} />
                    </button>
                  </div>
                )}
                {activeCat === 'E-book' && (
                  <div className={styles.addSvcBtns}>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('밀리의 서재')}>
                      <img src={millieBtn} alt="Millie Button" className={styles.millieBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('리디북스')}>
                      <img src={ridiBooksBtn} alt="RidiBooks Button" className={styles.ridiBooksBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('오디언')}>
                      <img src={audienBtn} alt="Audien Button" className={styles.audienBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('교보문고 sam')}>
                      <img src={kyoboBookBtn} alt="Kyobo Book Button" className={styles.kyoboBookBtn} />
                    </button>
                    <button className={styles.addSvcBtn} onClick={() => serviceClick('예스24 ebook')}>
                      <img src={yes24Btn} alt="Yes24 Button" className={styles.yes24Btn} />
                    </button>
                  </div>
                )}
                </div>
                <div className={styles.addSvcNameBox}>
                  <div className={styles.nameBar}></div>
                  <div className={styles.addSvcName}>{selectedSvc}</div>
                </div>
                {/* 선택 버튼 */}
                <button className={styles.selectButton} onClick={selectClick}>선택</button>
              </div>
            </div>
          )}
          {/* addModalPage2 */}
          {addPage === 2 && (
            <div className={styles.addModalPage2}>
              <button className={styles.Back} onClick={backAddModal}>
                <img src={backBtn} alt="back Button" className={styles.backBtn} />
              </button>
              <button className={styles.addOkay} onClick={saveAddModal} disabled={addLoading}>
                완료
              </button>
              {addError && <div className={styles.errorMsg}>{addError}</div>}
              <div className={styles.addModalPage2Content}>
                <div className={styles.addSvcLogo}>{renderServiceImage()}</div>
                <p className={styles.created}>작성일</p>
                <div className={styles.createdAt}>{koreanDate(today)}</div>
                
                {/* 이름과 금액 입력 필드 추가 */}
                <div className={styles.inputGroup}>
                  <label>
                    <input 
                      className={styles.svsInput} 
                      type="text"
                      placeholder="이름" 
                      value={newSubName || ''}  // null인 경우 빈 문자열로 처리
                      onChange={(e) => setNewSubName(e.target.value)} 
                      required 
                    />
                  </label>
                  <label>
                    <input
                      className={styles.svsInput}
                      type="text"
                      placeholder="금액"
                      value={newSubPrice || ''}  // null인 경우 빈 문자열로 처리
                      onChange={(e) => {
                        const value = e.target.value;
                        const filteredValue = value.replace(/[^0-9]/g, ''); 
                        setNewSubPrice(filteredValue); 
                      }}
                      required
                    />
                    </label>
                    <label>
                    <select className={styles.svsInputSelect} onChange={(e) => setNewSubCycle(e.target.value)}>
                      <option className={styles.addSvsInputPerOption} value="1개월">1달</option>
                      <option className={styles.addSvsInputPerOption} value="1년">1년</option>
                    </select>
                    </label>
                    <div className={styles.payDateInput}>
                      처음<br/>결제일
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                          {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                        
                        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                          {months.map(month => (
                            <option key={month} value={month}>{month}</option>
                          ))}
                        </select>

                        <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
                          {days.map(day => (
                            <option key={day} value={day}>{day}</option>
                          ))}
                        </select>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
    </div>
  );
};

export default HomePage;