import {configureStore} from '@reduxjs/toolkit';
import car from './ducks/cars/cars';
import message from './ducks/layout';
import cart from './ducks/cart'

export default configureStore({
    reducer:{
        car,
        cart,
        message
    }
})


