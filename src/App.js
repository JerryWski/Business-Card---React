import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import HeroSection from "./components/HeroSection";


const App = () => {
  return (
    <div className={styles.appContainer}>
    <NavBar />
    <HeroSection />
    </div>
  );
}

export default App;
