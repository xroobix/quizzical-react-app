import { useState } from 'react'
import Quiz from './components/Quiz'
import Menu from './components/Menu'
import './App.css'

function App() {

  const [questionsData, setQuestionsData] = useState([])
  const [startGame, setStartGame] = useState(true)


  function getQuestionsData(data){
    setQuestionsData(data)
    setStartGame(false)
  }
  

  return (
    <div className="App">
      {
        startGame ?
        <Menu 
          getQuestionsData={getQuestionsData}
        />
        :
        <Quiz 
          data={questionsData}
        />
      }
    </div>
  )
}

export default App
