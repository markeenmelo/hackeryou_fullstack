import React from 'react';

const Beer = props => {
    return (
        <div className="#gallery">
            <ul>
                <img alt="" src={props.beerImage}/><figcaption>{props.beerName}</figcaption>
            </ul>
        </div>
    );
};

export default Beer;
