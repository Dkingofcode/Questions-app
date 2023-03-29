import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Questions from './data'
import Question from './Question'

function App() {
  const [questions, setQuestions] = useState(Questions);
   console.log(Questions);
  return (
    <div className="App">
      <Question questions={questions} />
    </div>
  )
}

export default App;
