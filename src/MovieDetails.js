import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useHistory } from "react-router";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function MovieDetails({ movies }) {
  const history=useHistory();
  const { id } = useParams();
  const movie = movies[id];
  return (
    <div className="movie-details">
      <iframe
        width="60%"
        height="600"
        src={movie.trailer}
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

      <Card
        className="movie--detail-container"
      >
        <CardContent>
          <div className="movie-detail-specs">
            <h1> {movie.name}</h1>
            <p className="movie-rating">⭐{movie.rating}</p>
          </div>
        </CardContent>

        <p> {movie.summary}</p>
          <Button variant="contained"
          onClick={()=>history.goBack('/movie')}
          ><ArrowBackIosIcon/>Back</Button>


      </Card>
    </div>
  );
}
