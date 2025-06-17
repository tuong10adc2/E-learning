import { RocketFilled } from "@ant-design/icons";
import { Col, Row } from "antd";
import classNames from "classnames/bind";
import styles from "./banner1.module.scss";
import bannerImg from "../../assets/img/banner.webp";
import { CheckIcon } from "../icons/icons";

const cx = classNames.bind(styles);

const Banner1 = () => {
  return (
    <>
      <div className={cx("banner")}>
        <div className={cx("wide")}>
          <div className={cx("banner__container")}>
            <div className={cx("banner__wrapper")}></div>
            <Row style={{ width: "100%" }}>
              <Col
                className={cx("banner__col")}
                xs={16}
                sm={16}
                md={16}
                lg={12}
              >
                <div className={cx("banner__left")}>
                  <div className={cx("banner__title")}>
                    <span>HỌC MỌI LÚC</span>
                  </div>
                  <div className={cx("banner__subtitle")}>
                    <b>GIÁO DỤC </b>
                    <span>MỌI NƠI</span>
                  </div>
                  <div className={cx("banner__list")}>
                    <div className={cx("banner__item")}>
                      <CheckIcon className={cx("banner__icon")} />
                      <span>
                        Bài tập phong phú, có giải chi tiết, cô đọng kiến thức.
                      </span>
                    </div>
                    <div className={cx("banner__item")}>
                      <CheckIcon className={cx("banner__icon")} />
                      <span>
                        Đánh giá năng lực, thống kê chi tiết quá trình học.
                      </span>
                    </div>
                    <div className={cx("banner__item")}>
                      <CheckIcon className={cx("banner__icon")} />
                      <span>Học Online mọi lúc mọi nơi.</span>
                    </div>
                  </div>
                  <div className={cx("banner__register")}>
                    <button className={cx("banner__button")}>
                      Học thử miễn phí
                      <RocketFilled className={cx("banner__button--icon")} />
                    </button>
                  </div>
                </div>
              </Col>

              <Col className={cx("banner__col")} xs={8} sm={8} md={8} lg={12}>
                <div className={cx("banner__right")}>
                  <span className={cx("banner__right--img")}>
                    <img
                      src={bannerImg}
                      alt="bannerimage"
                      className={cx("banner__img")}
                    />
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner1;
