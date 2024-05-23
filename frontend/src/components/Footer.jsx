import styles from '../css/Footer.module.css';

function Footer() {
    return (
        <div id={styles.background}>
            <footer>
                <div className={styles.container}>
                    <h4>TempoFlex© 2024</h4>
                </div>
            </footer>
        </div>
    );
}

export default Footer;