import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';


const initialValues ={
    "No 1" : { value:0, active:true },
    "No 2" : { value:1, active:true },
    "No 3" : { value:2, active:true },
    "No 4" : { value:3, active:true },
    "No 5" : { value:4, active:true },
    "No 6" : { value:5, active:true }
}

const configureStore =  () => {
  const middleware = composeWithDevTools(applyMiddleware());

  const store = middleware(createStore)(reducer, initialValues);

  return store;
};

const store = configureStore();
export default store;