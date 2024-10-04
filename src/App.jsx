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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login_s' element={<Login_S/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signupq' element={<Signupq/>}/>
        <Route path='/signupq2' element={<Signupq2/>}/>
        <Route path='/signupq3' element={<Signupq3/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/recommend' element={<Recommend/>}/>
      </Routes>
    </BrowserRouter>

  )
}
