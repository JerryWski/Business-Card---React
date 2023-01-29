import styles from "./App.module.css";
import About from "./components/About";
import Footer from "./components/Footer";
import ImagePhoto from "./components/ImagePhoto";
import InfoPerson from "./components/InfoModule";
import Interest from "./components/Interest";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <ImagePhoto />
        <div className={styles.wrapper}>
          <InfoPerson />
          <About />
          <Interest />
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
