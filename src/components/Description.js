import React from 'react';

class Description extends React.Component {
    state = {
        beerSelected: null,

    };

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            beerSelected: nextProps.beerselected,
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.beerSelected.label}</h1>
                <img alt="No Image available" src={this.state.beerSelected.img} />
                <h2>{this.state.beerSelected.desc}</h2>
            </div>
        );
    }
}

export default Description;
