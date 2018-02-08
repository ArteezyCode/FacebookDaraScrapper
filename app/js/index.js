import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import $ from 'jquery';
import App from './components/App';
import store from './store';
import '../scss/index.scss';

const prom = new Promise((resolve) => {
  chrome.storage.sync.get('work', function (r) {
    resolve(r.work);
  });
});

chrome.runtime.sendMessage({greeting: "hello"});

prom.then((data) => {
  if( data === 'work' || data === undefined) {
    setTimeout(() => {
      $('body').append('<div id="rooot"></div>');
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('rooot')
      );
    }, 1000);
  }
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if(request.license === 'FREE_TRIAL'){
      store.dispatch({ type: 'TRIAL_VERSION'});
    }
    if (request.message === 'reload') {
      location.reload();
    }
  }
);