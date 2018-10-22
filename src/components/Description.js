import React from 'react';
import GetStores from "./GetStores";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBeer } from '@fortawesome/free-solid-svg-icons'
library.add(faBeer);

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
                <FontAwesomeIcon icon="beer" size={"7x"} color="rgb(241, 216, 177)"/>
                {loadStores}
            </div>
        );
    }
}

export default Description;
