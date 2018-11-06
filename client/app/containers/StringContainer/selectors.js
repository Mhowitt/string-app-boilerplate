import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectStrings = state => state.get('stringData', initialState);
