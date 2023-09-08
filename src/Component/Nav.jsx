import React from "react";
import {Navlink} from 'react-router-dom'
import Home from "./Home";
import { useSelector } from "react-redux";

const Nav = () => {
  const state = useSelector((state)=> state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <a
            className="navbar-brand"
            to="#"
            style={{
              fontSize: "2.0rem",

              backgroundClip: "text",
              fontWeight: "400",filter: 'drop-shadow(2px 6px 2px rgb(0 0 0/0.4))'
            }}
          >
            <span style={{ fontSize: "2.5rem" }}>D</span >ream
            <span  style={{ fontSize: "2.5rem" ,
            
            }}>B</span>azar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <a className="nav-link active " aria-current="page"  to="/"  >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/product's"  >
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  to="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a to="/login" className="btn btn.outline-dark">
                <i className="fa fa-sign-in me-1"></i>Login
              </a>
              <a to="/register" className="btn btn.outline-dark">
                <i className="fa fa-user-plus me-1"></i>Register
              </a>
              <a to="cart" className="btn btn.outline-dark">
                <i className="fa fa-shopping-cart me-1"></i>Cart ({state.length})
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    /* {" "}
      <nav className="main-nav">
        <div className="float-container">
          <div className="float-child">
            <h2>
              <span>A</span>kshat
              <span>T</span>echnical
            </h2>
          </div>
          <div
            className="float-child"
            style={{
              width: "41%",
              height: "81px",
              justifyContent: "space-between",
              marginLeft: "127px",fontSize:"17px"
            }}
          >
            <a to="#">Home</a>

            <a to="#">About</a>

            <a to="#">Products</a>

            <a to="#">Contact</a>
          </div>

          <div
            className="float child"
            style={{
              height: "71px",
              width: "293px",
              justifyContent: "flex-end",
              marginBottom: "-19x",
              display: "flex",
            }}
          >
            <a
              to="https://www.facebook.com/AmazonIN"
              target="
                    -Akshat"
              style={{
                color: "3b5998",
                height: "100px",
                width: "25px",
                marginBlock: "35px",fontSize:"17px"
              }}
            >
              <FaFacebookSquare className="Facebook" />
            </a>

            <a
              to="https://www.instagram.com/amazon/?hl=en" target="-Akshat"
              style={{
                color: "#c32aa3",
                height: "100px",
                width: "25px",
                marginBlock: "35px",fontSize:"17px"
              }}
            >
              <FaInstagramSquare className="Instagram" />
            </a>

            <a to="https://www.youtube.com/@AmazonInOfficial"
              target="
                    -Akshat"
              style={{
                color: "#ff0000",
                height: "100px",
                width: "25px",
                marginBlock: "35px",fontSize:"17px",
              }}
            >
              <FaYoutubeSquare className="Youtube" />
            </a>
          </div>
          
         < div className="bottons" style={{display:"flex",justifyContent:"end", fontSize:"21px",width:"83px",marginBlock:"29px"}}>
            <a to=""  className="btn btn-outline-dark"><i className="fa fa-sign-in me-1"></i>Login</a>
          </div>
          
        </div>
        
      </nav>
      {/* <section className="hero-section"> 
        <p>Welcome to</p>
        <h1> Akshat Ecommerce website</h1>
      </section>*/
  );
};

export default Nav;
