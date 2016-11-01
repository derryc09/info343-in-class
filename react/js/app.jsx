/**
 * app.jsx
 * main entry point for our React application
 */
"use strict";

class NameForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: ""};


    }
    handleChange(event){
        this.setState({name: event.target.value});
        this.props.onChange(event.target.value);
    }

    render(){
        return (
            <form>
                <input type="text" 
                    className="form-control"
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}/>
            </form>
        );
    }
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: ""};
    }

    handleNameChange(name){
        this.setState({name: name});
    }
    render() {
        return (
            <div>
                <NameForm onChange={name => this.handleNameChange(name)}></NameForm>
                <Hello name={this.state.name}></Hello>
            </div>
        );
    }
}

class Hello extends React.Component {
    constructor(props){
        super(props);

    }

    // return some sort of HTMl marketup
    render() {
        return (
            <h2> Hello {this.props.title} {this.props.name}!</h2>
        );
    }    
}


ReactDOM.render(<App/>, document.getElementById("app"));