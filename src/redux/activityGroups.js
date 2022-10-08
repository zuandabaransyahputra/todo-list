// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getData, postData } from '../utils/fetchdata'

const initialState = {
  dataActivity: [],
  isLoading: false,
}

export const getDataActivity = createAsyncThunk('activity/getDataActivity', async () => {
  const response = await getData(`/activity-groups`, {
    email: 'zuandabaransyahputra@gmail.com'
  })
  return {
    data: response.data
  }
})

export const createActivity = createAsyncThunk('activity/createActivity', async () => {
  const response = await postData(`/activity-groups`, {
    title: 'New Activity',
    email: 'zuandabaransyahputra@gmail.com',
  })
  return {
    data: response.data
  }
})

export const activitiesSlice = createSlice({
  name: 'activity',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createActivity.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createActivity.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(getDataActivity.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getDataActivity.fulfilled, (state, action) => {
        state.dataActivity = action.payload.data.data
        state.isLoading = false
      })
  }
})

export default activitiesSlice.reducer
