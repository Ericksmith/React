import React from 'react';

const Show = (props) => (
    <header>
        <h1>Show page number: {props.match.params.id}</h1>
    </header>
);

export default Show;