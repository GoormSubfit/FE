import React, { useState, useEffect } from 'react';
import styles from '../../styles/home/HomePage.module.css';
import plusBtn from "../../assets/images/Plus.svg"; 
import subplusBtn from "../../assets/images/subplus.svg"; 
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
import DateSelector from "../../components/DateSelector/DateSelector"
import backBtn from "../../assets/images/back-button.svg"
import detailBtn from "../../assets/images/DetailBtn.svg"
import DateCycle from '../../components/DateCycle';
import line from "/src/assets/images/DateLine.svg";


const HomePage = () => {
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

  // 상태 관리
  const [userData, setUserData] = useState({
    name: "김서현",
    jobTitle: "Marketing Coordinator",
    subState: "구독 중",
    subList: [
        {name: "넷플릭스", price: 9500, cycle: "1개월", logoUrl: "", createdAt: "9월 04일", updatedAt: "9월 14일", subscribeDate: "2024-09-04"},
        {name: "플로", price: 4830, cycle: "1개월", logoUrl: "", createdAt: "9월 23일", updatedAt: "9월 23일", subscribeDate: "2024-01-30"},
        {name: "스포티파이", price: 10000, cycle: "1개월", logoUrl: "", createdAt: "9월 25일", updatedAt: "9월 25일", subscribeDate: "2024-07-30"},
        {name: "배민 클럽", price: 12000, cycle: "1개월", logoUrl: "", createdAt: "9월 27일", updatedAt: "9월 27일", subscribeDate: "2024-09-17"}
    ]    
  });

  const today = new Date();
  // 날짜에서 월과 일을 추출하는 함수
  const getMonthAndDate = (date) => {
    return {
      month: date.getMonth() + 1, // 월은 0부터 시작하므로 +1
      date: date.getDate(),
    };
  };
  
  // 날짜를 "9월 30일" 형식으로 변환하는 함수
  const koreanDate = (date, option = "both") => {
    const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();

    switch (option) {
      case "month":
          return month; // 월만 반환
      case "day":
          return day; // 일만 반환
      case "both":
      default:
          return `${month} ${day}일`; // 월과 일 모두 반환
    }
  };

  const subscribeDate = new Date('2024-09-07'); // subscribeDate를 Date 객체로 변환

  const monthsDifference = (today, subscribeDate) => {
    const yearsDiff = today.getFullYear() - subscribeDate.getFullYear();
    const monthsDiff = today.getMonth() - subscribeDate.getMonth();
    
    return yearsDiff * 12 + monthsDiff; // 총 몇 개월 차이인지 계산
  };

  // 날짜 파싱 함수
  const calculateDday = (subscribeDate, today) => {
    // 두 날짜가 같은 날인지 비교
    if (subscribeDate.toDateString() === today.toDateString()) {
      return '오늘';
    }
    else{
    // 두 날짜의 차이를 계산 (일 단위)
    const diffTime = subscribeDate.getTime() - today.getTime(); // 밀리초 차이 계산
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)); // 밀리초를 일로 변환한 값
    
    // 음수를 방지하고 X일 뒤 반환
    return diffDays > 0 ? `${diffDays}일 뒤` : '오늘';
    }
  };


  // 처음 결제일로부터 다음 결제일을 계산하는 함수
  const calculateNextPayDate = (subscribeDate) => {
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

    // 그 달의 마지막 일을 넘지 않도록 조정 (예: 31일이 없을 경우 마지막 날짜로 설정)
    if (nextPayDate.getDate() !== subscribeDay) {
      nextPayDate.setDate(0); // 그 달의 마지막 날짜로 설정
    }

    return {
      subscribeDate,           // 처음 결제일
      previousPayDate,      // 이전 결제일
      nextPayDate           // 다음 결제일
    };
  };

  const getPreviousAndNextPayDates = (subscribeDate, option = "both") => {
    const { previousPayDate, nextPayDate } = calculateNextPayDate(new Date(subscribeDate));
  
    const formatPreviousPayDate = koreanDate(previousPayDate, option);
    const formatNextPayDate = koreanDate(nextPayDate, option);
  
    return {
      formatPreviousPayDate,
      formatNextPayDate
    };
  };

  
  // 구독 금액 계산
  useEffect(() => {
    const totalPrice = userData.subList.reduce((acc, item) => acc + item.price, 0);
    setTotalSpent(totalPrice);
  }, [userData.subList]);

  // 카테고리 버튼 클릭
  const cat = () => {
    setShowCat(prevState => !prevState);
    setPlusBtnActive(prevState => !prevState);
    if (CatSelected) setIsAddModal(true);
  };

  const catClick = (category) => {
    setActiveCat(category);
    setCatSelected(true);
    document.body.classList.add('modal-open');
    setIsAddModal(true);
  };

    // 서비스 선택 및 모달 조작
  const serviceClick = (serviceName) => {
    setSelectedSvc(serviceName);
  };

  const selectClick = () => {
    if (selectedSvc) {  // selectedSvc가 null 또는 빈 값이 아닐 때만 실행
      setAddPage(2);
    } else {
      alert("서비스를 먼저 선택해주세요.");  // 서비스가 선택되지 않았을 때 알림
      setAddPage(1);
    }
  };
    
  const backAddModal = () => {
    setAddPage(1);
  }

  const closeAddModal = () => {  // selectedSvc가 null 또는 빈 값이 아닐 때만 실행
      document.body.classList.remove('modal-open');
      setIsAddModal(false);
      setAddPage(1);  
      setShowCat(false);
      setPlusBtnActive(false);
      setActiveCat(''); // 선택된 카테고리 초기화
      setCatSelected(false); // 카테고리 선택 상태 초기화
      setSelectedSvc('');
  }
  const saveAddModal = () => {
    if (newSubName.trim() && newSubPrice) {  // selectedSvc가 null 또는 빈 값이 아닐 때만 실행
      setIsAddModal(false);
      setAddPage(1);  
      setShowCat(false);
      setPlusBtnActive(false);
      setActiveCat(''); // 선택된 카테고리 초기화
      setCatSelected(false); // 카테고리 선택 상태 초기화
      setSelectedSvc('');
      setNewSubName('');
      setNewSubPrice(null);
    } else {
      alert("내용을 작성해주세요");  // 서비스가 선택되지 않았을 때 알림
      setAddPage(2);
    }
  };

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
  }

  const saveEditModal = () => {
    if (newSubName.trim() && newSubPrice) {  // selectedSvc가 null 또는 빈 값이 아닐 때만 실행
      setIsEditModal(false);
      setEditPage(1);  
      setSelectedMySvc('');
      setNewSubName('');
      setNewSubPrice(null);
    } else {
      alert("내용을 작성해주세요");  // 서비스가 선택되지 않았을 때 알림
      setAddPage(2);
    }
  };

  // 서비스 이미지 맵핑 (카테고리별 이미지 표시)
  const renderServiceImage = () => {
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

  return (
    <div className={styles.homeContainer}>
      {plusBtnActive && <div className={styles.overlay}></div>}
      {/* 사용자 정보 및 구독 정보 */}
      <div className={styles.container}>
        <div className={styles.userProfile}>
          <h2 className={styles.userName}>{userData.name}님</h2>
          <p className={styles.userJob}>{userData.jobTitle}</p>
        </div>
        <div className={styles.Summary}>
          <DateCycle/>
          <div className={styles.sumState}><div className={styles.sumStatus}>{userData.subState}</div><div className={styles.sumCount}>{userData.subList.length}개</div></div>
          <div className={styles.sumTotalExp}><div className={styles.labelTotalExp}>지출 총액</div><div className={styles.valueTotalExp}>{totalSpent.toLocaleString()} 원</div></div>
        </div>
      </div>

      {/* 구독 알림 */}
      // 구독 알림 부분
      <div className={styles.Notif}>
        <p className={styles.secNotif}>알림</p>
        <div className={styles.subNotifBox}>
          {userData.subList
            .filter(item => item.cycle === "1개월")  // 필터링 조건
            .map(item => {
              const nextPayDate = calculateNextPayDate(new Date(item.subscribeDate)).nextPayDate; 
              const dueDateMessage = calculateDday(nextPayDate, today); // 남은 일수 또는 "오늘" 반환
              return {
                ...item,
                dueDateMessage, // 남은 일 또는 "오늘" 반환된 값 저장
                nextPayDate
              };
            })
            .sort((a, b) => new Date(a.nextPayDate) - new Date(b.nextPayDate))  // 날짜 기준으로 정렬
            .slice(0, 2)  // 상위 2개 항목만 표시
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
            ))}
        </div>
      </div>




      {/* 구독 서비스 목록 */}
      <div className={styles.mySvc}>
        <p className={styles.secMySvc}>나의 구독 서비스</p>
        {userData.subList.map((item, index) => {
          const nextPayDate = calculateNextPayDate(new Date(item.subscribeDate)).nextPayDate; // 각 항목마다 다음 결제일 계산
          const dDayMessage = calculateDday(nextPayDate, today); // 남은 일수 메시지 계산

          return (
           <button key={index} className={styles.mySvcBox} onClick={() => {
            myServiceClick(item);  // 서비스 클릭 시 선택된 서비스를 처리
            openEditModal();  // 편집 모달 열기
          }}>
            <div className={styles.mySvcLogo}></div>
            <div className={styles.mySvcInfo}>
            <p className={styles.mySvcName}>{item.name}</p>
            <p className={styles.mySvcPrice}>{item.price.toLocaleString()} 원 / {item.cycle}</p>
            </div>
            <p className={styles.mySvcDday} style={{ backgroundColor: dDayMessage === '오늘' ? '#FF594F' : '#528DFF' }}>
              {dDayMessage}
            </p>
            <div className={styles.mySvcDetail}>
              <img src={detailBtn} alt="detail Button" className={styles.detailBtn} />
              </div>
            </button>
          );
        })}
      </div>

      {isEditModal && (
        <div className={styles.editModalContainer}>
          {editPage === 1 && (
            <div className={`${styles.editModalPage1} ${editPage === 2 ? styles.page2 : ''}`}>
              <button className={styles.Back} onClick={closeEditModal}>
                <img src={backBtn} alt="back Button" className={styles.backBtn} />
              </button>
              <button className={styles.exitBtn} onClick={editStart}>편집</button>    
              <div className={styles.editModalPage1Content}>
                  <div className={styles.editSvcInfo}>
                    <div className={styles.editSvcLogo}>{renderServiceImage()}</div>
                    <div className={styles.editSvcName}>{selectedMySvc?.name}</div>
                    <div className={styles.editSvcPrice}>{selectedMySvc?.price?.toLocaleString()}원 / {selectedMySvc?.cycle}</div>
                  </div>
                  <div className={styles.editSvcPayDateBox}>
                      <p className={styles.editSvcDday}>오늘 결제</p>
                      <p className={styles.editSvcMessage}>{monthsDifference(today, new Date(selectedMySvc?.subscribeDate))}달 전에 구독을 시작했어요</p>
                      <div className={styles.editSvcCircle}> 
                        <div className={styles.line}>
                          <img src={line} alt="line" className={styles.line} />
                        </div>
                        <div className={styles.editCircle1}>
                          <div className={styles.month}>{koreanDate(new Date(selectedMySvc?.subscribeDate),"month")}</div>
                          <div className={styles.day}>{koreanDate(new Date(selectedMySvc?.subscribeDate),"day")}</div>
                        </div>
                        <div className={styles.editCircle2}>
                          <div className={styles.month}>{getPreviousAndNextPayDates(selectedMySvc?.subscribeDate, "month").formatPreviousPayDate}</div>
                          <div className={styles.day}>{getPreviousAndNextPayDates(selectedMySvc?.subscribeDate, "day").formatPreviousPayDate}</div>
                        </div>
                        <div className={styles.editCircle3}>
                            <div className={styles.nextMonth}>{getPreviousAndNextPayDates(selectedMySvc?.subscribeDate, "month").formatNextPayDate}</div>
                            <div className={styles.nextDay}>{getPreviousAndNextPayDates(selectedMySvc?.subscribeDate, "day").formatNextPayDate}</div>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          )}

          {editPage === 2 && (
            <div className={styles.editModalPage2}>
              <button className={styles.Back} onClick={backEditModal}>
                <img src={backBtn} alt="back Button" className={styles.backBtn} />
              </button>
              <button className={styles.addOkay} onClick={saveEditModal}>완료</button>
              <div className={styles.editModalPage2Content}>
                <div className={styles.editSvcLogo}>{renderServiceImage()}</div>
                <p className={styles.updated}>마지막 작성일
                  <div className={styles.updatedAt}>
                    {selectedMySvc?.updatedAt}
                  </div>
                </p>                
                <div className={styles.inputGroup}>
                  <label>
                    <input 
                      className={styles.svsInput} 
                      type="text"
                      placeholder="이름" 
                      value={newSubName}
                      onChange={(e) => setNewSubName(e.target.value)} 
                      required 
                    />
                  </label>
                  <label>
                    <input 
                      className={styles.svsInput} 
                      type="number" 
                      placeholder="금액" 
                      value={newSubPrice}
                      onChange={(e) => setNewSubPrice(e.target.value)} 
                      required 
                    />
                  </label>
                  <label>
                    <select className={styles.svsInputSelect}>
                      <option className={styles.addSvsInputPerOption} value="1month">1달</option>
                      <option className={styles.addSvsInputPerOption} value="1year">1년</option>
                    </select>
                  </label>
                  <div className={styles.payDateInput}>
                    처음<br/>결제일 <DateSelector />
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
        <div className={styles.Bar}>
          <button className={styles.profile}><img src={profBtn} alt="Profile Button" className={styles.profBtn}/></button>
          <button className={styles.calendar}><img src={calBtn} alt="Calendar Button" className={styles.calBtn}/></button>
          <button className={styles.question}><img src={qBtn} alt="Question Button" className={styles.qBtn}/></button>
        </div>
      </div>

      {/* 모달 */}
      {isAddModal && (
        <div className={styles.addModalContainer}>
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
                {/* 선택 버튼 */}
                <button className={styles.selectButton} onClick={selectClick}>선택</button>
              </div>
            </div>
          )}
          {/* 모달 2 페이지 */}
          {addPage === 2 && (
            <div className={styles.addModalPage2}>
              <button className={styles.Back} onClick={backAddModal}>
                <img src={backBtn} alt="back Button" className={styles.backBtn} />
              </button>
              <button className={styles.addOkay} onClick={saveAddModal}>완료</button>
              <div className={styles.addModalPage2Content}>
                <div className={styles.addSvcLogo}>{renderServiceImage()}</div>
                <p className={styles.created}>작성일
                  <div className={styles.createdAt}>{koreanDate(today)}</div>
                </p>
                
                {/* 이름과 금액 입력 필드 추가 */}
                <div className={styles.inputGroup}>
                  <label>
                    <input 
                      className={styles.svsInput} 
                      type="text"
                      placeholder="이름" 
                      value={newSubName}
                      onChange={(e) => setNewSubName(e.target.value)} 
                      required 
                    />
                  </label>
                  <label>
                    <input 
                      className={styles.svsInput} 
                      type="number" 
                      placeholder="금액" 
                      value={newSubPrice}
                      onChange={(e) => setNewSubPrice(e.target.value)} 
                      required 
                    />
                  </label>
                  <label>
                    <select className={styles.svsInputSelect}>
                      <option className={styles.addSvsInputPerOption} value="1month">1달</option>
                      <option className={styles.addSvsInputPerOption} value="1year">1년</option>
                    </select>
                  </label>
                  <div className={styles.payDateInput}>
                    처음<br/>결제일 <DateSelector />
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
