import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";


const App = () => {
  return (
    <div className={styles.app_container}>
    <NavBar />
    <HeroSection />
    <Card
    img = {require('./images/sportwoman.png')} 
    rating = " 5.0"
    reviewCountry = " 6"
    country = "USA"
    title = "Life Lessons with Katie Zaferes"
    price = "136"
    />
    </div>
  );
}

export default App;
