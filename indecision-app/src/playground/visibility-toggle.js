console.log('vis app running');

const app = {
    message: 'This is a hidden message',
    hidden: true
}

const toggleText = () => {
    if(app.hidden){
        app.hidden = false;
        renderVis();
    } else {
        app.hidden = true;
        renderVis();
    }
}

const renderVis = () => {
    const template = (
        <div>
            <h2>Visibily Toggle</h2>
            <button onClick={toggleText}>{app.hidden ? "Show details" : "Hide details" }</button>
            {app.hidden ? '' : <p>{app.message}</p>}
        </div>
    )
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

renderVis();