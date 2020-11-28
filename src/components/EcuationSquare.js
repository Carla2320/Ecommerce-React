import React from 'react';
import './ecuation.css';

export const EcuationSquare = ( numberR ) => {

    
    const  {number}  = numberR;
    const {numero, prop} = number;
    const ecuationNumbers = [
        numero * Math.floor((Math.random() * (9 - 2 + 1)) + 2),
        numero * Math.floor((Math.random() * (9 - 2 + 1)) + 2)
    ];
    
    const multipleVerify = [
        ecuationNumbers[0]%numero === 0? ecuationNumbers[0]+1: ecuationNumbers[0],
        ecuationNumbers[1]%numero === 0? ecuationNumbers[1]+1: ecuationNumbers[1],
    ]
    console.log(prop);
    return (
        <div className="ecuacion" >
            <p> {!prop?multipleVerify[0]:ecuationNumbers[0]} + {!prop?multipleVerify[1]:ecuationNumbers[1]} = {!prop?multipleVerify[1]:ecuationNumbers[1] + !prop?multipleVerify[0]:ecuationNumbers[0]}</p>
        </div>
        )
}