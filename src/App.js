import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";


const App = () => {
  return (
    <div className={styles.appContainer}>
    <NavBar />
    <HeroSection />
    <Card />
    </div>
  );
}

export default App;
