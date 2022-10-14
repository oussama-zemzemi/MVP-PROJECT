import React from 'react';
import "./navbar.css"

 function Navbar() {
  
  return <header>
		
  <div class="bx bx-menu" id="menu-icon"></div>
  <ul class="navbar">
      <img src="images/logoanime.png" alt=""/>
      <li><a class="a active"href="#home">Home</a></li>
      <li><a class="b" href="#about">Anime Movies</a></li>
      <li><a class="c" href="#Projects">Anime series</a></li>
    
  </ul>
  <div class="contack">
  <button class="sing-In">sing-In</button>
      <button class="sing-Up">sing-up</button>
  </div>
</header>
}

export default Navbar