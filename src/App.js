import { BrowserRouter, Route, Routes } from "react-router-dom";
import Plant from "./components/Plant";
// import Plantview from "./components/Plantview";
import Plantdetailsview from "./components/Plantdetailsview"
import Planttype from "./components/Planttype";


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/plant" element={<Plant method='post'/>}></Route>
          <Route path="/plantdetailsview" element={<Plantdetailsview method='get'/>}></Route>
          <Route path="/Planttype" element={<Planttype method='post'/>}></Route>
          {/* <Route path="/Plantview" element={<Plantview method='get'/>}></Route> */}
        </Routes>
      </BrowserRouter> 


    </div>
  );
}

export default App;
