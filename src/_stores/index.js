import {configureStore} from '@reduxjs/toolkit'

import authReducer from './authSlice'
import experienceReducer from './experienceSlice'
import jobsReducer from './jobsSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    experience: experienceReducer,
    jobs: jobsReducer,
  },
})

export default store
