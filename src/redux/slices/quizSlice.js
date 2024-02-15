import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentQuestion: 1,
  rightAnswers: null,
  wrongAnswers: null,
  questions: [
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'History',
      question:
        'Which of the following African countries was most successful in resisting colonization?',
      correct_answer: 'Ethiopia',
      incorrect_answers: ['C&ocirc;te d&rsquo;Ivoire', 'Congo', 'Namibia']
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'History',
      question: 'How many manned moon landings have there been?',
      correct_answer: '6',
      incorrect_answers: ['1', '3', '7']
    },
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'History',
      question: 'The United States was a member of the League of Nations.',
      correct_answer: 'False',
      incorrect_answers: ['True']
    },

    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'History',
      question:
        'Which of the following African countries was most successful in resisting colonization?',
      correct_answer: 'Ethiopia',
      incorrect_answers: ['C&ocirc;te d&rsquo;Ivoire', 'Congo', 'Namibia']
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Science: Computers',
      question:
        'All program codes have to be compiled into an executable file in order to be run. This file can then be executed on any machine.',
      correct_answer: 'False',
      incorrect_answers: ['True']
    }
  ]
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    showNextQuestion(state) {
      state.currentQuestion++
    },
    countAnsswers(state, payload) {
      if (payload === true) {
        state.rightAnswers++
      } else {
        state.wrongAnswers++
      }
    }
  }
})

export const { showNextQuestion, countAnsswers } = quizSlice.actions
export const quizReducer = quizSlice.reducer
