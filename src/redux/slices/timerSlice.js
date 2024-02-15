import { createSlice } from '@reduxjs/toolkit'

const initialState = { minutesLeft: 0, secondsLeft: 0, isRunning: false, quizTime: 0 }

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimer(state, action) {
      state.minutesLeft = action.payload
    },
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
      state.minutesLeft = initialState.minutesLeft
      state.secondsLeft = initialState.secondsLeft
      state.isRunning = initialState.isRunning
      state.quizTime = initialState.quizTime
    }
  }
})

export const { setTimer, decrementTime, startTimer, stopTimer, resetTimer } = timerSlice.actions
export const timerReducer = timerSlice.reducer
