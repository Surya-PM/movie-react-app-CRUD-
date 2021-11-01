import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router";


export function AddMovie({ movies, setMovies }) {
const history=useHistory();
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");

    const addnewmovie = () => {
        const newMovie = { name, poster, rating, summary };
        setMovies([...movies, newMovie]);
        console.log({ name, poster, rating, summary });
        setName("");
        setPoster("");
        setRating("");
        setSummary("");
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


            <Button variant="contained" onClick={addnewmovie}>Add Movie</Button>

        </div>
    );
}
