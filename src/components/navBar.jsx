import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() { 
        return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark border  m-2 rounded">

  {/* <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <h1 style={{color:"white",marginRight:"1200px",fontFamily: "Papyrus"}}> Sreeja Pillai <span><i class="fa fa-sun-o" aria-hidden="true"></i> </span></h1>
  
  <span></span>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink className="nav-item nav-link active" to="/homePage">Home <span className="sr-only">(current)</span></NavLink>
      <NavLink className="nav-item nav-link" to="/portfolio">Portfolio</NavLink>
      <NavLink className="nav-item nav-link" to="/certification">Certification</NavLink>
      <NavLink className="nav-item nav-link" to="/hobbies">Hobbies</NavLink>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Sreeja-coder" className="nav-item nav-link"><i class="fa fa-github" aria-hidden="true"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sreeja-pillai/" className="nav-item nav-link"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
    </div>
  </div>
</nav>

         );
    }
}
 
export default NavBar;