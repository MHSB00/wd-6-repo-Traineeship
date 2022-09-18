import React from 'react';
import Menu from './Comp/Menu/Menu';
import Carousel from './Comp/Carousel/Carousel';
import ProductHighlight from './Comp/ProductHighlight/ProductHighlight';
import PHreact from './Comp/ProductHighlight/PHreact';
import SignIn from './Comp/SignIn/SignIn';
import Footer from './Comp/Footer/Footer';
import ProductOverview from './Comp/ProductOverview/ProductOverview';
import BrandOverview from './Comp/BrandOverview/BrandOverview'
import ProductSingle from './Comp/ProductSingle/ProductSingle';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams
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
          <Route path="/Brands/:name" element={<BrandOverview />}></Route>
          <Route path="/Brands/:name/:id" element={<ProductSingle/>}></Route>
          <Route path="/Signin" element={<SignIn />} ></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

