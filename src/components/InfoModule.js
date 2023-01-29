import styles from "./Info.module.css";

const InfoPerson = () => {
    return (
        <div className={styles.info}>
            
            <h1 className={styles.header}>Laura Smith</h1>
            <p className={styles.occupation}>Frontend Developer</p>
            <p className={styles.contact}>laurasmith.dev</p>
            <button className={styles.button}><i className="fa-solid fa-envelope"></i><span>Email</span></button>
        </div>
    )
}

export default InfoPerson;