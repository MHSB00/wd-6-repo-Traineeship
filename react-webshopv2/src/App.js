import React from 'react';
import Menu from './Comp/Menu/Menu';
import Carousel from './Comp/Carousel/Carousel';
import Footer from './Comp/Footer/Footer'
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
        <Menu/>
        <Routes>
          <Route path="/" element={<Carousel />} ></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

