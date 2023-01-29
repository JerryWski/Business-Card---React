import styles from "./Info.module.css";

const InfoPerson = () => {
    return (
        <div className={styles.info}>
            <div className={styles.image}/>
            <h1 className={styles.header}>Laura Smith</h1>
            <p className={styles.occupation}>Frontend Developer</p>
            <p className={styles.contact}>laurasmith.dev</p>
            <button><i class="fa-solid fa-envelope"></i>Email</button>
        </div>
    )
}

export default InfoPerson;