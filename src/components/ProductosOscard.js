import React from 'react';

function ProductosOscard(props){
    return(
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <h3>{props.titulo_productos}</h3>
                            <div className={`text-xs font-weight-bold text- text-uppercase mb-1`}>
                                <h2 style={{color: "red"}}>{props.total_productos} </h2> </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800"></div>
                        </div>
                        <div className="col-auto">
                            <i className={`fa-2x ${props.icon} text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default ProductosOscard;