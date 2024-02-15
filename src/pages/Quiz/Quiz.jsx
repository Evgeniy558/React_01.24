import { createContext, useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import css from './Quiz.module.css'
import Timer from '../../components/Timer/Timer'
import { ROUTES } from '../../navigation/routes'
import { useRedirectTo } from '../../hooks/useRedirectTo'
import ModalWindow from '../../components/ModalWindow/ModalWindow'
import { useSelector } from 'react-redux'
export const ModalWindowContext = createContext()
const Quiz = ({
  question = 'Question text:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, porro cupiditate, corporis at saepe recusandae nemo numquam officiis ducimus nobis dolor cum minima voluptas quidem sapiente est eligendi eius corrupti!',
  typeOfQuiz = 'multiple',
  numberOfQuestions = 3,
  answerChoices = [
    'one  Question text:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, porro cupiditat',
    'two',
    'three',
    'four'
  ]
}) => {
  const [numberOfCurrentQuestion, setNumberOfCurrentQuestion] = useState(1)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const redirectToResults = useRedirectTo(ROUTES.results)

  const testStoreQuiz = useSelector((state) => state.configuration.amount)
  console.log('testStoreQuiz', testStoreQuiz)

  useEffect(() => {
    if (numberOfCurrentQuestion > numberOfQuestions) {
      redirectToResults()
    }
  }, [numberOfCurrentQuestion, numberOfQuestions])

  const handleButtonClick = () => {
    numberOfCurrentQuestion - 1 < numberOfQuestions
      ? setNumberOfCurrentQuestion(numberOfCurrentQuestion + 1)
      : null
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

      <section className={css.quizContainer}>
        <h2>Quiz page</h2>
        <div className={css.questionContainer}>{question}</div>
        <div className={css.time}>
          <Timer></Timer>
        </div>
        <div>
          <div
            className={css.buttonsContainer}
            style={typeOfQuiz !== 'multiple' ? { gridTemplateRows: 'repeat(1, 1fr)' } : {}}
          >
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
        </div>

        <Button textButton={'End quiz'} onClick={handleEndQuiz} hoverColor="red"></Button>
      </section>
    </>
  )
}
export default Quiz
