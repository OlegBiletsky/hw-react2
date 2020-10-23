import React from 'react'

class CompA extends React.Component {
    constructor() {
        super();
        this.state = {
            numberMulti: 1000,
            resultNumber: undefined,
        }

    }

    randomFunc() {
        randomNumber = Math.random();
        return random_number;
    }
    multiply(n) {
        m = n * this.state.numberMulti;
        this.setState({resultNumber: m})
    }
    
    render() {
        return(
            <>

            </>
        )
    }
}
export default CompA;