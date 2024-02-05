import { useEffect, useRef, useState } from 'react'
import css from './Timer.module.css'
import Button from '../Button/Button'

const Timer = ({ time = 1 }) => {
  const [minutes, setMinutes] = useState(time)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const interval = useRef(null)
  useEffect(() => {
    if (isRunning) {
      interval.current = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        } else if (minutes > 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }, 1000)
      return () => clearInterval(interval.current)
    }
  }, [minutes, seconds, isRunning])

  const handleClick = () => {
    setIsRunning(true)
  }

  return (
    <>
      <div>
        <p className={css.timer}>
          Time left: {minutes < 10 ? 0 : null}
          {minutes}:{seconds < 10 ? 0 : null}
          {seconds}
        </p>
      </div>
      <Button textButton={'Start test'} onClick={handleClick}></Button>
    </>
  )
}
export default Timer
