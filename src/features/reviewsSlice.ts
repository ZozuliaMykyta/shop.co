import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment";

export interface Review {
  _id: string;
  full_name: string;
  comment: string;
  date: string;
  rating: number;
}

interface ReviewsState {
  items: Review[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ReviewsState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchReviews = createAsyncThunk<
  Review[],
  string,
  { rejectValue: string }
>("reviews/fetchReviews", async (sort, { rejectWithValue }) => {
  try {
    const response = await axios.get<Review[]>(
      `http://localhost:3000/reviews?sort=${sort}`
    );
    const transformedData = response.data.map((item) => ({
      ...item,
      date: moment(item.date).format("DD/MM/YYYY"),
    }));

    return transformedData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        error.response?.data?.message || "There was an error loading data."
      );
    } else {
      return rejectWithValue("Unknown error. Please try again later.");
    }
  }
});

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchReviews.fulfilled,
        (state, action: PayloadAction<Review[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        }
      )
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default reviewsSlice.reducer;
