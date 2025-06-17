/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  MailOutlined,
  PhoneOutlined,
  PushpinOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import classNames from "classnames/bind";
import styles from "./footer.module.scss";
import logoImg from "../../assets/img/logo.png";
import logoYoutube from "../../assets/img/youtube.svg";
import logoFacebook from "../../assets/img/facebook.svg";
import logoPinterest from "../../assets/img/pinterest.svg";
import logoTwitter from "../../assets/img/twitter.svg";
import logoDmca from "../../assets/img/dmca.png";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <>
      <footer className={cx("footer")}>
        <div className={cx("wide")}>
          <div className={cx("footer__container")}>
            <Row style={{ width: "100%" }} gutter={16}>
              <Col className={cx("footer__col")} sm={24} md={24} lg={8}>
                <div className={cx("footer__info")}>
                  <span className={cx("footer__info-item")}>
                    <NavLink to={"/"}>
                      <img
                        src={logoImg}
                        alt="logo"
                        className={cx("footer__logo")}
                      />
                    </NavLink>
                  </span>
                </div>
                <div className={cx("footer__info")}>
                  <span className={cx("footer__info-item")}>
                    Phát triển bởi Nhom24_TTCS Học viện kỹ thuật Mật Mã
                  </span>
                </div>
                <div className={cx("footer__info")}>
                  <span className={cx("footer__item-item")}>
                    <PushpinOutlined className={cx("footer__icon")} />
                    141 Đường Chiến Thắng, Xã Tân Triều, Huyện Thanh Trì, Hà Nội
                  </span>
                </div>
                <div className={cx("footer__info")}>
                  <span className={cx("footer__item-item")}>
                    <MailOutlined className={cx("footer__icon")} />
                    nhom24_ttcs@gmail.com
                  </span>
                </div>
                <div className={cx("footer__info")}>
                  <span className={cx("footer__info-item")}>
                    <PhoneOutlined className={cx("footer__icon")} />
                    0123456789
                  </span>
                </div>
              </Col>
              <Col
                className={cx("footer__col")}
                sm={24}
                md={16}
                lg={8}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Row style={{ width: "100%" }}>
                  <Col className={cx("footer__col")} span={12}>
                    <div className={cx("footer__nav--title")}>Về chúng tôi</div>
                    <div className={cx("footer__nav--item")}>
                      <NavLink
                        to={"/gioi-thieu"}
                        className={cx("footer__nav--link")}
                      >
                        Giới thiệu
                      </NavLink>
                    </div>
                    <div className={cx("footer__nav--item")}>
                      <NavLink
                        to={"/lien-he"}
                        className={cx("footer__nav--link")}
                      >
                        Liên hệ
                      </NavLink>
                    </div>
                  </Col>
                  <Col className={cx("footer__col")} span={12}>
                    <div className={cx("footer__nav--title")}>Chính sách</div>
                    <div className={cx("footer__nav--item")}>
                      <NavLink
                        to={"/dieu-khoan-su-dung"}
                        className={cx("footer__nav--link")}
                        target="_blank"
                      >
                        Điều khoản sử dụng
                      </NavLink>
                    </div>
                    <div className={cx("footer__nav--item")}>
                      <NavLink
                        to={"/chinh-sach-bao-mat"}
                        className={cx("footer__nav--link")}
                        target="_blank"
                      >
                        Chính sách bảo mật
                      </NavLink>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className={cx("footer__col")} sm={24} md={8} lg={8}>
                <div className={cx("footer__social")}>
                  <div className={cx("footer__social--title")}>
                    Kết nối với learn4ever
                  </div>
                  <div className={cx("footer__social--icon")}>
                    <Row className={cx("social__row")}>
                      <Col className={cx("social__col")} sm={2} md={5} lg={3}>
                        <a
                          href="https://www.facebook.com"
                          className={cx("footer__social--link")}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          <span className={cx("footer__social--wrapper")}>
                            <img
                              src={logoFacebook}
                              alt="facebook"
                              className={cx("footer__social--img")}
                            />
                          </span>
                        </a>
                      </Col>
                      <Col className={cx("social__col")} sm={2} md={5} lg={3}>
                        <a
                          href="https://www.pinterest.com"
                          className={cx("footer__social--link")}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          <span className={cx("footer__social--wrapper")}>
                            <img
                              src={logoPinterest}
                              alt="pinterest"
                              className={cx("footer__social--img")}
                            />
                          </span>
                        </a>
                      </Col>
                      <Col className={cx("social__col")} sm={2} md={5} lg={3}>
                        <a
                          href="https://twitter.com"
                          className={cx("footer__social--link")}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          <span className={cx("footer__social--wrapper")}>
                            <img
                              src={logoTwitter}
                              alt="twitter"
                              className={cx("footer__social--img")}
                            />
                          </span>
                        </a>
                      </Col>
                      <Col className={cx("social__col")} sm={2} md={5} lg={3}>
                        <a
                          href="https://www.youtube.com"
                          className={cx("footer__social--link")}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          <span className={cx("footer__social--wrapper")}>
                            <img
                              src={logoYoutube}
                              alt="youtube"
                              className={cx("footer__social--img")}
                            />
                          </span>
                        </a>
                      </Col>
                    </Row>
                  </div>
                  <div className={cx("footer__protect")}>
                    <a href="" className={cx("footer__protect--link")}>
                      <img
                        src={logoDmca}
                        alt="dmca-protect"
                        className={cx("footer__protect--img")}
                      />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
