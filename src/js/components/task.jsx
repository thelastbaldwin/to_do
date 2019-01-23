import React from "react";
import PropTypes from "prop-types";
import styles from "../../css/components/task.css";

const Task = (props) => {
  const {
    title,
    index
  } = props;

  return (
    <li className={styles.task}>
      <div className={styles["border-effect"]}>
        <div className={styles.title}>
          <span>{title}</span>
        </div>
        <div className={styles.actions}>
          <span className={styles.prioritize}>+</span>
          <span className={styles.deprioritize}>&ndash;</span>
        </div>
      </div>
    </li>
  );
};

Task.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string
};

export default Task;
