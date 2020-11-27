import React from 'react';
import './ecuation.css';

export const EcuationSquare = ( numberR ) => {

    
    const  {number}  = numberR;
    console.log("VALOR",number.numero);
    //const { name } = useSelector( state => state.auth);
    const ecuationNumbers = [
        number.numero ** Math.floor((Math.random()+1) *2),
        number.numero ** Math.floor((Math.random()+1) *2),
    ];

    
    return (
        <div className="ecuacion" >
            <p> {ecuationNumbers[0]} + {ecuationNumbers[1]} = {ecuationNumbers[1] + ecuationNumbers[0]}</p>
        </div>
        )
}