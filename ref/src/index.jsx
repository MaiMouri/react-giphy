import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

import App from './components/App';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}

const Hello = (props) => {
  const {name, age} = props;
  const message = `Hello, I'm ${name}, and I'm ${age}`;
  return <h1>{message}</h1>;
}

class Hello extends React.Component {
  render () {
  const { name, age } = props;
  const message = `Hello, I'm ${name}, and I'm ${age}`;
  return <h1>{message}</h1>;
  }
}

// Extensions
// rcc
