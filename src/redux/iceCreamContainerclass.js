import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyiceCream } from "./iceCream/iceCreamActions";

class IceCreamContainerclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        };
    }

    handleChange = (e) => {
        this.setState({ number: e.target.value });
    }

    render() {
        return (
            <div>
                <h2>Number of Ice Cream - {this.props.numOficeCream}</h2>
                <input type='text' value={this.state.number} onChange={this.handleChange}></input>
                <button onClick={() => this.props.buyiceCream(this.state.number)}>Buy iceCream</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        numOficeCream: state.icecream.numOficeCream
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyiceCream: (number) => dispatch(buyiceCream(number))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainerclass);
