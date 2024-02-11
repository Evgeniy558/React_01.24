/* eslint-disable prettier/prettier */
import Button from '../../components/Button/Button'
import SelectInput from '../../components/SelectInput/SelectInput'
import css from './Home.module.css'
import Input from '../../components/Input/Input'
import getToken from '../../services/getToken'
import { useEffect, useState } from 'react'
import getCategories from '../../services/getCategories'
import { DIFFICULTY, TIME, TYPE } from '../../components/SelectInput/SelectInput.constants'
import { ROUTES } from '../../navigation/routes'
import { useRedirectTo } from '../../hooks/useRedirectTo'

const Home = () => {
  const redirectToStatisticsPage = useRedirectTo(ROUTES.statistics)
  const redirectToQuizPage = useRedirectTo(ROUTES.quiz)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    let ignore = false
    const fetchCategories = async () => {
      if (!ignore) {
        setCategories(await getCategories())
      }
    }
    fetchCategories()
    return () => {
      ignore = true
    }
  }, [])

  const handleStart = () => {
    getToken()
    redirectToQuizPage()
    console.log('setState [isRunning] on true')
    console.log('request for quiz data')
  }

  return (
    <>
      <section>
        <h1 className={css.title}>QUIZ TIME</h1>
        <p className={css.text}>For starting quiz choose:</p>
        <div className={css.formContainer}>
          <Input inputText="Number of questions" name="numOfQuestions" />
          <div className={css.inputContainer}>
            <SelectInput inputText="Category:" name="category" data={categories} />
            <SelectInput inputText="Difficulty:" name="difficulty" data={DIFFICULTY} />
            <SelectInput inputText="Select type:" name="type" data={TYPE} />
            <SelectInput inputText="Time:" name="time" data={TIME} />
          </div>
        </div>
        <div className={css.buttonContainer}>
          <Button textButton="Start quiz" onClick={handleStart} />
          <Button textButton="See my statistics" onClick={redirectToStatisticsPage} />
        </div>
      </section>
    </>
  )
}
export default Home
