import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomeScreen } from '../components/homeScreen';
import { Navbar } from '../components/Navbar';
import { ReLoginScreen } from '../components/ReLoginScreen';
import { TentScreen } from '../components/tentScreen';
import RegisterProduct from '../components/registerProduct';

export const DashboardRoutes = () => {
    console.log('aqui estamos');
    return (
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/home" component={ HomeScreen }/>
                    <Route exact path="/relog" component={ ReLoginScreen }/>
                    <Route exact path="/tent" component={ TentScreen }/>
                    <Route exact path="/product" component={ RegisterProduct }/>
                    
                    <Redirect to="/home"/>
                </Switch>
            </div>
        </>
        )
}