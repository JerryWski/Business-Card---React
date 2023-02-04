import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import personalData from "./data";
// import Joke from "./components/Joke";
// import jokesData from "./jokesData";

const App = () => {
  // const jokeElements = jokesData.map(joke => {
  //   return <Joke
  //         setup={joke.setup}
  //         punchLine= {joke.punchline}
  //   />
  // })
  const dataElements = personalData.map((data) => {
    return (
      <Card
      key= {data.id}
        img={data.coverImg}
        rating={data.stats.rating}
        reviewCountry={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}
      />
    );
  });
  return (
    <div>
      {/* {jokeElements} */}
      <div className={styles.app_container}>
        <NavBar />
        {/* <HeroSection /> */}
        <section className={styles.card_list}>
        {dataElements}
        </section>
      </div>
    </div>
  );
};

export default App;
/* <Card
          // img={require("./images/sportwoman.png")}
          // rating=" 5.0"
          // reviewCountry=" 6"
          // location="USA"
          // title="Life Lessons with Katie Zaferes"
          // price="136"
        /> */
