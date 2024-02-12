import { useEffect, useState } from 'react'
import { SvgSelector } from '../../components/SvgSelector/SvgSelector'
import css from './Results.module.css'
import Button from '../../components/Button/Button'
const Results = ({
  type = 'type',
  category = 'category',
  time = 'time',
  difficulty = 'difficulty',
  timeSpent = '2:10',
  rightAnswers = 1,
  numberOfQuestions = 15
}) => {
  const [isPasted, setIsPasted] = useState(false)
  const PASSINGSCORE = 80
  let result = (rightAnswers / numberOfQuestions) * 100
  useEffect(() => {
    if (result < PASSINGSCORE) {
      setIsPasted(false)
    } else setIsPasted(true)
  }, [result])

  const handleRestartQuiz = () => {
    console.log('Start quiz')
  }
  const handleAnotherQuiz = () => {
    console.log('navigate the user to quiz configuration screen')
  }

  return (
    <section>
      <h2>Quiz Results</h2>
      <p className={css.text}>Thank you for completing this quiz. </p>
      <p className={css.text}>
        You spent {timeSpent} minutes taking the test. Here are your results.
      </p>
      <div className={css.resultsInfo}>
        <div className={css.configContainer}>
          <h2 className={css.title}>Quiz configuration:</h2>
          <p className={css.text}>Type: {type}</p>
          <p className={css.text}>Category: {category}</p>
          <p className={css.text}>Time: {time}</p>
          <p className={css.text}>Difficulty: {difficulty}</p>
        </div>
        <div className={css.grafContainer}>
          {isPasted ? (
            <SvgSelector id="like"></SvgSelector>
          ) : (
            <SvgSelector id="dislike"></SvgSelector>
          )}
        </div>
        <div className={css.resultsTable}>
          <div className={css.resultsRow}>
            <div className={css.resultItem}>
              <span className={css.resultValue}>{rightAnswers}</span>
              <span className={css.resultLabel}>Correct answers</span>
            </div>
            <div className={css.resultItem}>
              <span className={css.resultValue}>{numberOfQuestions}</span>
              <span className={css.resultLabel}>Questions</span>
            </div>
            <div className={css.resultItem}>
              <span className={css.resultValue}>{result.toFixed(1)}%</span>
              <span className={css.resultLabel}>Your Score</span>
            </div>
            <div className={css.resultItem}>
              <span className={css.resultValue}>{PASSINGSCORE}%</span>
              <span className={css.resultLabel}>Passing Score</span>
            </div>
          </div>
        </div>
      </div>
      <div className={css.buttonsContainer}>
        <Button textButton="Restart" onClick={handleRestartQuiz}></Button>
        <Button textButton="Choose another quiz" onClick={handleAnotherQuiz}></Button>
      </div>
    </section>
  )
}
export default Results
