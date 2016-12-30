import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../public/styles/index.css';
import '../public/styles/skeleton.css';
import { Provider } from 'react-redux';
import store from './store'

const renderApp = () => {ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);};

renderApp();
