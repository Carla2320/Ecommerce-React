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
        {"numero":aleatorios[0]%number===0?number+1: aleatorios[0] ,"prop":false},
        {"numero":aleatorios[1]%number===0?number-1: aleatorios[1] ,"prop":false},
        {"numero":aleatorios[2]%number===0?number+1: aleatorios[2] ,"prop":false},
        {"numero":number,"prop":true},
    ]

    const envio = orden.sort(()=>(Math.random()-0.5));
    console.log(orden);
    const [ enable, setEnable ] = useState(false);
    const prueba = true;
    let input, resultadoF;
    resultadoF = localStorage.getItem("resultado");
    
    const memoRandom = useMemo(()=> envio, [prueba] )
    const handleClick = useCallback(()=>{
        setEnable(!enable);
        console.log('click');
        
    }, [ setEnable ]);
    
    const Res= (event) =>{
        
        if(event){
            console.log('true',event)
            localStorage.setItem("Estado",true);
            //console.log(resultadoF,resultadoInput);
            
        }
        else {
            console.log( 'false',event)
            localStorage.setItem("Estado",false);

           
        }

      
    }
    let id,hola
    const funcion=(event)=>{
        id=event.currentTarget.getAttribute('data-key')
        console.log('id',id);
        handleClick()
        Res(envio[id].prop)
    }

        return  (
            <>
                <section id="completo">
                <section id="generalecu">
                    <h1 id="titulos">
                        Escoga la operación que contenga el multiplo de su numero 
                    </h1>
                <section>
                    <button className="btn btn-warning" disabled={enable} onClick = { funcion }  data-key='0' id = "btn1" > 
                    <EcuationSquare number={ memoRandom[0] }/> 
                    </button>
                    <button className="btn btn-warning" disabled={enable} onClick = { funcion }  data-key="1" id = "btn2"> 
                    <EcuationSquare number={ memoRandom[1] }/> 
                    </button>
                </section>
                <section>
                    <button className="btn btn-warning" disabled={enable} onClick = { funcion }  data-key="2" id = "btn3"> 
                    <EcuationSquare number={ memoRandom[2] }/> 
                    </button>
                    <button className="btn btn-warning" disabled={enable} onClick = { funcion }  data-key="3"id = "btn4"> 
                    <EcuationSquare number={ memoRandom[3] }/> 
                    </button>
                </section> 
                <section>
            <InputNumero/>
            </section>
        </section>  
        </section>
            </>
        )

}
