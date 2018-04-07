import React from 'react';

const Action = (props) => (
    <button 
        className="big-button"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
    >
        What Should i Do
    </button>
    );


export default Action;