import { FC } from 'react'
import css from './ProgressBar.module.css'

interface ProgressBarProps {
  numberOfCurrentQuestion: number
  numberOfQuestions: number
}
const ProgressBar: FC<ProgressBarProps> = ({ numberOfCurrentQuestion, numberOfQuestions }) => {
  const progressPercentage =
    numberOfCurrentQuestion > numberOfQuestions
      ? 1 * 100
      : ((numberOfCurrentQuestion - 1) / numberOfQuestions) * 100

  return (
    <div className={css.container}>
      <p className={css.text}>
        Progress <br /> Question{' '}
        {numberOfCurrentQuestion >= numberOfQuestions ? numberOfQuestions : numberOfCurrentQuestion}{' '}
        of {numberOfQuestions}
      </p>
      <div className={css.progressBar}>
        <div
          className={css.progressBarFill}
          style={{ width: `${Math.floor(progressPercentage)}%` }}></div>
      </div>
      <div className={css.progressLable}></div>
    </div>
  )
}
export default ProgressBar
