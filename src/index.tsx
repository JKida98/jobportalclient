import React from 'react';
import ReactDOM from 'react-dom';
import './styles/generalStyles.css';
import Application from './Application';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Application />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
