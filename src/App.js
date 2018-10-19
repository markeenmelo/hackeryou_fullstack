import React, {Component} from 'react';
import BeerList from './components/BeerList'
import Description from './components/Description'
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            beers: []
        }
    }

    fetchData() {
        const url = 'https://lcboapi.com/products';
        const options = {
            headers: new Headers({Authorization: "Token MDpmZjM1MDIyMC1kMWJhLTExZTgtOGU0OS1kYmQ4ODIxYWJlMzI6QU51SHYzZlAyT1BSNnAwUldlN3IyYVNDSlpPd1JsYWc0clAw"}),
        };
        const query = '?q=beaus&where=is_seasonal&per_page=50';
        fetch(url + query, options)
            .then(res => res.json())
            .then(data => this.setState({beers: data['result']}))
            .catch(error => console.log('Error fetching data : ' + error))
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div className="App">
                <div className="beers">
                    <BeerList data={this.state.beers}/>
                    <Description description="Good beer"/>
                </div>
            </div>
        );
    }
}

export default App;
