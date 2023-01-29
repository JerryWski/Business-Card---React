import styles from "./App.module.css";
import About from "./components/About";
import InfoPerson from "./components/InfoModule";
import Interest from "./components/Interest";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <InfoPerson />
        <About />
        <Interest />
      </div>
    </div>
  );
}

export default App;
