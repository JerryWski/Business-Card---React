import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card__person}
        src={require("../images/sportwoman.png")}
        alt="sport-woman"
      />
      <div className={styles.card__stats}>
        <img
          className={styles.card__star}
          src={require("../images/star.png")}
          alt="star-logo"
        />
        <span>5.0</span>
        <span className={styles.gray}>(6) • </span>
        <span className={styles.gray}>USA</span>
      </div>
      <div className={styles.card__bio}>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span className={styles.bold}>From $136</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
