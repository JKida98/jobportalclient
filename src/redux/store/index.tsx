import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cardReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const storeCreator = () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk));
    let persistor = persistStore(store);
    return { store, persistor };
};

export default storeCreator;
