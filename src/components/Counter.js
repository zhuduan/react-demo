import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import * as Actions from '../actions/CounterActions';

function Counter({name, onIncreament, onDecrement, onClick, status}){ 
    return (
        <tr>
            <td><button onClick={onIncreament} > + </button></td>
            <td onClick={onClick} style={{ textDecoration: status.active ? 'none' : 'line-through' }}>
                {name} is 
            </td>
            <td><b>{status.value}</b></td>
            <td><button onClick={onDecrement} > - </button></td>
        </tr>
    );
}

Counter.PropTypes = {
    onIncreament : PropTypes.func.isRequired,
    onDecrement : PropTypes.func.isRequired,
    onClick : PropTypes.func.isRequired,
    
    status : PropTypes.arrayOf(PropTypes.shape({
        active : PropTypes.bool.isRequired,
        value : PropTypes.number.isRequired
    }).isRequired).isRequired
}

function mapStateToProps(state, ownProps){
    return {
        status : state[ownProps.name]
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        onIncreament: ()=> {
            dispatch(Actions.increment(ownProps.name));
        },
        onDecrement: ()=> { 
            dispatch(Actions.decrement(ownProps.name));
        },
        onClick: ()=> {
            dispatch(Actions.toggleActive(ownProps.name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);