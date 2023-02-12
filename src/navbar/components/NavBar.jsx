import { useState } from 'react'


import { NavLink } from 'react-router-dom';
let activeStyle = {
  textDecoration: "underline",
};
export const NavBar = (props) => {


  const items = [
    { label: 'DYALI  ', icon: '' },
    { label: 'Home', icon: 'pi pi-fw pi-home' },
    { label: "S'inscrire", icon: 'pi pi-fw pi-calendar' },
    { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
    { label: 'Documentation', icon: 'pi pi-fw pi-file' },
    { label: 'Settings', icon: 'pi pi-fw pi-cog' }
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand  bg-info rounded p-2" href="/">DuathlonTafraout</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">

              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              > Home
              </NavLink>

            </li>
            <li className="nav-item">
              <NavLink
                to="/inscrire"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              > S'inscrire
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/connecter"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              > Se connecter
              </NavLink>
            </li>


          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

  )
}


