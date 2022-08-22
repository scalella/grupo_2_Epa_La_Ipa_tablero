import React from 'react';
import UltimaBirra from './UltimaBirra';
import Marcas from './Marcas';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <UltimaBirra />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <Marcas />

        </div>
    )
}

export default ContentRowCenter;