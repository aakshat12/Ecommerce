import React from "react";
import Product from "./Products";




const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="src/assets/download.jpg" className="card-img" alt="Background" height="550px" />
        <div className="card-img-overlay">
          <h5 className="card-title display-4" style={{lineHeight:"10.2",height:'334px'}}>New Season Arrival</h5>
          <p className="card-text">
          CHECK OUT ALL THE TREND
          </p>
         
        </div>
      </div>
      <Product/>
      
    </div>
  );
};

export default Home;