import axios from 'axios';
import { put, takeLatest, all, select } from 'redux-saga/effects';

import { push } from 'connected-react-router/immutable';
import { currentLocation } from './selectors';

function* actionWatcher() {
  yield takeLatest('CREATE_STRING', createString);
}

function* createString(actionData) {
  /*
    NOTE: this is a very hacky way of seeing where we are in our
    currentState for router
    */
  const currentState = yield select();
  const path = currentLocation(currentState);

  try {
    const stringData = yield axios.post('http://localhost:5000/strings', {
      string: actionData.payload,
    });
    yield put({ type: 'CREATE_STRING_SUCCESS', payload: stringData });
    /*
    NOTE: this is a very hacky way in order to see if we're
    on the homepage (and need to redirect) or if we had the
    new string modal open and have to update the store
    */
    if (path === '/') {
      yield put(push('/strings'));
    } else {
      yield put({ type: 'UPDATE_STRINGS', payload: actionData.payload });
    }
  } catch (err) {
    yield put({ type: 'CREATE_STRING_FAIL', error: err });
  }
}

export default function* stringCreatorSaga() {
  yield all([actionWatcher()]);
}
