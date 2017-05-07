import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import data from './reducer';

const trafficMeister = combineReducers({
  data
});

const store = createStore(trafficMeister,
  compose(applyMiddleware(thunk))
);

export default store;