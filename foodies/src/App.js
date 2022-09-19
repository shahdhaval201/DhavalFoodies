
import './App.css';
import MasterFoodies from './Component/MasterFoodies';
import {Routes, Route} from "react-router-dom";
import Home from './Component/Home';
import Aboutus from './Component/aboutus';
import Product from './Component/product';

function App() {
  return (
   <>
    <Routes>

      <Route exact path="/" element={<MasterFoodies/>} > </Route>
      <Route exact path="/home" element={<Home/>} > </Route>
      <Route exact path="/aboutus" element={<Aboutus/>} > </Route>
      <Route exact path="/product" element={<Product/>}></Route>
     
      </Routes>
      </>
  );
}

export default App;
