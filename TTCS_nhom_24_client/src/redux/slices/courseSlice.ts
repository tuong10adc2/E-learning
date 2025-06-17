import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";
import { Course } from "../../submodule/models/course";
import { apiLoadCourseBySlug } from "../../api/course";
import { Topic } from "../../submodule/models/topic";
import { apiLoadTopicByCourse } from "../../api/topic";

// Define a type for the slice state
interface CourseState {
  loading: boolean;
  error: string;
  course: Course | null;
  topics: Topic[];
}

// Define the initial state using that type
const initialState: CourseState = {
  loading: false,
  error: "",
  course: null,
  topics: [],
};

export const requestLoadCourseBySlug = createAsyncThunk(
  "course/requestLoadCourseBySlug",
  async (props: { slug: string; status?: number }) => {
    const res = await apiLoadCourseBySlug(props);
    return res.data;
  }
);

export const courseSlice = createSlice({
  name: "course",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const actionList = [requestLoadCourseBySlug];
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

    // load by slug
    builder.addCase(
      requestLoadCourseBySlug.fulfilled,
      (
        state,
        action: PayloadAction<{
          data: Course;
          status: number;
        }>
      ) => {
        state.course = action.payload.data;
        state.loading = false;
      }
    );
  },
});

export const {} = courseSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const courseState = (state: RootState) => state.course;

export default courseSlice.reducer;
