import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import Data from './data.json';

const dataLoadMiddleware = store => next => action => {
  // console.log('dispatching', action);
  const result = next(action);
  // console.log('next state', store.getState());
  switch (action.type) {
    case 'LOAD_DATA':
      store.dispatch({ type: 'SET_DATA', payload: Data });
      break;
    default:
  }
  return result;
};

const store = createStore(
  reducer,
  applyMiddleware(dataLoadMiddleware)
);

export default store;