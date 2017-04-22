import React, {Component} from 'react';
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailToDisplay: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleElementChange = this.handleElementChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('Form is submitted, email value: ', this.state.email);
        this.setState({email: ''});
        this.setState({emailToDisplay: this.state.email});
    }

    handleElementChange(event) {
        if (this.state.email === '') {
            this.setState({emailToDisplay: ''});
        };
        this.setState({email: event.target.value});
        console.log('email was changed', event.target.value);
    }

    render() {
        return (
            <div className="mini-container">
                <h4>Email form:</h4>
                <form onSubmit={this.handleSubmit}>
                    <input className='email-input' type="text" placeholder='E-mail' value={this.state.email} onChange={this.handleElementChange} />
                    <button className="submit-btn">Save</button>
                </form>
                <span className='form-value'>Form value: {this.state.emailToDisplay}</span>
                
            </div>
        )
    }
}

export default Form;