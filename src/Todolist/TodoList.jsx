import React, { Component } from "react";
import "../css/main.css";
import { connect } from "react-redux";
import deskImage from "../asset/X2oObC4.png";
import InputTodo from "./InputTodo";
import {
  ADD_ITEM,
  MARK_AS_DONE,
  MARK_AS_PENDING,
  REMOVE_ITEM,
} from "../redux/const/todoListConstant";

class TodoList extends Component {
  completedTask() {
    return this.props.taskArr.map((item, index) => {
      if (item.status == "done") {
        return (
          <li key={index.toString() + index} className="todo-item">
            <div className="todo-text">{item.task}</div>
            <div className="todo-btn">
              <i
                onClick={() => {
                  this.props.removeTask(item.id);
                }}
                className="far fa-trash-alt"
              />
              <i
                onClick={() => {
                  this.props.markAsPending(item.id);
                }}
                className="far fa-check-circle"
              />
            </div>
          </li>
        );
      }
    });
  }
  imcompletedTask() {
    return this.props.taskArr.map((item, index) => {
      if (item.status == "pending") {
        return (
          <li key={index.toString() + "a"} className="todo-item">
            <div className="todo-text">{item.task}</div>
            <div className="todo-btn">
              <i
                onClick={() => {
                  this.props.removeTask(item.id);
                }}
                className="far fa-trash-alt"
              />
              <i
                onClick={() => {
                  this.props.markAsDone(item.id);
                }}
                className="far fa-check-circle"
              />
            </div>
          </li>
        );
      }
    });
  }
  render() {
    return (
      <div>
        <div className="card">
          <div className="card__header">
            <img src={deskImage} />
          </div>
          <div className="card__body">
            <div className="card__content">
              <div className="card__title">
                <h2>My Tasks</h2>
                <p>September 5,2022</p>
              </div>
              <InputTodo></InputTodo>
              <div className="card__todo">
                <div className="loading">
                  <div className="spinner-grow text-danger spinner-grow-sm" />
                  <div className="spinner-grow text-danger" />
                  <div className="spinner-grow text-danger spinner-grow-sm" />
                </div>
                {/* Imcompleted tasks */}
                <ul className="todo" id="todo">
                  {this.imcompletedTask()}
                </ul>
                {/* Completed tasks */}
                <ul className="todo" id="completed">
                  {this.completedTask()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    taskArr: state.todoReducer.taskArr,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (id) => {
      dispatch({
        type: REMOVE_ITEM,
        payload: id,
      });
    },
    markAsDone: (id) => {
      dispatch({
        type: MARK_AS_DONE,
        payload: id,
      });
    },
    markAsPending: (id) => {
      dispatch({
        type: MARK_AS_PENDING,
        payload: id,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
