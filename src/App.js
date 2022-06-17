import "./App.css";
import Checkout1 from "../src/Pages/Paymentpages/Checkout1"
import { Paymentpage } from "./Pages/Paymentpages/Paymentpage";
import {Routes,Route} from "react-router-dom"
// import Sucess from "./Pages/Paymentpages/Sucess";
function App() {
  return (
    <div>
 {/* <Sucess/> */}


 
<Routes>
   <Route  path="/checkoutpage" element={<Checkout1/>}></Route>
   <Route path="/paymentpage" element={<Paymentpage/>}></Route>
</Routes>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
