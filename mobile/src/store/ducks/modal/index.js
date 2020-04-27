import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = { showModal: false };

export const showModal = createAction('SHOW_MODAL');
export const hideModal = createAction('HIDE_MODAL');

export default createReducer(INITIAL_STATE, {
  [showModal.type]: (state) => ({ ...state, showModal: true }),
  [hideModal.type]: (state) => ({ ...state, showModal: false }),
});
