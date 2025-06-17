import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import classNames from "classnames/bind";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { requestLogin } from "../../redux/slices/userSlice";
import { RootState } from "../../redux/store";
import TTCSconfig from "../../submodule/common/config";
import { encrypt } from "../../submodule/utils/crypto";
import styles from "./login.module.scss";

const cx = classNames.bind(styles);

const LoginPages = () => {
  const userInfo = useAppSelector(
    (state: RootState) => state.authState.userInfo
  );
  const loading = useAppSelector((state: RootState) => state.authState.loading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // lay token tu cookie

  useEffect(() => {
    if (userInfo?._id) {
      navigate(-1);
    }
  }, [userInfo]);

  const handleLogin: any = async (data: {
    account: string;
    password: string;
  }) => {
    try {
      const encodePassword = encrypt(data.password);
      // const res: any = await apiLogin({ account: data.account, password: encodePassword })
      const actionResult = await dispatch(
        requestLogin({
          account: data.account,
          password: encodePassword,
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
          Cookies.set("token", res.token, {
            expires: 60 * 60 * 24 * 30,
          });
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
                    style={{ fontSize: "1.8rem", marginRight: "0.8rem" }}
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
                    style={{ fontSize: "1.8rem", marginRight: "0.8rem" }}
                  />
                }
                type="password"
                placeholder="Nhập mật khẩu"
                style={{ padding: "12px" }}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Duy trì đăng nhập</Checkbox>
              </Form.Item>

              <a className={cx("login-form-forgot")} href="/">
                Quên mật khẩu
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={cx("login-form-button")}
                loading={loading}
              >
                Đăng nhập
              </Button>
              <div className={cx("login__or")}>
                <span className={cx("login__ortext")}>HOẶC</span>
              </div>
              <div className={cx("login__toregister")}>
                Bạn chưa có tài khoản?{" "}
                <Link to="/dang-ky" className={cx("login__toregisterlink")}>
                  Đăng ký ngay!
                </Link>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginPages;
