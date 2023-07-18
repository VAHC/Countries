import React from 'react';
import { Link } from 'react-router-dom';
import style from './nav.module.css';
import { StyledLink } from '../../styled components/StyledLink';
import logo from '../../asserts/logo.png'
import './nav.module.css'

function Nav() {
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <Link to='/'>
            <img src={logo} alt="Logo" height='70px'/>
          </Link>
        </div>
      
        <Link to="/home" className={style.logo}>
          <h1 className={style.title}>COUNTRIES OF THE WORLD</h1>
        </Link>
        <nav className={style.nav}>
          <StyledLink to="/home" color="#1b1e3f" hover="#d9e6ee" active="#d9e6ee" inactive="#0c0c0f">
            COUNTRIES
          </StyledLink>
          {/* <StyledLink to="/favorite" color="#1b1e3f" hover="#d9e6ee" active="#d9e6ee" inactive="#2d3b72">
            ACTIVIDADES
          </StyledLink> */}
          <StyledLink to="/form" color="#1b1e3f" hover="#d9e6ee" active="#d9e6ee" inactive="#0c0c0f">
            ACTIVITY
          </StyledLink>
          {/* colocar la barra para que direccione correctamente */}
        </nav>
      </header>
    </>
  );
}

export default Nav;
