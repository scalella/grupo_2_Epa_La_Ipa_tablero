import React, { Component } from "react";
import ProductosOscard from "./ProductosOscard";
import UsuariosOscard from "./UsuariosOscard";
import MarcasOscard from "./MarcasOscard";

class Totales extends Component {
  constructor() {
    super();
    this.state = {
      titulo_productos: "",
      total_productos: 0,
      titulo_usuarios: "",
      total_usuarios: 0,
      titulo_marcas: "",
      total_marcas: 0,
    };
  }

  componentDidMount() {
    //llamado API
    fetch("/epa-la-api/productos")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        this.setState({
          total_productos: data.total_productos,
          titulo_productos: "Total de productos",
        });
      })
      .catch((error) => console.log(error));

    fetch("/epa-la-api/usuarios")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        this.setState({
          total_usuarios: data.total_usuarios,
          titulo_usuarios: "Total de usuarios",
        });
      })
      .catch((error) => console.log(error));

      fetch("/epa-la-api/marcas")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        this.setState({
          total_marcas: data.length,
          titulo_marcas: "Total de marcas",
        });
      })
      .catch((error) => console.log(error));

  }

  render() {
    return (
      <div className="row">
        <ProductosOscard {...this.state} />
        <UsuariosOscard {...this.state} />
        <MarcasOscard {...this.state} />
      </div>
    );
  }
}

export default Totales;
