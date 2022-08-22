import React, { Component } from "react";
import Marca from "./Marca";

class Marcas extends Component {
  constructor() {
    super();
    this.state = {
      marcas: [],
    };
  }

  componentDidMount() {
    //llamado API
    fetch("/epa-la-api/marcas")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((marcas) => {
        // console.log(marcas);
        this.setState({ marcas });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              TODAS NUESTRAS MARCAS
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              {this.state.marcas.map((marca, index) => {
                return <Marca {...marca} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Marcas;
