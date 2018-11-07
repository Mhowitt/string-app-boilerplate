import { fork, all } from 'redux-saga/effects';
import stringContainerSaga from './containers/StringContainer/sagas';
import stringCreatorSaga from './containers/CreateString/sagas';

export default function* rootSaga() {
  yield all([fork(stringCreatorSaga), fork(stringContainerSaga)]);
}
