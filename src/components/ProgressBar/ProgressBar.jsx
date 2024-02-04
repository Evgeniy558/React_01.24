import css from './ProgressBar.module.css'
const ProgressBar = ({ numberOfCurrentQuestion, numberOfQuestions }) => {
  const progressPercentage =
    numberOfCurrentQuestion > numberOfQuestions
      ? 1
      : (numberOfCurrentQuestion - 1) / numberOfQuestions
  console.log(Math.floor(progressPercentage * 100))

  return (
    <div className={css.container}>
      <p className={css.text}>
        Progress <br /> Question{' '}
        {numberOfCurrentQuestion >= numberOfQuestions ? numberOfQuestions : numberOfCurrentQuestion}{' '}
        of {numberOfQuestions}
      </p>{' '}
      <div className={css.progressBar}>
        <div
          className={css.progressBarFill}
          style={{ width: `${Math.floor(progressPercentage * 100)}%` }}></div>
      </div>
      <div className={css.progressLable}></div>
    </div>
  )
}
export default ProgressBar
