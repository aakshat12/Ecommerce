
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {Login}  from "./Login";
import Product from "./Component/Product";
import Home from "./Component/Home"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="Home" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:productName" element={<Product/>} />
          {/* <Route path="/cart" element={<Cart />} /> */}
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
