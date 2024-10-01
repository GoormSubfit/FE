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
const HomePage = () => {
  // 상태 관리
  const [userData, setUserData] = useState({
    name: "김서현",
    jobTitle: "Marketing Coordinator",
    subMonth: 9,
    subDay: 14,
    subState: "구독 중",
    subList: [
      { date: "9월 14일", price: 9500, state: "구독 중", dueDate: "오늘", svc: "넷플릭스", period: "1개월" },
      { date: "9월 23일", price: 4830, state: "구독 해지", dueDate: "9일 뒤", svc: "플로", period: "1개월" },
      { date: "9월 25일", price: 10000, state: "구독 중", dueDate: "11일 뒤", svc: "스포티파이", period: "1개월" },
      { date: "9월 27일", price: 12000, state: "구독 중", dueDate: "13일 뒤", svc: "배민 클럽", period: "1개월" }
    ]
  });

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

  // 구독 금액 계산
  useEffect(() => {
    const totalPrice = userData.subList.reduce((acc, item) => acc + item.price, 0);
    setTotalSpent(totalPrice);
  }, [userData.subList]);

  // 날짜 파싱 함수
  const parseDueDate = (dueDate) => {
    if (dueDate.includes("오늘")) return 0;
    const match = dueDate.match(/(\d+)일 뒤/);
    return match ? parseInt(match[1], 10) : Infinity;
  };

  // 카테고리 버튼 클릭
  const cat = () => {
    setShowCat(prevState => !prevState);
    setPlusBtnActive(prevState => !prevState);
    if (CatSelected) setIsAddModal(true);
  };

  const catClick = (category) => {
    setActiveCat(category);
    setCatSelected(true);
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
    return (
      <>
        {/* selectedMySvc에 따른 이미지 렌더링 */}
        {serviceImageMap[selectedMySvc?.svc] && (
          <img src={serviceImageMap[selectedMySvc?.svc]} alt={`${selectedMySvc?.svc} Button`} className={styles.serviceImage} />
        )}
        
        {/* selectedSvc에 따른 이미지 렌더링 */}
        {serviceImageMap[selectedSvc] && (
          <img src={serviceImageMap[selectedSvc]} alt={`${selectedSvc} Button`} className={styles.serviceImage} />
        )}
      </>
    );
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
        
        {/* 구독 알림 */}
        <div className={styles.Notif}>
          <p className={styles.secNotif}>알림</p>
          <div className={styles.subNotifBox}>
            {userData.subList
              .filter(item => item.state === "구독 중")
              .sort((a, b) => parseDueDate(a.dueDate) - parseDueDate(b.dueDate))
              .slice(0, 2)
              .map((item, index) => (
                <div key={index} className={styles.notifBox}>
                  <p className={styles.notifDate}>{item.date}</p>
                  <p className={styles.notifPrice}>{item.price.toLocaleString()} 원</p>
                  <p className={styles.notifMsg}>{item.dueDate === "오늘" ? "오늘이 결제일이예요!" : item.dueDate}</p>
                </div>
              ))}
          </div>
        </div>

        {/* 구독 서비스 목록 */}
        <div className={styles.mySvc}>
          <p className={styles.secMySvc}>나의 구독 서비스</p>
          {userData.subList.map((item, index) => (
            <button key={index} className={styles.mySvcBox} onClick={() => {
              myServiceClick(item);
              openEditModal();
            }}>
              <div className={styles.subInfo}>
                <p className={styles.mySvcName} onChange={(e) => setNewSubPrice(e.target.value)}>{item.svc}</p>
                <p className={styles.mySvcPrice}>{item.price.toLocaleString()} 원 / {item.period}</p>
              </div>
              <p className={styles.mySvcDday} style={{ backgroundColor: item.dueDate === "오늘" ? '#FF594F' : '#528DFF', color: 'white' }}>{item.dueDate}</p>
              <div className={styles.mySvcDetail}>
                <img src={detailBtn} alt="detail Button" className={styles.detailBtn} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {isEditModal && (
        <div className={styles.editModalContainer}>
          {editPage === 1 && (
            <div className={`${styles.editModalPage1} ${editPage === 2 ? styles.page2 : ''}`}>
              <div className={styles.editModalPageHeader}>
                <button className={styles.Back} onClick={closeEditModal}>
                  <img src={backBtn} alt="back Button" className={styles.backBtn} />
                </button>
                <button className={styles.exitBtn} onClick={editStart}>편집</button>
                <div className={styles.editModalPage1Content}>
                  <div className={styles.editSvcInfo}>
                    <div className={styles.editSvcLogo}>{renderServiceImage()}</div>
                    <div className={styles.editSvcName}>{selectedMySvc?.svc}</div>                
                    <div className={styles.editSvcPrice}>{selectedMySvc?.price?.toLocaleString()}원 / {selectedMySvc?.period}</div>                
                  </div>
                </div>
              </div>
            </div>
          )};

          {editPage === 2 && (
            <div className={styles.editModalPage2}>
              <div className={styles.editModalPageHeader}>
                <button className={styles.Back} onClick={backEditModal}>
                  <img src={backBtn} alt="back Button" className={styles.backBtn} />
                </button>
                <div className={styles.editModalPage2Content}>

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
          )};
          {/* 모달 2 페이지 */}
          {addPage === 2 && (
            <div className={styles.addModalPage2}>
              <button className={styles.Back} onClick={backAddModal}>
                <img src={backBtn} alt="back Button" className={styles.backBtn} />
              </button>
              <button className={styles.addOkay} onClick={saveAddModal}>완료</button>
              <div className={styles.addModalPage2Content}>
                <div className={styles.serviceLogo}>{renderServiceImage()}</div>
                <p className={styles.addDoc}>작성일<br/>{userData.subMonth}월 {userData.subDay}일</p>
                
                {/* 이름과 금액 입력 필드 추가 */}
                <div className={styles.inputGroup}>
                  <label>
                    <input 
                      className={styles.addSvsInput} 
                      type="text" 
                      placeholder="이름" 
                      value={newSubName}
                      onChange={(e) => setNewSubName(e.target.value)} 
                      required 
                    />
                  </label>
                  <label>
                    <input 
                      className={styles.addSvsInput} 
                      type="number" 
                      placeholder="금액" 
                      value={newSubPrice}
                      onChange={(e) => setNewSubPrice(e.target.value)} 
                      required 
                    />
                  </label>
                  <label>
                    <select className={styles.addSvsInputSelect}>
                      <option className={styles.addSvsInputPerOption} value="1month">1달</option>
                      <option className={styles.addSvsInputPerOption} value="1year">1년</option>
                    </select>
                  </label>
                  <div className={styles.addFpd}>
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
