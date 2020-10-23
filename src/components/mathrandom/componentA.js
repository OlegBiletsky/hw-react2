import React from 'react';
import ComponentB from './componentB';

class ComponentA extends React.Component {
    constructor() {
        super();
        this.state = {
            multiplyNumber: 1000,
            resultNumber: 0,
        }
        this.generateRandomNumber = this.generateRandomNumber.bind(this);
        this.multiplyAndSetState = this.multiplyAndSetState.bind(this);
    }

    generateRandomNumber() {
        let generatedRandomNumber = Math.random().toFixed(6);
        console.log(generatedRandomNumber);
        return generatedRandomNumber;
    }
    multiplyAndSetState(n = 2) {
        let m = 2 * this.state.multiplyNumber;
        console.log(n, 'it is n');
        console.log(m, 'it is m');
        console.log(this.state.multiplyNumber, 'this.state.multiplyNumber');
        console.log(this.state.resultNumber,'this.state.resultNumber');
        
        
        
        this.setState({resultNumber: m})
    }
    
    render() {
        
        return(
            <>
                {/* <ComponentB f1={this.generateRandomNumber}/> */}
                <ComponentB f1={this.multiplyAndSetState}/>
            </>
        )
    }
}
export default ComponentA;