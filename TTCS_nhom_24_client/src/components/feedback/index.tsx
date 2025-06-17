import { Carousel, Col, Rate, Row } from "antd";
import classNames from "classnames/bind";
import styles from "./feedback.module.scss";
import studentImg1 from "../../assets/img/maianh.svg";
import studentImg2 from "../../assets/img/phuonglinh.svg";
import studentImg3 from "../../assets/img/dieuhuong.svg";
import parentImg1 from "../../assets/img/chinhvo.svg";
import parentImg2 from "../../assets/img/khanhduy.svg";
import parentImg3 from "../../assets/img/trungkien.svg";

const cx = classNames.bind(styles);

const Feedback = () => {
  return (
    <>
      <div className={cx("feedback")}>
        <div className={cx("wide")}>
          <div className={cx("feedback__container")}>
            <div className={cx("feedback__wrapper")}>
              <Row>
                <Col className={cx("feedback__col")} sm={24} md={10} lg={10}>
                  <div className={cx("feedback__left")}>
                    <div className={cx("feedback__title")}>
                      PHẢN HỒI HỌC SINH
                      <div className={cx("feedback__triangle")}></div>
                    </div>
                    <div className={cx("feedback__swiper--list")}>
                      <Carousel
                        autoplay
                        dots={false}
                        draggable={true}
                        autoplaySpeed={4000}
                        pauseOnHover={false}
                        pauseOnFocus={true}
                      >
                        <div className={cx("feedback__swiper--slide")}>
                          <div className={cx("feedback__swiper--item")}>
                            <div className={cx("feedback__swiper--top")}>
                              <span className={cx("feedback__swiper--svg")}>
                                <img
                                  src={studentImg1}
                                  alt="mai anh"
                                  className={cx("feedback__swiper--img")}
                                />
                              </span>
                              <div className={cx("feedback__swiper--info")}>
                                <div className={cx("feedback__swiper--name")}>
                                  Trần Lê Mai Anh
                                </div>
                                <div className={cx("feedback__swiper--date")}>
                                  15/10/2022
                                </div>
                              </div>
                            </div>
                            <div className={cx("feedback__swiper--content")}>
                              Nội dung bài tập rất hữu ích, mình thường xuyên
                              luyện tập trên web tại nhà ❤️
                            </div>
                            <div className={cx("feedback__swiper--rate")}>
                              <Rate disabled allowHalf defaultValue={4.5} />
                            </div>
                          </div>
                        </div>

                        <div className={cx("feedback__swiper--slide")}>
                          <div className={cx("feedback__swiper--item")}>
                            <div className={cx("feedback__swiper--top")}>
                              <span className={cx("feedback__swiper--svg")}>
                                <img
                                  src={studentImg2}
                                  alt="phuong linh"
                                  className={cx("feedback__swiper--img")}
                                />
                              </span>
                              <div className={cx("feedback__swiper--info")}>
                                <div className={cx("feedback__swiper--name")}>
                                  Nguyễn Phương Linh
                                </div>
                                <div className={cx("feedback__swiper--date")}>
                                  05/09/2022
                                </div>
                              </div>
                            </div>
                            <div className={cx("feedback__swiper--content")}>
                              Trang web có kho đề rất phong phú, đa dạng, giao
                              diện đẹp. Mình thấy luyện tập ở đây giúp việc học
                              dễ dàng, hiệu quả hơn.
                            </div>
                            <div className={cx("feedback__swiper--rate")}>
                              <Rate disabled allowHalf defaultValue={5} />
                            </div>
                          </div>
                        </div>

                        <div className={cx("feedback__swiper--slide")}>
                          <div className={cx("feedback__swiper--item")}>
                            <div className={cx("feedback__swiper--top")}>
                              <span className={cx("feedback__swiper--svg")}>
                                <img
                                  src={studentImg3}
                                  alt="dieu huong"
                                  className={cx("feedback__swiper--img")}
                                />
                              </span>
                              <div className={cx("feedback__swiper--info")}>
                                <div className={cx("feedback__swiper--name")}>
                                  Nguyễn Diệu Hương
                                </div>
                                <div className={cx("feedback__swiper--date")}>
                                  18/09/2022
                                </div>
                              </div>
                            </div>
                            <div className={cx("feedback__swiper--content")}>
                              Mình thấy web hiệu quả để ôn thi đại học vì cover
                              khá nhiều môn , giao diện cũng dễ nhìn nữa!
                            </div>
                            <div className={cx("feedback__swiper--rate")}>
                              <Rate disabled allowHalf defaultValue={5} />
                            </div>
                          </div>
                        </div>
                      </Carousel>
                    </div>
                  </div>
                </Col>

                <Col className={cx("feedback__col")} sm={0} md={4} lg={4}>
                  <div className={cx("feedback__line")}></div>
                </Col>

                <Col className={cx("feedback__col")} sm={24} md={10} lg={10}>
                  <div className={cx("feedback__left")}>
                    <div className={cx("feedback__title")}>
                      PHẢN HỒI PHỤ HUYNH
                      <div className={cx("feedback__triangle")}></div>
                    </div>
                    <div className={cx("feedback__swiper--list")}>
                      <Carousel
                        autoplay
                        dots={false}
                        draggable={true}
                        autoplaySpeed={4000}
                        pauseOnHover={false}
                        pauseOnFocus={true}
                      >
                        <div className={cx("feedback__swiper--slide")}>
                          <div className={cx("feedback__swiper--item")}>
                            <div className={cx("feedback__swiper--top")}>
                              <span className={cx("feedback__swiper--svg")}>
                                <img
                                  src={parentImg1}
                                  alt="chinh vo"
                                  className={cx("feedback__swiper--img")}
                                />
                              </span>
                              <div className={cx("feedback__swiper--info")}>
                                <div className={cx("feedback__swiper--name")}>
                                  Chinh Võ
                                </div>
                                <div className={cx("feedback__swiper--date")}>
                                  24/10/2022
                                </div>
                              </div>
                            </div>
                            <div className={cx("feedback__swiper--content")}>
                              Mình thấy con học tập hào hứng, có kết quả tốt
                              hơn, giá luyện cũng phải chăng và hợp lý, nhiều
                              tài liệu kiến thức sát với quá trình học tập. Rất
                              tốt
                            </div>
                            <div className={cx("feedback__swiper--rate")}>
                              <Rate disabled allowHalf defaultValue={5} />
                            </div>
                          </div>
                        </div>

                        <div className={cx("feedback__swiper--slide")}>
                          <div className={cx("feedback__swiper--item")}>
                            <div className={cx("feedback__swiper--top")}>
                              <span className={cx("feedback__swiper--svg")}>
                                <img
                                  src={parentImg2}
                                  alt="khanh duy"
                                  className={cx("feedback__swiper--img")}
                                />
                              </span>
                              <div className={cx("feedback__swiper--info")}>
                                <div className={cx("feedback__swiper--name")}>
                                  Trần Khánh Duy
                                </div>
                                <div className={cx("feedback__swiper--date")}>
                                  07/09/2022
                                </div>
                              </div>
                            </div>
                            <div className={cx("feedback__swiper--content")}>
                              Từ khi luyện tập trên learn4ever con mình tiến bộ
                              rõ rệt, giá luyện phải chăng không quá cao so với
                              thị trường.
                            </div>
                            <div className={cx("feedback__swiper--rate")}>
                              <Rate disabled allowHalf defaultValue={5} />
                            </div>
                          </div>
                        </div>

                        <div className={cx("feedback__swiper--slide")}>
                          <div className={cx("feedback__swiper--item")}>
                            <div className={cx("feedback__swiper--top")}>
                              <span className={cx("feedback__swiper--svg")}>
                                <img
                                  src={parentImg3}
                                  alt="trung kien"
                                  className={cx("feedback__swiper--img")}
                                />
                              </span>
                              <div className={cx("feedback__swiper--info")}>
                                <div className={cx("feedback__swiper--name")}>
                                  Nguyễn Phúc Trung Kiên
                                </div>
                                <div className={cx("feedback__swiper--date")}>
                                  15/10/2022
                                </div>
                              </div>
                            </div>
                            <div className={cx("feedback__swiper--content")}>
                              Mình nhận thấy web thực sự hữu ích cho học sinh,
                              giao diện thân thiện, bài tập chi tiết và rõ ràng
                              giúp các con dễ dàng luyện tập.
                            </div>
                            <div className={cx("feedback__swiper--rate")}>
                              <Rate disabled allowHalf defaultValue={4.5} />
                            </div>
                          </div>
                        </div>
                      </Carousel>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
