import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

export function EditMovie({ movies, setMovies } ) {
    const history=useHistory();
    const { id } = useParams();
    const movie = movies[id];


    const [name, setName] = useState(movie.name);
    const [poster, setPoster] = useState(movie.poster);
    const [rating, setRating] = useState(movie.rating);
    const [summary, setSummary] = useState(movie.summary);

    const editmovie = () => {
        const updatedMovie = { name, poster, rating, summary };
        const copyMovies=[...movies];
        copyMovies[id]=updatedMovie;
        setMovies(copyMovies);
        history.push('/movie');
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
