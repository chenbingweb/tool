
import reducer from "./reducer.js"
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { routerReducer, routerMiddleware, ConnectedRouter } from 'react-router-redux';
import thunk from 'redux-thunk';
const createHistory = require("history").createBrowserHistory
const history = createHistory();

const routerML = routerMiddleware(history);

export {history};

let rootReducer = combineReducers({
    ...reducer,
    reouter: routerReducer
});

export default function configureStore() {
    if(process.env.NODE_ENV === 'production'){
      return createStore(
          rootReducer,
          compose(
              applyMiddleware(thunk, routerML)
          )
      );
    }else{
      return createStore(
          rootReducer,
          compose(
              applyMiddleware(thunk, routerML),
              window.devToolsExtension ? window.devToolsExtension() : f=>f
          )

      );
    }
}




