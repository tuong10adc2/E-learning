import { Col, Row } from "antd";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import { NotfoundIcon } from "../../components/icons/icons";
import styles from "./notfound.module.scss";

const cx = classNames.bind(styles);

const NotFoundPages = () => {
  return (
    <>
      <div className={cx("notfound")}>
        <div className={cx("wide")}>
          <div className={cx("notfound__container")}>
            <Row className={cx("notfound__row")}>
              <Col
                className={cx("notfound__col--left")}
                xs={24}
                sm={24}
                md={12}
                lg={12}
              >
                <NotfoundIcon className={cx("notfound__icon")} />
                <div className={cx("notfound__name")}>
                  Page
                  <b> Not Found</b>
                </div>
              </Col>

              <Col
                className={cx("notfound__col--right")}
                xs={24}
                sm={24}
                md={12}
                lg={12}
              >
                <div className={cx("notfound__alert")}>Oops!</div>
                <div className={cx("notfound__code")}>Error code: 404</div>
                <div className={cx("notfound__message")}>
                  We can’t find the page you’re looking for!
                </div>
                <NavLink to={"/"} className={cx("notfound__link")}>
                  <button className={cx("notfound__btn")}>GO BACK HOME</button>
                </NavLink>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPages;
