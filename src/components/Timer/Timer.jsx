import { useEffect, useState } from 'react'
import css from './Timer.module.css'
import Button from '../Button/Button'

const Timer = ({ time = 9 }) => {
  const [minutes, setMinutes] = useState(time)
  const [seconds, setSeconds] = useState(0)
  const [isRunnning, setIsRunning] = useState(null)
  useEffect(() => {
    let interval
    if (isRunnning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        } else if (minutes > 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [minutes, seconds, isRunnning])

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
