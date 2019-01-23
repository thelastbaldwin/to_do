import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import TaskList from "./components/taskList";

import {
  addTaskAction,
  moveTaskAction,
  removeTaskAction
} from "./store/actions";

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addTaskAction,
  moveTaskAction,
  removeTaskAction
}, dispatch);

const App = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default App;
