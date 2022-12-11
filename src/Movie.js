import { IconButton } from "@mui/material";
import { useState } from "react";
import { Counter } from "./Counter";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";

export function Movie({ Movie }) {
  const [togglestyle, setTogglestyle] = useState(true);

  return (
    <div className="col-lg-3 mt-3">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <img className="img-pic" src={Movie.movieDp}></img>
          <b>
            <div className="MovieName">
              <div>
                {Movie.MovieName}{" "}
                {togglestyle ? (
                  <ExpandLessSharpIcon
                    onClick={() => setTogglestyle(!togglestyle)}
                  />
                ) : (
                  <ExpandMoreSharpIcon
                    onClick={() => setTogglestyle(!togglestyle)}
                  />
                )}
                {/* {togglestyle ? (
                  <IconButton color="primary">
                    <i
                      onClick={() => setTogglestyle(!togglestyle)}
                      className="fa-solid fa-chevron-up"
                    ></i>
                  </IconButton>
                ) : null}
                {!togglestyle ? (
                  <IconButton color="primary">
                    <i
                      onClick={() => setTogglestyle(!togglestyle)}
                      className="fa-solid fa-chevron-down"
                    ></i>
                  </IconButton>
                ) : null} */}
                {/* <a href={Movie.trailer} target="blank">
                  <i class="fa-brands fa-youtube"></i>
                </a> */}
              </div>

              <div>⭐ {Movie.Rating}</div>
            </div>
          </b>
          <hr></hr>
          {togglestyle ? <p>{Movie.Moviedesc}</p> : null}
          <Counter />
        </div>
      </div>
    </div>
  );
}
