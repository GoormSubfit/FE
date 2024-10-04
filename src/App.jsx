import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/login';
import Login_S from './pages/login/login_signup';
import Calendar from './pages/calendar/calendar'; 
import Signup from './pages/signup/signup';
import Signupq from './pages/signupq/signupq';
import Signupq2 from './pages/signupq/signupq2';
import Signupq3 from './pages/signupq/signupq3';
import Profile from './pages/signupq/profile';
import Result from './pages/result/result';
import Recommend from './pages/recommend/recommend';

const App = () => {
  return (
    <div>
      <Calendar />
    </div>
  );
};

export default App;
