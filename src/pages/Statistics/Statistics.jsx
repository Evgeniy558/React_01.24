import { useSelector } from 'react-redux'
import { renderStatistic } from '../../services/renderStat'
import Button from '../../components/Button/Button'
import { useRedirectTo } from '../../hooks/useRedirectTo'
import { ROUTES } from '../../navigation/routes'
import css from './Statistics.module.css'

const Statistics = () => {
  const { allQuestions, rightAnswers, category, difficulties, questionsType } = useSelector(
    (state) => state.statistics
  )
  const redirectToHomePage = useRedirectTo(ROUTES.home)
  const handleBackToQuiz = () => {
    redirectToHomePage()
  }
  return (
    <>
      <section>
        <h2>Statistics </h2>
        <div>Amount of questions answered by user: {allQuestions}</div>
        <div>Amount of correct answers: {rightAnswers}</div>
        <h2>Categoreies:</h2>
        {category.length && renderStatistic(category)}
        <h2>Difficulties:</h2>
        {difficulties.length && renderStatistic(difficulties)}
        <h2>Question type:</h2>
        {questionsType.length && renderStatistic(questionsType)}
        <div className={css.btn}>
          <Button onClick={handleBackToQuiz} textButton={'Back to quiz'}></Button>
        </div>
      </section>
    </>
  )
}
export default Statistics
