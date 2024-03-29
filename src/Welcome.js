import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./App.css";
import { Movie } from "./Movie";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { API } from "./global.js";
export function Welcome() {
  const [pricecart, setPricecart] = useState([]);
  const getMoives = () => {
    fetch(`${API}/movies`)
      .then((data) => data.json())
      .then((mvs) => setPricecart(mvs));
  };
  console.log(pricecart);
  useEffect(() => {
    getMoives();
  }, []);

  const deleteMovie = (id) => {
    console.log(id);
    fetch(`${API}/movies/${id}`, {
      method: `DELETE`,
    }).then(() => getMoives());
  };

  const navigate = useNavigate();

  return (
    <section className="pricing py-5 mainBack">
      <div className="movieName">
        <p>MOVIES</p>
      </div>
      <br></br>
      <div className="container">
        <div className="row">
          {pricecart.map((movie, index) => (
            <Movie
              key={movie.id}
              Movie={movie}
              id={movie.id}
              deletebutton={
                <DeleteIcon
                  color="error"
                  onClick={() => {
                    deleteMovie(movie.id);
                  }}
                >
                  delete
                </DeleteIcon>
              }
              editbutton={
                <EditIcon
                  color="primary"
                  onClick={() => {
                    navigate(`/movies/editMovie/${movie.id}`);
                  }}
                >
                  edit
                </EditIcon>
              }
            />
            // <Movie key={index} Movie={movie} id={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
{
}

function on() {
  console.log("hello");
  var formEle = document.getElementById("formcontainer1");
  console.log(formEle);
  formEle.style.display = "block";
}
function off() {
  var formEle = document.getElementById("formcontainer1");
  formEle.style.display = "none";
}
