import { useNavigate } from 'react-router-dom';
import homeBtn from "/src/assets/images/home-button.svg";

export default function Home() {
    const navigate = useNavigate();

    function goHome() {
        navigate('/');
    }

    return (
            <img onClick={goHome} src={homeBtn} style={{position:"absolute", zIndex:"1000", top:"2px",right: "24px", margin:"20px 0 0 0px"}}/>
    );
}
