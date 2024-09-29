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
  filters: {
    equipment: [],
    vehicleType: [],
    city: "",
  },
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
    setEquipmentFilter: (state, action) => {
      const filter = action.payload;
      if (state.filters.equipment.includes(filter)) {
        state.filters.equipment = state.filters.equipment.filter(
          (item) => item !== filter
        );
      } else {
        state.filters.equipment.push(filter);
      }
    },
    setVehicleTypeFilter: (state, action) => {
      const filter = action.payload;
      if (state.filters.vehicleType.includes(filter)) {
        state.filters.vehicleType = state.filters.vehicleType.filter(
          (item) => item !== filter
        );
      } else {
        state.filters.vehicleType.push(filter);
      }
    },
    setCityFilter: (state, action) => {
      state.filters.city = action.payload;
    },
    resetVisibleItems: (state) => {
      state.visibleItems = [];
      state.offset = 0;
    },

    resetFilters: (state) => {
      state.filters = { equipment: [], vehicleType: [], city: "" };
      state.visibleItems = [];
      state.offset = 0;
    },
    applyFilters: (state) => {
      const { equipment, vehicleType, city } = state.filters;

      const matchesFilters = (item) => {
        const matchesEquipment =
          equipment.length === 0 ||
          equipment.every((filter) => {
            return (
              item[filter] === true ||
              item.transmission?.toLowerCase() === filter.toLowerCase()
            );
          });

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

export const {
  loadMore,
  setEquipmentFilter,
  setVehicleTypeFilter,
  setCityFilter,
  resetFilters,
  resetVisibleItems,
  applyFilters,
} = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;

