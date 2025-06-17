import { ApiConfig } from "./config";
import { UserInfo } from "../submodule/models/user";
import EndPoint from "../submodule/common/endpoint";

export const apiLogin = (payload: { account: string; password: string }) => {
  return ApiConfig(EndPoint.LOGIN, { payload });
};

export const apiRegister = (payload: { userInfo: UserInfo }) => {
  return ApiConfig(EndPoint.REGISTER, { payload });
};

export const apiLogout = (payload: { idUser: string }) => {
  return ApiConfig(EndPoint.LOGOUT, { payload });
};
