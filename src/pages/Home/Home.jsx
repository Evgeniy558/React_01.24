/* eslint-disable prettier/prettier */
import Button from '../../components/Button/Button'
import SelectInput from '../../components/SelectInput/SelectInput'
import css from './Home.module.css'
import Input from '../../components/Input/Input'
import getToken from '../../services/getToken'
import { useEffect, useRef, useState } from 'react'
import getCategories from '../../services/getCategories'
import { DIFFICULTY, TIME, TYPE } from '../../components/SelectInput/SelectInput.constants'
import { ROUTES } from '../../navigation/routes'
import { useRedirectTo } from '../../hooks/useRedirectTo'
import { useDispatch } from 'react-redux'
import {
  setAmount,
  setCategory,
  setDifficulty,
  setType,
  setTime
} from '../../redux/slices/configurationsSlice'
import { setTimer, startTimer } from '../../redux/slices/timerSlice'

const Home = () => {
  const redirectToStatisticsPage = useRedirectTo(ROUTES.statistics)
  const redirectToQuizPage = useRedirectTo(ROUTES.quiz)
  const [categories, setCategories] = useState([])
  const amountRef = useRef()
  const categoryRef = useRef()
  const difficultyRef = useRef()
  const typeRef = useRef()
  const timeRef = useRef()
  const dispatch = useDispatch()

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
    dispatch(setAmount(amountRef.current.value))
    dispatch(setCategory(categoryRef.current.getValue()))
    dispatch(setDifficulty(difficultyRef.current.getValue()))
    dispatch(setType(typeRef.current.getValue()))
    dispatch(setTime(timeRef.current.getValue()))
    dispatch(setTimer(timeRef.current.getValue()))
    dispatch(startTimer())
    getToken(), redirectToQuizPage()
  }

  return (
    <>
      <section>
        <h1 className={css.title}>QUIZ TIME</h1>
        <p className={css.text}>For starting quiz choose:</p>
        <div className={css.formContainer}>
          <Input ref={amountRef} inputText="Number of questions" name="numOfQuestions" />
          <div className={css.inputContainer}>
            <SelectInput
              ref={categoryRef}
              inputText="Category:"
              name="category"
              data={categories}
              behavior="id"
            />
            <SelectInput
              ref={difficultyRef}
              inputText="Difficulty:"
              name="difficulty"
              data={DIFFICULTY}
              behavior="value"
            />
            <SelectInput
              ref={typeRef}
              inputText="Select type:"
              name="type"
              data={TYPE}
              behavior="value"
            />
            <SelectInput ref={timeRef} inputText="Time:" name="time" data={TIME} behavior="value" />
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
