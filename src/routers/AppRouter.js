import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import { LoginScreen } from '../components/loginScreen';
import { RegisterUser } from '../components/registerUser';

import { DashboardRoutes } from './DashboardRoutes';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { ReLoginScreen } from '../components/ReLoginScreen';
import VisualizarProducto from '../components/visualizarProducto';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { cheking, name } = useSelector(state => state.auth);
    useEffect(() => {
        dispatch(startChecking());
    },[dispatch])

    if (cheking){
        return <h5>Wait...</h5>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen }
                        isAuthenticated={ !!name }
                        />
                    <PublicRoute 
                        exact 
                        path="/registro" 
                        component={ RegisterUser}
                        isAuthenticated={ !!name }
                        />
                    <PrivateRoute
                        path="/visualizar" 
                        component={ VisualizarProducto  } 
                        isAuthenticated={ !!name }
                        />
                    <PrivateRoute 
                        exact 
                        path="/relogin" 
                        component={ ReLoginScreen }
                        isAuthenticated={ !!name }
                        />
                    <PrivateRoute
                        path="/" 
                        component={ DashboardRoutes } 
                        isAuthenticated={ !!name }
                        />
                </Switch>
            </div>
        </Router>
        )
}