import React, { useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import classNames from "classnames/bind";
import styles from "./ArrowToTop.module.scss";

const cx = classNames.bind(styles);

const ArrowToTop = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 600) {
      setVisible(true);
    } else if (scrolled <= 600) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      style={{ display: visible ? "flex" : "none" }}
      className={cx("arrow-to-top")}
      onClick={scrollToTop}
    >
      <FiArrowUp />
    </button>
  );
};

export default ArrowToTop;
