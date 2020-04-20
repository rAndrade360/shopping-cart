import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NavBar from '../components/Login';
import Message from '../components/Message';

import Main from './Main';
import Add from './Add';
import Cart from './Cart';



export default function Routes(){
    return(
        <>
        <NavBar />
        <Message />
        <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/add' component={Add} />
            <Route path='/cart' component={Cart} />
        </Switch> 
        </>
    
    )
}