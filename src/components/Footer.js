import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footWrapper}>
            <span className={styles.icons}><i class="fa-brands fa-twitter fa-2x"></i></span>
            <span className={styles.icons}><i class="fa-brands fa-square-facebook fa-2x"></i></span>
            <span className={styles.icons}><i class="fa-brands fa-square-instagram fa-2x"></i></span>
            <span className={styles.icons}><i class="fa-brands fa-linkedin fa-2x"></i></span>
            <span className={styles.icons}><i class="fa-brands fa-square-github fa-2x"></i></span>
        </div>
    )
}

export default Footer;