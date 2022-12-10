import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
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
          <button
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
          </button>
        </form>
      </div>
      {console.log("here newmovie", newMovie)}
      <div className="container" onClick={off}>
        <div className="row">
          {pricecart.map((user) => (
            <div className="col-lg-3 mt-3">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <img className="img-pic" src={user.movieDp}></img>
                  <b>
                    <div className="MovieName">
                      <div>
                        {user.MovieName}{" "}
                        <a href={user.trailer} target="blank">
                          <i class="fa-brands fa-youtube"></i>
                        </a>
                      </div>
                      <div>⭐ {user.Rating}</div>
                    </div>
                  </b>
                  <hr></hr>
                  <p>{user.Moviedesc}</p>
                  <Counter />
                </div>
              </div>
            </div>
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
  console.log(formEle);
  formEle.style.display = "none";
}

function Counter() {
  let [like, setLike] = useState(0);
  let [dislike, setDisLike] = useState(0);

  const messageStyle = {
    display: like - dislike >= 10 ? "block" : "none",
  };
  return (
    <div className="likeDiv">
      {/* <h2 style={messageStyle}>You are Awesome</h2> */}
      {like - dislike >= 10 ? <h6>Must Watch 😍</h6> : null}
      <button className="likeBtn" onClick={() => setLike(like + 1)}>
        😍{like}
      </button>
      <button className="likeBtn" onClick={() => setDisLike(dislike + 1)}>
        😭{dislike}
      </button>
    </div>
  );
}

export default App;
