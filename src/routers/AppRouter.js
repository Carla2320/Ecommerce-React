import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { loginSreen } from '../components/loginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import {registerUser} from "../components/registerUser"


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={ loginSreen }/>
                    <Route exact path="/registro" component={registerUser}/>
                    <Route path="/" component={ DashboardRoutes } />
                </Switch>
            </div>
        </Router>
        )
}