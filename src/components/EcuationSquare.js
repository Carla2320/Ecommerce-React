import React from 'react';
import './ecuation.css';
import { useSelector } from 'react-redux';
export const EcuationSquare = ( numberR ) => {

    let a,b,c;
    const  {number}  = numberR;
    const { operacion } = useSelector( state => state.auth);
    const {numero, prop} = number;
    const ecuationNumbers = [
        numero * Math.floor((Math.random() * (9 - 2 + 1)) + 2),
        numero * Math.floor((Math.random() * (4 - 2 + 1)) + 2)
    ];
    
    const multipleVerify = [
        ecuationNumbers[0]%numero === 0? ecuationNumbers[0]+2: ecuationNumbers[0],
        ecuationNumbers[1]%numero === 0? ecuationNumbers[1]+1: ecuationNumbers[1],
    ]
    if(operacion==="Suma"){
        a =!prop?multipleVerify[0]:ecuationNumbers[0] 
        b =!prop?multipleVerify[1]:ecuationNumbers[1] 
        c = a + b

        return (
            <div className="ecuacion" >
               
               <p>  {a} + {b} = {c}</p>
            </div>
            )
    }
    else if(operacion==="Resta"){
        a =!prop?multipleVerify[0]:ecuationNumbers[0] 
        b =!prop?multipleVerify[1]:ecuationNumbers[1] 
        c = a - b
     
            return (
                <div className="ecuacion" >

                    <p>  {a} - {b} = {c}</p>
                </div>
                )

        
    }
    else if(operacion==="Multiplicacion"){
        a =!prop?multipleVerify[0]:ecuationNumbers[0] 
        b =!prop?multipleVerify[1]:ecuationNumbers[1] 
        c = a*b

        return (
            <div className="ecuacion" >
                <p> {a} * {b} = {c}</p>
            </div>
            )
    }
    else if(operacion==="Division"){
        a =!prop?multipleVerify[0]:ecuationNumbers[0] 
        b =!prop?multipleVerify[1]:ecuationNumbers[1] 
        c = a/b
 
        return (
            <div className="ecuacion" >

                <p> {a} / {b} = {c.toFixed(1)}</p>
            </div>
            )
    }

    
}