import { ApiConfig } from "./config";
import EndPoint from "../submodule/common/endpoint";

export const apiLoadCourseBySlug = async (params: {
  slug: string;
  status?: number;
}) => {
  return ApiConfig(EndPoint.GET_COURSE_BY_SLUG, { params });
};
