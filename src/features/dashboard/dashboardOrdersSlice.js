import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOrderByClient } from "../../api/orderApi";

export const fetchDashboardOrders = createAsyncThunk(
  "dashboardOrders/fetchDashboardOrders",
  async (params, { rejectWithValue }) => {
    try {
      const data = await getOrderByClient(params);
      return data;
    } catch (error) {
      return rejectWithValue("Failed to fetch dashboard orders");
    }
  }
);

const initialState = { rows: [], loading: false, error: null, };

const dashboardOrdersSlice = createSlice({
  name: "dashboardOrders",
  initialState,
  reducers: {
    clearDashboardOrders: (state) => {
      state.rows = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.rows = action.payload;
      })
      .addCase(fetchDashboardOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearDashboardOrders } = dashboardOrdersSlice.actions;
export default dashboardOrdersSlice.reducer;
