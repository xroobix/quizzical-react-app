import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz';

function App() {
  const [questionsData, setQuestionsData] = useState([]);
  const [startGame, setStartGame] = useState(false);

  function getQuestionsData(data) {
    setQuestionsData(data);
    setStartGame(true);
  }

  function restartGame() {
    setStartGame(false);
  }

  return (
    <div className="App">
      {!startGame ? (
        <Menu getQuestionsData={getQuestionsData} />
      ) : (
        <Quiz data={questionsData} restartGame={restartGame} />
      )}
    </div>
  );
}

export default App;
