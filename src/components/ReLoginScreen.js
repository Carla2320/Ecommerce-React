import React, { useCallback, useMemo, useState } from 'react';
import { EcuationSquare } from './EcuationSquare';
import { useSelector } from 'react-redux';
import "../css/ecuaciones.css"
import { InputNumero } from './InputNumero';



export const ReLoginScreen = () => {

    const { number } = useSelector( state => state.auth);
    
    const aleatorios = [
        Math.floor((Math.random() * (9 - 2 + 1)) + 2),
        Math.floor((Math.random() * (9 - 2 + 1)) + 2),
        Math.floor((Math.random() * (9 - 2 + 1)) + 2)
    ]

    const orden = [
        {"numero":aleatorios[0]%number===0?aleatorios[0]+1: aleatorios[0] ,"prop":false},
        {"numero":aleatorios[1]%number===0?aleatorios[1]+1: aleatorios[1] ,"prop":false},
        {"numero":aleatorios[2]%number===0?aleatorios[2]+1: aleatorios[2] ,"prop":false},
        {"numero":number,"prop":true},
    ]

    const envio = orden.sort(()=>(Math.random()-0.5));
    const [ enable, setEnable ] = useState(false);
    const prueba = true;
    const memoRandom = useMemo(()=> envio, [prueba] );

    const handleClick = useCallback(()=>{
        setEnable(!enable);
    }, [ setEnable ]);
    
    const Res= (event) =>{
        
        if(event){
            console.log('true',event)
            localStorage.setItem("Estado",true);
        }
        else {
            console.log( 'false',event)
            localStorage.setItem("Estado",false);
        }

      
    }
    let id;
    const funcion=(event)=>{
        id=event.currentTarget.getAttribute('data-key')
        console.log('id',id);
        handleClick()
        Res(envio[id].prop)
    }

        return  (
            <>
            <section id="completo">
                <h1 id="titulo">
                        Selecciona la Operacion que Corresponda con su Multiplo
                    </h1>
                <section id="botones">
    
                    <section>
                        <button className="btn btn-warning" disabled={enable} onClick = { funcion }  data-key='0' id = "boton1" > 
                        <EcuationSquare number={ memoRandom[0] }/> 
                        </button>
                        <button className="btn btn-warning" disabled={enable} onClick = { funcion }  data-key="1" id = "boton2"> 
                        <EcuationSquare number={ memoRandom[1] }/> 
                        </button>
                    </section>
                    <section>
                        <button className="btn btn-warning" disabled={enable} onClick = { funcion }  data-key="2" id = "boton3"> 
                        <EcuationSquare number={ memoRandom[2] }/> 
                        </button>
                        <button className="btn btn-warning" disabled={enable} onClick = { funcion }  data-key="3"id = "boton4"> 
                        <EcuationSquare number={ memoRandom[3] }/> 
                        </button>
                    </section> 
                </section>  
            </section>

            <InputNumero/>

         </>
        )

}
