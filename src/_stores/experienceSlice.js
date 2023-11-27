import {createSlice} from '@reduxjs/toolkit'

export const experienceSlice = createSlice({
  name: 'experience',
  initialState: {
    loading: false,
    experience: [],
    error: null,
  },
  reducers: {
    setLoading: (state, {payload}) => {
      state.loading = payload
    },
    setExperience: (state, {payload}) => {
      state.loading = false
      state.experience = payload
      state.error = null
    },
    setError: (state, {payload}) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const getExperience = (prop) => async (dispatch) => {
  await dispatch(setLoading(true))
  try {
    const response = await fetch(
      'https://api.kontenbase.com/query/api/v1/a8d5ee26-bdb1-4668-815c-53178086e682/exprience?createdBy=' + prop
    )
    if (response.ok) {
      const data = await response.json()
      await dispatch(setExperience(data))
    } else {
      await dispatch(setError(`${response.status} ${response.statusText}`))
    }
  } catch (error) {
    await dispatch(setError(error))
  }
}

export const addExperience = (obj, token) => async (dispatch) => {
  await dispatch(setLoading(true))
  try {
    const response = await fetch(
      'https://api.kontenbase.com/query/api/v1/a8d5ee26-bdb1-4668-815c-53178086e682/exprience',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(obj),
      }
    )
    if (response.ok) {
      await dispatch(getExperience(obj.createdBy))
      return true
    } else {
      await dispatch(setError(`${response.status} ${response.statusText}`))
    }
  } catch (error) {
    await dispatch(setError(error))
  }
}

export const {setLoading, setExperience, setError} = experienceSlice.actions
export default experienceSlice.reducer
