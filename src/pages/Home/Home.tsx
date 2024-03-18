/* eslint-disable prettier/prettier */

import Button from '../../components/Button/Button'
import SelectInput, { SelectInputRef } from '../../components/SelectInput/SelectInput'
import css from './Home.module.css'
import Input from '../../components/Input/Input'
import getToken from '../../services/getToken'
import { useEffect, useRef, useState } from 'react'
import getCategories from '../../services/getCategories'
import { DIFFICULTY, TIME, TYPE } from '../../components/SelectInput/SelectInput.constants'
import { ROUTES } from '../../navigation/routes'
import { useRedirectTo } from '../../hooks/useRedirectTo'
import { useDispatch, useSelector } from 'react-redux'
import {
  setAmount,
  setCategory,
  setDifficulty,
  setType,
  setTime
} from '../../redux/slices/configurationsSlice'
import { setQuizIsRun } from '../../redux/slices/quizSlice'
import { useStartQuiz } from '../../hooks/startQuiz'
import { RootState } from '../../redux/store'

const Home = () => {
  const [questionAmount, setQuestionAmount] = useState<number | null>(null)
  const handleAmountChange = (newValue?: number | null) => {
    setQuestionAmount(newValue ?? null)
  }

  const redirectToStatisticsPage = useRedirectTo(ROUTES.statistics)
  const starQuiz = useStartQuiz()
  const [categories, setCategories] = useState([])
  const amountRef = useRef<HTMLInputElement>(null)
  const categoryRef = useRef<SelectInputRef>(null)
  const difficultyRef = useRef<SelectInputRef>(null)
  const typeRef = useRef<SelectInputRef>(null)
  const timeRef = useRef<SelectInputRef>(null)
  const dispatch = useDispatch()
  const quizIsRunning = useSelector((state: RootState) => state.quiz.quizIsRunning)

  const handleStart = () => {
    const amountValue = amountRef.current?.value
    const categoryValue = categoryRef.current?.getValue()
    const difficultyValue = difficultyRef.current?.getValue()
    const typeValue = typeRef.current?.getValue()
    const timeValue = timeRef.current?.getValue()

    // if (!amountValue) {
    //   dispatch(setAmount('5'))
    // } else {

    // }
    dispatch(setAmount(amountValue))
    dispatch(setCategory(categoryValue))
    dispatch(setDifficulty(difficultyValue))
    dispatch(setType(typeValue))
    if (timeValue === 'time not chosen') {
      dispatch(setTime('1'))
    } else {
      dispatch(setTime(timeValue))
    }

    dispatch(setQuizIsRun())
    getToken()
  }
  useEffect(() => {
    if (quizIsRunning) {
      starQuiz()
    }
  }, [quizIsRunning])

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
  return (
    <>
      <section>
        <h1 className={css.title}>QUIZ TIME</h1>
        <p className={css.text}>For starting quiz choose:</p>
        <div className={css.formContainer}>
          <Input
            ref={amountRef}
            inputText="Number of questions"
            onChangeValue={handleAmountChange}
          />
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
          <Button
            textButton="Start quiz"
            onClick={handleStart}
            isDisable={!questionAmount || questionAmount < 5 || questionAmount > 15}
          />
          <Button textButton="See my statistics" onClick={redirectToStatisticsPage} />
        </div>
      </section>
    </>
  )
}
export default Home
