import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../reducers/StateProvider';
const Visualizar=({id,nombre, imagen, stock, precio, descripcion})=>{
  const [{basket}, dispatch]=useStateValue();
  console.log('basket content', basket);
  console.log('num content', basket.length);
  const history = useHistory();
  const carrito =() =>{
     
    history.push("/checkout");
  }
  const addToBasket=()=>{
    dispatch({
      type:'ADD_TO_BASKET',
        item:{
          id:id,
          nombre:nombre,
          imagen:imagen,
          stock:stock,
          precio:precio,
          descripcion:descripcion

        }
    })

  }
//   const [datos] = useState({
//     nombre:nombre,
//     imagen:imagen,
//     stock:stock,
//     precio:precio,
//     descripcion:descripcion
// })

// const enviardatos =(event) =>{
//   event.preventDefault();
//   console.log(datos)
// }

    return( 
        <>
  <tbody>
  <tr>
    <td>{id}</td>
    <td >{nombre}</td>
    <td><img src={imagen} width='80'/></td>
    <td>{stock}</td>
    <td>{precio}</td>
    <td>{descripcion}</td>
    <td><button class="btn btn-primary" type="submit" onClick={addToBasket}>Add to Cart</button></td>
    </tr>
   
  </tbody>
        </>
    )
}
export default Visualizar;