import { useEffect, useRef } from 'react'
import css from './Timer.module.css'
import { useRedirectTo } from '../../hooks/useRedirectTo'
import { ROUTES } from '../../navigation/routes'
import { useDispatch, useSelector } from 'react-redux'
import { decrementTime, stopTimer } from '../../redux/slices/timerSlice'
import { setStatisticData } from '../../redux/slices/statisticsSlice'
import { RootState } from '../../redux/store'

interface configurationType {
  amount: string
  difficulty: string
  type: string
}

const Timer = () => {
  const interval = useRef<number | null>(null)
  const redirectToResultsPage = useRedirectTo(ROUTES.results)
  const dispatch = useDispatch()
  const { isRunning, minutesLeft, secondsLeft } = useSelector((state: RootState) => state.timer)
  const { amount, category, difficulty, type } = useSelector(
    (state: RootState) => state.configuration
  )

  useEffect(() => {
    if (isRunning) {
      interval.current = setInterval(() => {
        dispatch(decrementTime())
      }, 1000)

      return () => {
        if (interval.current) {
          clearInterval(interval.current)
        }
      }
    }
    if (minutesLeft === 0 && secondsLeft === 0) {
      dispatch(stopTimer())
      dispatch(
        setStatisticData({
          amount: amount,
          category: category.value,
          difficulty: difficulty,
          type: type
        })
      )
    }
    redirectToResultsPage()
  }, [isRunning, minutesLeft, dispatch])

  return (
    <>
      <div>
        <p className={css.timer}>
          Time left: {minutesLeft < 10 ? 0 : null}
          {minutesLeft}:{secondsLeft < 10 ? 0 : null}
          {secondsLeft}
        </p>
      </div>
    </>
  )
}
export default Timer
