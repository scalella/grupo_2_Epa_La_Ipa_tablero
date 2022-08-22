import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import Totales from './Totales';
import Tabla from './Tabla';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Epa! El Dashboard</h1>
					</div>
					<Totales />
					<ContentRowCenter />
					<Tabla />
	
				</div>


        </React.Fragment>
    )

}
export default ContentRowTop;