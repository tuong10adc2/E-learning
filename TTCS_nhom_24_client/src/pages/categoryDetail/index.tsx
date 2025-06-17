import { unwrapResult } from "@reduxjs/toolkit";
import { Breadcrumb, Col, notification, Row } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  categoryState,
  requestLoadCategoryBySlug,
} from "../../redux/slices/categorySlice";
import classNames from "classnames/bind";
import styles from "./categoryDetail.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link, NavLink } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import TTCSconfig from "../../submodule/common/config";

const cx = classNames.bind(styles);

const CategoryDetail = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const categoryReducer = useAppSelector(categoryState);
  const { categoryInfo, courses } = categoryReducer;
  const [courseList, setCourseList] = useState<any[]>([]);

  useEffect(() => {
    loadCategory(params.slug || "");
  }, [params.slug]);

  useEffect(() => {
    const coursePublic = courses.filter(
      (course) => course.status === TTCSconfig.STATUS_PUBLIC
    );
    setCourseList(coursePublic);
  }, [courses]);

  const loadCategory = async (slug: string) => {
    try {
      const result = await dispatch(
        requestLoadCategoryBySlug({
          slug,
        })
      );
      unwrapResult(result);
    } catch (error) {
      notification.error({
        message: "server error!!",
        duration: 1.5,
      });
    }
  };

  return (
    <>
      <Header />

      <div className={cx("category")}>
        <div className={cx("wide")}>
          <div className={cx("category__container")}>
            <div className={cx("category__wrapper")}>
              <div className={cx("category__breadcrumb")}>
                <Breadcrumb separator="›">
                  <Breadcrumb.Item>
                    <NavLink
                      to={"/"}
                      className={cx("category__breadcumb--link")}
                    >
                      Trang chủ
                    </NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <NavLink
                      to={`/${categoryInfo?.slug}`}
                      className={cx("category__breadcumb--link", "active")}
                    >
                      {categoryInfo?.name}
                    </NavLink>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>

              <div className={cx("category__topic")}>
                <h1 className={cx("category__heading")}>
                  Luyện tập trắc nghiệm online {categoryInfo?.name}
                </h1>
                <div
                  className={cx("category__summary")}
                  dangerouslySetInnerHTML={{
                    __html: categoryInfo?.des ?? "",
                  }}
                />
              </div>

              <Row style={{ width: "100%" }} gutter={16}>
                {courseList.length ? (
                  courseList?.map((course, index) => (
                    <Col xl={6} lg={6} md={8} sm={12} xs={12} key={index}>
                      <Link to={course?.slug} className={cx("category__link")}>
                        <div className={cx("category__item")}>
                          <div className={cx("category__img")}>
                            <img
                              className={cx("category-image")}
                              src={course.avatar ?? ""}
                              alt={course.courseName}
                            />
                          </div>
                          <div className={cx("category__info")}>
                            <div className={cx("categoty__name")}>
                              {course.courseName}
                            </div>
                            <div className={cx("category__des")}>
                              <p>{course?.shortDes}</p>
                            </div>
                            <div className={cx("category__join")}>
                              <button className={cx("category__btn")}>
                                <span>Làm ngay</span>
                                <BiChevronRight
                                  className={cx("category__icon")}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Col>
                  ))
                ) : (
                  <></>
                )}
              </Row>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CategoryDetail;
