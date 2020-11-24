import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomeScreen } from '../components/HomeScreen';
import { Navbar } from '../components/Navbar';
import { ReLoginScreen } from '../components/ReLoginScreen';
import { TentScreen } from '../components/TentScreen';

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
                    
                    <Redirect to="/home"/>
                </Switch>
            </div>
        </>
        )
}