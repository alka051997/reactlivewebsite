import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';
const Nav = () =>{
    return (
        <div className='container-fluid'>
 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className='container'>
       <div className='wrapper mx-auto'>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink exact activeClassName='menu_active' className="nav-link" exact to='./Certificate'>Certificate <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
       <NavLink exact activeClassName='menu_active' className="nav-link" to='./Placement'>Placement</NavLink>
      </li>
      <li className="nav-item">
       <NavLink exact activeClassName='menu_active' className="nav-link" to='./Syllabus'>Syllabus</NavLink>
      </li>
       <li className="nav-item">
       <NavLink exact activeClassName='menu_active' className="nav-link" to='./Projects'>Projects</NavLink>
      </li>
      <li className="nav-item">
       <NavLink exact activeClassName='menu_active' className="nav-link" to='./Teachers'>Teachers</NavLink>
      </li>
      <li className="nav-item">
       <NavLink exact activeClassName='menu_active' className="nav-link" to='./Reviews'>Reviews</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName='menu_active' className="nav-link" to='./ss' >Validity til 15th Dec</NavLink>
      </li>
       <li className="nav-item">
        <NavLink exact  className="nav-link disabled" to='' tabindex="-1" aria-disabled="true"><button className="btn btn-primary bb btn-outline-success my-2 my-sm-0 sign" type="submit">Sign up</button></NavLink>
      </li>
    </ul>
    
  </div>
 </div>
 </div> 
</nav>
</div>

);


}
export default Nav;