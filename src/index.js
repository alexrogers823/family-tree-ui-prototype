import React from 'react';
import { createRoot } from "react-dom/client";

import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
