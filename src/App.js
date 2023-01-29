import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import MainContnet from "./components/MainContent";

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <MainContnet/>
    </div>
  );
}

export default App;
