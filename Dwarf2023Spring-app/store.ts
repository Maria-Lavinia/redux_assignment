import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from './features/users/UsersSlice'
import counterReducer from './features/counter/counterSlice'
import problemsReducer from './features/problems/problemsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    problems: problemsReducer,
    users: userReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch