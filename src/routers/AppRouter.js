import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { loginSreen } from '../components/loginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={ loginSreen }/>
                    <Route path="/" component={ DashboardRoutes } />
                </Switch>
            </div>
        </Router>
        )
}