import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const testconnector_post_get_all_computer_info_create = createAsyncThunk(
  "testconnector_response_post_testapis/testconnector_post_get_all_computer_info_create",
  async payload => {
    const response = await apiService.testconnector_post_get_all_computer_info_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const testconnector_response_post_testapisSlice = createSlice({
  name: "testconnector_response_post_testapis",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        testconnector_post_get_all_computer_info_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        testconnector_post_get_all_computer_info_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        testconnector_post_get_all_computer_info_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  testconnector_post_get_all_computer_info_create,
  slice: testconnector_response_post_testapisSlice
}
