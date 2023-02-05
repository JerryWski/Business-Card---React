import styles from "./Card.module.css";

const Card = (props) => {
  
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  }else if (props.location === 'Online'){
    badgeText = 'ONLINE'
  }
  return (
    <div className={styles.card}>
      {badgeText && <div className={styles.card_badge}>{badgeText}</div>}
      <img className={styles.card__person} src={props.coverImg} alt="" />
      <div className={styles.card__stats}>
        <img
          className={styles.card__star}
          src={require("../images/star.png")}
          alt="star-logo"
        />
        <span>{props.stats.rating}</span>
        <span className={styles.gray}> ({props.stats.reviewCount}) • </span>
        <span className={styles.gray}> {props.location}</span>
      </div>
      <div className={styles.card__bio}>
        <p className={styles.card_title}>{props.title}</p>
        <p>
          <span className={styles.bold}>From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
