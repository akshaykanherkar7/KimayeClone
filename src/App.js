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
import Checkout1 from "./Pages/Paymentpages/Checkout1";
import { Paymentpage } from "./Pages/Paymentpages/Paymentpage";
import Sucess from "./Pages/Paymentpages/Sucess";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route
          path="/collections/allfruits"
          element={<AllFruits></AllFruits>}
        ></Route>
        <Route
          path="/collections/freshcuts"
          element={<FreshCuts></FreshCuts>}
        ></Route>
        <Route
          path="/collections/fruitcombos"
          element={<FruitCombos></FruitCombos>}
        ></Route>
        <Route
          path="/collections/giftsbykimaye"
          element={<GiftsByKimaye></GiftsByKimaye>}
        ></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
