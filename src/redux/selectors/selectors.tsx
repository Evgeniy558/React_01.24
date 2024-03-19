import { RootState } from '../store'

export const getQuizState = (state: RootState) => state.quiz
export const getConfigurationState = (state: RootState) => state.configuration
export const getTimerState = (state: RootState) => state.timer
