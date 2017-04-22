import React, {Component} from 'react';
import {createStore} from 'redux'

const initialState = {count: 0};

function increment(amount) {
  return {type: 'INCREMENT', amount};
}

function decrement(amount) {
  return {type: 'DECREMENT', amount};
}

function reset() {
  return {type: 'RESET'};
}

const store = createStore(reducer, initialState);

function reducer(state = {count: 0}, action) {
  switch (action.type) {
    case 'INCREMENT': return {count: state.count + action.amount};
    case 'DECREMENT': return {count: state.count - action.amount};
    case 'RESET': return {count: 0};
    default: return state;
  }
}

class CounterByRedux extends Component {
  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  increment() {
    let amount = parseInt(this.refs.amount.value || 1, 10);
    store.dispatch(increment(amount));
  }

  decrement() {
    let amount = parseInt(this.refs.amount.value || 1, 10);
    store.dispatch(decrement(amount));
  }

  reset() {
    store.dispatch(reset());
  }

  render() {
    const count = store.getState().count;
    return (
      <div className='mini-container'>
        <p>{count}</p>
        <button className="submit-btn" onClick={this.increment}>+</button>
        <button className="submit-btn" onClick={this.reset}>Reset</button>
        <button className="submit-btn"onClick={this.decrement}>-</button>
        <br />
        <input type="text" ref="amount" defaultValue="1" />
      </div>
    )
  }
}

export default CounterByRedux;
