import {put, takeEvery} from 'redux-saga/effects';
import { USER_LIST, SET_USER_DATA } from './constants';

function* userList() {
  const url = 'https://dummyjson.com/users';
  // yield is generator func
  let data = yield fetch(url)
  data = yield data.json();
  yield put({type: SET_USER_DATA, data})
}
function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}

export default SagaData;