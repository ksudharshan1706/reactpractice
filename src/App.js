import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, Navigate, useParams } from "react-router-dom";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";
import { useState } from "react";
export var newMovie = {};
function App() {
  const [pricecart, setPricecart] = useState([
    {
      movieDp:
        "https://www.pinkvilla.com/imageresize/_rrr_postponed.jpg?width=752&t=pvorg",
      MovieName: "RRR",
      Rating: "8.0",
      Moviedesc:
        "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
      trailer: "https://www.youtube.com/watch?v=NgBoMJy386M",
    },
    {
      movieDp:
        "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
      MovieName: "BAHUBALI",
      Rating: "8.2",
      Moviedesc:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/watch?v=sOEg_YZQsTI",
    },
    {
      movieDp:
        "https://cdn.gulte.com/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-02-at-10.03.05-AM.jpeg",
      MovieName: "HIT 2",
      Rating: "6.9",
      Moviedesc:
        "HIT 2 is an upcoming Indian Telugu-language action thriller film written and directed by Sailesh Kolanu. The second installment in The HIT Verse, the film stars Adivi Sesh and Meenakshi",
      trailer: "https://www.youtube.com/watch?v=-OMTthapaWE",
    },
    {
      movieDp:
        "https://assets-prd.ignimgs.com/2022/05/25/starwarssaga-blogroll-1653501853399.jpg",
      MovieName: "STARWARS",
      Rating: "8.7",
      Moviedesc:
        "Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon.",
      trailer: "https://www.youtube.com/watch?v=8Qn_spdM5Zg",
    },
  ]);

  return (
    <div className="App">
      {/* <Welcome /> */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/movies">movies </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Navigate replace to="/movies" />} />
        <Route
          path="/movies"
          element={
            <Welcome pricecart={pricecart} setPricecart={setPricecart} />
          }
        />
        <Route
          path="/movies/:id"
          element={<MovieDetail pricecart={pricecart} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
function MovieDetail({ pricecart }) {
  const { id } = useParams();
  console.log(pricecart[id]);
  var moviedata = pricecart[id];
  return (
    <div className="card-body">
      <iframe
        width="853"
        height="480"
        src={moviedata.trailer}
        title="Veera Simha Reddy - Suguna Sundari Lyrical Video | Nandamuri Balakrishna | Shruti Haasan | Thaman S"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      {/* <img className="img-pic" src={moviedata.movieDp}></img> */}
      <b>
        <div className="MovieName">
          <div>{moviedata.MovieName}</div>
          <div>⭐ {moviedata.Rating}</div>
        </div>
      </b>
      <hr></hr>
      <p>{moviedata.Moviedesc}</p>
      <Counter />
    </div>
  );
}
function NotFound() {
  return <h1>404 Error</h1>;
}
// function ToggleFn() {
//   const [togglestyle, setTogglestyle] = useState(true);
//   return (
//     <i
//       onClick={() => setTogglestyle(!togglestyle)}
//       className="fa-solid fa-chevron-down"
//     ></i>
//   );
// }

function Home() {
  return (
    <div>
      <h1>Welcome to Home</h1>
    </div>
  );
}

export default App;
