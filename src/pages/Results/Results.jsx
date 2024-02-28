import { SvgSelector } from '../../components/SvgSelector/SvgSelector'
import css from './Results.module.css'
import Button from '../../components/Button/Button'
import { useRedirectTo } from '../../hooks/useRedirectTo'
import { ROUTES } from '../../navigation/routes'
import { useDispatch, useSelector } from 'react-redux'
import { restartQuiz } from '../../redux/slices/quizSlice'
import { resetTimer, startTimer } from '../../redux/slices/timerSlice'
import { useStartQuiz } from '../../hooks/startQuiz'

const Results = () => {
  const { type, difficulty, category, time } = useSelector((state) => state.configuration)
  const { questions, rightAnswers } = useSelector((state) => state.quiz)
  const quizTime = useSelector((state) => state.timer.quizTime)
  const dispatch = useDispatch()
  const redirectToHomePage = useRedirectTo(ROUTES.home)
  const starQuiz = useStartQuiz()
  let testIsPasted
  const PASSINGSCORE = 80
  let result = (rightAnswers / questions.length) * 100
  if (result < PASSINGSCORE) {
    testIsPasted = false
  } else {
    testIsPasted = true
  }

  const handleRestartQuiz = () => {
    starQuiz()
  }
  const handleAnotherQuiz = () => {
    dispatch(restartQuiz())
    dispatch(resetTimer())
    dispatch(startTimer())
    redirectToHomePage()
  }

  return (
    <section>
      <h2>Quiz Results</h2>
      <p className={css.text}>Thank you for completing this quiz. </p>
      <p className={css.text}>
        You spent {Math.floor(quizTime / 60)} minutes {quizTime % 60} seconds taking the test. Here
        are your results.
      </p>
      <div className={css.resultsInfo}>
        <div className={css.configContainer}>
          <h2 className={css.title}>Quiz configuration:</h2>
          <p className={css.text}>Type: {type}</p>
          <p className={css.text}>Category: {category.value}</p>
          <p className={css.text}>Time: {time} minutes</p>
          <p className={css.text}>Difficulty: {difficulty}</p>
        </div>
        <div className={css.grafContainer}>
          {testIsPasted ? (
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
              <span className={css.resultValue}>{questions.length}</span>
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
