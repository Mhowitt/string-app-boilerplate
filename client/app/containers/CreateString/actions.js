import { CREATE_STRING } from './constants';

export function createString(string) {
  return {
    type: CREATE_STRING,
    payload: string,
  };
}

// export function changeFormValue(str) {
//   return {
//     type: FORM_VALUE_CHANGE,
//     payload: str,
//   };
// }
