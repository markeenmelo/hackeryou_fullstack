import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Marcos',
            data: []
        }
    }

    componentDidMount() {
        const url = 'https://lcboapi.com/products';
        const options = {
            headers: new Headers({Authorization: "Token MDpmZjM1MDIyMC1kMWJhLTExZTgtOGU0OS1kYmQ4ODIxYWJlMzI6QU51SHYzZlAyT1BSNnAwUldlN3IyYVNDSlpPd1JsYWc0clAw"}),
        };

        fetch(url, options)
            .then(res => res.json())
            .then(response => console.log(response.result))
            // .then(response => this.setState({data: response.result}))
            // .catch(error => console.log('error : ' + error))
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>{this.state.name}</h1>
                </header>
            </div>
        );
    }
}

export default App;
