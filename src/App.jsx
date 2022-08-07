import { useState } from 'react';
import './App.css';
import { ReactComponent as Shape1 } from './assets/shape1.svg';
import { ReactComponent as Shape2 } from './assets/shape2.svg';
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
      <Shape1 className="shape-top" />
      {!startGame ? (
        <Menu getQuestionsData={getQuestionsData} />
      ) : (
        <Quiz data={questionsData} restartGame={restartGame} />
      )}
      <Shape2 className="shape-bottom" />
    </div>
  );
}

export default App;
