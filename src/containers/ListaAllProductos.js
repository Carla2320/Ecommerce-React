import React, { Component } from "react";
import axios from "axios";
import List from "../components/List"
 class ListaAllProductos extends Component{
    state={
        productos:[]
    }
    componentDidMount(){
        axios.get("http://localhost:3030/api/user/visualizarP")
        .then(res=>{
            console.log(res)
            const productos=res.data
            this.setState({ productos});
        }).catch(eror=>{
            console.log(console.log(eror))
        })
    }
    render(){
        const {productos}=this.state
        
        return(
            <>
            <List AllProductos={productos}></List>
            </>
        )
    }
   
}
export default ListaAllProductos