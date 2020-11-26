import React from 'react';

import { EcuationSquare } from './EcuationSquare';
import { useSelector } from 'react-redux';
import './relogin.css';
import { useDispatch } from 'react-redux';
import { Link, useHistory} from 'react-router-dom';
import "../css/ecuaciones.css"
import { startLogout } from '../actions/auth'
import Button from '@material-ui/core/Button';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomeScreen } from './HomeScreen';
import Swal from 'sweetalert2';


export const Aplastar = (e) =>{
    if(!e){
        console.log(e)
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

}

export const ReLoginScreen = () => {
    const history = useHistory()
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
    const dispatch = useDispatch();
    const envio = orden.sort(()=>(Math.random()-0.5));
    const Pulsar=(e)=>{
        console.log(e)
        if(!e){
            Swal.fire('Error','Inicia Sesion Para Volver a Intentarlo','error');
            dispatch( startLogout() );
            
        }
        else{
            Swal.fire('Correcto','Sesion Iniciada','success');
            history.push('/home')
        }

    }
    if(state.show){
        return  (
            <>
                <div className="cuadro cuad" id="cuadros">
                    <section id="general">
                    <section>
                    <Button variant="contained" color="secondary" id="btn1" onClick ={()=>{Pulsar(envio[0].prop)}}> <EcuationSquare number={ envio[0] }/> </Button>
                    </section>
                    <section>
                   <Button variant="contained" color="primary" id="btn2" onClick ={()=>{Pulsar(envio[1].prop)}} > <EcuationSquare number={ envio[1] }/> </Button>
                    </section>
                    <section>
                    <Button variant="contained" color="primary" id="btn3" onClick ={()=>{Pulsar(envio[2].prop)}}> <EcuationSquare id="hi" number={ envio[2] }/></Button>
                    </section>   
                    <section>
                    <Button variant="contained" color="primary" id="btn4" onClick ={()=>{Pulsar(envio[3].prop)}}> <EcuationSquare number={ envio[3] }/></Button>    
                    </section>  
                    </section>
                </div>
                <Link className="btn btn-danger btn-lg btn-block" to="/home" id="verifica"> Verifica </Link>
            </>
        )
    }
}
