import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInterval } from '../../redux/intervalSlice';

const PeekabooIntervalForm = () => {
    const interval = useSelector( state => state.interval.value);
    const dispatch = useDispatch();
    let inputInterval = interval;
    return (
        <form className="peekaboo-group" onSubmit={ event => { event.preventDefault(); dispatch(updateInterval(inputInterval)); } }>
            <label htmlFor="peekaboo-interval">Provide Peekaboo Interval (ms)</label>
            <input type="number" min="0" name="peekaboo-interval" id="peekaboo-interval" onChange={ event => inputInterval = event.target.value } />
            <button>Update</button>
        </form>
    );
}

export default PeekabooIntervalForm;