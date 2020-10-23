import React from 'react';
import Display from './display/display';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        }
    }
    render() {
        return(
            <div>
                <input
                    // type="text"
                    // onChange = {()=>{}}
                    // value = {this.state.name}
                    
                />
                <Display text={this.props.text}/>
            </div>
        )
    }
}
export default Input;