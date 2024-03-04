import { createAsyncThunk } from '@reduxjs/toolkit'

export const getQuestions = createAsyncThunk(
  'quiz/getQuestions',
  async (url: string, { rejectWithValue }) => {
    try {
      const responce = await fetch(url)
      const data = await responce.json()
      return data.results
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
