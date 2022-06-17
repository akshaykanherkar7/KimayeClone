import { Route, Routes } from "react-router-dom";
import "./App.css";

 

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Productdetail from "./Pages/Productdetail/productdetail";

import AllFruits from "./Pages/Products/AllFruits";
import FreshCuts from "./Pages/Products/FreshCuts";
import FruitCombos from "./Pages/Products/FruitCombos";
import GiftsByKimaye from "./Pages/Products/GiftsByKimaye";


function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route
          path="/collections/all-fruits"
          element={<AllFruits></AllFruits>}
        ></Route>
        <Route
          path="/collections/fresh-cuts"
          element={<FreshCuts></FreshCuts>}
        ></Route>
        <Route
          path="/collections/fruit-combos"
          element={<FruitCombos></FruitCombos>}
        ></Route>
        <Route
          path="/collections/gifts-by-kimaye"
          element={<GiftsByKimaye></GiftsByKimaye>}
        ></Route>
        <Route path="/productdetail" element={<Productdetail/>} />

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
