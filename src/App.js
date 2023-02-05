import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import personalData from "./data";
// import Joke from "./components/Joke";
// import jokesData from "./jokesData";

const App = () => {
  const dataElements = personalData.map((data) => {
    return <Card key={data.id} {...data} />;
  });
  return (
    <div>
      {/* {jokeElements} */}
      <div className={styles.app_container}>
        <NavBar />
        <HeroSection />
        <section className={styles.card_list}>{dataElements}</section>
      </div>
    </div>
  );
};

export default App;
