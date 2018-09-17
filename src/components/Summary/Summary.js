import React from 'react';
import {connect} from 'react-redux';
import FilterTypes from '../Filters/FilterTypes';

class Summary extends React.Component {

    render(){
        return (
            <div>Total {this.props.todosCount} {this.props.visibilityFilter} items</div>
        );
    }
}

const mapStateToProps = (state) => {
    let todos = state.todos;

    if(state.visibilityFilter == FilterTypes.PENDING){
        todos = state.todos.filter((item) => {
            return !item.completed
        });
    }
    if(state.visibilityFilter == FilterTypes.COMPLETED){
        todos = state.todos.filter((item) => {
            return item.completed
        });
    }


    return {
        todosCount: todos.length + 1,
        visibilityFilter: state.visibilityFilter
    }
}

export default connect(mapStateToProps)(Summary);