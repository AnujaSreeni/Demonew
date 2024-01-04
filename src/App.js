import { BrowserRouter, Route, Routes } from "react-router-dom";
import Plant from "./components/Plant";
import Plantview from "./components/Plantview";



function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/plant" element={<Plant method='post'/>}></Route>
          <Route path="/plantview" element={<Plantview method='get'/>}></Route>
        </Routes>
      </BrowserRouter> 


    </div>
  );
}

export default App;
