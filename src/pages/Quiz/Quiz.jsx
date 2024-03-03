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
import { setStatisticData } from '../../redux/slices/statisticsSlice'
import { prepareAndShuffleAnswers } from '../../services/prepareAndShuffleAnswers'
import { decode } from 'html-entities'

export const ModalWindowContext = createContext()
const Quiz = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const redirectToResultsPage = useRedirectTo(ROUTES.results)
  const dispatch = useDispatch()
  const { amount, category, difficulty, type } = useSelector((state) => state.configuration)
  const { currentQuestion, questions, questionStatus } = useSelector((state) => state.quiz)
  const numberOfQuestions = useSelector((state) => state.quiz.questions.length)

  useEffect(() => {
    if (currentQuestion > numberOfQuestions && !questionStatus.isLoarding) {
      dispatch(stopTimer())
      dispatch(
        setStatisticData({
          amount: amount,
          category: category.value,
          difficulty: difficulty,
          type: type
        })
      )
      redirectToResultsPage()
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
            {decode(
              currentQuestion <= numberOfQuestions && questions[currentQuestion - 1].question
            )}
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
              }
            >
              {currentQuestion <= numberOfQuestions &&
                prepareAndShuffleAnswers(questions[currentQuestion - 1]).map((item, index) => (
                  <Button
                    key={index}
                    textButton={decode(item.text)}
                    onClick={handleButtonClick}
                    value={item.isCorrect}
                  ></Button>
                ))}
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
