import React from 'react';
import './ecuation.css';

export const EcuationBad = () => {

    //const { name } = useSelector( state => state.auth);
    const ecuationNumbers = [
        Math.floor(Math.random()*3),
        Math.floor(Math.random()*3),
    ];

    
    return (
        <div className="ecuacion" >
            <p> {ecuationNumbers[0]} + {ecuationNumbers[1]} = {ecuationNumbers[1] + ecuationNumbers[0]}</p>
        </div>
        )
}