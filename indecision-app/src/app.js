console.log('app.js is running');

const app = {
    title: "indecision App"
}
var template = (
    <div>
        <p>Does this change?</p>
        <h1>test</h1>
    </div>
);

const userName = 'Mike';
const userAge = 20;
const userLocation = 'Philly'

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}
var templateTwo = (
    <div>
        <h1>Name: {userName}</h1>
        <p>Age: {userAge}</p>
        {getLocation(userLocation)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);