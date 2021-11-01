import { createContext, useContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link ,Redirect} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react'

//-----------App Bar----------------
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useHistory } from "react-router";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

//-----------------------------

//-------Components------------
import { ColorBox} from "./colorgame";
import { ColorList } from "./ColorList";
import { MovieList } from "./MovieList";
import { NotFound } from "./NotFound";
import { Welcome } from "./Welcome";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";
import { MovieDetails } from "./MovieDetails";
import { TicTacToe } from "./TicTacToe";


//-----------------------


// creating context
const initialState=10;
const context=createContext(null); //null is the default value if provider is missing


const MyGrandChild=()=>{
  const {state,setState}=useContext(context);
  console.log({state,setState});
  const increment=()=>{
    setState(state+1);
  };
  return(
    <div>
      <button
onClick={increment}>increment
</button>
{state}
    </div>
  );
}

const Mychild=()=>{
  return(
    <div>
      <MyGrandChild/>
    </div>
  );
};


// const theme = createTheme({
//   palette: {
//     // mode: 'light',
//     mode: 'dark',
//   },
// });


function App() {
const history=useHistory();
  const Initial_movies = [
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      trailer:"https://www.youtube.com/embed/zSWdZVtXT7E",
      summary: ` When Earth becomes uninhabitable in the future, a farmer and ex-NASA
  pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team
  of researchers, to find a new planet for humans.`,
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      trailer:"https://www.youtube.com/embed/sOEg_YZQsTI",
      summary: `In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.`,
    },
    {
      name: "Ratatouille",
      poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      trailer:"https://www.youtube.com/embed/NgsQ8mVkN8w",
      summary: `Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.`,
    },

    {
      name: "96",
      poster: "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
      rating: 8.6,
      trailer:"https://www.youtube.com/embed/r0synl-lI4I",
      summary: `K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.`,
    },

    {
      name: "M.S. Dhoni: The Untold Story",
      poster: "https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
      rating: 7.9,
      trailer:"https://www.youtube.com/embed/G2zb_nbrnyU",
      summary: `M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.`,
    },
  ];
  const [movies, setMovies] = useState(Initial_movies);


const[mode,setMode]=useState(true);
const theme = createTheme({
  palette: {
    // mode: 'light',
    // mode: 'dark',
    mode:mode?"light":"dark",
  },
});

  const [state,setState]=useState(initialState);
    const obj={state:state,setState:setState};
  return (
    <ThemeProvider theme={theme}>
     <Paper style={{minHeight:"100vh"}} elevation={6}>
   
    <div className="App">

{/* <context.Provider value={obj}>
       <div>
        <Mychild/>
      </div>
    </context.Provider> */}



<Box sx={{ flexGrow: 1 }}>
<AppBar position="static">
<Toolbar>
<Button
onClick={()=>history.push('/')}
startIcon={<HomeIcon/>}
color="inherit" > Home</Button>
<Button
onClick={()=>history.push('/movie')}
startIcon={<LocalMoviesIcon/>}
 color="inherit">Movies</Button>
<Button
onClick={()=>history.push('/movies/add')}
startIcon={<AddToQueueIcon/>}
  color="inherit" >Add Movies</Button>
<Button
onClick={()=>history.push('/colorgame')}
startIcon={<ColorLensIcon/>}
  color="inherit" >Color Game</Button>
<Button
onClick={()=>history.push('/tic-tac-toe-game')}
startIcon={<SportsEsportsIcon/>}
  color="inherit" >TicTacToe Game</Button>
<Button
startIcon={mode ?<DarkModeIcon/>  :<LightModeIcon/> }
style={{ marginLeft: "auto" }}
onClick={()=>setMode(!mode)}
  color="inherit" >{mode?"dark":"light"} Mode</Button>
</Toolbar>
      </AppBar>
      </Box>

      <Switch>
      
    <Route path="/movie">
        <MovieList movies={movies} setMovies={setMovies}/> 
    </Route>
    <Route path="/movies/add">
      <AddMovie movies={movies} setMovies={setMovies}/>
    </Route>
    <Route path="/tic-tac-toe-game">
        <TicTacToe /> 
    </Route>
{/* ---------------------------------- */}
    <Route exact path="/movies/edit/:id">
      <EditMovie movies={movies} setMovies={setMovies} />
      {/* edit movie */}
    </Route>

    <Route exact path= "/movies/:id">
      <MovieDetails movies={movies} />
    </Route>
{/* ---------------------------------- */}

    <Route path="/films">
        <Redirect to="/movie"/> 
    </Route>
    
        <Route path="/colorgame">
        <ColorList/>
        <ColorBox/>
        </Route>
        <Route exact path="/">
          <Welcome />
      </Route>
      <Route path= "**">
        <NotFound />
      </Route>

       
      </Switch>
     {/* <ColorList/> */}
     {/* <MovieList/> */}
    </div>
    </Paper>
    </ThemeProvider>
  );
}




export default App;



// Task
// 1. Draw condition
// 2. Choose to play first "X" or "O"
// 3. Whose turn is it?
// 4. Style it
//5.restart button
