import React, {Component} from 'react';
import './css/ToDoItem.css';


class ToDoItem extends Component{

    render(){
        return (
            <div className={['todo-item', this.props.completed ? 'completed' : ''].join(' ')} key={this.props.id}>
                <input type="checkbox" className="form-check-input" checked={this.props.completed ? 'checked' : ''} onChange={this.onChange} /> <span>{this.props.title}</span>
            </div>
        );
    }
}

export default ToDoItem;