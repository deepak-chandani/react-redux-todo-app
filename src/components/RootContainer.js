import React from 'react';
import NavBar from './NavBar';
import ToDoList from './ToDoList';
import UserSwitcher from './UserSwitcher';
import StateFilters from './Filters/StateFilters';
import Summary from './Summary/Summary';
import AddButton from './UI/AddButton';
import Auxi from './UI/Auxi';
import setAuthedUserActionCreator from '../actions/authActions';
import {connect} from 'react-redux';

class RootContainer extends React.Component {

    componentWillMount(){
        console.log("[RootContainer] WillMount");
        // dispatch setAuthedUser action here
        let userId = this.props.authedUserId ? this.props.authedUserId : 1
        this.props.setAuthedUser(userId);
    }

    render(){

        return (
                <Auxi >
                    <NavBar/>
                    <main role="main" className="container">
                        <div className="starter-template">
                            {/*<h1>TODO Application</h1>*/}
                            {/*<p className="lead">simple demo to practice React & Redux concepts</p>*/}
                            <UserSwitcher />
                        </div>
                        <hr />
                        <AddButton />

                        <hr />
                        <StateFilters />

                        <Summary />
                        <hr />


                        <ToDoList/>
                    </main>
                </Auxi>
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
        setAuthedUser: (userId) => {
            dispatch(setAuthedUserActionCreator(userId));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
