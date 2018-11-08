import { createSelector } from 'reselect';
import { initialState } from './reducer';

/*
I wanted to use createSelector for a search box and filter the displayed
strings, however I ran out of time
*/

export const selectStrings = state => state.get('stringData', initialState);
