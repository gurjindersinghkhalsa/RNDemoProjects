// Reducer perform the given action
// Store data saved

import {ADD_TO_CART} from './constants';
const initialSate = []; // this is type of data we want to store can be any type

export const reducer = (state = initialSate, action) => {
  // name can be reducerCart
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state, // old data
        action.data, // adding new data 
      ]; // it will add data to store
    default:
      return state;
  }
};

// reducer can be multiple for that we combine all reducer in rootFile