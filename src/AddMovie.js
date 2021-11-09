import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router";


export function AddMovie() {
const history=useHistory();
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
    const [trailer, setTrailer] = useState("");

    const refreshform=()=>{
        setName("");
        setPoster("");
        setRating("");
        setSummary("");
        setTrailer("");
    }

    const addnewmovie = () => {
        const newMovie = { name, poster, rating, summary,trailer };
        // setMovies([...movies, newMovie]);
        // console.log({ name, poster, rating, summary,trailer });

        fetch("https://6156a15ce039a0001725aadf.mockapi.io/movies",{
            method:"POST",
            body:JSON.stringify(newMovie),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(()=>{
            history.push('/movie');
            refreshform();
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


            <Button variant="contained" onClick={addnewmovie}>Add Movie</Button>

        </div>
    );
}
