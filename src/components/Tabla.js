import React, { Component } from "react";
import FilaTabla from "./FilaTabla";
class Tabla extends Component {
  constructor() {
    super();
    this.state = {
      productos: [],
    };
  }

  componentDidMount() {
    //llamado API
    fetch("/epa-la-api/productos")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        this.setState({ productos: data.productos });
        console.log(this.state.productos);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Marca</th>
                  <th>Tipo</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Nombre</th>
                  <th>Marca</th>
                  <th>Tipo</th>
                  <th>Precio</th>
                </tr>
              </tfoot>
              <tbody>
                {this.state.productos.map((producto, i) => {
                  return <FilaTabla {...producto} key={i} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Tabla;
