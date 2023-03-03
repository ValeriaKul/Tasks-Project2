import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Header/Header";
import Notes from "./components/Notes/Notes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Notes />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contacts />} path="/contacts" />
        <Route element={<img src="https://feature-sliced.design/assets/images/visual_schema-ca092cc631de8c129dfb48174d0a927a.jpg" alt=""/>} path="/about/info"/>
      </Routes>
    </div>
  );
}

export default App;
// Задача. При нажатии на кнопку left, менять свойство left на 1
// При нажатии на right менять свойства right на 1

// Задача. При нажатии на кнопку left, увеличивать состояние left на 1
// При нажатии на кнопку right, увелиичивать состояние right на 1
// Feature Slices
// left = 0, left = 0 + 1, left = 1
// left = 1, left = 1 + 1, left = 2
// let left = 0
// left = left + 1
// setLeft(left + 1) - говорит реакту перерисоваться
// left++
// left = left + 1

/*  После первого клика по left
    const newClicks = {
      left: 1 (clicks.left = 0, clicks.left + 1 = 1),
      right: clicks.right
    }
    setClicks(newClicks)
    clicks = {
      left: 1,
      right: 0
    }
    После первого клика по left
    const newClicks = {
      left: 1 (clicks.left = 1, clicks.left + 1 = 2),
      right: clicks.right
    }
    clicks = {
      left: 2,
      right: 0
    }
    React
    setClicks(clicks.left + 1)
    JS
    clicks = clicks.left + 1
  */
