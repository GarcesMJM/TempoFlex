import styles from '../css/Manage.module.css';
import Banner from '../components/Banner';
import { useNavigate, useLocation } from "react-router-dom";

function Manage() {

  const location = useLocation();
  const { isLoggedIn } = location.state || { isLoggedIn: false };
  console.log(isLoggedIn);

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Banner />
      {!isLoggedIn ? (
        <div>
          <h1>Inicia Sesión para gestionnar tu horario.</h1>
        </div>
      ) : (
        <div>
          <h1 className={styles.title}>Agregar actividades</h1>
        </div>
      )}
    </div>
  );
}

export default Manage;
