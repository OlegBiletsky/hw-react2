import React from 'react';/*comment*/
import Display from '../display/display';

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "", /* спочатку задаємо пусту строку*/
        }
        this.handleChange = this.handleChange.bind(this);/*біндимо функцію на this*/
    }

    handleChange(e) {/*функція яка викликається при зміні інпута */
        this.setState({text: e.target.value})/*значення у стейті присвоює поточне значення у інпуті*/
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
                <Display text={this.state.text}/> {/*рендерим функцію яка відмальовую інпут в режимі онлайн, передаємо їй значення із стейт, яка на цей момент стало рівне поточну значенні із інпута */}
            </div>
        )
    }
}
export default Input;