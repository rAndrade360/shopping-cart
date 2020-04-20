import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Messages from '../components/Messages';
import {useSelector} from 'react-redux';

import Main from './Main';
import Add from './Add';
import Cart from './Cart';
import Login from './Login';



const PrivateRoute = ({component: Component, ...rest}) => {
    const {isAuthenticate} = useSelector(state=>state.auth)
   
    return (
        
    <Route
        {...rest}
        render={props => isAuthenticate?
        <Component {...props} />:
        <Redirect to={{pathname: '/', state:{from: props.location}}} />} />
    )
        }


export default function Routes(){
    return(
        <>
        <NavBar />
        <Messages />
        <Switch>
            <Route path='/' exact component={Main} />
            <PrivateRoute path='/add' component={Add} />
            <Route path='/cart' component={Cart} />
            <Route path='/login' component={Login} />
        </Switch> 
        </>
    
    )
}