import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './todosSlice'
import { todosApi } from './todosApi'

export const store = configureStore({
  reducer: {
    todosState: todosReducer,
    [todosApi.reducerPath]: todosApi.reducer
  },
  middleware: getDefault => getDefault().concat(
    todosApi.middleware
  )
})
