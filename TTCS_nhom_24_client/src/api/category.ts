import { ApiConfig } from "./config";
import { Category } from "../submodule/models/category";
import EndPoint from "../submodule/common/endpoint";

export const apiLoadCategorys = async (params: { status: number }) => {
  return ApiConfig(EndPoint.GET_CATEGORYS_BY_STATUS, { params });
};

export const apiLoadCategoryBySlug = async (params: { slug: string }) => {
  return ApiConfig(EndPoint.GET_CATEGORYS_BY_SLUG, { params });
};
// export const apiUpdateCategory = (payload: { status: number }) => {
//   return ApiConfig("/update-category-by-status", payload);
// };
