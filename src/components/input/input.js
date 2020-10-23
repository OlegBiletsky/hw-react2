import React from 'react';
import Display from '../display/display';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({text: e.target.value})
    }



    render() {
        return(
            <div> 
                <input
                    type="text"
                    onChange = {this.handleChange}
                    value = {this.state.text}
                    placeholder="write some text"
                />
                <Display text={this.state.text}/>
            </div>
        )
    }
}
export default Input;