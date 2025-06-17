import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./header.module.scss";
import logo from "../../assets/img/logo.png";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";
import { Dropdown, MenuProps, notification } from "antd";
import { useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AiOutlineUser } from "react-icons/ai";
import { requestGetUserFromToken } from "../../redux/slices/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import {
  FaBars,
  FaChartBar,
  FaRegIdCard,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import {
  categoryState,
  requestLoadCategorys,
} from "../../redux/slices/categorySlice";
import { Category } from "../../submodule/models/category";
import { apiLogout } from "../../api/auth";

const cx = classNames.bind(styles);

const Header = () => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);
  const [navbarStick, setNavbarStick] = useState(false);
  const userInfo = useAppSelector(
    (state: RootState) => state.authState.userInfo
  );

  const dispatch = useAppDispatch();

  const categoryStates = useAppSelector(categoryState);
  const categorys = categoryStates.categorys;
  const loading = categoryStates.loading;

  const handleLogout = useCallback(async () => {
    try {
      if (userInfo?._id) {
        const res = apiLogout({ idUser: userInfo?._id });
      }
      Cookies.remove("token");
      window.location.href = "/";
    } catch (error) {
      notification.error({ message: "Lỗi server", duration: 1.5 });
    }
  }, []);

  useEffect(() => {
    loadCategorys();
  }, []);

  const loadCategorys = async () => {
    try {
      const actionResult = await dispatch(
        requestLoadCategorys({
          status: 1,
        })
      );
      const res = unwrapResult(actionResult);
    } catch (error) {
      notification.error({
        message: "không tải được danh sach danh mục",
      });
    }
  };

  const items: MenuProps["items"] = [
    {
      label: <Link to={"/thong-tin-ca-nhan"}>{userInfo?.name}</Link>,
      key: "0",
      icon: <FaRegIdCard />,
      style: {
        fontSize: "1.4rem",
        fontFamily: "var(--font-family)",
        padding: "0.8rem",
      },
      onClick: async () => {
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
      },
    },
    {
      label: <Link to={"/achievement"}>Kết Quả Học Tập</Link>,
      key: "1",
      icon: <FaChartBar />,
      style: {
        fontSize: "1.4rem",
        fontFamily: "var(--font-family)",
        padding: "0.8rem",
      },
    },
    {
      label: "Đăng xuất",
      key: "3",
      icon: <FaSignOutAlt />,
      onClick: handleLogout,
      style: {
        fontSize: "1.4rem",
        fontFamily: "var(--font-family)",
        padding: "0.8rem",
      },
    },
  ];

  const handleNavbar = () => {
    if (showNavbar === true) {
      document.body.style.overflowY = "scroll";
      setShowNavbar(!showNavbar);
    } else {
      document.body.style.overflowY = "hidden";
      setShowNavbar(!showNavbar);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarStick);

    return () => {
      window.removeEventListener("scroll", handleNavbarStick);
    };
  }, []);

  const handleNavbarStick = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 180
        ? setNavbarStick(!navbarStick)
        : setNavbarStick(navbarStick);
    }
  };

  return (
    <>
      <header className={cx("header")}>
        <div className={cx("wide", "header__wrapper")}>
          <div className={cx("header__container")}>
            <Link to={"/"} className={cx("header__link")}>
              <div className={cx("header__logo")}>
                <img src={logo} alt="logo" className={cx("header__img")} />
              </div>
            </Link>
            <div className={cx("header__nav")}>
              <div className={cx("header__auth")}>
                {!userInfo?._id ? (
                  <>
                    <Link to={"/dang-nhap"} className={cx("header__btn--link")}>
                      <button className={cx("header__button")}>
                        Đăng nhập
                      </button>
                    </Link>
                    <Link to={"/dang-ky"} className={cx("header__btn--link")}>
                      <button className={cx("header__button")}>Đăng ký</button>
                    </Link>
                  </>
                ) : (
                  <Dropdown
                    menu={{ items }}
                    trigger={["hover"]}
                    placement={"bottomRight"}
                  >
                    <button className={cx("header__button")}>
                      <FaUser />
                    </button>
                  </Dropdown>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav
        className={navbarStick ? cx("navbar", "stick") : cx("navbar")}
        onScroll={handleNavbarStick}
      >
        <div className={cx("wide")}>
          <div className={cx("navbar__container")}>
            <div className={cx("navbar__list")}>
              {/* DESKTOP */}

              <div className={cx("navbar__list--desktop")}>
                {categorys.length > 0 &&
                  categorys?.map((data, index) => (
                    <div key={index} className={cx("navbar__item--desktop")}>
                      <div
                        onClick={async () => {
                          navigate(`/${data.slug}`);
                        }}
                        className={cx("navbar__link--desktop")}
                      >
                        <div className={cx("navbar__title")}>
                          <span>{data.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* MOBILE */}
              <div className={cx("navbar__icon--open")}>
                <button className={cx("navbar__btn")} onClick={handleNavbar}>
                  <FaBars className={cx("nav__icon")} />
                </button>
              </div>

              <div className={cx("navbar__sidebar")}>
                <div
                  className={
                    showNavbar ? cx("overlay", "active") : cx("overlay")
                  }
                  onClick={handleNavbar}
                ></div>
                <div
                  className={
                    showNavbar
                      ? cx("navbar__list--mobile", "active")
                      : cx("navbar__list--mobile")
                  }
                >
                  <div className={cx("navbar__icon--close")}>
                    <button
                      className={cx("navbar__btn")}
                      onClick={handleNavbar}
                    >
                      <GrClose className={cx("nav__icon")} />
                    </button>
                  </div>

                  {categorys.length > 0 &&
                    categorys?.map((data, index) => (
                      <div key={index} className={cx("navbar__item--mobile")}>
                        <div
                          onClick={() => {
                            navigate(`/${data.slug}`);
                            handleNavbar();
                          }}
                          className={cx("navbar__link--mobile")}
                        >
                          <div className={cx("navbar__title")}>
                            <span>{data.name}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <Link
              to={"/"}
              className={
                navbarStick
                  ? cx("header__link", "link__nav")
                  : cx("header__link", "link__nav", "hide")
              }
              onScroll={handleNavbarStick}
            >
              <div className={cx("header__logo")}>
                <img src={logo} alt="logo" className={cx("header__img")} />
              </div>
            </Link>

            <div
              className={
                navbarStick ? cx("header__auth") : cx("header__auth", "hide")
              }
              onScroll={handleNavbarStick}
            >
              {!userInfo?._id ? (
                <>
                  <Link to={"/dang-nhap"} className={cx("header__btn--link")}>
                    <button className={cx("header__button")}>Đăng nhập</button>
                  </Link>
                  <Link
                    to={"/dang-ky"}
                    className={cx("header__btn--link", "hide")}
                  >
                    <button className={cx("header__button")}>Đăng ký</button>
                  </Link>
                </>
              ) : (
                <Dropdown
                  menu={{ items }}
                  trigger={["hover"]}
                  placement={"bottomRight"}
                >
                  <button className={cx("header__button")}>
                    <AiOutlineUser />
                  </button>
                </Dropdown>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
