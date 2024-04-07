import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import MovieDetail from "./pages/MovieDetail";
        
function App() {
  return (
    <div className=" bg-black text-gray-400 w-screen h-max flex flex-col">
      <Navbar/>
      <Routes>
        <Route index path="/movie-space" element={<Homepage/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
        <Route path="/movie-space/:type" element={<MovieList/>}/>
        {/* <Route path="/*" element={<h1>Error Page</h1>}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;