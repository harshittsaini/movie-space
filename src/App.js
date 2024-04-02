import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
        
function App() {
  return (
    <div className=" bg-black text-white w-screen h-screen flex flex-col">
      <Navbar/>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/top-rated" element={<TopRated/>}/>
        <Route path="/upcoming" element={<Upcoming/>}/>
      </Routes>
    </div>
  );
}

export default App;