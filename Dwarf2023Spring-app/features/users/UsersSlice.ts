import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UserEntity } from './userEntity'
import { UsersAPI } from './usersAPI'


export const signUp = createAsyncThunk(
    'user/auth/signup', // This is a name for the thunk (must be unique) not the endpoint
    async (user: UserEntity, thunkAPI) => {
      const response = UsersAPI.signUp(user);
      return response
    }
  )


interface UserState {
  entities: UserEntity[]
}

const initialState = {
  entities: [],
} as UserState

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(signUp.fulfilled, (state, action) => {
        // Add user to the state array
        state.entities.push(action.payload)
    })

  },
})

// Action creators are generated for each case reducer function

export default usersSlice.reducer

// Later, dispatch the thunk as needed in the app
// dispatch(fetchUserById(123))