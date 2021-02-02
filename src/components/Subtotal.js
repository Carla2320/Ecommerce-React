import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../reducers/StateProvider';
import { useHistory } from 'react-router-dom';
function Subtotal({precio}){
    
    const [{basket}, dispatch]= useStateValue();
    const history = useHistory();
    const visualizarP =(event) =>{
        history.push("/pago");
    }

    const sumaprecio=basket?.reduce((acum,item)=>{
        return parseFloat(item.precio)+acum;
    }, 0);
    console.log(sumaprecio)
    

    return(<div className="subTotal">
        

        {/* precio*/}

        <CurrencyFormat
        renderText={(value)=>(
            <p>
                Subtotal  ({basket.length}  items): <strong>{`${value}`}</strong>
            </p>
        )}
        decimalScale={2}
        value={sumaprecio}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        
        />


        <button type="button"  className="btn btn-light" type="submit" onClick={visualizarP}>Proceder al pago</button>
    </div>
    )
}
export default Subtotal;