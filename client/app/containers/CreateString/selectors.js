export function currentLocation(currentState) {
  const store = currentState._root.entries;
  const router = store.filter(reducer => reducer[0] === 'router');
  const routerEntries = router[0][1]._root.entries;
  const location = routerEntries.filter(entry => entry[0] === 'location');
  const paths = location[0][1]._root.entries;
  const path = paths.filter(pt => pt[0] === 'pathname');

  return path[0][1];
}
