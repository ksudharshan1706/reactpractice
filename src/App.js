import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";

import { Counter } from "./Counter";
import { Movie } from "./Movie";
var newMovie = {};
function App() {
  return <Welcome />;
}
function Welcome() {
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
  // let [style1, setstyle1] = useState(true);
  // var togglestyle = {
  //   display: style1 ? "block" : "none",
  // };
  // const ToggleFn = () => {
  //   setstyle1(!style1);
  // };

  return (
    <section className="pricing py-5 mainBack">
      <div className="movieName">
        <p>MOVIES</p>
      </div>
      <button type="button" className="btn btn-light btnFloat" onClick={on}>
        <i class="fa-solid fa-plus"></i>
      </button>
      <br></br>
      <div id="formcontainer1" className="container formcontainer">
        <i class="fa-solid fa-xmark" onClick={off}></i>
        <form className="formdata">
          <input
            className="form-control"
            type="text"
            id="movieDp"
            placeholder="Movie Picture"
          ></input>
          <br></br>
          <input
            className="form-control"
            type="text"
            id="MovieName"
            placeholder="Movie Name"
          ></input>
          <br></br>
          <input
            className="form-control"
            type="text"
            id="Rating"
            placeholder="Movie Rating"
          ></input>
          <br></br>
          <input
            className="form-control"
            type="text"
            id="Moviedesc"
            placeholder="Movie Desc"
          ></input>
          <br></br>
          <input
            className="form-control"
            type="text"
            id="trailer"
            placeholder="Add trailer"
          ></input>
          <br></br>
          {/* <Button variant="contained">Outlined</Button> */}

          <Button
            variant="contained"
            className="btnclass btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              const input = document.querySelectorAll("input");
              console.log("here", input);
              var data = {};
              for (var i = 0; i < input.length; i++) {
                data[input[i].id] = input[i].value;
              }
              newMovie = data;
              setPricecart([...pricecart, newMovie]);
            }}
          >
            Submit
          </Button>
        </form>
      </div>
      {console.log("here newmovie", newMovie)}
      <div className="container" onClick={off}>
        <div className="row">
          {pricecart.map((movie) => (
            <Movie Movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}

function on() {
  console.log("hello");
  var formEle = document.getElementById("formcontainer1");
  console.log(formEle);
  formEle.style.display = "block";
}

function off() {
  var formEle = document.getElementById("formcontainer1");
  // console.log(formEle);
  formEle.style.display = "none";
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
export default App;
