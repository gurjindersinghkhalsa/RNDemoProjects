// Reducer perform the given action
// Store data saved

import {ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA} from './constants';
const initialSate = []; // this is type of data we want to store can be any type

export const reducer = (state = initialSate, action) => {
  // name can be reducerCart
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state, // old data
        action.data, // adding new data
      ]; // it will add data to store
    case REMOVE_FROM_CART:
      console.log(state, action.data);
      const newData = state.filter(element => {
        return element.name !== action.data;
      });
      console.log(state.length, newData.length);
      return [...newData]; // why ... operator here why not newData work
    
    case SET_USER_DATA:
      return [
        ...state,
        action.data
      ]
    default:
      return state;
  }
};
// reducer can be multiple for that we combine all reducer in rootFile
