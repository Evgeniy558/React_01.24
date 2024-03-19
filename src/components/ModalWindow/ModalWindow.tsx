import { useContext, useEffect } from 'react'
import { useRedirectTo } from '../../hooks/useRedirectTo'
import { ROUTES } from '../../navigation/routes'
import Button from '../Button/Button'
import css from './ModalWindow.module.css'
import { ModalWindowContext } from '../../pages/Quiz/Quiz'
import { stopTimer } from '../../redux/slices/timerSlice'
import { useDispatch } from 'react-redux'

const ModalWindow = () => {
  const redirectToHome = useRedirectTo(ROUTES.home)
  const dispatch = useDispatch()
  const handleEndQuiz = () => {
    dispatch(stopTimer())
    redirectToHome()
  }
  const context = useContext(ModalWindowContext)
  if (!context) {
    console.error('ModalWindowContext was not provided')
    return null
  }

  const { modalIsOpen, setModalIsOpen } = context
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalIsOpen(!modalIsOpen)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [modalIsOpen, setModalIsOpen])

  return modalIsOpen ? (
    <div
      className={css.background}
      onClick={() => {
        setModalIsOpen(!modalIsOpen)
      }}>
      <div className={css.modalWindow}>
        <h3>Do you want to end the quiz?</h3>
        <div className={css.buttonContainer}>
          <Button textButton={'Confirm'} hoverColor="red" onClick={handleEndQuiz}></Button>
          <Button
            textButton="Cancel"
            onClick={() => {
              setModalIsOpen(!modalIsOpen)
            }}></Button>
        </div>
      </div>
    </div>
  ) : null
}

export default ModalWindow
