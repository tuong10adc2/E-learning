/* eslint-disable jsx-a11y/anchor-is-valid */
import { Breadcrumb, Col, Row } from "antd";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./describe.module.scss";
import describeConten1 from "../../assets/img/describe1.webp";
import describeConten2 from "../../assets/img/describe2.webp";
import describeConten3 from "../../assets/img/describe3.webp";
import memberImg1 from "../../assets/img/hoangquan.jpg";
import memberImg2 from "../../assets/img/nguyenhung.jpg";
import memberImg3 from "../../assets/img/dangson.jpg";
import {
  DescribeIcon1,
  DescribeIcon2,
  DescribeIcon3,
  DescribeIcon4,
  DescribeIcon5,
  DescribeIcon6,
  DescribeIcon7,
} from "../icons/icons";

const cx = classNames.bind(styles);

const Describe = () => {
  return (
    <>
      <div className={cx("describe")}>
        <div className={cx("wide")}>
          <div className={cx("describe__container")}>
            <div className={cx("describe__wrapper")}>
              <div className={cx("describe__breadcrumb")}>
                <Breadcrumb separator="›">
                  <Breadcrumb.Item>
                    <NavLink
                      to={"/"}
                      className={cx("describe__breadcumb--link")}
                    >
                      Trang chủ
                    </NavLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <NavLink
                      to={"/gioi-thieu"}
                      className={cx("describe__breadcumb--link", "active")}
                    >
                      Giới thiệu
                    </NavLink>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>

              <div className={cx("describe__content")}>
                <div className={cx("describe__item")}>
                  <Row>
                    <Col
                      className={cx("describe__col")}
                      sm={24}
                      md={12}
                      lg={16}
                    >
                      <div className={cx("describe__text", "text__left")}>
                        <h1 className={cx("describe__text--title", "primary")}>
                          learn4ever là gì
                        </h1>
                        <p className={cx("describe__text--desc")}>
                          learn4ever là website hỗ trợ học tập bao gồm các bài
                          luyện tập theo chương trình học, luyện thi theo các
                          môn như Toán, Lý, Hóa, Sinh, Sử,.... cùng với đó là bộ
                          tài liệu phong phú và cập nhật thường xuyên phù hợp
                          với tất cả học sinh, giáo viên và phụ huynh.
                        </p>
                      </div>
                    </Col>
                    <Col className={cx("describe__col")} sm={24} md={12} lg={8}>
                      <span className={cx("describe__pack")}>
                        <img
                          src={describeConten1}
                          alt="describeConten1"
                          className={cx("describe__img")}
                        />
                      </span>
                    </Col>
                  </Row>
                </div>
                <div className={cx("describe__item")}>
                  <Row>
                    <Col className={cx("describe__col")} sm={24} md={12} lg={8}>
                      <span className={cx("describe__pack")}>
                        <img
                          src={describeConten2}
                          alt="describeConten2"
                          className={cx("describe__img")}
                        />
                      </span>
                    </Col>
                    <Col
                      className={cx("describe__col")}
                      sm={24}
                      md={12}
                      lg={16}
                    >
                      <div className={cx("describe__text", "text__right")}>
                        <h1 className={cx("describe__text--title", "mission")}>
                          Sứ mệnh
                          <span
                            className={cx("describe__text--line", "mission")}
                          ></span>
                        </h1>
                        <p className={cx("describe__text--subtitle")}>
                          của learn4ever
                        </p>
                        <p className={cx("describe__text--desc")}>
                          learn4ever ra đời với sứ mệnh trở thành một Website hỗ
                          trợ học tập cho học sinh, giáo viên và phụ huynh. Mang
                          đến một môi trường học tập trực tuyến lý tưởng giúp
                          người dùng ôn luyện trực tiếp từ chương trình học được
                          soạn thảo bài bản đến những bộ đề thi được sưu tầm mỗi
                          ngày.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className={cx("describe__item")}>
                  <Row>
                    <Col
                      className={cx("describe__col")}
                      sm={24}
                      md={12}
                      lg={16}
                    >
                      <div className={cx("describe__text", "text__left")}>
                        <h1 className={cx("describe__text--title", "vision")}>
                          Tầm nhìn
                          <span
                            className={cx("describe__text--line", "vision")}
                          ></span>
                        </h1>
                        <p className={cx("describe__text--subtitle")}>
                          của learn4ever
                        </p>
                        <p className={cx("describe__text--desc")}>
                          learn4ever nỗ lực trở thành trang học tập hàng đầu
                          Việt Nam giúp mọi người tiếp cận những phương pháp học
                          tập và luyện thi trực tuyến tốt nhất. Bên cạnh đó
                          không ngừng phát triển theo thời gian mang đến những
                          sản phẩm, tính năng hữu ích nhất đến học sinh, giáo
                          viên và phụ huynh.
                        </p>
                      </div>
                    </Col>
                    <Col className={cx("describe__col")} sm={24} md={12} lg={8}>
                      <span className={cx("describe__pack")}>
                        <img
                          src={describeConten3}
                          alt="describeConten3"
                          className={cx("describe__img")}
                        />
                      </span>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className={cx("describe__member")}>
                <h2 className={cx("describe__member--topic")}>
                  Đội ngũ phát triển
                </h2>
                <Row
                  gutter={{ sm: 24, md: 16, lg: 24 }}
                  style={{ justifyContent: "center" }}
                >
                  <Col className={cx("describe__col")} sm={16} md={8} lg={6}>
                    <div className={cx("describe__member--inner")}>
                      <div className={cx("describe__member--center")}>
                        <div className={cx("describe__member--img")}>
                          <img
                            src={memberImg2}
                            alt="nguyen hung"
                            className={cx("member__img")}
                          />
                        </div>
                        <div className={cx("describe__member--content")}>
                          <h5 className={cx("describe__member--title")}>
                            Nguyễn Hưng
                          </h5>
                          <p className={cx("describe__member--subtitle")}>
                            Làm hết
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>

                  {/* space */}
                  <Col
                    className={cx("describe__col")}
                    sm={0}
                    md={0}
                    lg={3}
                  ></Col>

                  <Col className={cx("describe__col")} sm={16} md={8} lg={6}>
                    <div className={cx("describe__member--inner")}>
                      <div className={cx("describe__member--center")}>
                        <div className={cx("describe__member--img")}>
                          <img
                            src={memberImg1}
                            alt="hoang quan"
                            className={cx("member__img")}
                          />
                        </div>
                        <div className={cx("describe__member--content")}>
                          <h5 className={cx("describe__member--title")}>
                            Hoàng Quân
                          </h5>
                          <p className={cx("describe__member--subtitle")}>
                            Làm tất
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>

                  {/* space */}
                  <Col
                    className={cx("describe__col")}
                    sm={0}
                    md={0}
                    lg={3}
                  ></Col>

                  <Col className={cx("describe__col")} sm={16} md={8} lg={6}>
                    <div className={cx("describe__member--inner")}>
                      <div className={cx("describe__member--center")}>
                        <div className={cx("describe__member--img")}>
                          <img
                            src={memberImg3}
                            alt="dang son"
                            className={cx("member__img")}
                          />
                        </div>
                        <div className={cx("describe__member--content")}>
                          <h5 className={cx("describe__member--title")}>
                            Đặng Sơn
                          </h5>
                          <p className={cx("describe__member--subtitle")}>
                            Làm trò
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className={cx("describe__benefit")}>
                <h2 className={cx("describe__benefit--title")}>
                  Bạn sẽ nhận được gì từ learn4ever?
                </h2>

                <Row gutter={{ md: 16, lg: 16 }}>
                  <Col className={cx("describe__col")} sm={24} md={8} lg={8}>
                    <div className={cx("describe__benefit--item")}>
                      <div className={cx("describe__benefit--icon")}>
                        <DescribeIcon1 className={cx("benefit__icon")} />
                      </div>
                      <div className={cx("describe__benefit--desc")}>
                        Các bộ đề luyện thi THPT Quốc Gia mới nhất
                      </div>
                    </div>
                  </Col>

                  <Col className={cx("describe__col")} sm={24} md={8} lg={8}>
                    <div className={cx("describe__benefit--item")}>
                      <div className={cx("describe__benefit--icon")}>
                        <DescribeIcon2 className={cx("benefit__icon")} />
                      </div>
                      <div className={cx("describe__benefit--desc")}>
                        Chương trình học để luyện tập được phân bổ theo chủ đề
                        của Bộ Giáo Dục
                      </div>
                    </div>
                  </Col>

                  <Col className={cx("describe__col")} sm={24} md={8} lg={8}>
                    <div className={cx("describe__benefit--item")}>
                      <div className={cx("describe__benefit--icon")}>
                        <DescribeIcon3 className={cx("benefit__icon")} />
                      </div>
                      <div className={cx("describe__benefit--desc")}>
                        Luyện tập các môn theo lớp 10, lớp 11, lớp 12 rõ ràng
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row gutter={{ sm: 0, md: 16, lg: 16 }}>
                  <Col className={cx("describe__col")} sm={24} md={6} lg={6}>
                    <div className={cx("describe__benefit--item")}>
                      <div className={cx("describe__benefit--icon")}>
                        <DescribeIcon4 className={cx("benefit__icon")} />
                      </div>
                      <div className={cx("describe__benefit--desc")}>
                        Các đề thi Học Kì 1, Học Kì 2, ...
                      </div>
                    </div>
                  </Col>

                  <Col className={cx("describe__col")} sm={24} md={6} lg={6}>
                    <div className={cx("describe__benefit--item")}>
                      <div className={cx("describe__benefit--icon")}>
                        <DescribeIcon5 className={cx("benefit__icon")} />
                      </div>
                      <div className={cx("describe__benefit--desc")}>
                        Có chấm điểm, thống kê chi tiết, tiến độ hoàn thành
                      </div>
                    </div>
                  </Col>

                  <Col className={cx("describe__col")} sm={24} md={6} lg={6}>
                    <div className={cx("describe__benefit--item")}>
                      <div className={cx("describe__benefit--icon")}>
                        <DescribeIcon6 className={cx("benefit__icon")} />
                      </div>
                      <div className={cx("describe__benefit--desc")}>
                        Bộ tài liệu phong phú, đa dạng
                      </div>
                    </div>
                  </Col>

                  <Col className={cx("describe__col")} sm={24} md={6} lg={6}>
                    <div className={cx("describe__benefit--item")}>
                      <div className={cx("describe__benefit--icon")}>
                        <DescribeIcon7 className={cx("benefit__icon")} />
                      </div>
                      <div className={cx("describe__benefit--desc")}>
                        Các bài viết chia sẻ kiến thức hay về học tập
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Describe;
