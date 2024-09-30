import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  equipment: [],
  vehicleType: [],
  city: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryFilter: (state, action) => {
      const { type, value } = action.payload;
      if (type === "equipment") {
        if (state.equipment.includes(value)) {
          state.equipment = state.equipment.filter((item) => item !== value);
        } else {
          state.equipment.push(value);
        }
      } else if (type === "vehicleType") {
        if (state.vehicleType.includes(value)) {
          state.vehicleType = state.vehicleType.filter(
            (item) => item !== value
          );
        } else {
          state.vehicleType.push(value);
        }
      } else if (type === "city") {
        state.city = value;
      }
    },
    resetFilters: (state) => {
      state.equipment = [];
      state.vehicleType = [];
      state.city = "";
    },
  },
});

export const { setCategoryFilter, resetFilters } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;

