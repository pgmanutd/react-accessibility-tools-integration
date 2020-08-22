import React from 'react';
import ReactDOM from 'react-dom';

import App from './features/App';

import './index.css';

import { unregister as unregisterServiceWorker } from './serviceWorker';

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

if (process.env.NODE_ENV !== 'production') {
  const handleError = (error: Error) => {
    // eslint-disable-next-line no-console
    console.error(error);
  };

  import('react-axe')
    .then((axe) => {
      axe
        .default(React, ReactDOM, 1000)
        .then(() => {
          renderApp();
        })
        .catch(handleError);
    })
    .catch(handleError);
} else {
  renderApp();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregisterServiceWorker();
