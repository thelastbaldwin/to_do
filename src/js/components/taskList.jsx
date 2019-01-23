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
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>TO DEUX</h1>
        <ul className={styles.tasks}>
          {
            this.props.tasks.map(
              (task, index) => (
                (
                  <Task
                    index={index}
                    key={task}
                    title={task}
                    removeTask={this.props.removeTask}
                    moveTask={this.props.moveTask}
                  />
                )
              )
            )
          }
        </ul>
        <form onSubmit={(event) => {
          event.preventDefault();
          // get value of new task through ref
          const newTask = this.newTaskRef.current.value;
          console.log(newTask);
          // fire addTask action with the new task title
          this.props.addTask(newTask);
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
            />
            <input type="submit" value="+" />
          </fieldset>
        </form>
      </div>
    );
  }
}

TaskList.defaultProps = {
  tasks: ["get a job"],
  addTask: () => {},
  removeTask: () => {},
  moveTask: () => {}
};

TaskList.propTypes = {
  addTask: PropTypes.func,
  removeTask: PropTypes.func,
  moveTask: PropTypes.func,
  tasks: PropTypes.arrayOf(PropTypes.string)
};

export default TaskList;
