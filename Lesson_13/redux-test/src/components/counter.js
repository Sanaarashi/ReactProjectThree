import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, clr}) => {
    return (
        <>
        <div className="wrapper">
            <span className="counter">{counter}</span>
        </div>
        <button onClick={inc} className="btn btn-inc">INC</button>
        <button onClick={dec} className="btn btn-dec">DEC</button>
        <button onClick={clr} className="btn btn-clr">CLR</button>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);