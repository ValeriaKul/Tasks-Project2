import { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "React Router DOM",
    },
    {
      id: 2,
      text: "Axios vs Fetch",
    },
  ]);

  return (
    <div className="App">
      <h1>Temes: </h1>
      <ul>
        <li>{notes[0].text}</li>
        <li>{notes[1].text}</li>
      </ul>
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
