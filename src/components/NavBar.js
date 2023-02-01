import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div>
            <nav className={styles.navContainer}>
                <img className={styles.image} src={require("../images/airbnb.png")} alt="airbnb-logo"/>
            </nav>
        </div>
    )
}

export default NavBar;