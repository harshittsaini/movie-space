import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Card from './Card';

const MovieList = () => {

    const[moviesList, setMoviesList] = useState([]);
    const {type} = useParams();

    useEffect(() => {
      getData();
    }, [])

    useEffect(() => {
      getData();
    }, [type])
    
    

    const getData = () => {
        fetch(
          `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        )
          .then((res) => res.json())
          .then((data) => setMoviesList(data.results));
      };

  return (
    <div className='p-[3rem]'>
        <h2 className="m-[2.5rem] text-[1.75rem]">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className=" flex flex-wrap justify-center">
                {
                    moviesList.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
    </div>
  )
}

export default MovieList