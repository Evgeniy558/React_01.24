import { useDispatch, useSelector } from 'react-redux'
import { restartQuiz } from '../redux/slices/quizSlice'
import { createQuizUrl } from '../services/createQuizUrl'
import { getQuestions } from '../services/getQuestions'
import { resetTimer, startTimer } from '../redux/slices/timerSlice'
import { useRedirectTo } from './useRedirectTo'
import { ROUTES } from '../navigation/routes'
import { RootState } from '../redux/store'

export const useStartQuiz = () => {
  const { amount, type, difficulty, category } = useSelector(
    (state: RootState) => state.configuration
  )
  const dispatch = useDispatch()
  const redirectToQuizPage = useRedirectTo(ROUTES.quiz)
  return () => {
    const quizUrl = createQuizUrl(amount, category.id, difficulty, type)
    dispatch(restartQuiz())
    dispatch(getQuestions(quizUrl))
    dispatch(resetTimer())
    dispatch(startTimer())
    redirectToQuizPage()
  }
}
