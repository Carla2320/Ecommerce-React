import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { homeScreen } from '../components/homeScreen';
import { Navbar } from '../components/Navbar';
import { tentScreen } from '../components/tentScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/tent" component={ tentScreen }/>
                    
                </Switch>
            </div>
        </>
        )
}