import { useState } from 'react';
import './App.css';

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])

  const handleLeftClick = () => {
    setLeft(left + 1)
    setAllClicks([...allClicks, 'L'])
  }

  const handleRightClick = () => {
    setRight(right + 1)
    setAllClicks([...allClicks, 'R'])
  }
  return (
    <div className="App">
      {left}
      <button onClick={handleLeftClick}>
        left
      </button>

      <button onClick={handleRightClick}>
        right
      </button>
      {right}
      <p>History of cliks: {allClicks.join(' ')}</p>
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
