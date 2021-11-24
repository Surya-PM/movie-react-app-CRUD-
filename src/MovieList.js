import { useState,useEffect } from "react";
import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useHistory } from "react-router";


export function MovieList() {
  const [movies, setMovies] = useState([]);
 
  const getMovies =()=>{
    fetch("https://react-movie-app-api.herokuapp.com/movies")
    .then((data)=> data.json())
    .then((mvs)=>setMovies(mvs));
  }

  useEffect(getMovies,[]);

  return (
    <section>
      <div className="movie-list">
        {movies.map((mv, index) => (
          <Movie
            key={index}
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            summary={mv.summary}
            id={mv.id}
            setMovies={setMovies}
            movies={movies} 
            getMovies={getMovies}
            />
        ))}
      </div>
    </section>

  );
}
