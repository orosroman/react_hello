import React, {Component} from 'react';
import './Form-ref.css'

class FormRef extends Component {

    submit() {
        console.log('testInput submitted: ', this.testInput.value);
    }
    
    render() {
        return (
            <div className='mini-container'>
                <h4>Ref form:</h4>
                <input className='test-input-ref' type="text" placeholder='test' ref={(input) => this.testInput = input} />
                <button className="submit-btn-ref" onClick={this.submit.bind(this)}>Submit</button>
            </div>
        )
    }
}

export default FormRef;