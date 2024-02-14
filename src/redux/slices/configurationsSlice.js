import { createSlice } from '@reduxjs/toolkit'
const initialState = { amount: null, category: null, difficulty: '', type: '', time: null }

const configurationsSlice = createSlice({
  name: 'configurations',
  initialState,
  reducers: {
    setAmount(state, action) {
      state.amount = action.payload
    },
    setCategory(state, action) {
      state.category = action.payload
    },
    setDifficulty(state, action) {
      state.difficulty = action.payload
    },
    setType(state, action) {
      state.type = action.payload
    },
    setTime(state, action) {
      state.time = action.payload
    }
  }
})

export const { setAmount, setCategory, setDifficulty, setType, setTime } =
  configurationsSlice.actions
export const configurationsReducer = configurationsSlice.reducer
