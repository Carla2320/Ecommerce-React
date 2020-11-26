import React from 'react';

import { EcuationSquare } from './EcuationSquare';
import { useSelector } from 'react-redux';
import './relogin.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomeScreen } from '../components/homeScreen';


export const Aplastar = (e) =>{
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/home" component={ HomeScreen }/>

                    
                    <Redirect to="/home"/>
                </Switch>
            </div>
        </>
        )

}

export const ReLoginScreen = () => {
    const state = {
        show: true
    }

    const { number } = useSelector( state => state.auth);
    
    const orden = [
                    {"numero":Math.floor((Math.random()*20)+9),"prop":false},
                    {"numero":Math.floor((Math.random()*20)+9),"prop":false},
                    {"numero":Math.floor((Math.random()*20)+9),"prop":false},
                    {"numero":number,"prop":true},
                ]

    console.log('orden',orden);
    const envio = orden.sort(()=>(Math.random()-0.5));
    if(state.show){
        return ( 

            <React.Fragment>

                <div className="cuadro cuad">
                    <Button variant="contained" color="primary" onClick ={()=>{Aplastar(envio[0].prop)}}> <EcuationSquare number={ envio[0] }/> </Button>
                    <Button variant="contained" color="primary" onClick ={()=>{Aplastar(envio[1].prop)}}> <EcuationSquare number={ envio[1] }/> </Button>
                    <Button variant="contained" color="primary" onClick ={()=>{Aplastar(envio[2].prop)}}> <EcuationSquare number={ envio[2] }/> </Button>
                    <Button variant="contained" color="primary" onClick ={()=>{Aplastar(envio[3].prop)}}> <EcuationSquare number={ envio[3] }/> </Button>
                </div>
                <Link className="btn btn-danger btn-lg btn-block" to="/home"> Verifica </Link>
            </React.Fragment>
            )
    }
    else{
        return(
            <h1> NO HAY NADA </h1>
        )
    }
    
}

