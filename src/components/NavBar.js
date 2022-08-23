import React from 'react'
import '../app/styles.css';

export const NavBar = () => {
  return (
    <body> 
        <header class="header">
        <a href="#">
            <p class="header__frase">Alojamientos Argentina</p>
        </a>
        <input id="menu-toggle" type="checkbox" />
        <label class="menu-button-container" for="menu-toggle">
            <div class="menu-button"></div>
        </label>
        <ul class="header__menu">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Alojamientos</a></li>
            <li><a href="#">Preguntas Frecuentes</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        </header>
    </body>
  )
}

export default NavBar;