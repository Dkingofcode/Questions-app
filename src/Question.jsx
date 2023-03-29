import React from 'react'
import Singlequestion from './Singlequestion'


const Question = ({ questions }) => {
  return (
    <div className='question-container'>
        <h1>Questions</h1>
        {questions.map((question) => {
            return( 
          <Singlequestion key={question.id} {...question} />
        )
        })}
    </div>
  )
}

export default Question;