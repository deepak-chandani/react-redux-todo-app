import React from 'react';
import {connect} from 'react-redux';
import setAuthedUserActionCreator from '../actions/authActions';

import './UserSwitcher.css';

class UserSwitcher extends React.Component {

    onChange(e,userId) {
        e.preventDefault();
        this.props.setAuthedUser(userId);
    }

    render() {

        this.onChange = this.onChange.bind(this);

        return (
            <div className="user-switcher">
                <a href="" onClick={(e) => this.onChange(e,1)}> User 1 </a>
                | <a href="" onClick={(e) => this.onChange(e,2)}> User 2 </a>
                | <a href="" onClick={(e) => this.onChange(e,3)}> User 3 </a>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthedUser: (userId) => {
            dispatch(setAuthedUserActionCreator(userId));
        }

    }
}

export default connect(null, mapDispatchToProps)(UserSwitcher);
