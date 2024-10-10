import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import netflix from '../../assets/images/result/netfilx.svg';
import disney from '../../assets/images/result/disney.svg';
import tving from '../../assets/images/result/tving.svg';
import apple from '../../assets/images/result/apple.svg';
import coupang from '../../assets/images/result/coupang.svg';
import naver from '../../assets/images/result/naver.svg';
import prime from '../../assets/images/result/prime.svg';
import wavve from '../../assets/images/result/wavve.svg';
import youtube from '../../assets/images/result/youtube.svg';

import spotify from '../../assets/images/result/spotify.svg';
import applem from '../../assets/images/result/applem.svg';
import bugs from '../../assets/images/result/bugs.svg';
import flo from '../../assets/images/result/flo.svg';
import genie from '../../assets/images/result/genie.svg';
import melon from '../../assets/images/result/melon.svg';
import youtubem from '../../assets/images/result/youtubem.svg';
import vibe from '../../assets/images/result/vibe.svg';

import baemin from '../../assets/images/result/baemin.svg';
import yogi from '../../assets/images/result/yogi.svg';
import coupangeats from '../../assets/images/result/coupangeats.svg';
import shinsegae from '../../assets/images/result/shinsegae.svg';
import kurly from '../../assets/images/result/kurly.svg';
import naverplus from '../../assets/images/result/naverplus.svg';

import cloud from '../../assets/images/result/cloud.svg';
import dropbox from '../../assets/images/result/dropbox.svg';
import googled from '../../assets/images/result/googled.svg';
import navercloud from '../../assets/images/result/navercloud.svg';
import icloud from '../../assets/images/result/icloud.svg';
import talk from '../../assets/images/result/talk.svg';

import kyobo from '../../assets/images/result/kyobo.svg';
import millie from '../../assets/images/result/millie.svg';
import yes from '../../assets/images/result/yes.svg';
import audien from '../../assets/images/result/talk.svg';



import defaultImage from '../../assets/images/result/default.svg'; // 기본 이미지
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
import kakao from "../../assets/images/result/kakao.svg";
import watcha from "../../assets/images/result/watcha.svg";
import scribd from "../../assets/images/result/scribd.svg"
import styles from '../../styles/result/result.module.css';
import useProfileData from "../../hooks/useProfileData";
import useRecommendation from "../../hooks/useRecommendation";

// 서비스 이름과 이미지 매핑 객체
const serviceImages = {
  '넷플릭스': netflixBtn,
  '디즈니+': disneyPlusBtn,
  '티빙': tvingBtn,
  '웨이브': wavveBtn,
  '왓챠':watcha,
  '애플 TV+': appleTvBtn,
  '아마존 프라임 비디오': primeVideoBtn,
  '유튜브 프리미엄': youtubePremiumBtn,
  '쿠팡 플레이': coupangPlayBtn,
  '시리즈온': seriesOnBtn,
  '스포티파이': spotify,
  '애플 뮤직': appleMusicBtn,
  '벅스': bugsBtn,
  '플로': floBtn,
  '지니뮤직': genieBtn,
  '멜론': melonBtn,
  '유튜브 뮤직': youtubeMusicBtn,
  '배민클럽': baeminBtn,
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
  '예스24 ebook': yes24Btn,
  '카카오 톡서랍 플러스': kakao,
  '네이버 Vibe':vibe,
  '스크립드':scribd
};


const getServiceImage = (serviceName) => {
  return serviceImages[serviceName] || defaultImage;
};

function Result() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDescription, setSelectedDescription] = useState(null); // 선택된 이미지 설명 저장
  const imageRefs = useRef([]);
  const galleryRef = useRef(null);
  const navigate = useNavigate();
  const { name } = useProfileData();
  
  const location = useLocation();
  const { type, answers } = location.state; // type, answers 받음
  
  const { submitRecommendation, loading, result, error } = useRecommendation(); // useRecommendation 훅 사용
  
  useEffect(() => {
    submitRecommendation(type, answers); // 추천 데이터를 요청
  }, [type, answers, submitRecommendation]);

  // 로딩 중일 때는 로딩 화면을 보여주고 결과가 나오면 렌더링
  if (loading || !result) {
    return <div>결과를 기다리고 있습니다...</div>; // 로딩 상태를 표시
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>; // 에러 화면
  }

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    const selectedComp = result.comparisons[index]; // result에서 데이터 사용
    setSelectedDescription(`${selectedComp.benefit1} / ${selectedComp.benefit2}`);

    const clickedImage = imageRefs.current[index];
    const galleryElement = galleryRef.current;

    if (clickedImage && galleryElement) {
      const offsetLeft = clickedImage.offsetLeft - galleryElement.offsetWidth / 2 + clickedImage.offsetWidth / 2;
      galleryElement.scrollTo({
        left: offsetLeft,
        behavior: 'smooth',
      });
    }
  };

  const mainServiceImage = getServiceImage(result.serviceName);

  return (
    <div className={styles["app-container"]}>
      <div className={styles["top-container"]}>
        <p className={styles["top-comment"]}>
          {name ? `${name}님께` : '사용자님께'}<br />"{result.serviceName}"를 추천드립니다!
        </p>

        <div className={styles["middle-container"]}>
          <div className={styles["result"]}>
            <div className={styles["outer-border"]}></div>
            <div className={styles["inner-border"]}></div>
            <img src={mainServiceImage} className={styles["service-image"]} alt={result.serviceName} />
          </div>
          <div className={styles["comment-container"]}>
            <p className={styles["middle-comment1"]}>혜택 정보</p>
            <p className={styles["price"]}>{result.price}</p>
            <p className={styles["infomation"]}>
              {result.benefit1}<br /><br />
              {result.benefit2}<br /><br />
              {result.benefit3}
            </p>
          </div>
        </div>
      </div>

      <div className={styles["image-container"]}>
        <div className={styles["text-and-dots-container"]}>
          <div className={styles["dot-indicator-container"]}>
            {result.comparisons.map((comp, index) => (
              <div
                key={index}
                className={`${styles["dot"]} ${currentIndex === index ? styles["active"] : ''}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>

        <div className={styles["image-gallery"]} ref={galleryRef}>
          {result.comparisons.map((comp, index) => {
            const compImage = getServiceImage(comp.name);
            return (
              <img
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                src={compImage}
                alt={comp.name}
                className={`${styles["gallery-image"]} ${currentIndex === index ? styles["active"] : ''}`}
                onClick={() => handleImageClick(index)}
              />
            );
          })}
        </div>
        {selectedDescription && (
          <div className={styles["description-box"]}>
            <p>{selectedDescription}</p>
          </div>
        )}
        
        <div className={styles["button-container"]}>
          <button
            className={styles["button1"]}
            onClick={() => window.open(getServiceImage(result.serviceName), '_blank')}
          >
            "{result.serviceName}" 바로가기
          </button>
          <button className={styles["button2"]} onClick={() => navigate('/HomePage')}>
            마이페이지
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;