import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching devotions
export const fetchDevotions = createAsyncThunk(
  "devotions/fetchDevotions",
  async (token) => {
    const response = await axios.get("/devotion/show", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

// Async thunk for creating a devotion
// You'll need to pass both the token and the devotion data to this thunk
export const createDevotion = createAsyncThunk(
  "devotions/createDevotion",
  async ({ token, devotion }) => {
    const response = await axios.post("/devotion/create", devotion, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

// Async thunk for updating a devotion
// You'll need to pass both the token and the devotion data to this thunk
export const updateDevotion = createAsyncThunk(
  "devotions/updateDevotion",
  async ({ token, devotion }) => {
    const response = await axios.put(`/devotion/${devotion._id}`, devotion, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

// Async thunk for deleting a devotion
// You'll need to pass both the token and the devotion id to this thunk
export const deleteDevotion = createAsyncThunk(
  "devotions/deleteDevotion",
  async ({ token, id }) => {
    await axios.delete(`/devotion/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  }
);

const devotionsSlice = createSlice({
  name: "devotions",
  initialState: {
    form: {
      month: "",
      day: "",
      title: "",
      chapter: "",
      verse: "",
      paragraphs: [],
      prayer: "",
      photo: null,
      subTitles: [],
    },
    devotions: [],
  },
  reducers: {
    updateForm: (state, action) => {
      state.form = { ...state.form, ...action.payload };
    },
    addParagraph: (state) => {
      state.form.paragraphs.push("");
    },
    updateParagraph: (state, action) => {
      const { index, value } = action.payload;
      state.form.paragraphs[index] = value;
    },
    deleteParagraph: (state, action) => {
      state.form.paragraphs.splice(action.payload, 1);
    },
    updateFile: (state, action) => {
      state.form.photo = action.payload;
    },
    resetForm: (state) => {
      state.form = {
        month: "",
        day: "",
        title: "",
        chapter: "",
        verse: "",
        paragraphs: [],
        prayer: "",
        photo: null,
        subTitles: [],
      };
    },
    addSubtitle: (state) => {
      state.form.subTitles.push("");
    },
    updateSubtitle: (state, action) => {
      const { index, value } = action.payload;
      state.form.subTitles[index] = value;
    },
    deleteSubtitle: (state, action) => {
      state.form.subTitles.splice(action.payload, 1);
    },
  },
  // ... rest of your slice
});

export const {
  updateForm,
  addParagraph,
  updateParagraph,
  deleteParagraph,
  addSubtitle,
  updateSubtitle,
  deleteSubtitle,
  updateFile,
  resetForm,
} = devotionsSlice.actions;

export default devotionsSlice.reducer;
