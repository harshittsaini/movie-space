import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
        
function App() {
  return (
    <div className=" bg-black text-white w-screen h-max flex flex-col">
      <Navbar/>
      <Routes>
        <Route index path="/movie-space" element={<Homepage/>}/>
        <Route path="/movie/:id" element={<h1>Movie detail page</h1>}/>
        <Route path="/movies/:type" element={<MovieList/>}/>
        <Route path="/*" element={<h1>Error Page</h1>}/>
      </Routes>
    </div>
  );
}

export default App;