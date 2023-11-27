import {createSlice} from '@reduxjs/toolkit'

function getAuth() {
  let json = JSON.parse(localStorage.getItem('auth') || '{}')
  if (json.expiresOn) {
    if (Date.parse(json.expiresOn) - Date.parse(new Date()) < 0) {
      json = {}
    }
  }
  return json
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    auth: getAuth(),
    error: null,
  },
  reducers: {
    setLoading: (state, {payload}) => {
      state.loading = payload
    },
    setAuth: (state, {payload}) => {
      localStorage.setItem('auth', JSON.stringify(payload))
      state.loading = false
      state.auth = payload
      state.error = null
    },
    setError: (state, {payload}) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const login = (prop) => async (dispatch) => {
  await dispatch(setLoading(true))
  try {
    const response = await fetch(
      'https://api.kontenbase.com/query/api/v1/a8d5ee26-bdb1-4668-815c-53178086e682/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prop),
      }
    )
    if (response.ok) {
      const data = await response.json()
      await dispatch(setAuth(data))
    } else {
      await dispatch(setError(`${response.status} ${response.statusText}`))
    }
  } catch (error) {
    await dispatch(setError(error))
  }
}

export const signup = (prop) => async (dispatch) => {
  await dispatch(setLoading(true))
  try {
    const response = await fetch(
      'https://api.kontenbase.com/query/api/v1/a8d5ee26-bdb1-4668-815c-53178086e682/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prop),
      }
    )
    if (response.ok) {
      const data = await response.json()
      await dispatch(setAuth(data))
    } else {
      await dispatch(setError(`${response.status} ${response.statusText}`))
    }
  } catch (error) {
    await dispatch(setError(error))
  }
}

export const logout = () => async (dispatch) => {
  await dispatch(setLoading(true))
  try {
    await dispatch(setAuth({}))
    return true
  } catch (error) {
    await dispatch(setError(error))
  }
}

export const {setLoading, setAuth, setError} = authSlice.actions
export default authSlice.reducer
