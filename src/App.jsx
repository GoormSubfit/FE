import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/login'; // Login 페이지 (Back 버튼 없음)
import Login_S from './pages/login/login_signup';
import Calendar from './pages/calendar/calendar'; 
import Signup from './pages/signup/signup';
import Signupq from './pages/signupq/signupq';
import Signupq2 from './pages/signupq/signupq2';
import Signupq3 from './pages/signupq/signupq3';
import Profile from './pages/signupq/profile';
import Result from './pages/result/result';
import Recommend from './pages/recommend/recommend';
import HomePage from './pages/home/HomePage';
import RecHome from './pages/home/RecHome';

// 추가된 질문 페이지들 (Cloud, Ebook, Music, Ott, Delivery)
import CloudQ1 from './pages/question/CloudQ1';
import CloudQ2 from './pages/question/CloudQ2';
import CloudQ3 from './pages/question/CloudQ3';
import CloudQ4 from './pages/question/CloudQ4';
import CloudQ5 from './pages/question/CloudQ5';
import CloudQ6 from './pages/question/CloudQ6';
import CloudQ7 from './pages/question/CloudQ7';
import EbookQ1 from './pages/question/EbookQ1';
import EbookQ2 from './pages/question/EbookQ2';
import EbookQ3 from './pages/question/EbookQ3';
import EbookQ4 from './pages/question/EbookQ4';
import EbookQ5 from './pages/question/EbookQ5';
import EbookQ6 from './pages/question/EbookQ6';
import EbookQ7 from './pages/question/EbookQ7';
import MusicQ1 from './pages/question/MusicQ1';
import MusicQ2 from './pages/question/MusicQ2';
import MusicQ3 from './pages/question/MusicQ3';
import MusicQ4 from './pages/question/MusicQ4';
import MusicQ5 from './pages/question/MusicQ5';
import MusicQ6 from './pages/question/MusicQ6';
import MusicQ7 from './pages/question/MusicQ7';
import OttQ1 from './pages/question/OttQ1';
import OttQ2 from './pages/question/OttQ2';
import OttQ3 from './pages/question/OttQ3';
import OttQ4 from './pages/question/OttQ4';
import OttQ5 from './pages/question/OttQ5';
import OttQ6 from './pages/question/OttQ6';
import OttQ7 from './pages/question/OttQ7';
import DeliveryQ1 from './pages/question/DeliveryQ1';
import DeliveryQ2 from './pages/question/DeliveryQ2';
import DeliveryQ3 from './pages/question/DeliveryQ3';
import DeliveryQ4 from './pages/question/DeliveryQ4';
import DeliveryQ5 from './pages/question/DeliveryQ5';
import DeliveryQ6 from './pages/question/DeliveryQ6';
import DeliveryQ7 from './pages/question/DeliveryQ7';

// 공통 레이아웃 (Back 버튼 포함)
import Layout from './components/layout';

export default function App() {
  const cloudRoutes = [
    { path: "/cloudq1", element: <CloudQ1 /> },
    { path: "/cloudq2", element: <CloudQ2 /> },
    { path: "/cloudq3", element: <CloudQ3 /> },
    { path: "/cloudq4", element: <CloudQ4 /> },
    { path: "/cloudq5", element: <CloudQ5 /> },
    { path: "/cloudq6", element: <CloudQ6 /> },
    { path: "/cloudq7", element: <CloudQ7 /> }
  ];

  const ebookRoutes = [
    { path: "/ebookq1", element: <EbookQ1 /> },
    { path: "/ebookq2", element: <EbookQ2 /> },
    { path: "/ebookq3", element: <EbookQ3 /> },
    { path: "/ebookq4", element: <EbookQ4 /> },
    { path: "/ebookq5", element: <EbookQ5 /> },
    { path: "/ebookq6", element: <EbookQ6 /> },
    { path: "/ebookq7", element: <EbookQ7 /> }
  ];

  const musicRoutes = [
    { path: "/musicq1", element: <MusicQ1 /> },
    { path: "/musicq2", element: <MusicQ2 /> },
    { path: "/musicq3", element: <MusicQ3 /> },
    { path: "/musicq4", element: <MusicQ4 /> },
    { path: "/musicq5", element: <MusicQ5 /> },
    { path: "/musicq6", element: <MusicQ6 /> },
    { path: "/musicq7", element: <MusicQ7 /> }
  ];

  const ottRoutes = [
    { path: "/ottq1", element: <OttQ1 /> },
    { path: "/ottq2", element: <OttQ2 /> },
    { path: "/ottq3", element: <OttQ3 /> },
    { path: "/ottq4", element: <OttQ4 /> },
    { path: "/ottq5", element: <OttQ5 /> },
    { path: "/ottq6", element: <OttQ6 /> },
    { path: "/ottq7", element: <OttQ7 /> }
  ];

  const deliveryRoutes = [
    { path: "/deliveryq1", element: <DeliveryQ1 /> },
    { path: "/deliveryq2", element: <DeliveryQ2 /> },
    { path: "/deliveryq3", element: <DeliveryQ3 /> },
    { path: "/deliveryq4", element: <DeliveryQ4 /> },
    { path: "/deliveryq5", element: <DeliveryQ5 /> },
    { path: "/deliveryq6", element: <DeliveryQ6 /> },
    { path: "/deliveryq7", element: <DeliveryQ7 /> }
  ];

  return (
    <BrowserRouter>
      <Routes>
        {/* Back 버튼이 없는 Login 페이지 */}
        <Route path='/' element={<Login/>}/> 
        

        {/* Layout 컴포넌트를 사용하는 나머지 페이지들 (Back 버튼 포함) */}
        <Route element={<Layout />}>
          <Route path='/login_s' element={<Login_S/>}/>
          <Route path='/calendar' element={<Calendar/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signupq' element={<Signupq/>}/>
          <Route path='/signupq2' element={<Signupq2/>}/>
          <Route path='/signupq3' element={<Signupq3/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/result' element={<Result/>}/>
          <Route path='/recommend' element={<Recommend/>}/>
          <Route path='/RecHome' element={<RecHome/>}/>
          <Route path='/HomePage' element={<HomePage/>}/>
          
          {cloudRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          {ebookRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          {musicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          {ottRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          {deliveryRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}