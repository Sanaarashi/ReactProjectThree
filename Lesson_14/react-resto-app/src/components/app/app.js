import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import withRestoService from '../hoc';

import Background from './food-bg.jpg';

const App = ({RestoService}) => {

    
    const getItems = () => {
        RestoService.getMenuItems()
            .then(items => console.log(items));
    }
    getItems();

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </div>
    )
}

export default withRestoService()(App);