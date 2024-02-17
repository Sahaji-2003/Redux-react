import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyCake } from "./cake/cakeActions";

class CakeContainerclass extends Component {
    constructor(props) {
        super(props);
        // Initialize the state
        this.state = {
            number: 1,
        };
    }

    handleChange = (e) => {
        // Update state based on input value
        this.setState({ number: e.target.value });
    }

    render() {
        return (
            <div>
                <h2>Number of Cakes - {this.props.numOfCakes}</h2>
                <input
                    type='text'
                    value={this.state.number}
                    onChange={this.handleChange}
                />
                <button onClick={() => this.props.buyCake(this.state.number)}>
                    Buy {this.state.number} Cake
                </button>
            </div>
        );
    }
}

// Map Redux state to component props
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes,
    };
};

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainerclass);
