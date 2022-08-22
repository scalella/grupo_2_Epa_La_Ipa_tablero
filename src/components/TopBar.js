import React from 'react';
import foto from '../assets/images/alf-space.PNG';

function TopBar(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand navbar-light bg-dark topbar mb-4 static-top shadow">

					{/*<!-- Sidebar Toggle (Topbar) -->*/}
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

			
					<ul className="navbar-nav ml-auto">

						<div className="topbar-divider d-none d-sm-block"></div>

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-light small">Alf SuperAdmin</span>
								<img className="img-profile rounded-circle" src={foto} alt="Alf - Fundador de Epa la Ipa" width="100"/>
							</a>
						</li>

					</ul>

				</nav>
		

        </React.Fragment>
    )
}
export default TopBar;