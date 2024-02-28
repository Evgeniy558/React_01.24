import { createSlice } from '@reduxjs/toolkit'
import { setTime } from './configurationsSlice'

const initialState = {
  congfigTime: 0,
  minutesLeft: 0,
  secondsLeft: 0,
  isRunning: false,
  quizTime: 0
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer(state) {
      state.isRunning = true
    },
    decrementTime(state) {
      if (state.isRunning) {
        state.quizTime++
      }
      if (state.secondsLeft > 0) {
        state.secondsLeft--
      } else if (state.minutesLeft > 0) {
        state.minutesLeft--
        state.secondsLeft = 59
      } else state.isRunning = false
    },
    stopTimer(state) {
      state.isRunning = false
    },
    resetTimer(state) {
      state.minutesLeft = state.congfigTime
      state.secondsLeft = initialState.secondsLeft
      state.isRunning = false
      state.quizTime = initialState.quizTime
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setTime, (state, action) => {
      state.congfigTime = action.payload
      state.minutesLeft = state.congfigTime
    })
  }
})

export const { congfigTime, setTimer, decrementTime, startTimer, stopTimer, resetTimer, quizTime } =
  timerSlice.actions
export const timerReducer = timerSlice.reducer
