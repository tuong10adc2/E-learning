import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";
import { Question } from "../../submodule/models/question";
import { apiLoadQuestionsByTopic } from "../../api/topic";
import _ from "lodash";

// Define a type for the slice state
interface QuestionState {
  loading: boolean;
  error: string;
  questions: Question[];
  total: number;
}

// Define the initial state using that type
const initialState: QuestionState = {
  loading: false,
  error: "",
  questions: [],
  total: 0,
};

export const requestLoadQuestionsByIdTopic = createAsyncThunk(
  "question/requestLoadQuestionsByIdTopic",
  async (props: { idTopic: string; status: number }) => {
    const res = await apiLoadQuestionsByTopic(props);
    return res.data;
  }
);

export const questionSlice = createSlice({
  name: "question",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const actionList = [requestLoadQuestionsByIdTopic];
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

    // load questions by id topic
    builder.addCase(
      requestLoadQuestionsByIdTopic.fulfilled,
      (
        state,
        action: PayloadAction<{
          data: Question[];
          total: number;
        }>
      ) => {
        state.questions = _.orderBy(
          action.payload.data,
          ["index"],
          ["asc"]
        ).map((question) => {
          return {
            ...question,
            answer: _.orderBy(question.answer, ["index"], ["asc"]).map(
              (answer, index) => ({
                ...answer,
                index,
              })
            ),
          };
        });
        state.total = action.payload.total;
        state.loading = false;
      }
    );
  },
});

export const {} = questionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const QuestionState = (state: RootState) => state.question;

export default questionSlice.reducer;
