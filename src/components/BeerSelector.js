import React from 'react';
import Select from 'react-select';
import Description from "./Description";

class BeerSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            title: "Select your preferred beer",
        }
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
    };

    render() {
        const {selectedOption} = this.state;
        const beers = (beers) => {
            return beers
                .reduce((acc, beer, index) => {
                    acc[index] = {
                        value: beer.id,
                        label: beer.name
                    };
                    return acc
                }, [])
        };

        return (
            <div>
                <p>{this.state.title}</p>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={beers(this.props.data)}
                />
                <Description beerselected={this.state.selectedOption}/>
            </div>

        );
    }
}

export default BeerSelector;
