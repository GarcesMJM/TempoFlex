import styles from '../css/Manage.module.css';
import Banner from '../components/Banner';
import { useNavigate, useLocation } from "react-router-dom";

function Manage() {

  const location = useLocation();
  const { isLoggedIn } = location.state || { isLoggedIn: false };
  console.log(isLoggedIn);

  const navigate = useNavigate();

  return (
    <div>
      {!isLoggedIn ? (
        <div></div>
      ) : (
        <div>
          Hola
        </div>
      )}
      </div>
  );
}

export default Manage;
