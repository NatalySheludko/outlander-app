import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = false;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  total: 0,
  visibleItems: [],
  loading: false,
  error: false,
  limit: 4,
  offset: 0,
  selectedCamper: null,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    loadMore: (state) => {
      const nextOffset = state.offset + state.limit;
      state.visibleItems = state.items.slice(0, nextOffset);
      state.offset = nextOffset;
    },
    resetVisibleItems: (state) => {
      state.visibleItems = [];
      state.offset = 0;
    },
    applyFilters: (state, action) => {
      const { equipment = [], vehicleType = [], city = "" } = action.payload;

      const matchesFilters = (item) => {
        const matchesEquipment =
          equipment.length === 0 ||
          equipment.every(
            (filter) =>
              item[filter] === true ||
              item.transmission?.toLowerCase() === filter.toLowerCase()
          );

        const matchesVehicleType =
          vehicleType.length === 0 || vehicleType.includes(item.form);

        const matchesCity =
          !city || item.location?.toLowerCase().includes(city.toLowerCase());

        return matchesEquipment && matchesVehicleType && matchesCity;
      };

      state.visibleItems = state.items.filter(matchesFilters);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
        state.visibleItems = state.items.slice(0, state.limit);
        state.offset = state.limit;
      })
      .addCase(fetchCampers.rejected, handleRejected)

      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});

export const { loadMore, resetVisibleItems, applyFilters } =
  catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;

