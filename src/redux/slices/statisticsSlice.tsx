import { createSlice } from '@reduxjs/toolkit'
import { countAnswers } from './quizSlice'
import { RootState } from '../store'

type StatisticsList = Record<string, number>[]
interface StatisticsState {
  allQuestions: number
  rightAnswers: number
  category: StatisticsList
  difficulties: StatisticsList
  questionsType: StatisticsList
}

const initialState = {
  allQuestions: 0,
  rightAnswers: 0,
  category: [],
  difficulties: [],
  questionsType: []
}

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setStatisticData(state, action) {
      const { amount, category, type, difficulty } = action.payload

      const updateList = (dataList: any[], key: string, value: number) => {
        const index = dataList.findIndex((item: string[]) => Object.keys(item)[0] === key)
        if (index !== -1) {
          dataList[index][key] += value
        } else {
          dataList.push({ [key]: value })
        }
      }
      updateList(state.category, category, parseInt(amount, 10))
      updateList(state.difficulties, difficulty, parseInt(amount, 10))
      updateList(state.questionsType, type, parseInt(amount, 10))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(countAnswers, (state, action) => {
      state.allQuestions++
      if (action.payload === true) {
        state.rightAnswers++
      }
    })
  }
})
export const { setStatisticData } = statisticsSlice.actions
export const statisticsReducer = statisticsSlice.reducer
