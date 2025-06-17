import classNames from "classnames/bind";
import styles from "./banner2.module.scss";
import bannerUpImg from "../../assets/img/bannerUp.webp";
import bannerDownImg from "../../assets/img/bannerDown.webp";
import { CheckIcon } from "../icons/icons";

const cx = classNames.bind(styles);

const Banner2 = () => {
  return (
    <>
      <div className={cx("banner")}>
        {/* <div className={cx("wide")}> */}
        <div className={cx("banner__container")}>
          <div className={cx("banner__up")}>
            <div className={cx("banner__wrapper", "banner__wrapper--up")}>
              <div className={cx("banner__content")}>
                <div className={cx("banner__title")}>
                  <h2>Luyện Tập</h2>
                  <p>Trắc Nghiệm learn4ever</p>
                </div>
                <div className={cx("banner__desc")}>
                  <div className={cx("banner__item")}>
                    <CheckIcon className={cx("banner__icon")} />
                    <span>
                      Đề xuất nội dung học mỗi khi bạn làm bài thi không đạt.
                    </span>
                  </div>
                  <div className={cx("banner__item")}>
                    <CheckIcon className={cx("banner__icon")} />
                    <span>
                      Có chấm điểm, thống kê chi tiết, tiến độ hoàn thành.
                    </span>
                  </div>
                  <div className={cx("banner__item")}>
                    <CheckIcon className={cx("banner__icon")} />
                    <span>Các bộ đề luyện thi THPT Quốc Gia mới nhất.</span>
                  </div>
                  <div className={cx("banner__item")}>
                    <CheckIcon className={cx("banner__icon")} />
                    <span>Luyện tập theo chương trình mới nhất.</span>
                  </div>
                </div>
                {/* <div className={cx("banner__button")}>
                  <button className={cx("banner__button--up")}>
                    Làm bài thi THPT Tiếng Anh &nbsp; &gt;
                  </button>
                </div> */}
              </div>
              <div className={cx("banner__img")}>
                <img
                  src={bannerUpImg}
                  alt="join"
                  className={cx("img__banner")}
                />
              </div>
            </div>
          </div>

          <div className={cx("banner__down")}>
            <div className={cx("banner__wrapper", "banner__wrapper--down")}>
              <div className={cx("banner__content")}>
                <div className={cx("banner__title")}>
                  <h2>Tài liệu</h2>
                  <p>Thư viện tài liệu</p>
                </div>
                <div className={cx("banner__desc")}>
                  Với kho đề thi và bộ câu hỏi đa dạng được tổng hợp từ các giáo
                  trình, đề thi, tài liệu,... giúp các em bao trùm kiến thức, ôn
                  luyện dễ dàng các dạng bài học các cấp.
                </div>
                {/* <div className={cx("banner__button")}>
                  <button className={cx("banner__button--down")}>
                    Tải Ngay &nbsp; &gt;
                  </button>
                </div> */}
              </div>
              <div className={cx("banner__img")}>
                <img
                  src={bannerDownImg}
                  alt="join"
                  className={cx("img__banner")}
                />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Banner2;
