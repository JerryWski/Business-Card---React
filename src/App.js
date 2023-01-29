import styles from "./App.module.css";
import InfoPerson from "./components/InfoModule";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <InfoPerson />
      </div>
    </div>
  );
}

export default App;
