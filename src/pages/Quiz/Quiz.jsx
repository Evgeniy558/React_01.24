import { createContext, useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import css from './Quiz.module.css'
import Timer from '../../components/Timer/Timer'
import { ROUTES } from '../../navigation/routes'
import { useRedirectTo } from '../../hooks/useRedirectTo'
import ModalWindow from '../../components/ModalWindow/ModalWindow'
import { useDispatch, useSelector } from 'react-redux'
import { countAnswers, showNextQuestion } from '../../redux/slices/quizSlice'
import { stopTimer } from '../../redux/slices/timerSlice'

export const ModalWindowContext = createContext()
const Quiz = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const redirectToResults = useRedirectTo(ROUTES.results)
  const dispatch = useDispatch()
  const { currentQuestion, questions, questionStatus } = useSelector((state) => state.quiz)
  const numberOfQuestions = useSelector((state) => state.quiz.questions.length)

  useEffect(() => {
    if (currentQuestion > numberOfQuestions && !questionStatus.isLoarding) {
      dispatch(stopTimer())
      redirectToResults()
    }
  }, [currentQuestion, numberOfQuestions])

  const handleButtonClick = (e) => {
    dispatch(countAnswers(e.target.value === 'true'))
    dispatch(showNextQuestion())
  }

  const handleEndQuiz = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <>
      {modalIsOpen ? (
        <ModalWindowContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
          <div className={css.modal}>
            <ModalWindow />
          </div>
        </ModalWindowContext.Provider>
      ) : null}
      {!questionStatus.isLoarding ? (
        <section className={css.quizContainer}>
          <h2>Quiz page</h2>
          <div className={css.questionContainer}>
            {currentQuestion <= numberOfQuestions && questions[currentQuestion - 1].question}
          </div>
          <div className={css.time}>
            <Timer></Timer>
          </div>
          <div>
            <div
              className={css.buttonsContainer}
              style={
                currentQuestion <= numberOfQuestions &&
                questions[currentQuestion - 1].type !== 'multiple'
                  ? { gridTemplateRows: 'repeat(1, 1fr)' }
                  : {}
              }>
              {
                <>
                  {currentQuestion <= numberOfQuestions &&
                    questions[currentQuestion - 1].incorrect_answers.map((el, index) => (
                      <Button
                        key={index}
                        textButton={el}
                        onClick={handleButtonClick}
                        value={false}></Button>
                    ))}
                  <Button
                    textButton={
                      currentQuestion <= numberOfQuestions &&
                      questions[currentQuestion - 1].correct_answer
                    }
                    onClick={handleButtonClick}
                    value={true}></Button>
                </>
              }
            </div>
            <ProgressBar
              numberOfCurrentQuestion={currentQuestion}
              numberOfQuestions={numberOfQuestions}
            />
          </div>

          <Button textButton={'End quiz'} onClick={handleEndQuiz} hoverColor="red"></Button>
        </section>
      ) : (
        <p>Loarding...</p>
      )}
    </>
  )
}
export default Quiz
