import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from './middleware/thunk';
import rootReducer from './reducers';
import App from './components/app';

import types from './actions/types';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));
const user = localStorage.getItem('user');

if(user){
    const payload = JSON.parse(user);

    store.dispatch({
        type: types.SET_USER_DATA,
        payload
    });
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
