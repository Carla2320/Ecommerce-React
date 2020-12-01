import React from 'react';
import { useSelector } from 'react-redux';



 export const EcuationSquare = React.memo(( numberR ) => {
 
    let c;
    let a,b,simbolo;
    const  { number }  = numberR;
    const { operacion } = useSelector( state => state.auth);
    const { numero, prop } = number;
    
    const ecuationNumbers = [
        numero * Math.floor((Math.random() * (9 - 2 + 1)) + 2),
        numero * Math.floor((Math.random() * (4 - 2 + 1)) + 2)
    ];
    
    const multipleVerify = [
        ecuationNumbers[0]%numero === 0? ecuationNumbers[0]+2: ecuationNumbers[0],
        ecuationNumbers[1]%numero === 0? ecuationNumbers[1]+1: ecuationNumbers[1],
    ]
    a =!prop?multipleVerify[0]:ecuationNumbers[0] 
    b =!prop?multipleVerify[1]:ecuationNumbers[1] 

    if(operacion==="Suma"){
        c = a + b
        simbolo = "+";
    }
    else if(operacion==="Resta"){
        c = a - b
        simbolo = "-";
    }
    else if(operacion==="Multiplicacion"){
        c = a*b
        simbolo = "*";
    }
    else if(operacion==="Division"){
        c = a/b
        simbolo = "/";
    }
    if(prop){
        localStorage.setItem("resultado",c);
    }
    console.log("me volvi a generar :(");
    return (
        <div className="ecuacion" >
            <p> {a} {simbolo} {b} </p>
        </div>
    )
})





