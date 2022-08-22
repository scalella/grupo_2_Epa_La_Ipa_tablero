import React, { Component } from "react";
import imagenProducto from '../assets/images/acdcbeer.png';

class UltimaBirra extends Component{
    constructor() {
        super();
        this.state = {
          ultima_birra_creada: {},
        };
      }

      componentDidMount() {
        //llamado API
        fetch("/epa-la-api/productos")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((data) => {
            let strong = data.productos.length-1;
            console.log(strong);
            this.setState({ultima_birra_creada: data.productos[strong]})
            console.log(this.state.ultima_birra_creada.nombre);
          })
          .catch((error) => console.log(error));
      }

    render(){
        if (this.state.ultima_birra_creada.nombre == undefined){
            return(<div>
                <h3>Cargando  data... </h3>
            </div>)
        }
        return(
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">{this.state.ultima_birra_creada.nombre}</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 15 +'rem'}} src={`http://localhost:4000/imagenes/productos/${this.state.ultima_birra_creada.foto}`} alt=" Ultimo Producto "/>
                        </div>
                        <p> </p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:4000/products/${this.state.ultima_birra_creada.idProductos}`}>Ver detalle</a>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default UltimaBirra;
