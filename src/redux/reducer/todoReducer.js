import { nanoid } from "nanoid";
import { taskModel } from "../../model/task.model";
import {
  ADD_ITEM,
  INPUT,
  MARK_AS_DONE,
  MARK_AS_PENDING,
  REMOVE_ITEM,
} from "../const/todoListConstant";

const initialState = {
  taskArr: [],
  inputTask: "",
};

export default (state = initialState, action) => {
  let clonedState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case INPUT:
      let inputVal = action.payload;
      return { ...state, inputTask: inputVal };
    case ADD_ITEM:
      if (state.inputTask.trim() != "") {
        let newTask = new taskModel(nanoid(10), state.inputTask, "pending");
        clonedState.taskArr.push(newTask);
        clonedState.inputTask = "";
      }
      return clonedState;
    case MARK_AS_DONE:
      let doneItemIndex = clonedState.taskArr.findIndex(
        (x) => x.id == action.payload
      );
      clonedState.taskArr[doneItemIndex].status = "done";
      return clonedState;
    case MARK_AS_PENDING:
      let pendingItemIndex = clonedState.taskArr.findIndex(
        (x) => x.id == action.payload
      );
      clonedState.taskArr[pendingItemIndex].status = "pending";
      return clonedState;
    case REMOVE_ITEM:
      let removeItemIndex = clonedState.taskArr.findIndex(
        (x) => x.id == action.payload
      );
      clonedState.taskArr.splice(removeItemIndex, 1);
      return clonedState;
    default:
      return state;
  }
};
