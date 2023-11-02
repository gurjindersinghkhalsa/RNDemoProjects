// Action define the actions in app

import {ADD_TO_CART, REMOVE_FROM_CART, USER_LIST} from './constants';

export function addToCartAction(item) {
  return {
    type: ADD_TO_CART,
    data: item, // data can be payload
  };
}

export function removeFromCartAction(item) {
  return {
    type: REMOVE_FROM_CART,
    data: item,
  }
}

export function getUserList() {
  return {
    type: USER_LIST,
  };
}