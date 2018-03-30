class VisiblityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            hidden: true
        }
    }

    handleToggleVisibility(){
        this.setState((prevState)=>{
            return {
                hidden: !prevState.hidden
            }
        })
    }

    render(){
        return (
            <div>
            <h2>Visibily Toggle</h2>
            <button onClick={this.handleToggleVisibility}>{this.state.hidden ? "Show details" : "Hide details" }</button>
            { this.state.hidden ? '' : <p>Hidden Message</p> }
            </div>
        )
    }
}

ReactDOM.render(<VisiblityToggle />, document.getElementById('app'));

// const app = {
//     message: 'This is a hidden message',
//     hidden: true
// }

// const toggleText = () => {
//     if(app.hidden){
//         app.hidden = false;
//         renderVis();
//     } else {
//         app.hidden = true;
//         renderVis();
//     }
// }

// const renderVis = () => {
//     const template = (
//         <div>
//             <h2>Visibily Toggle</h2>
//             <button onClick={toggleText}>{app.hidden ? "Show details" : "Hide details" }</button>
//             {app.hidden ? '' : <p>{app.message}</p>}
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById('app');

// renderVis();