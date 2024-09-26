import React, { useState } from 'react';
import Line from '../assets/images/menubar/line.svg';
import Icon1Default from '../assets/images/menubar/icon1-default.svg';
import Icon1Selected from '../assets/images/menubar/icon1-selected.svg';
import Icon2Default from '../assets/images/menubar/icon2-default.svg';
import Icon2Selected from '../assets/images/menubar/icon2-selected.svg';
import Icon3Default from '../assets/images/menubar/icon3-default.svg';
import Icon3Selected from '../assets/images/menubar/icon3-selected.svg';
import Icon4Default from '../assets/images/menubar/icon4-default.svg';
import Icon4Selected from '../assets/images/menubar/icon4-selected.svg';
import styles from '../styles/components/menubar.module.css';

function App() {
    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleIconClick = (index) => {
        setSelectedIcon(index);
    };

    const MenuIcon = ({ selected, onClick, defaultIcon, selectedIcon }) => {
      return (
        <img 
          src={selected ? selectedIcon : defaultIcon} 
          alt="Menu Icon" 
          onClick={onClick}
          style={{ width: '24px', height: '24px', cursor: 'pointer' }} 
        />
      );
    };

    return (
        <div className={styles["app-container"]}>
          <div className={styles["menu-bar"]}>
            <MenuIcon 
              selected={selectedIcon === 0}
              onClick={() => handleIconClick(0)}
              defaultIcon={Icon1Default}
              selectedIcon={Icon1Selected}
            />
            <MenuIcon 
              selected={selectedIcon === 1}
              onClick={() => handleIconClick(1)}
              defaultIcon={Icon2Default}
              selectedIcon={Icon2Selected}
            />
            <MenuIcon 
              selected={selectedIcon === 2}
              onClick={() => handleIconClick(2)}
              defaultIcon={Icon3Default}
              selectedIcon={Icon3Selected}
            />
            <MenuIcon 
              selected={selectedIcon === 3}
              onClick={() => handleIconClick(3)}
              defaultIcon={Icon4Default}
              selectedIcon={Icon4Selected}
            />
          </div>
        </div>
    );
}

export default App;
