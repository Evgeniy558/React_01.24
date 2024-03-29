import { createSlice } from '@reduxjs/toolkit'
import { getQuestions } from '../../services/getQuestions'
import { stopTimer } from './timerSlice'
interface QuizState {
  currentQuestion: number
  rightAnswers: number
  wrongAnswers: number
  quizIsRunning: boolean
  questions: any[]
  questionStatus: {
    isLoarding: boolean
    error: string | null
  }
}
const initialState: QuizState = {
  currentQuestion: 1,
  rightAnswers: 0,
  wrongAnswers: 0,
  quizIsRunning: false,
  questions: [],
  questionStatus: { isLoarding: false, error: null }
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    showNextQuestion(state) {
      state.currentQuestion++
    },
    countAnswers(state, action) {
      if (action.payload === true) {
        state.rightAnswers++
      } else {
        state.wrongAnswers++
      }
    },
    setQuizIsRun(state) {
      state.quizIsRunning = true
    },

    restartQuiz(state) {
      state.currentQuestion = initialState.currentQuestion
      state.rightAnswers = initialState.rightAnswers
      state.wrongAnswers = initialState.wrongAnswers
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.questions = initialState.questions
        state.questionStatus.isLoarding = true
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.questionStatus.isLoarding = false
        state.questions = action.payload
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.questionStatus.isLoarding = false
        state.questionStatus.error = action.error.message || 'An unknown error occurred'
      })
      .addCase(stopTimer, (state) => {
        state.quizIsRunning = false
      })
  }
})

export const { showNextQuestion, countAnswers, restartQuiz, setQuizIsRun } = quizSlice.actions
export const quizReducer = quizSlice.reducer
