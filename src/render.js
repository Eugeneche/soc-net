import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, changeNewPostText} from './redux/state';
import { BrowserRouter } from 'react-router-dom';

//addPost('ggg');

export const renderAll = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} changeNewPostText={changeNewPostText} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
