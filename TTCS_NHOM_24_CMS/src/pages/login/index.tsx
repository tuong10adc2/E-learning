import { LoadingOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { useEffect, useLayoutEffect } from "react";
import Cookies from "js-cookie";
import { unwrapResult } from "@reduxjs/toolkit";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";
import TTCSconfig from "../../submodule/common/config";
import { encrypt } from "../../submodule/utils/crypto";
import styles from "./login.module.scss";
import { authState, requestGetUserFromToken, requestLogin } from "../../redux/authSlice";

const cx = classNames.bind(styles);

const LoginPages = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStates = useAppSelector(authState)
  // lay token tu cookie

  useEffect(() => {
    checkLogin()
  }, [])

  const checkLogin = async () => {
    const cookie = Cookies.get("tokenAdmin");
    try {
      const result = await dispatch(
        requestGetUserFromToken({ token: cookie || "" })
      );
      const data = unwrapResult(result);
      console.log(data.userInfo);

      if (data.userInfo?._id) {
        navigate('/')
      }
    } catch (error) {
      if (cookie)
        notification.error({
          message: "Server đang bị lỗi",
        });
    }
  }

  const handleLogin: any = async (data: {
    account: string;
    password: string;
  }) => {
    try {
      const encodePassword = encrypt(data.password);
      const actionResult = await dispatch(
        requestLogin({
          account: data.account,
          password: encodePassword,
          userRole: TTCSconfig.ROLE_ADMIN
        })
      );

      const res = unwrapResult(actionResult);
      switch (res.loginCode) {
        case TTCSconfig.LOGIN_FAILED:
          return notification.error({
            message: "Đăng nhập thất bại",
            duration: 1.5,
          });

        case TTCSconfig.LOGIN_ACCOUNT_NOT_EXIST:
          return notification.warning({
            message: "Tài khoản hoặc mật khẩu không đúng",
            duration: 1.5,
          });

        case TTCSconfig.LOGIN_WRONG_PASSWORD:
          return notification.warning({
            message: "Tài khoản hoặc mật khẩu không đúng",
            duration: 1.5,
          });

        case TTCSconfig.LOGIN_SUCCESS:
          Cookies.set("tokenAdmin", res.token, {
            expires: 60 * 60 * 24 * 30,
          });
          navigate('/')
          return notification.success({
            message: "Đăng nhập thành công",
            duration: 1.5,
          });
      }
    } catch (err) {
      return notification.error({
        message: "Đăng nhập thất bại, lỗi server",
        duration: 1.5,
      });
    }
  };

  return (
    <>
      <div className={cx("login__over")}>
        {
          authStates.loadingCheckLogin ? <LoadingOutlined /> : (
            <div className={cx("login__wrapper")}>
              <h2 className={cx("login__title")}>Đăng Nhập</h2>
              <Form
                name="normal_login"
                className={cx("login__form")}
                initialValues={{
                  remember: true,
                }}
                onFinish={handleLogin}
              >
                <Form.Item
                  name="account"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập trường này!",
                    },
                  ]}
                >
                  <Input
                    prefix={
                      <UserOutlined
                        className={cx("site-form-item-icon input__icon")}
                        style={{ fontSize: "1rem", marginRight: "0.8rem" }}
                      />
                    }
                    placeholder="Nhập tài khoản"
                    style={{ padding: "12px" }}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập trường này!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={
                      <LockOutlined
                        className={cx("site-form-item-icon input__icon")}
                        style={{ fontSize: "1rem", marginRight: "0.8rem" }}
                      />
                    }
                    type="password"
                    placeholder="Nhập mật khẩu"
                    style={{ padding: "12px" }}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={cx("login-form-button")}
                  // loading={loading}
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )
        }
      </div>
    </>
  );
};

export default LoginPages;
