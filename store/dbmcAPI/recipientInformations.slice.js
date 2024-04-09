import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_recipientinformation_list = createAsyncThunk(
  "recipientInformations/api_v1_recipientinformation_list",
  async payload => {
    const response = await apiService.api_v1_recipientinformation_list(payload)
    return response.data
  }
)
export const api_v1_recipientinformation_create = createAsyncThunk(
  "recipientInformations/api_v1_recipientinformation_create",
  async payload => {
    const response = await apiService.api_v1_recipientinformation_create(
      payload
    )
    return response.data
  }
)
export const api_v1_recipientinformation_retrieve = createAsyncThunk(
  "recipientInformations/api_v1_recipientinformation_retrieve",
  async payload => {
    const response = await apiService.api_v1_recipientinformation_retrieve(
      payload
    )
    return response.data
  }
)
export const api_v1_recipientinformation_update = createAsyncThunk(
  "recipientInformations/api_v1_recipientinformation_update",
  async payload => {
    const response = await apiService.api_v1_recipientinformation_update(
      payload
    )
    return response.data
  }
)
export const api_v1_recipientinformation_partial_update = createAsyncThunk(
  "recipientInformations/api_v1_recipientinformation_partial_update",
  async payload => {
    const response = await apiService.api_v1_recipientinformation_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_recipientinformation_destroy = createAsyncThunk(
  "recipientInformations/api_v1_recipientinformation_destroy",
  async payload => {
    const response = await apiService.api_v1_recipientinformation_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const recipientInformationsSlice = createSlice({
  name: "recipientInformations",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_recipientinformation_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_recipientinformation_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recipientinformation_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recipientinformation_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_recipientinformation_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_recipientinformation_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_recipientinformation_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_recipientinformation_retrieve.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_recipientinformation_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_recipientinformation_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_recipientinformation_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_recipientinformation_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_recipientinformation_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_recipientinformation_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_recipientinformation_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_recipientinformation_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_recipientinformation_destroy.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.filter(
              record => record.id !== action.meta.arg?.id
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_recipientinformation_destroy.rejected,
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
  api_v1_recipientinformation_list,
  api_v1_recipientinformation_create,
  api_v1_recipientinformation_retrieve,
  api_v1_recipientinformation_update,
  api_v1_recipientinformation_partial_update,
  api_v1_recipientinformation_destroy,
  slice: recipientInformationsSlice
}
