import React from 'react';
import Beer from './Beer'

const BeerList = props => {
    const beers = props.data.map(beer => <Beer beerName={beer.name} beerImage={beer.image_thumb_url} key={beer.id.toString()}/>);
    return (
        <ul className='#beer'>
            {beers}
        </ul>
    );
};

export default BeerList;
