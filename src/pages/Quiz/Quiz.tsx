import { ChangeEvent, createContext, useEffect, useState } from 'react'
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
import { RootState } from '../../redux/store'

interface ModalWindowContexType {
  modalIsOpen: boolean
  setModalIsOpen: (isOpen: boolean) => void
}

interface questionType {
  text: string
  isCorrect: string
}

export const ModalWindowContext = createContext<ModalWindowContexType | null>(null)
const Quiz = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const redirectToResultsPage = useRedirectTo(ROUTES.results)
  const dispatch = useDispatch()
  const { amount, category, difficulty, type } = useSelector(
    (state: RootState) => state.configuration
  )
  const { currentQuestion, questions, questionStatus } = useSelector(
    (state: RootState) => state.quiz
  )
  const numberOfQuestions = useSelector((state: RootState) => state.quiz.questions.length)

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

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    dispatch(countAnswers(target.value === 'true'))
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
              }>
              {currentQuestion <= numberOfQuestions &&
                prepareAndShuffleAnswers(questions[currentQuestion - 1]).map(
                  (item: questionType, index: number) => (
                    <Button
                      key={index}
                      textButton={decode(item.text)}
                      onClick={handleButtonClick}
                      value={item.isCorrect}></Button>
                  )
                )}
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
