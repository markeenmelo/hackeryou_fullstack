import React from 'react';
import GetStores from "./GetStores";

class Description extends React.Component {
    state = {
        beerSelected: null,
    };

    static getDerivedStateFromProps(nextProps) {
        return {
            beerSelected: nextProps.beerselected,
        }
    }

    render() {
        let loadStores;
        if (this.state.beerSelected !== null) {
            loadStores = <GetStores productId={this.state.beerSelected.value}/>
        }

        return (
            <div>
                <h2>{this.state.beerSelected.label}</h2>
                <img alt="" src={this.state.beerSelected.img} />
                <p>{this.state.beerSelected.desc}</p>
                {loadStores}
            </div>
        );
    }
}

export default Description;
