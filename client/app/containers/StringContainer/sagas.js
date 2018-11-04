import axios from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import {
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_FAIL,
  LOAD_STRINGS,
} from './constants';

function* getAllStrings() {
  try {
    const stringData = yield axios
      .get('http://localhost:50000/strings')
      .then(data => data.data);
    yield put({ type: LOAD_STRINGS_SUCCESS, payload: stringData });
  } catch (err) {
    yield put({ type: LOAD_STRINGS_FAIL, error: err });
  }
}

function* actionWatcher() {
  yield takeLatest(LOAD_STRINGS, getAllStrings);
}

export default function* stringContainerSaga() {
  yield all([actionWatcher()]);
}
