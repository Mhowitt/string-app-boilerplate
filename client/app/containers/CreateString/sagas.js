import axios from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router/immutable';

function* actionWatcher() {
  yield takeLatest('CREATE_STRING', createString);
}

function* createString(actionData) {
  console.log('we made it to saga');
  try {
    const stringData = yield axios.post('http://localhost:5000/strings', {
      string: actionData.payload,
    });

    yield put({ type: 'CREATE_STRING_SUCCESS', payload: stringData });
    yield put(push('/strings'));
  } catch (err) {
    yield put({ type: 'CREATE_STRING_FAIL', error: err });
  }
}

export default function* stringCreatorSaga() {
  yield all([actionWatcher()]);
}
