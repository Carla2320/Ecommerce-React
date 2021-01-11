<<<<<<< HEAD
import React ,{Component} from "react";
import axios from "axios";
import { visualizar } from "../helpers/fetch"
import visualizarProducto from "../components/visualizarProducto"
import VisualizarProducto from "../components/visualizarProducto";
class ProductosLista extends Component{
    state={
        datos:[]

    }
    componentDidMount(){
         axios.get('http://localhost:3030/api/user/visualizarP').then((res)=>{
            const datos=res.data;
            //console.log(datos);
            this.setState({datos})

         }).catch((error)=>{
            console.error(error);
            
   })
        
    
    }
    
=======
// import React ,{Component} from "react";
// import axios from "axios";
// import VisualizarProducto from "../components/visualizarProducto";
// class ProductosLista extends Component{
//     state={
//         datos:[]

//     }
//     componentDidMount(){
//         axios.get('http://localhost:3030/api/user/visualizarP').then((res)=>{
//             const datos=res.data;
//             console.log(datos);
//             this.setState({datos})

//         }).catch((error)=>{
//             console.error(error);
            
//         })
//     }
>>>>>>> fc758a5dacc7485a8daddc37557e17b9033966b8

//     render(){
//         const {datos}=this.state;
//         return(
//             <VisualizarProducto datos={datos}/>
//         );
//     }
    
<<<<<<< HEAD
}
export default ProductosLista ;
=======
// }
// export default ProductosLista;
>>>>>>> fc758a5dacc7485a8daddc37557e17b9033966b8
