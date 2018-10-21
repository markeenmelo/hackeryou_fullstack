import React, {Component} from 'react';
import './style/App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import BeerSelector from "./components/BeerSelector";
import Description from "./components/Description";

class App extends Component {
    constructor() {
        super();
        this.state = {
            beers: [],
            title: 'Beau',
            footer: `Beaus's prototype - HackerYou FullStack Masterclass project by Marcos Melo`
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
                    <Header title={this.state.title}/>
                    <BeerSelector data={this.state.beers}/>
                    <Footer footer={this.state.footer} />
                </div>
            </div>
        );
    }
}

export default App;
