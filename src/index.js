import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';


const renderAll = (state) => {

    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter basename="https://eugeneche.github.io/soc-net/">
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }


renderAll(store.getState()); //first rendering
//and now we need state and we are getting it by
//calling getState()

store.subscribe(() => {
  let state = store.getState();
  renderAll(state);
});
//subscribe(renderAll); //

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

