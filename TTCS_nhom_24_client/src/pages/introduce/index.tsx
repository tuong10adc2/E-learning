import classNames from "classnames/bind";
import styles from "./introduce.module.scss";

import Header from "../../components/header";
import Describe from "../../components/describe";
import Footer from "../../components/footer";

const cx = classNames.bind(styles);

const IntroducePages = () => {
  return (
    <>
      <div className={cx("introduce")}>
        <Header />
        <Describe />
        <Footer />
      </div>
    </>
  );
};

export default IntroducePages;
