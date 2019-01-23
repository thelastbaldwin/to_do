import {
  ADD_TASK,
  REMOVE_TASK,
  MOVE_TASK
} from "./actions";

const swap = (arr, a, b) => {
  const copy = arr.slice(0);
  const temp = copy[a];
  copy[a] = copy[b];
  copy[b] = temp;

  return copy;
};

export default function rootReducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK: {
      return {
        tasks: [...state.tasks, action.payload]
      };
    }
    case REMOVE_TASK: {
      const removeIndex = action.payload;
      const newTasks = state.tasks.slice(0);

      newTasks.splice(removeIndex, 1);

      return {
        tasks: newTasks
      };
    }
    case MOVE_TASK: {
      const {
        index,
        newIndex
      } = action.payload;
      const dist = Math.abs(index - newIndex);

      if (dist === 1
        && ((newIndex >= 0 && newIndex < state.tasks.length))) {
        return {
          tasks: swap(state.tasks, index, newIndex)
        };
      }
      break;
    }
    default: {
      return state;
    }
  }
  return state;
}
