import { unwrapResult } from "@reduxjs/toolkit";
import { notification } from "antd";
import Cookies from "js-cookie";
import { useLayoutEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loading from "./components/loading";
import ArrowToTop from "./helpers/ArrowToTop";
import ScrollToTop from "./helpers/ScrollToTop";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { requestGetUserFromToken } from "./redux/slices/userSlice";
import { RootState } from "./redux/store";
import { privateRoutes, publicRoutes } from "./routes/routes";

function App() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(
    (state: RootState) => state.authState.userInfo
  );
  const isLoading = useAppSelector(
    (state: RootState) => state.authState.loadingCheckLogin
  );

  useLayoutEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const cookie = Cookies.get("token");
    try {
      const result = await dispatch(
        requestGetUserFromToken({ token: cookie || "" })
      );
      unwrapResult(result);
    } catch (error) {
      if (cookie)
        notification.error({
          message: "Server đang bị lỗi",
        });
    }
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return isLoading ? (
              <Route key={index} path={route.path} element={<Loading />} />
            ) : (
              <Route key={index} path={route.path} element={<Page />} />
            );
          })}
          {privateRoutes.map((route, index) => {
            const Page = route.component;
            return isLoading ? (
              <Route key={index} path={route.path} element={<Loading />} />
            ) : (
              <Route
                key={index}
                path={route.path}
                element={
                  userInfo?._id ? <Page /> : <Navigate to={"/dang-nhap"} />
                }
              />
            );
          })}
        </Routes>
      </div>
      <ArrowToTop />
    </BrowserRouter>
  );
}

export default App;
