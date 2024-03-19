import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { configurationsReducer } from './slices/configurationsSlice'
import { timerReducer } from './slices/timerSlice'
import { quizReducer } from './slices/quizSlice'
import { statisticsReducer } from './slices/statisticsSlice'
import { persistReducer, persistStore } from 'redux-persist'
// import persistStore from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { useDispatch } from 'react-redux'

const combinedReducer = combineReducers({
  configuration: configurationsReducer,
  timer: timerReducer,
  quiz: quizReducer,
  statistics: statisticsReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['statistics', 'quiz', 'timer', 'configuration']
}
const persistedReducer = persistReducer(persistConfig, combinedReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
        ignoredPaths: ['register']
      }
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const persistor = persistStore(store)
