import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useAxiosInstance from "../api/axiosInstance";

// Async thunk for fetching devotions
export const fetchDevotions = createAsyncThunk(
  "devotions/fetchDevotions",
  async (token) => {
    const axiosInstance = useAxiosInstance(token);
    const response = await axiosInstance.get("/devotion/show");
    return response.data;
  }
);

// Async thunk for creating a devotion
// You'll need to pass both the token and the devotion data to this thunk
export const createDevotion = createAsyncThunk(
  "devotions/createDevotion",
  async ({ token, devotion }) => {
    const axiosInstance = useAxiosInstance(token);
    const response = await axiosInstance.post("/devotion/create", devotion, {
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
    const axiosInstance = useAxiosInstance(token);
    const response = await axiosInstance.put(
      `/devotion/${devotion._id}`,
      devotion,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  }
);

// Async thunk for deleting a devotion
// You'll need to pass both the token and the devotion id to this thunk
export const deleteDevotion = createAsyncThunk(
  "devotions/deleteDevotion",
  async ({ token, id }) => {
    const axiosInstance = useAxiosInstance(token);
    await axiosInstance.delete(`/devotion/${id}`, {
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
    selectedDevotion: null,
  },
  reducers: {
    selectDevotion: (state, action) => {
      state.selectedDevotion = action.payload;
    },
    startEditing: (state, action) => {
      state.form = action.payload;
    },
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

  extraReducers: (builder) => {
    builder
      .addCase(fetchDevotions.fulfilled, (state, action) => {
        state.devotions = action.payload;
      })
      .addCase(createDevotion.fulfilled, (state, action) => {
        state.devotions.push(action.payload);
      })
      .addCase(updateDevotion.fulfilled, (state, action) => {
        const index = state.devotions.findIndex(
          (devotion) => devotion._id === action.payload._id
        );
        if (index !== -1) {
          state.devotions[index] = action.payload;
        }
      })
      .addCase(deleteDevotion.fulfilled, (state, action) => {
        const index = state.devotions.findIndex(
          (devotion) => devotion._id === action.payload
        );
        if (index !== -1) {
          state.devotions.splice(index, 1);
        }
      });
  },
  // ... rest of your slice
});

export const selectForm = (state) => state.devotions.form;

export const selectParagraphs = (state) => state.devotions.form.paragraphs;

export const selectPreviewUrl = (state) => state.devotions.form.photo;

export const {
  selectDevotion,
  startEditing,
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
