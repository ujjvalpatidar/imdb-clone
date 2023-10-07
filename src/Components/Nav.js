import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {



  return (
<>
<div className='nav-main'>
    <NavLink className={Nav} to="/">
        <img className="imdb-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt=""/>
    </NavLink>
    <ul className="nav-heading-div">
    <li>
    <NavLink to="/movies/popular" >
      <h5 className='nav-main-headings'>Popular</h5>
   
    </NavLink>
    </li>
    <li>
    <NavLink to="/movies/top_rated">
      <h5 className='nav-main-headings'>Top Rated</h5>
    </NavLink>
    </li>
    <li>
    <NavLink to="/movies/upcoming">
      <h5 className='nav-main-headings'>Upcoming</h5>
    </NavLink>
    </li>
    </ul>
  
 </div>
</>
  )
}

export default Nav;