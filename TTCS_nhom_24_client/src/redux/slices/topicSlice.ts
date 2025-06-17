import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";
import { Topic } from "../../submodule/models/topic";
import {
  apiGetTotalLearnedTopic,
  apiLoadTopicByCourse,
  apiLoadTopicById,
  apiUpdateTopic,
} from "../../api/topic";
import _ from "lodash";

// Define a type for the slice state
interface TopicState {
  loading: boolean;
  error: string;
  topics: Topic[];
  topicInfo: Topic | null;
  total: number;
  totalLearned: number;
}

// Define the initial state using that type
const initialState: TopicState = {
  loading: false,
  error: "",
  topics: [],
  topicInfo: null,
  total: 0,
  totalLearned: 0,
};

export const requestLoadTopicByCourse = createAsyncThunk(
  "topic/requestLoadTopicByCourse",
  async (props: {
    idCourse: string;
    type: number;
    parentId?: string;
    status?: number;
  }) => {
    const res = await apiLoadTopicByCourse(props);
    return res.data;
  }
);

export const requestLoadTopicById = createAsyncThunk(
  "topic/requestLoadTopicById",
  async (props: { id: string }) => {
    const res = await apiLoadTopicById(props);
    return res.data;
  }
);

export const requestLoadTotalLearnedTopic = createAsyncThunk(
  "topic/requestLoadLearnedTopic",
  async (props: { idCourse: string; idUser: string }) => {
    const res = await apiGetTotalLearnedTopic(props);
    return res.data;
  }
);

export const requestUpdateTopicById = createAsyncThunk(
  "topic/requestUpdateTopicById",
  async (props: any) => {
    const res = await apiUpdateTopic(props);
    return res.data;
  }
);

export const topicSlice = createSlice({
  name: "topic",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const actionList = [
      requestLoadTopicByCourse,
      requestLoadTopicById,
      requestUpdateTopicById,
    ];
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

    // load topic by id Course
    builder.addCase(
      requestLoadTopicByCourse.fulfilled,
      (
        state,
        action: PayloadAction<{
          data: Topic[];
          total: number;
        }>
      ) => {
        state.topics = _.orderBy(action.payload.data, ["index"], ["asc"]).map(
          (topic) => {
            return {
              ...topic,
              topicChildData: _.orderBy(
                topic.topicChildData,
                ["index"],
                ["asc"]
              ),
            };
          }
        );
        state.total = action.payload.total;
        state.loading = false;
      }
    );

    // load topic by id
    builder.addCase(
      requestLoadTopicById.fulfilled,
      (state, action: PayloadAction<Topic>) => {
        state.topicInfo = new Topic(action.payload);
        state.loading = false;
      }
    );

    // load total learned topic
    builder.addCase(
      requestLoadTotalLearnedTopic.fulfilled,
      (
        state,
        action: PayloadAction<{
          totalLearned: number;
        }>
      ) => {
        state.totalLearned = action.payload.totalLearned;
      }
    );

    // update topic
    builder.addCase(
      requestUpdateTopicById.fulfilled,
      (
        state,
        action: PayloadAction<{
          data: Topic;
        }>
      ) => {
        state.topicInfo = new Topic(action.payload.data);
      }
    );
  },
});

export const {} = topicSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const topicState = (state: RootState) => state.topic;

export default topicSlice.reducer;
