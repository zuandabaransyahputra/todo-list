// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { deleteData, getData, postData } from '../utils/fetchdata'

const initialState = {
  dataActivity: [],
  isLoading: false,
  isSuccess: false
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

export const deleteActivity = createAsyncThunk('activity/deleteActivity', async (id, params = {}) => {
  const response = await deleteData(`/activity-groups/${id}`, params)
  return {
    data: response.data
  }
})

export const activitiesSlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    reset: (state) => state.isSuccess = false
  },
  extraReducers: (builder) => {
    builder
      .addCase(createActivity.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createActivity.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(deleteActivity.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
      })
      .addCase(deleteActivity.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
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

export const { reset } = activitiesSlice.actions

export default activitiesSlice.reducer
