import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/recommend/recommend.module.css';
import useRecommendationList from '../../hooks/useRecommendationList';
import useProfileData from '../../hooks/useProfileData';  // 프로필 데이터를 가져오는 훅

function App() {
  const [category, setCategory] = useState('OTT'); // 기본 카테고리 설정
  const { data, loading, error, deleteRecommendation } = useRecommendationList(); // 데이터 가져오기 및 삭제 함수
  const { name } = useProfileData(); // 프로필 데이터 가져오기
  const [itemX, setItemX] = useState({}); // 스와이프된 항목의 X 좌표 저장
  const [isSheetOpen, setIsSheetOpen] = useState(false); // 팝업 시트 상태
  const [sortOrder, setSortOrder] = useState('newest'); // 정렬 순서 상태
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setCategory(category); // 선택된 카테고리로 설정
  };

  const toggleSheet = () => {
    setIsSheetOpen(prev => !prev); // 팝업 시트 열고 닫기
  };

  const handleSortOrder = (order) => {
    setSortOrder(order);
    setIsSheetOpen(false); // 팝업 시트 닫기
  };

  // 스와이프하여 삭제 버튼 활성화
  const handleDragEnd = (event, info, index) => {
    const swipeThreshold = -100; // 삭제 버튼이 노출될 최소 스와이프 거리
    const currentX = info.offset.x;

    if (currentX < swipeThreshold) {
      setItemX((prev) => ({
        ...prev,
        [index]: swipeThreshold,  // 스와이프 고정
      }));
    } else {
      setItemX((prev) => ({
        ...prev,
        [index]: 0,  // 원래 위치로 복구
      }));
    }
  };

  // 삭제 버튼 클릭 시 삭제 처리
  const handleDelete = (id) => {
    deleteRecommendation(id); // 데이터베이스에서 삭제
  };

  // 정렬 순서에 따라 데이터를 정렬
  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.createdAt) - new Date(a.createdAt); // 최신순
    } else {
      return new Date(a.createdAt) - new Date(b.createdAt); // 오래된순
    }
  });

  // 선택된 카테고리별로 데이터를 필터링
  const filteredData = sortedData.filter(item => item.type === category);

  return (
    <div className={styles["app-container"]}>
      <div className={styles["history-container"]}>
        {/* 프로필에서 가져온 이름을 동적으로 표시 */}
        <p className={styles["top-comment"]}>{name}님의 질문 모음</p>
        <p className={styles["history-comment"]}>히스토리</p>
        <div className={styles["button-group"]}>
          <button onClick={() => handleCategoryClick('OTT')} className={styles["small-button"]}>OTT</button>
          <button onClick={() => handleCategoryClick('MUSIC')} className={styles["small-button"]}>Music</button>
          <button onClick={() => handleCategoryClick('DELIVERY')} className={styles["small-button"]}>Delivery</button>
          <button onClick={() => handleCategoryClick('CLOUD')} className={styles["small-button"]}>Cloud</button>
          <button onClick={() => handleCategoryClick('EBOOK')} className={styles["small-button"]}>E-book</button>
        </div>
      </div>

      <div className={styles["result-container"]}>
        <div className={styles["rcomment-container"]}>
          <p className={styles["result-comment1"]}>총 {filteredData.length}건의 결과가 있어요</p>
          <button className={styles["array"]} onClick={toggleSheet}>정렬 조건</button>
        </div>

        {/* 로딩 상태 */}
        {loading && <p>로딩 중...</p>}

        {/* 에러 처리 */}
        {error && <p>에러 발생: {error.message}</p>}

        {/* 슬라이더에 필터된 결과 표시 */}
        <div className={styles["slider-container"]}>
          <div className={styles["slider"]}>
            {filteredData.map((item, index) => (
              <div key={item.id} className={styles["result-box-container"]}>
                <motion.div
                  drag="x"
                  dragConstraints={{ left: -100, right: 0 }}
                  onDragEnd={(event, info) => handleDragEnd(event, info, index)}
                  style={{ x: itemX[index] || 0 }}  // 개별 항목의 X 좌표 설정
                  className={styles["result-box"]}
                >
                  <div className={styles["left-section"]}>
                    <h3 className={styles["type"]}>{item.type}</h3>
                    <h3 className={styles["serviceName"]}>{item.serviceName}</h3>
                  </div>
                  <div className={styles["seperate-line"]}></div>
                  <div className={styles["right-section"]}>
                    <p className={styles["createdAt"]}>{item.createdAt}</p>
                    <p className={styles["price"]}>가격: {item.price}</p>
                    <p className={styles["userAnswer"]}>{item.userAnswer}</p>
                  </div>
                </motion.div>

                <motion.button
                  className={styles["delete-button"]}
                  onClick={() => handleDelete(item.id)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: itemX[index] === -100 ? 1 : 0 }}  // 스와이프되었을 때 삭제 버튼이 나타남
                >
                  삭제
                </motion.button>
              </div>
            ))}
          </div>
        </div>

        <button className={styles["bottom-button"]} onClick={() => navigate('/RecHome')}>
          새로운 추천 시작
        </button>

        {/* 정렬 팝업 시트 */}
        <motion.div
          className={styles["sort-sheet"]}
          initial={{ y: '100%' }}
          animate={{ y: isSheetOpen ? 0 : '100%' }}
          transition={{ duration: 0.3 }}
        >
          <button onClick={() => handleSortOrder('newest')} className={styles["sort-button"]}>
            최신순
          </button>
          <button onClick={() => handleSortOrder('oldest')} className={styles["sort-button"]}>
            오래된순
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
