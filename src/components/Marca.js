import React from "react";

function Marca(props) {
  return (
    <React.Fragment>
      <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
          <div className="card-body">
          {props.nombre}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Marca;
