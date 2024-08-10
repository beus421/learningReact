import React from "react";
// import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <button type="toggle" onClick={()=>{
          let a = document.getElementsByTagName('body')
          if(a[0].style.backgroundColor == 'rgb(33, 33, 33)'){
            console.log(a[0].style.backgroundColor)
            a[0].style.backgroundColor = 'white'
            a[0].style.color = 'black'
          }else{
            console.log(a[0].style.backgroundColor)
            a[0].style.backgroundColor = '#212121'
            a[0].style.color = 'white'
          }
          }}>Dark Mode</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
