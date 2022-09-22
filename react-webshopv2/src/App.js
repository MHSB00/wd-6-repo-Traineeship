import React from 'react';
import Menu from './Comp/Menu/Menu';
import Carousel from './Comp/Carousel/Carousel';
import SignIn from './Comp/SignIn/SignIn';
import Footer from './Comp/Footer/Footer';
import Cart from './Comp/Cart/Cart';
import ProductOverview from './Comp/ProductOverview/ProductOverview';
import BrandOverview from './Comp/BrandOverview/BrandOverview';
import ProductSingle from './Comp/ProductSingle/ProductSingle';
import Content from './Comp/Content/Content'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <ProductOverview />
            </>} >
          </Route>
          <Route path="/All" element={<ProductOverview props="12rem"/>}></Route>
          <Route path="/Brands/:name" element={<BrandOverview />}></Route>
          <Route path="/Brands/:name/:id" element={<ProductSingle/>}></Route>
          <Route path="/Signin" element={<SignIn />} ></Route>
          <Route path="/Cart" element={<Cart />} ></Route>
        </Routes>
        <Content/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


 

 