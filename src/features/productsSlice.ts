import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateRandomRating } from "../components/Rating";
import { IProduct } from "../interfaces/IProduct";
import axios from "axios";

interface ProductsState {
  items: IProduct[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk<
  IProduct[],
  void,
  { rejectValue: string }
>("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<IProduct[]>("http://localhost:3000/cards");
    const productsWithRating = response.data.map((product: any) => ({
      ...product,
      rating: generateRandomRating(),
    }));
    return productsWithRating;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue("There was an error loading data.");
    } else {
      return rejectWithValue("Unknown error. Please try again later.");
    }
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default productsSlice.reducer;
