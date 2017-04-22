import React, {Component} from 'react';
import Store from '../Redux/store'

const initialState = {count: 0};

const incrementAction = {type: 'INCREMENT', amount: 1};
const decrementAction = {type: 'DECREMENT', amount: 1};
const resetAction = {type: 'RESET', amount: 1};

const store = new Store(updateState, initialState);

function updateState(state, action) {
  switch (action.type) {
    case 'INCREMENT': return {count: state.count + action.amount};
    case 'DECREMENT': return {count: state.count - action.amount};
    case 'RESET': return {count: 0};
    default: return state;
  }
}

class CounterByReduxClass extends Component {
  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
    store.subscribe(() => console.log('change'));
  }

  increment() {
    store.update(incrementAction);
  }

  decrement() {
    store.update(decrementAction);
  }

  reset() {
    store.update(resetAction);
  }

  render() {
    return (
      <div className='mini-container'>
        <p>{store.state.count}</p>
        <button className="submit-btn" onClick={this.increment}>+</button>
        <button className="submit-btn" onClick={this.reset}>Reset</button>
        <button className="submit-btn"onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default CounterByReduxClass;
