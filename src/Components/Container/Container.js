"use client"
import PropTypes from "prop-types";
import styles from "./container.module.scss";

const Container = ({ children, className }) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
