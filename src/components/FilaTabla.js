import React from 'react';


function FilaTabla(props){
    return (
                <tr>
                    <td>{props.nombre}</td>
                    <td>{props.marcas.nombre}</td>
                    <td>{props.tipos.sabor}</td>
                    <td>{`$${props.precio}`}</td>
                </tr>
            )
    }
    
        

export default FilaTabla;