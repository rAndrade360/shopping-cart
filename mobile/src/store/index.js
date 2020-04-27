import { configureStore } from '@reduxjs/toolkit';
import carReducer from './ducks/car';
import modalReducer from './ducks/modal';

const reducer = {
  car: carReducer,
  modal: modalReducer,
};

export default configureStore({
  reducer,
});
