import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_ITEM } from "../redux/const/todoListConstant";

class InputTodo extends Component {
  render() {
    return (
      <div>
        <div className="card__add">
          <input
            onChange={(e) => {
              this.props.handleChangeForm(e.target.value);
            }}
            value={this.props.inputVal}
            id="newTask"
            type="text"
            placeholder="Enter an activity..."
          />
          <button onClick={this.props.addTask} id="addItem">
            <i className="fa fa-plus" />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inputVal: state.todoReducer.inputTask,
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeForm: (value) => {
    dispatch({
      type: "INPUT",
      payload: value,
    });
  },
  addTask: () => {
    dispatch({
      type: ADD_ITEM,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputTodo);
