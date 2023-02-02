import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.hero_section}>
      <img className={styles.heroImg} src={require("../images/hero-img.png")} alt="hero" />
      <h1 className={styles.header}>Online Experiences</h1>
      <p className={styles.heroText}>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
};

export default HeroSection;
