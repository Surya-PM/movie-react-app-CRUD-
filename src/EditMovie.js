import { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

export function EditMovie() {
    const history=useHistory();
    const { id } = useParams();
    // const movie = movies[id];
    const [movie, setMovie] = useState(null);
 
    useEffect(()=>{
      fetch("https://6156a15ce039a0001725aadf.mockapi.io/movies/"+id)
      .then((data)=> data.json())
      .then((mv)=>setMovie(mv));
    },[]);

return movie? <EditMovieForm movie={movie} id={id}/>:"";
   
   
}

function EditMovieForm({movie,id}) {
    const history=useHistory();
    const [name, setName] = useState(movie.name);
    const [poster, setPoster] = useState(movie.poster);
    const [rating, setRating] = useState(movie.rating);
    const [summary, setSummary] = useState(movie.summary);
    const [trailer, setTrailer] = useState(movie.trailer);

    const editmovie = () => {
        const updatedMovie = { name, poster, rating, summary,trailer };
        // const copyMovies=[...movies];
        // copyMovies[id]=updatedMovie;
        // setMovies(copyMovies);
        // history.push('/movie');

        fetch("https://6156a15ce039a0001725aadf.mockapi.io/movies/"+id,{
            method:"PUT",
            body:JSON.stringify(updatedMovie),
            headers: { 'Content-Type': 'application/json'}
        }).then(()=>{
            history.push('/movie');
        }).catch((error)=>console.log(error)) ;



    };
    

    return (
        <div className="add-movie-form">
            <TextField
                variant="outlined"
                value={name}
                onChange={(event) => setName(event.target.value)}
                label="Name" />

            <TextField
                value={poster}
                onChange={(event) => setPoster(event.target.value)}
                label="PosterURL"
                variant="outlined" />

            <TextField

                value={rating}
                onChange={(event) => setRating(event.target.value)}
                label="Rating"
                variant="outlined" />
            <TextField

                value={trailer}
                onChange={(event) => setTrailer(event.target.value)}
                label="Trailer"
                variant="outlined" />

            <TextField
                value={summary}
                onChange={(event) => setSummary(event.target.value)}
                label="Summary"
                variant="outlined" />


            <div className="edit-buttons">
                <Button
                color="error"
                variant="contained"
                onClick={()=>{history.push('/movie')}}
                
                >Cancel</Button>

                <Button
                color="success"
                variant="contained"
                // onClick={editmovie}
                onClick={editmovie}
                
                >Save</Button>
                
            </div>

        </div>
    );

}