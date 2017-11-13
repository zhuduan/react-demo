import React from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter.js'
import {connect} from 'react-redux';

function Summary({text, sum}) {
    return (
        <div>
            <h2>{text} : {sum} </h2>
            <table style={{ margin : 'auto' }} >
                <tbody>
                    <Counter name='No 1' />
                    <Counter name='No 2' />
                    <Counter name='No 3' />
                </tbody>
            </table>
            <p></p>
        </div>
    );
}

Summary.PropTypes = {
    text : PropTypes.string.isRequired,
    sum : PropTypes.number.isRequired
}

function mapStateToProps(state) {
    let sumCounter = 0;
    for (const key in state) {
        if (state[key].active===true) {
            sumCounter += state[key].value;
        }
      }
    return {sum: sumCounter};
  }

export default connect(mapStateToProps)(Summary);