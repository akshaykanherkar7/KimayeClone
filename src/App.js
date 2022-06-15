import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
