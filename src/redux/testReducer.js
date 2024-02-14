import { combineReducers, createStore } from 'redux'
import { createSlice } from '@reduxjs/toolkit'

const initialState3 = { value: 0, name: 'Tom' }
const initialState2 = { value: 1, name: 'reducer2' }

const counterReducer = (state = initialState3, action) => {
  console.log('action', action)
  return state
}

const counterReducer2 = (state = initialState2, action) => {
  console.log('action', action)
  return state
}
const combinedReducer = combineReducers({ reducer1: counterReducer, reducer2: counterReducer2 })

export const store = createStore(combinedReducer)
console.log('storew', store)

const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    }
  }
})
console.log('slice', counterSlice, 'reducer', counterSlice.reducer, 'action', counterSlice.actions)
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
