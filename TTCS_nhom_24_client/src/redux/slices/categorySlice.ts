import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";
import { Category } from "../../submodule/models/category";
import { apiLoadCategoryBySlug, apiLoadCategorys } from "../../api/category";
import { Course } from "../../submodule/models/course";
import _ from "lodash";

// Define a type for the slice state
interface CategoryState {
  categorys: Category[];
  loading: boolean;
  error: string;
  categoryInfo: Category | null;
  courses: Course[];
}

// Define the initial state using that type
const initialState: CategoryState = {
  categorys: [],
  loading: false,
  error: "",
  categoryInfo: null,
  courses: [],
};

export const requestLoadCategorys = createAsyncThunk(
  "category/loadCategorys",
  async (props: { status: number }) => {
    const res = await apiLoadCategorys(props);
    return res.data;
  }
);

export const requestLoadCategoryBySlug = createAsyncThunk(
  "category/requestLoadCategoryBySlug",
  async (props: { slug: string }) => {
    const res = await apiLoadCategoryBySlug(props);
    return res.data;
  }
);

export const categorySlice = createSlice({
  name: "category",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const actionList = [requestLoadCategorys, requestLoadCategoryBySlug];
    actionList.forEach((action) => {
      builder.addCase(action.pending, (state) => {
        state.loading = true;
      });
    });
    actionList.forEach((action) => {
      builder.addCase(action.rejected, (state) => {
        state.loading = false;
      });
    });

    // load
    builder.addCase(
      requestLoadCategorys.fulfilled,
      (
        state,
        action: PayloadAction<{
          data: Category[];
          status: number;
        }>
      ) => {
        state.loading = false;
        state.categorys = _.orderBy(action.payload.data, ["index"], ["asc"]);
      }
    );

    // load by slug
    builder.addCase(
      requestLoadCategoryBySlug.fulfilled,
      (
        state,
        action: PayloadAction<{
          data: {
            categorys: Category;
            course: Course[];
          };
          status: number;
        }>
      ) => {
        state.categoryInfo = action.payload.data.categorys;
        state.courses = action.payload.data.course;
        state.loading = false;
      }
    );
  },
});

export const {} = categorySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const categoryState = (state: RootState) => state.category;

export default categorySlice.reducer;
