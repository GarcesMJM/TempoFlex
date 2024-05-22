import styles from '../css/Banner.module.css';

function Banner() {
    return (
        <div id={styles.background}> 
            <div className={styles.container}>
                <h1>¡Bienvenido a TempoFlex!</h1>
            </div>
        </div>
    );
}

export default Banner;