'use strict';

console.log('app.js is running');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'Does this change?'
    ),
    React.createElement(
        'h1',
        null,
        'test'
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name:'
    ),
    React.createElement(
        'p',
        null,
        'Age:'
    ),
    React.createElement(
        'p',
        null,
        'Location:'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
