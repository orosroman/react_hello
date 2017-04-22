import React, {Component} from 'react';
import Header from './Header/Header';
import Dropdown from './Dropdown/Dropdown';
import Form from './Form/Form';
import FormRef from './Form-ref/Form-ref';
import CounterByReduxClass from './CounterByReduxClass/CounterByReduxClass';
import CounterByReduxFunction from './CounterByReduxFunction/CounterByReduxFunction';
import CounterByRedux from './CounterByRedux/CounterByRedux';

const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '/posts',
    label: 'Posts'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <Header items={menu} />
        <Dropdown />
        <Form />
        <FormRef />
        <CounterByReduxClass />
        <CounterByReduxFunction />
        <CounterByRedux />
      </div>
    );
  }
}

export default App;
