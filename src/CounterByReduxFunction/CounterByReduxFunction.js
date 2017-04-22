import React, {Component} from 'react';
import {createStore} from '../Redux/redux'

const initialState = {count: 0};

const incrementAction = {type: 'INCREMENT', amount: 1};
const decrementAction = {type: 'DECREMENT', amount: 1};
const resetAction = {type: 'RESET', amount: 1};

const store = createStore(reducer, initialState);

function reducer(state = {count: 0}, action) {
  switch (action.type) {
    case 'INCREMENT': return {count: state.count + action.amount};
    case 'DECREMENT': return {count: state.count - action.amount};
    case 'RESET': return {count: 0};
    default: return state;
  }
}

class CounterByReduxFunction extends Component {
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
    store.dispatch(incrementAction);
  }

  decrement() {
    store.dispatch(decrementAction);
  }

  reset() {
    store.dispatch(resetAction);
  }

  render() {
    const count = store.getState().count;
    return (
      <div className='mini-container'>
        <p>{count}</p>
        <button className="submit-btn" onClick={this.increment}>+</button>
        <button className="submit-btn" onClick={this.reset}>Reset</button>
        <button className="submit-btn"onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default CounterByReduxFunction;
