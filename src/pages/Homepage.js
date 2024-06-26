import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaStar } from "react-icons/fa";
import './Homepage.css'
import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";

const Homepage = () => {
  const API_KEY = '4e44d9029b1270a757cddc766a1bcb63';
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <div className="flex h-max ">
      <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          transitionTime={3}
        >
          {popularMovies.map((movie) => (
            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>

              {/* image  */}
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="img"
                />
              </div>

              {/* image overlay  */}
              <div className="posterImage__overlay">

                {/* movie title  */}
                <span className="posterImage__title">{movie ? movie.title : ""}</span>

                  {/* release date and rating  */}
                <div className="posterImage__runtime">
                  <span>
                  {movie ? movie.release_date : ""}
                  </span>
                  
                  <span className="posterImage__rating flex">
                    {movie ? Math.trunc(movie.vote_average) : ""} 
                    <FaStar className=" mt-[6px] ml-[3px]"/>
                  </span>
                </div>

                {/* movie description  */}
                <div className="posterImage__description">{movie ? movie.overview : ""}</div>

              </div>

            </Link>
          ))}
        </Carousel>

        <MovieList />
      </div>
    </div>
  );
};

export default Homepage;
