import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomeScreen } from '../components/HomeScreen';
import { Navbar } from '../components/Navbar';
import { Profile } from '../components/Profile';
import RegisterProduct from '../components/registerProduct';


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/home" component={ HomeScreen }/>
                    <Route exact path="/profile" component={ Profile }/>
                    <Route exact path="/product" component={ RegisterProduct }/>
                    <Redirect to="/home"/>
                </Switch>
            </div>
        </>
        )
}