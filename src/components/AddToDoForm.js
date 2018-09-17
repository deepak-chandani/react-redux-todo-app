import React , {Component} from 'react';
import {addTodo} from '../actions/todosActions';

import {connect} from 'react-redux';

class AddToDoForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        console.log("form submitted");

        const todo = {
            userId : this.props.authedUserId,
            title: this.state.title
        }
        console.log(this.state.title);
        this.props.addTodo(todo);

        this.props.onSubmit();
    }

    onInputChange(e) {
        this.setState({
            title: e.target.value
        })
    }

    render(){
        return (
            <form className="col-md-11" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Learn React" value={this.state.title} onChange={this.onInputChange} />
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                    <textarea id="description" className="form-control"></textarea>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authedUserId: state.authedUserId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => {
            dispatch(addTodo(todo));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToDoForm);