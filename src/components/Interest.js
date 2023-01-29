import styles from "./Interest.module.css"

const Interest = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Interest</h2>
      <p className={styles.description}>
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
    </div>
  );
};

export default Interest;