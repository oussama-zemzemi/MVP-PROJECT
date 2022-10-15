import React, { Fragment, useState } from 'react'
import {HiSearch} from 'react-icons/hi'
import { Routes, Route, NavLink } from "react-router-dom";
import Movies from './Movies'
import Animeseries from './Animeseries'
import Trending from './Trends'
import Pricing from './Pricing'
import '../Styles/NavBarStyle.css'

export const Container = React.createContext()

const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <Container.Provider value={toggle}>
    <Fragment>
      <nav className={toggle ?"" : "navBarColor"}>
        <div className="nav-options">
          <h1 id={toggle ? '': "heading"}>Movie Storm</h1>
          <NavLink to="" style={({isActive})=>{return{color:isActive ? '#fff' : '#EE9B00'}}}>
          <span id={toggle ? 'Movies': "MoviesLight"}>Movies</span>
          </NavLink>
          <NavLink to="/Animeseries" style={({isActive})=>{return{color:isActive ? '#fff' : '#EE9B00'}}}>
          <span id={toggle ? 'Movies': "MoviesLight"}>TV Shows
  </span>
          </NavLink>
          <NavLink to="Trending" style={({isActive})=>{return{color:isActive ? '#fff' : '#EE9B00'}}}>
          <span id={toggle ? 'Movies': "MoviesLight"}>Trendings</span>
          </NavLink>
          <NavLink to="Pricing" style={({isActive})=>{return{color:isActive ? '#fff' : '#EE9B00'}}}>
          <span id={toggle ? 'Movies': "MoviesLight"}>Pricing</span>
          </NavLink>
        </div>
        <div className="input-group">
        <input type="text" placeholder='Search whatever you want'/>
        <HiSearch fontSize={21} color="blue" id="search"/>
        <div id="Color-switcher" onClick={()=> setToggle(!toggle)}>
        <div id={ toggle ? "Color-switcher-mover":"Color-switcher-moved"}></div>
        </div>
        </div>
      </nav>
      <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="Animeseries" element={<Animeseries />} />
      <Route path="Trending" element={<Trending />} />
      <Route path="Pricing" element={<Pricing />} />
      </Routes>

    </Fragment>
    </Container.Provider>
  )
}

export default Navbar