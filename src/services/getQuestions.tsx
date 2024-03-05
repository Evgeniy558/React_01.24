import { createAsyncThunk } from '@reduxjs/toolkit'

export const getQuestions = createAsyncThunk(
  'quiz/getQuestions',
  async (url: string, { rejectWithValue }) => {
    try {
      const responce = await fetch(url)
      const data = await responce.json()
      return data.results
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      } else {
        return rejectWithValue('An unknown error occurred')
      }
    }
  }
)
