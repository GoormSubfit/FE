import React, { useState } from 'react';
import styles from '../styles/components/dropdown.module.css';

function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(''); 

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className={`${styles["dropdown-container"]} ${
        selectedOption ? styles.selected : ""
      }`} /* 선택된 옵션이 있을 경우 selected 클래스를 추가 */
    >
      <div className={styles["dropdown-header"]} onClick={toggleDropdown}>
        {selectedOption || '성별'}
      </div>
      {isOpen && (
        <ul className={styles["dropdown-list"]}>
          <li className={styles["dropdown-item"]} onClick={() => handleOptionClick('남')}>남</li>
          <li className={styles["dropdown-item"]} onClick={() => handleOptionClick('여')}>여</li>
        </ul>
      )}
    </div>
  );
}

export default CustomDropdown;
