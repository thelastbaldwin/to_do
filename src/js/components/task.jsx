import React from "react";
import PropTypes from "prop-types";
import styles from "../../css/components/task.css";

class Task extends React.Component {
  moveTaskUp = () => this.props.moveTaskAction(this.props.index, this.props.index - 1)

  moveTaskDown = () => this.props.moveTaskAction(this.props.index, this.props.index + 1)

  removeTask = () => this.props.removeTaskAction(this.props.index)

  render() {
    return (
      <li className={styles.task}>
        <div className={styles["border-effect"]}>
          <div
            className={styles.title}
            role="button"
            tabIndex="0"
            aria-label="complete task"
            onClick={this.removeTask}
            onKeyPress={this.removeTask}
          >
            <span>{this.props.title}</span>
          </div>
          <div className={styles.actions}>
            <span
              className={styles.prioritize}
              role="button"
              tabIndex="0"
              aria-label="increase priority"
              onClick={this.moveTaskUp}
              onKeyPress={this.moveTaskUp}
            >
            +
            </span>
            <span
              className={styles.deprioritize}
              role="button"
              tabIndex="0"
              aria-label="decrease priority"
              onClick={this.moveTaskDown}
              onKeyPress={this.moveTaskDown}
            >
            &ndash;
            </span>
          </div>
        </div>
      </li>
    );
  }
}

Task.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  moveTaskAction: PropTypes.func,
  removeTaskAction: PropTypes.func
};

export default Task;
