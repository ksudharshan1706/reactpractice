import { IconButton } from "@mui/material";
import { useState } from "react";
import { Counter } from "./Counter";

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
                {/* <a href={Movie.trailer} target="blank">
                  <i class="fa-brands fa-youtube"></i>
                </a> */}
              </div>
              {togglestyle ? (
                <IconButton color="primary">
                  <i
                    onClick={() => setTogglestyle(!togglestyle)}
                    className="fa-solid fa-chevron-down"
                  ></i>
                </IconButton>
              ) : null}
              {!togglestyle ? (
                <IconButton color="primary">
                  <i
                    onClick={() => setTogglestyle(!togglestyle)}
                    className="fa-solid fa-chevron-up"
                  ></i>
                </IconButton>
              ) : null}
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
