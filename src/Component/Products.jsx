import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import PRC from "./Product";

const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [ selectProduct, setSelectProduct] = useState()
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );

  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x)=>x.category === cat);
    setFilter(updatedList);
   
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="Buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Mens Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Womens Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((Product,index) => {
          return ( 
            
              <div className="col-md-3" key={index}>
                <div className="card h-100 text-center p-4" key={Product.id}>
                  <img
                    src={Product.image}
                    className="card-img-top"
                    alt={Product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {Product.title.substring(0, 12)}
                    ...</h5>
                    <p className="card-text lead fw-bold">${Product.price}</p>
                    <NavLink to={`/products/${Product.id}`} className="btn btn-outline-dark">
                    <span onClick={()=>setSelectProduct(Product)}>Buy Now </span>  
                    </NavLink>
                  </div>
                </div>
              </div> 
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5"> 
             {selectProduct ?<PRC selectProduct={selectProduct}/>:<></> }
         
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Product;


{/*<div className="col-md-3" >
                 <div className="card h-100 text-center p-4" key={selectProduct.id}>
                  <img
                    src={selectProduct.image}
                    className="card-img-top"
                    alt={selectProduct.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {selectProduct.title.substring(0, 12)}
                    ...</h5>
                    <p className="card-text lead fw-bold">${selectProduct.price}</p> 
                   
                    </div>
                    </div>  
                  </div>*/}