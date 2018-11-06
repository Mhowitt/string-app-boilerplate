import axios from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';

function* getAllStrings() {
  try {
    const stringData = yield axios
      .get('http://localhost:5000/strings')
      .then(data => data.data);
    yield put({ type: 'LOAD_STRINGS_SUCCESS', payload: stringData });
  } catch (err) {
    yield put({ type: 'LOAD_STRINGS_FAIL', error: err });
  }
}

function* actionWatcher() {
  yield takeLatest('LOAD_STRINGS', getAllStrings);
}

export default function* stringContainerSaga() {
  yield all([actionWatcher()]);
}
