import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Spinner } from 'reactstrap';
import { PersistGate } from 'redux-persist/integration/react';
import Application from './Application';
import storeCreator from './redux/store/index';
import './styles/generalStyles.css';

const { store, persistor } = storeCreator();
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={<Spinner />} persistor={persistor}>
                <Application />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
