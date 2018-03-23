'use strict';

console.log('app.js is running');

var app = {
    title: "indecision App"
};
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

var userName = 'Mike';
var userAge = 20;
var userLocation = 'Philly';

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name: ',
        userName
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        userAge
    ),
    getLocation(userLocation)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
