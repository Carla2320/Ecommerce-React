import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import { LoginScreen } from '../components/LoginScreen';
import { RegisterUser } from '../components/registerUser';

import { DashboardRoutes } from './DashboardRoutes';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
//import { ReLoginScreen } from '../components/ReLoginScreen';
import ProductosLista from '../containers/ProductosLista';
import Checkout from '../components/Checkout';
import Pago from '../components/Pago';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const { cheking, usuario } = useSelector(state => state.auth);
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
                        isAuthenticated={ !!usuario }
                        />
                    <PublicRoute 
                        exact 
                        path="/registro" 
                        component={ RegisterUser}
                        isAuthenticated={ !!usuario }
                        />
                    <PrivateRoute
                        path="/visualizar" 
                        component={ ProductosLista  } 
<<<<<<< HEAD
                        isAuthenticated={ !!name }
                        />
                    <PrivateRoute
                        path="/pago" 
                        component={ Pago  } 
                        isAuthenticated={ !!name }
                    />
                    <PrivateRoute
                        path="/checkout" 
                        component={Checkout} 
                        isAuthenticated={ !!name }
                        />
                    <PrivateRoute 
                        exact 
                        path="/relogin" 
                        component={ ReLoginScreen }
                        isAuthenticated={ !!name }
=======
                        isAuthenticated={ !!usuario }
>>>>>>> fc758a5dacc7485a8daddc37557e17b9033966b8
                        />
                    <PrivateRoute
                        path="/" 
                        component={ DashboardRoutes } 
                        isAuthenticated={ !!usuario }
                        />
                </Switch>
            </div>
        </Router>
        )
}