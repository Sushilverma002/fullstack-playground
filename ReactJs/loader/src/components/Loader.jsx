import React from "react";
import styles from "./Loader.module.css";

const Loader = ({ topColor, rightColor, bottomColor, leftColor }) => {
  return (
    <div
      className={styles.loader}
      style={{
        borderTopColor: topColor,
        borderRightColor: rightColor,
        borderBottomColor: bottomColor,
        borderLeftColor: leftColor,
      }}
    />
  );
};

export default Loader;
