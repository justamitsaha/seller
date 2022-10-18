import React from 'react';


function NavbarComponent() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Logo</a>
                    </li>
                </ul>

                <form className="d-flex col-sm-4">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

            </div>
        </nav>
    );
}

export default NavbarComponent;