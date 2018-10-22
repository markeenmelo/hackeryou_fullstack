import React from 'react';
import Select from 'react-select';

class GetStores extends React.Component {
    state = {
        beerId: null,
        storesLocation: [],
        selectedOption: null,
        title: 'Select the nearest store'
    };

    fetchData(product) {
        const url = 'https://lcboapi.com/stores';
        const options = {
            headers: new Headers({Authorization: "Token MDpmZjM1MDIyMC1kMWJhLTExZTgtOGU0OS1kYmQ4ODIxYWJlMzI6QU51SHYzZlAyT1BSNnAwUldlN3IyYVNDSlpPd1JsYWc0clAw"}),
        };
        const query = '?lat=43.6451813&lon=-79.6156516&product_id=';
        fetch(url + query + product, options)
            .then(res => res.json())
            .then(data => this.setState({storesLocation: data['result']}))
            .catch(error => console.log('Error fetching data : ' + error))
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        window.open('https://www.google.com/maps/dir/Home/' + selectedOption.value)
    };

    componentDidMount() {
        this.fetchData(this.state.beerId)
    }

    componentDidUpdate(preProps) {
        if (this.props.beerId !== preProps.beerId)
        this.fetchData(this.props.beerId)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.beerId !== nextState.beerId;

    }

    static getDerivedStateFromProps(nextProps) {
        return {
            beerId: nextProps.productId,
        }
    }

    render() {
        const {selectedOption} = this.state;
        const stores = (stores) => {
            return stores
                .reduce((acc, store, index) => {
                    acc[index] = {
                        value: store.address_line_1,
                        label: store.address_line_1,
                    };
                    return acc
                }, [])
        };

        return (
            <div>
                <Select
                    placeholder={this.state.title}
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={stores(this.state.storesLocation)}
                />
            </div>
        );
    }
}

export default GetStores;
