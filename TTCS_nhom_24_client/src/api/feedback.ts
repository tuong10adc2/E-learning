import { ApiConfig } from "./config";
import EndPoint from "../submodule/common/endpoint";
import { Feedback } from "../submodule/models/feedback";

export const apiCreateFeedback = async (payload: any) => {
  return ApiConfig(EndPoint.CREATE_FEEDBACK, {
    payload,
  });
};
