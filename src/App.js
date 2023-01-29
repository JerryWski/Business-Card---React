import styles from "./App.module.css";
import About from "./components/About";
import Footer from "./components/Footer";
import InfoPerson from "./components/InfoModule";
import Interest from "./components/Interest";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <InfoPerson />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}

export default App;
