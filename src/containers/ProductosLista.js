import React, { Component } from "react";
import axios from "axios";
import VisualizarProducto from "../components/visualizarProducto";
class ProductosLista extends Component {
  state = {
    datos: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3030/api/user/visualizarP")
      .then((res) => {
        const datos = res.data;
        this.setState({ datos });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { datos } = this.state;
    return <VisualizarProducto datos={datos} />;
  }
}
export default ProductosLista;
