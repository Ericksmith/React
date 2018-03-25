console.log('app.js is running');

const app = {
    title: "indecision App",
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderPage();
    }
}

const removeAll = () => {
    app.options = [];
    renderPage();
}

const renderPage = () =>{ 
    const template = (
        <div>
            <p>{app.title}</p>
            {app.subtitle && <h1>{app.subtitle}</h1>}
            <p>{(app.options.length > 0) ? 'Here are your options' : 'No options' }</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>
                })
            }
            </ol>
            <form action="" onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
renderPage()