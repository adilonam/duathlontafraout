import { useState , useEffect} from 'react'


import { NavLink } from 'react-router-dom';



export const NavBar = (props) => {





  return (
    <>
   
   
 
<header className="u-clearfix u-header u-header" id="sec-f96a"><div className="u-clearfix u-sheet u-valign-middle u-sheet-1">

<NavLink
  to={props.urls[0]}
  className={({ isActive }) =>
    "u-image u-logo u-image-1"
  }
>
  <img src="/new_logo.png" className="u-logo-image u-logo-image-1" style={{ width: 152, height: 50 }} />
</NavLink>




<nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
  <div className="menu-collapse" style={{ fontSize: "1rem", letterSpacing: "0px" }}>
    <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">
      <svg className="u-svg-link" viewBox="0 0 24 24"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#menu-hamburger"></use></svg>
      <svg className="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g><rect y="1" width="16" height="2"></rect><rect y="7" width="16" height="2"></rect><rect y="13" width="16" height="2"></rect>
      </g></svg>
    </a>
  </div>
  <div className="u-nav-container">
    <ul className="u-nav u-unstyled u-nav-1"><li className="u-nav-item">
      <NavLink
        to={props.urls[0]}
        className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
       
        style={{ padding: "10px 20px" }}>
          Home
      </NavLink>

    </li>
{!props.user &&(
<>
    <li className="u-nav-item">
    <NavLink
        to={props.urls[1]}
        className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
       
        style={{ padding: "10px 20px" }}>
          S'inscrire
      </NavLink>
  
      </li>
      <li className="u-nav-item">    <NavLink
        to={props.urls[2]}
        className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
       
        style={{ padding: "10px 20px" }}>
          Se connecter
      </NavLink>
      </li></>
)
      }

      <li className="u-nav-item">
      <NavLink
        to={props.urls[4]}
        className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
       
        style={{ padding: "10px 20px" }}>
          Sponsor
      </NavLink>

    </li>

    <li className="u-nav-item">
      <NavLink
        to={props.urls[5]}
        className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
       
        style={{ padding: "10px 20px" }}>
          Media
      </NavLink>

    </li>


    <li className="u-nav-item">
      <NavLink
        to={props.urls[6]}
        className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
       
        style={{ padding: "10px 20px" }}>
          Contact
      </NavLink>

    </li>



      
      </ul>
  </div>
  <div className="u-nav-container-collapse">
    <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
      <div className="u-inner-container-layout u-sidenav-overflow">
        <div className="u-menu-close"></div>
        <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li className="u-nav-item">
          
        
          <NavLink
        to={props.urls[0]}
        className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
       
        style={{ padding: "10px 20px" }}>
          Home
      </NavLink>
        </li>
        
        {!props.user &&<>
        <li className="u-nav-item">    <NavLink
        to={props.urls[1]}
        className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
       
        style={{ padding: "10px 20px" }}>
          S'inscrire
      </NavLink>
          </li>
          
          <li className="u-nav-item"><NavLink
        to={props.urls[2]}
        className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
       
        style={{ padding: "10px 20px" }}>
          Se connecter
      </NavLink>
          </li>
          </>
          }

<li className="u-nav-item"><NavLink
        to={props.urls[4]}
        className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
       
        style={{ padding: "10px 20px" }}>
         Sponsor
      </NavLink>
          </li>

          <li className="u-nav-item"><NavLink
        to={props.urls[5]}
        className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
       
        style={{ padding: "10px 20px" }}>
          Media
      </NavLink>
          </li>

          <li className="u-nav-item"><NavLink
        to={props.urls[6]}
        className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
       
        style={{ padding: "10px 20px" }}>
          Contact
      </NavLink>
          </li>

          </ul>
      </div>
    </div>
    <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
  </div>
</nav>
</div></header>

</>

  )
}


