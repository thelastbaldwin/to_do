import React from "react";
import PropTypes from "prop-types";
import styles from "../../css/components/taskList.css";
import Task from "./task";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.newTaskRef = React.createRef();
  }

  render() {
    const {
      tasks,
      addTaskAction,
      moveTaskAction,
      removeTaskAction
    } = this.props;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>TO DEUX</h1>
        <ul className={styles.tasks}>
          {
            tasks.map(
              (task, index) => (
                (
                  <Task
                    index={index}
                    key={task}
                    title={task}
                    removeTaskAction={removeTaskAction}
                    moveTaskAction={moveTaskAction}
                  />
                )
              )
            )
          }
        </ul>
        <form onSubmit={(event) => {
          event.preventDefault();
          const newTask = this.newTaskRef.current.value;
          addTaskAction(newTask);
          this.newTaskRef.current.value = "";
        }}
        >
          <fieldset>
            <legend>Add Task</legend>
            <input
              ref={this.newTaskRef}
              type="text"
              placeholder="Task Name"
              name="taskName"
              id="taskName"
              maxLength="50"
              autoComplete="off"
            />
            <input type="submit" value="+" />
          </fieldset>
        </form>
      </div>
    );
  }
}

TaskList.defaultProps = {
  addTaskAction: () => {},
  removeTaskAction: () => {},
  moveTaskAction: () => {}
};

TaskList.propTypes = {
  addTaskAction: PropTypes.func,
  removeTaskAction: PropTypes.func,
  moveTaskAction: PropTypes.func,
  tasks: PropTypes.arrayOf(PropTypes.string)
};

export default TaskList;
