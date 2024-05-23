import styles from "../css/Home.module.css";
import Banner from "../components/Banner";
import SlideMenu from "../components/SlideMenu";
import { useNavigate, useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const { isLoggedIn } = location.state || { isLoggedIn: false };
  console.log(isLoggedIn);

  const navigate = useNavigate();

  const registerAction = () => {
    navigate("/Login", { state: { action: "Registrarse" } });
  };

  return (
    <div id={styles.body}>
      <div className={styles.banner}>
        <Banner />
      </div>
      <div className={styles.content}>
        {!isLoggedIn ? (
          <section className={styles.options}>
            <button
              className={styles.buttons}
              onClick={() => navigate("/Login")}
            >
              Iniciar sesión
            </button>
            <button className={styles.buttons} onClick={registerAction}>
              Registrarse
            </button>
          </section>
        ) : (
          <div>
            <SlideMenu />
            <section className={styles.options}>
              <button
                className={styles.buttons}
                onClick={() =>
                  navigate(`/Manage`, {
                    replace: true,
                    state: { isLoggedIn: true },
                  })
                }
              >
                Gestionar Horario
              </button>
            </section>
          </div>
        )}
        <h1 className={styles.title}>¿Qué es TempoFlex?</h1>
        <p className={styles.text}>
          TempoFlex es una aplicación que te permite organizar tu horario de
          trabajo y tus actividades personales de una forma óptima e
          inteligente, de esta forma podrás gestionar mucho mejor tu tiempo.
          Crea una cuenta o inicia sesión para empezar a usar TempoFlex.
        </p>
        <img
          src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png"
          alt="calendar"
        />
      </div>
    </div>
  );
}

export default Home;
