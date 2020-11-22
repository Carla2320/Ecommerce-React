import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomeScreen } from '../components/HomeScreen';
import { Navbar } from '../components/Navbar';
import { TentScreen } from '../components/TentScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/tent" component={ TentScreen }/>
                    <Route exact path="/home" component={ HomeScreen }/>
                    <Redirect to="/home"/>
                </Switch>
            </div>
        </>
        )
}