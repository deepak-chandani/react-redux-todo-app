import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import FilterTypes from "../components/Filters/FilterTypes";

import { fetchTodos } from "../actions/todosActions";
import { connect } from "react-redux";

class ToDoList extends Component {
  componentDidMount() {
    console.log("[ToDoList] DidMount", this.props.authedUserId);

    this.props.fetchTodos(this.props.authedUserId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.authedUserId !== prevProps.authedUserId) {
      //const { dispatch, selectedSubreddit } = this.props
      this.props.fetchTodos(this.props.authedUserId);
    }
  }

  render() {
    console.log("[ToDoList] render");

    const todos = this.props.todos.map(item => <ToDoItem {...item} />);

    return (
      <div className="todo-list">
        List of todos will be shown soon <br />
        {todos}
      </div>
    );
  }
}

// specify which piece of information (from state) is this component interested in
const mapStateToProps = state => {
  let todos = state.todos;
  if (state.visibilityFilter == FilterTypes.PENDING) {
    todos = state.todos.filter(item => {
      return !item.completed;
    });
  }
  if (state.visibilityFilter == FilterTypes.COMPLETED) {
    todos = state.todos.filter(item => {
      return item.completed;
    });
  }

  return {
    todos: todos,
    authedUserId: state.authedUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: userId => {
      dispatch(fetchTodos(userId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
