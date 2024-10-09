import { useState, useRef } from 'react';
import netflix from '../../assets/images/result/netfilx.svg';
import disney from '../../assets/images/result/disney.svg';
import tving from '../../assets/images/result/tving.svg';
import apple from '../../assets/images/result/apple.svg';
import coupang from '../../assets/images/result/coupang.svg';
import naver from '../../assets/images/result/naver.svg';
import prime from '../../assets/images/result/prime.svg';
import wavve from '../../assets/images/result/wavve.svg';
import youtube from '../../assets/images/result/youtube.svg';
import { useNavigate } from 'react-router-dom'; 

import styles from '../../styles/result/result.module.css';

  const images = [
    { id: 1, src: netflix, alt: 'Netflix', description: '넷플릭스는 9,500원에 이용 가능하며, KT 고객에게 20% 할인을 제공합니다. 160,000권의 책과 오디오북을 보유하고 있습니다.' },
    { id: 2, src: disney, alt: 'Disney', description: '디즈니 플러스는 다양한 가족 콘텐츠를 제공하며, 가격은 12,000원입니다.' },
    { id: 3, src: tving, alt: 'Tving', description: '티빙은 한국에서 인기 있는 스트리밍 서비스로, 최신 한국 드라마를 제공합니다.' },
    { id: 4, src: apple, alt: 'Apple TV', description: '애플 TV는 프리미엄 콘텐츠를 제공합니다.' },
    { id: 5, src: coupang, alt: 'Coupang Play', description: '쿠팡 플레이는 쿠팡 고객을 위한 스트리밍 서비스입니다.' },
    { id: 6, src: naver, alt: 'Naver TV', description: '네이버 TV는 다양한 한국 콘텐츠를 무료로 제공합니다.' },
    { id: 7, src: prime, alt: 'Amazon Prime', description: '아마존 프라임은 8,500원에 다양한 국제 콘텐츠를 제공합니다.' },
    { id: 8, src: wavve, alt: 'Wavve', description: '웨이브는 한국 TV와 영화를 스트리밍합니다.' },
    { id: 9, src: youtube, alt: 'YouTube Premium', description: '유튜브 프리미엄은 광고 없는 유튜브 시청을 제공합니다.' },
  ];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDescription, setSelectedDescription] = useState(null); // 선택된 이미지 설명 저장
  const imageRefs = useRef([]);
  const galleryRef = useRef(null);
  const navigate = useNavigate();

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setSelectedDescription(images[index].description); // 선택된 이미지의 설명 저장
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

  return (
    <div className={styles["app-container"]}>
      <div className={styles["top-container"]}>
        <p className={styles["top-comment"]}>
          서현님께<br />"넷플릭스"를 추천합니다!
        </p>

        <div className={styles["middle-container"]}>
          <div className={styles["result"]}>
            <div className={styles["outer-border"]}></div>
            <div className={styles["inner-border"]}></div>
            <img src={netflix} className={styles["netflix"]} alt="netflix" />
          </div>
          <div className={styles["comment-container"]}>
            <p className={styles["middle-comment1"]}>혜택 정보</p>
            <p className={styles["price"]}>9,500</p>
            <p className={styles["infomation"]}>
              KT 고객 20% 할인<br /><br />
              책 보유 수: 160,000권 <br /><br />
              오디오북 포함
            </p>
          </div>
        </div>
      </div>

      <div className={styles["image-container"]}>
        <div className={styles["text-and-dots-container"]}>
          <div className={styles["dot-indicator-container"]}>
            {images.map((_, index) => (
              <div
                key={index}
                className={`${styles["dot"]} ${currentIndex === index ? styles["active"] : ''}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>

        <div className={styles["image-gallery"]} ref={galleryRef}>
          {images.map((image, index) => (
            <img
              key={image.id}
              ref={(el) => (imageRefs.current[index] = el)}
              src={image.src}
              alt={image.alt}
              className={`${styles["gallery-image"]} ${currentIndex === index ? styles["active"] : ''}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        {selectedDescription && (
        <div className={styles["description-box"]}>
          <p>{selectedDescription}</p>
        </div>
      )}
      <div className={styles["button-container"]}>
      <button className={styles["button1"]}>
      "넷플릭스" 바로가기
    </button>
    <button className={styles["button2"]}  onClick={() => navigate('/HomePage')}>
      마이페이지
    </button>
      </div>
      </div>
    </div>
  );
}

export default App;
