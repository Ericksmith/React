console.log('app.js is running');

const app = {
    title: "indecision App",
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const template = (
    <div>
        <p>{app.title}</p>
        {app.subtitle && <h1>{app.subtitle}</h1>}
        <p>{(app.options.length > 0) ? 'Here are your options' : 'No options' }</p>
    </div>
);

const user =  {
    name: 'Mike',
    age: 18,
    location: "Philly"
}

const userName = 'Mike';
const userAge = 20;
const userLocation = 'Philly'

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}
const templateTwo = (
    <div>
        <h1>Name: {user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);