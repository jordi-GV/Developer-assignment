import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { baseUrl } from "../../shared/baseUrl";



const ADVERTISEMENTS_URL = baseUrl + 'advertisements'
const initialState = {
  advs: [],
  status: "idle",
  error: null,
};



export const fetchAdvs = createAsyncThunk("advs/fetchAdvs", () => {
  return fetch(`${ADVERTISEMENTS_URL}`).then((response) => response.json());
});

export const addNewAdv = createAsyncThunk("advs/addNewAdv", (data) => {
  return fetch(`${ADVERTISEMENTS_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
});

export const advEdited = createAsyncThunk("advs/addNewAdv", (data) => {
  return fetch(`${ADVERTISEMENTS_URL}/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
});

export const deleteAdv = createAsyncThunk("advs/deleteAdv", (id) => {
  return fetch(`${ADVERTISEMENTS_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
});



const advsSlice = createSlice({
  name: "advs",
  initialState,
  reducers: {
    advAdded: {
      reducer(state, action) {
        state.advs.push(action.payload);
      },
    },
    advUpdated(state, action) {
      const { id, title, valid_until, link } = action.payload;
      const existingAdv = state.advs.find((adv) => adv.id === id);
      if (existingAdv) {
        existingAdv.title = title;
        existingAdv.valid_until = valid_until;
        existingAdv.link = link;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAdvs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAdvs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.advs = state.advs.concat(action.payload);
      })
      .addCase(fetchAdvs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(addNewAdv.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addNewAdv.fulfilled, (state, action) => {
        state.advs.push(action.payload);
        state.status = "idle";
      })
      .addCase(addNewAdv.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

      builder
      .addCase(deleteAdv.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteAdv.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(deleteAdv.rejected, (state, action) => {
        state.status = "failed";
        state.advs.advs = state.advs.advs.filter(adv => adv.id !== action.payload)
      })
  },
});



export const { advAdded, advUpdated } = advsSlice.actions;
export default advsSlice.reducer;

export const selectAllAdvs = (state) => state.advs.advs;

export const selectAdvById = (state, advId) =>
  state.advs.advs.find((adv) => adv.id === advId);


  