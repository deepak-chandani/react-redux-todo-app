import React from 'react';
import FilterTypes from './FilterTypes';
import {connect} from 'react-redux';
import {setFilterTypeActionCreator} from '../../actions/filterActions';

import './StateFilters.css';

class StateFilters extends React.Component {

    onClick(e, type){
        e.preventDefault();
        console.log("Chosed filter type", type);

        this.props.setVisibilityFilter(type);
    }

    render(){
        this.onClick = this.onClick.bind(this);

        return (
          <div className="filters">
              <a href="#" onClick={(e) => { this.onClick(e, FilterTypes.PENDING)}}> Pending </a>
              | <a href="#" onClick={(e) => { this.onClick(e, FilterTypes.COMPLETED)}}> Completed </a>
              | <a href="#" onClick={(e) => { this.onClick(e, FilterTypes.ALL)}}> ALL </a>
          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setVisibilityFilter : (filterType) => {
            dispatch(setFilterTypeActionCreator(filterType))
        }
    }
}

export default connect(null, mapDispatchToProps)(StateFilters);