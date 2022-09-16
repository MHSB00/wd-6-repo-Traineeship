import React from 'react';
import Menu from './Comp/Menu/Menu';
import Carousel from './Comp/Carousel/Carousel';
import ProductHighlight from './Comp/ProductHighlight/ProductHighlight';
import PHreact from './Comp/ProductHighlight/PHreact';
import SignIn from './Comp/SignIn/SignIn';
import Footer from './Comp/Footer/Footer';
import ProductSingle from './Comp/ProductSingle/ProductSingle';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={
            <>
              <ProductSingle />
              {/* <ProductHighlight>
                <img src="https://watchbox-sfcc.imgix.net/plp/Featured+Collections/Anything+but+Ordinary/AnythingbutOrdinary.jpg?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5&w=800&h=480&fit=crop&crop=entropy" alt="placeholder1" />
                <img src="https://watchbox-sfcc.imgix.net/plp/Featured+Collections/Travel/Travel+Feature+Collection.jpg?auto=format,compress&cs=srgb&usm=5&usmrad=5&vib=5&w=800&h=480&fit=crop&crop=entropy" alt="placeholder2" />
                <img src="https://via.placeholder.com/1600x300" alt="placeholder3" />
              </ProductHighlight> */}
              
            </>} >
          </Route>
          <Route path="/signin" element={<SignIn />} ></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

