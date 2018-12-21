/**
 Global reducer:
 Handles state management for global operations.
 * */
import { identity, merge, assoc, propOr, prop } from 'ramda';
import {
  setManager,
  setMode,
  setPage,
  setPageRows
} from '../models/ui/actions';
import initialState from './initialState';

const { packages, ...common } = initialState;

const createReducer = (commonState, handlers) => (
  state = commonState,
  action
) => propOr(identity, prop('type', action), handlers)(state, action);

const handlers = {
  [setMode.type]: (state, action) => {
    const {
      payload: { mode },
      payload: { directory }
    } = action;

    return merge(state, {
      mode,
      directory
    });
  },

  [setManager.type]: (state, action) => {
    const {
      payload: { manager }
    } = action;

    return assoc('manager', manager, state);
  },

  [setPage.type]: (state, action) => {
    const {
      payload: { page }
    } = action;

    return assoc('page', page, state);
  },

  [setPageRows.type]: (state, action) => {
    const {
      payload: { rowsPerPage }
    } = action;

    return assoc('rowsPerPage', rowsPerPage, state);
  }
};

const reducer = createReducer(common, handlers);
export default reducer;
