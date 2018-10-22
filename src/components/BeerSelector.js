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
    };

    render() {
        const {selectedOption} = this.state;
        const beers = (beers) => {
            return beers
                .reduce((acc, beer, index) => {
                    acc[index] = {
                        value: beer.id,
                        label: beer.name,
                        desc: beer.serving_suggestion,
                        img: beer.image_thumb_url
                    };
                    return acc
                }, [])
        };

        let loadDesc;
        if (selectedOption !== null) {
            loadDesc = <Description beerselected={this.state.selectedOption}/>
        }

        return (
            <div className="App">
                <Select
                    placeholder={this.state.title}
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={beers(this.props.data)}
                />
                {loadDesc}
            </div>

        );
    }
}

export default BeerSelector;
