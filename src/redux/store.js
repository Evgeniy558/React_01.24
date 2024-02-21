import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { configurationsReducer } from './slices/configurationsSlice'
import { timerReducer } from './slices/timerSlice'
import { quizReducer } from './slices/quizSlice'

const combinedReducer = combineReducers({
  configuration: configurationsReducer,
  timer: timerReducer,
  quiz: quizReducer
})

export const store = configureStore({ reducer: combinedReducer })
