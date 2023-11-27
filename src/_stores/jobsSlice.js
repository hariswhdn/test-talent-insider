import {createSlice} from '@reduxjs/toolkit'

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    loading: false,
    jobs: [],
    error: null,
  },
  reducers: {
    setLoading: (state, {payload}) => {
      state.loading = payload
    },
    setJobs: (state, {payload}) => {
      state.loading = false
      state.jobs = payload
      state.error = null
    },
    setError: (state, {payload}) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const getJobs = () => async (dispatch) => {
  await dispatch(setLoading(true))
  try {
    const response = await fetch('https://api.kontenbase.com/query/api/v1/a8d5ee26-bdb1-4668-815c-53178086e682/jobs')
    if (response.ok) {
      const data = await response.json()
      await dispatch(setJobs(data))
    } else {
      await dispatch(setError(`${response.status} ${response.statusText}`))
    }
  } catch (error) {
    await dispatch(setError(error))
  }
}

export const {setLoading, setJobs, setError} = jobsSlice.actions
export default jobsSlice.reducer
