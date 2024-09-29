import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "catalog/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/campers/");
      return { items: res.data.items, total: res.data.total }; 
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "catalog/fetchCamperById",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/campers/${id}`);
      return res.data; 
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

