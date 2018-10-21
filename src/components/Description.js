import React from 'react';

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'this is your description'
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("component got new props", nextProps)
    }

    render() {
        return (
            <p>{this.state.message}</p>
        );
    }
}

export default Description;
