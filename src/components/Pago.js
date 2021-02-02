import React ,{useState }from 'react';
import { useSelector } from 'react-redux';
import { addCard } from '../actions/auth';
import { useForm } from '../hooks/useForm';
import { useDispatch } from "react-redux";
import { useStateValue } from '../reducers/StateProvider';
import { detalle_venta } from '../actions/venta';
import { AddCard } from '../components/AddCard';
function Pago(){
    const [{ basket }] = useStateValue();
    console.log(basket[0])
    const num=basket.map((item)=>
        item.id
    );
    console.log(num)
    for (var i =0;i<basket.length; i++){
        console.log(basket[i])
    }

    const { usuario } = useSelector( state => 
        state.auth );

    var tarjetas = [];
    Object.keys(usuario.tarjeta).forEach(function(key) {
        tarjetas.push(usuario.tarjeta[key]);
    });
    
    const { cedula } = useSelector( state => state.auth.usuario);

    const dispatch = useDispatch();
    const [cantidad,setCantidad] = useState(1)
    const suma =()=>{
        setCantidad(cantidad+1)
     } 
    const [formValues, handleInputChange] = useForm({
        numero: "",
        tipo: "",
        date: "",
        cvs: ""
    });

    const { numero, tipo, date, cvs } = formValues;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCard( cedula, numero, tipo, date, cvs ));
        for (var i =0;i<basket.length; i++){
            //dispatch(detalle_venta("",basket[i].cantidad,basket[i].precio,basket[i].id))

        }
    }

      const submit = (e) => {
        suma()
        localStorage.getItem('myData');
        localStorage.setItem('myData', cantidad);

        console.log("kevin",e)
        console.log("tarjeta escogida",e.numero);
        for (var i =0;i<basket.length; i++){
            //dispatch(detalle_venta("",basket[i].cantidad,basket[i].precio,basket[i].id))
        }
        const sumaprecio=basket?.reduce((acum,item)=>{
        return parseFloat(item.precio)+acum;}, 0);
        console.log(sumaprecio)
        

      }

    const tipos = [
        "Visa",
        "Mastercard",
        "American Express",
        "Discover",
        "Diners Club"
    ]

    return (
       
        <div className="modal-dialog modal-dialog-centered">
          
            <div className="modal-content">
            <h2>Escoje una tarjeta </h2>
            <table className="table-active">
  <thead>
    <tr>
      <th scope="col">Numero de tarjeta</th>
      <th scope="col">Tipo de tarjeta</th>
      <th scope="col">Fecha de vencimiento</th>
      <th scope="col">Código de seguridad</th>
      <th scope="col"> </th>
    </tr>
  </thead>
  <tbody>
  {
        tarjetas.map((item) =>
         <tr>
         <td > {item.numero}</td>
          <td>{item.tipo}</td>
          <td >{item.date} </td>
          <td> { item.cvs } </td>
          <td > <button type="button" onClick={submit.bind(this,item)}class="btn btn-success">Pagar</button></td>
          </tr>
         )
                            
        }
  </tbody>
</table>
            <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#addCardModal">
                 + Nueva tarjeta
            </button>
             <AddCard />
            </div>
            
        </div>
        
        
    )
}
export default Pago;