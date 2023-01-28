import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, Navigate, useParams } from "react-router-dom";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AddMovie } from "./AddMovie";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BasicForm } from "./BasicForm";
import { EditMovie } from "./EditMovie";
export var newMovie = {};
const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});
function App() {
  const [pricecart, setPricecart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://635f6f7f3e8f65f283b2ee35.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => setPricecart(mvs));
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/films")}>
                Movies
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>
                Add Movie
              </Button>
            </Toolbar>
          </AppBar>
        </Box>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Navigate replace to="/movies" />} />
          <Route path="/movies" element={<Welcome />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/movies/add" element={<AddMovie />} />
          <Route path="/basic-form" element={<BasicForm />} />
          <Route path="/movies/editMovie/:id" element={<EditMovie />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

function MovieDetail() {
  const { id } = useParams();
  var [moviedata, setmovie] = useState({});
  console.log(id);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://635f6f7f3e8f65f283b2ee35.mockapi.io/movies/${id}`)
      .then((data) => data.json())
      .then((mvs) => setmovie(mvs));
  }, []);
  console.log(moviedata);
  return (
    <div className="card-body">
      <br></br>
      <iframe
        width="853"
        height="480"
        src={moviedata.trailer}
        title="Veera Simha Reddy - Suguna Sundari Lyrical Video | Nandamuri Balakrishna | Shruti Haasan | Thaman S"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <b>
        <div className="MovieName">
          <div>{moviedata.MovieName}</div>
          <div>⭐ {moviedata.Rating}</div>
        </div>
      </b>
      <hr></hr>
      <p>{moviedata.Moviedesc}</p>
      <Counter />
      <Button
        variant="contained"
        className="btnclass btn btn-primary"
        onClick={() => navigate(-1)}
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
    </div>
  );
}
function NotFound() {
  return <h1>404 Error</h1>;
}

function Home() {
  return (
    <div>
      <h1>Welcome to Home</h1>
    </div>
  );
}

export default App;
