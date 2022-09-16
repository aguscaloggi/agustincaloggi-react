import React from 'react'
import '../app/styles.css';
import CartWidget from './CartWidget';
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
        <header class="header">
        <a href="#">
            <p class="header__frase">Alojamientos Argentina</p>
        </a>
        <input id="menu-toggle" type="checkbox" />
        <label class="menu-button-container" for="menu-toggle">
            <div class="menu-button"></div>
        </label>
        <ul class="header__menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/">Alojamientos</Link></li>
            <li><Link to="/">Preguntas Frecuentes</Link></li>
            <li><Link to="/">Contacto</Link></li>
        </ul>
        <CartWidget />
        </header>
  )
}

export default NavBar;