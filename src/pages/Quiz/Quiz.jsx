import { useState } from 'react'
import Button from '../../components/Button/Button'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import css from './Quiz.module.css'
import Timer from '../../components/Timer/Timer'

const Quiz = ({
  question,
  typeOfQuiz = 'multiple',
  numberOfQuestions = 15,
  answerChoices = [
    'one  Question text:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, porro cupiditat',
    'two',
    'three',
    'four'
  ]
}) => {
  const [numberOfCurrentQuestion, setNumberOfCurrentQuestion] = useState(1)
  const handleButtonClick = () => {
    numberOfCurrentQuestion - 1 < numberOfQuestions
      ? setNumberOfCurrentQuestion(numberOfCurrentQuestion + 1)
      : null
  }

  const handleEndQuiz = () => {
    console.log('rederect to...')
  }

  return (
    <>
      <section className={css.quizContainer}>
        <h2>Quiz page</h2>
        <div className={css.quastionContainer}>{question}</div>
        <div className={css.time}>
          <Timer></Timer>
        </div>
        <div
          className={css.buttonsContainer}
          style={typeOfQuiz !== 'multiple' ? { gridTemplateRows: 'repeat(1, 1fr)' } : {}}>
          {typeOfQuiz === 'multiple' ? (
            answerChoices.map((el, index) => (
              <Button key={index} textButton={el} onClick={handleButtonClick}></Button>
            ))
          ) : (
            <>
              <Button textButton="True" onClick={handleButtonClick}></Button>
              <Button textButton="False" onClick={handleButtonClick}></Button>
            </>
          )}
        </div>
        <ProgressBar
          numberOfCurrentQuestion={numberOfCurrentQuestion}
          numberOfQuestions={numberOfQuestions}
        />
        <Button textButton={'End quiz'} onClick={handleEndQuiz}></Button>
      </section>
    </>
  )
}
export default Quiz
