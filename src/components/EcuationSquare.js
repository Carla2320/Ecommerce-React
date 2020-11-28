import React from 'react';
import './ecuation.css';
import { useSelector } from 'react-redux';
export const EcuationSquare = ( numberR ) => {

    
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

        return (
            <div className="ecuacion" >
                <p> {!prop?multipleVerify[0]:ecuationNumbers[0]} + {!prop?multipleVerify[1]:ecuationNumbers[1]} = {!prop?multipleVerify[1]:ecuationNumbers[1] + !prop?multipleVerify[0]:ecuationNumbers[0]}</p>
            </div>
            )
    }
    else if(operacion==="Resta"){
        if(prop?multipleVerify[0]:ecuationNumbers[0]>=prop?multipleVerify[1]:ecuationNumbers[1]){
            return (
                <div className="ecuacion" >

                    <p>  {!prop?multipleVerify[0]:ecuationNumbers[0]} - {!prop?multipleVerify[1]:ecuationNumbers[1]} = {!prop?multipleVerify[1]:ecuationNumbers[1] - !prop?multipleVerify[0]:ecuationNumbers[0]}</p>
                </div>
                )
        }

        
    }
    else if(operacion==="Multiplicacion"){

        return (
            <div className="ecuacion" >
                <p> {!prop?multipleVerify[0]:ecuationNumbers[0]} * {!prop?multipleVerify[1]:ecuationNumbers[1]} = {!prop?multipleVerify[1]:ecuationNumbers[1] * !prop?multipleVerify[0]:ecuationNumbers[0]}</p>
            </div>
            )
    }
    else if(operacion==="Division"){

        return (
            <div className="ecuacion" >
                <p> {!prop?multipleVerify[0]:ecuationNumbers[0]} / {!prop?multipleVerify[1]:ecuationNumbers[1]} = {!prop?multipleVerify[1]:ecuationNumbers[1] / !prop?multipleVerify[0]:ecuationNumbers[0]}</p>
            </div>
            )
    }

    
}