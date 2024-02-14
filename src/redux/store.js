import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { configurationsReducer } from './slices/configurationsSlice'
import { timerReducer } from './slices/timerSlice'

const combinedReducer = combineReducers({
  configuration: configurationsReducer,
  timer: timerReducer
})

export const store = configureStore({ reducer: combinedReducer })
