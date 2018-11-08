// import { createSelector } from 'reselect';
// import { initialState } from './reducer';

export function currentLocation(currentState) {
  const store = currentState._root.entries;
  const router = store.filter(reducer => reducer[0] === 'router');
  const routerEntries = router[0][1]._root.entries;
  const location = routerEntries.filter(entry => entry[0] === 'location');
  const paths = location[0][1]._root.entries;
  const path = paths.filter(pt => pt[0] === 'pathname');

  return path[0][1];
}

// export const getCreateStringState = state =>
//   state.get('createString', initialState);

// export const formStrValue = () =>
//   createSelector([getCreateStringState], createStringState => {
//     const value = createStringState.get('stringValue');
//     return value;
//   });
