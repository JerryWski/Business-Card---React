import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card__person}
        src={props.img}
        alt="sport-woman"
      />
      <div className={styles.card__stats}>
        <img
          className={styles.card__star}
          src={require("../images/star.png")}
          alt="star-logo"
        />
        <span>{props.rating}</span>
        <span className={styles.gray}>{props.reviewCountry} • </span>
        <span className={styles.gray}>{props.country}</span>
      </div>
      <div className={styles.card__bio}>
        <p>{props.title}</p>
        <p>
          <span className={styles.bold}>From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
