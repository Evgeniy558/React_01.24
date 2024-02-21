import { useEffect, useRef } from 'react'
import css from './Timer.module.css'
import { useRedirectTo } from '../../hooks/useRedirectTo'
import { ROUTES } from '../../navigation/routes'
import { useDispatch, useSelector } from 'react-redux'
import { decrementTime, stopTimer } from '../../redux/slices/timerSlice'

const Timer = () => {
  const interval = useRef(null)
  const redirectToResultsPage = useRedirectTo(ROUTES.results)
  const dispatch = useDispatch()
  const testIsRunning = useSelector((state) => state.timer.isRunning)
  const minutes = useSelector((state) => state.timer.minutesLeft)
  const seconds = useSelector((state) => state.timer.secondsLeft)

  useEffect(() => {
    if (testIsRunning) {
      interval.current = setInterval(() => {
        dispatch(decrementTime())
      }, 1000)

      return () => clearInterval(interval.current)
    }
    if (minutes === 0 && seconds === 0) {
      dispatch(stopTimer())
      redirectToResultsPage()
    }
  }, [testIsRunning, minutes, dispatch])

  return (
    <>
      <div>
        <p className={css.timer}>
          Time left: {minutes < 10 ? 0 : null}
          {minutes}:{seconds < 10 ? 0 : null}
          {seconds}
        </p>
      </div>
    </>
  )
}
export default Timer
