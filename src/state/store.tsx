import { createStore, applyMiddleware,  } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import devToolsEnchaner from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from "history";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const history = createBrowserHistory()

const persistConfig = {
    key: 'root',
    storage,
  }
  export type RootState = ReturnType<typeof reducers>;

// const persistedReducer = persistReducer<RootState>(persistConfig, reducers);
export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));
