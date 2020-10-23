import React from 'react';
import ComponentB from './componentB';

class ComponentA extends React.Component {
    constructor() {
        super();
        this.state = {
            multiplyNumber: 1000,
            generatedRandomNumber: 0,
            resultNumber: 0,
        }
        this.generateRandomNumber = this.generateRandomNumber.bind(this);
        this.multiplyAndSetState = this.multiplyAndSetState.bind(this);
    }

    generateRandomNumber() {/*функція яка генерує число */
        let generatedRandomNumber = Math.random().toFixed(6);
        console.log(generatedRandomNumber, 'its generatedRandomNumber in generateRandomNumber()');
        return generatedRandomNumber;
    }
    multiplyAndSetState() {/*функція яка множить число на 1000 */
        let n = this.generateRandomNumber();
        let m = n * this.state.multiplyNumber;
        
        console.log(n, 'it is n');
        console.log(m, 'it is m');
        console.log(this.state.multiplyNumber, 'this.state.multiplyNumber');
        console.log(this.state.resultNumber,'this.state.resultNumber BEFORE');
        
        
        this.setState({resultNumber: m, generatedRandomNumber: n})/*передаю у стейт обидва числа */

        console.log(this.state.resultNumber,'this.state.resultNumber AFTER');/*пробую вивести у консоль числа із стейту -?? */
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