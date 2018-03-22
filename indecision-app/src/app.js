console.log('app.js is running');

var template = (
    <div>
        <p>Does this change?</p>
        <h1>test</h1>
    </div>
);

var templateTwo = (
    <div>
        <h1>Name:</h1>
        <p>Age:</p>
        <p>Location:</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);