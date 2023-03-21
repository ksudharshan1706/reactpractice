import { IconButton } from "@mui/material";
import { useState } from "react";
import { Counter } from "./Counter";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import InfoIcon from "@mui/icons-material/Info";
import { Navigate, useNavigate } from "react-router-dom";
import { CardActions } from "@mui/material";

export function Movie({ Movie, id, deletebutton, editbutton }) {
  const [togglestyle, setTogglestyle] = useState(true);
  const navigate = useNavigate();
  console.log(Movie);
  return (
    <div className="col-lg-3 mt-3">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <img className="img-pic" src={Movie.poster}></img>
          <b>
            <div className="MovieName">
              <div>
                {Movie.name}
                {/* {Movie.trailer} */}
                {togglestyle ? (
                  <IconButton color="primary">
                    <i
                      onClick={() => setTogglestyle(!togglestyle)}
                      className="fa-solid fa-chevron-up"
                    ></i>
                  </IconButton>
                ) : (
                  <IconButton color="primary">
                    <i
                      onClick={() => setTogglestyle(!togglestyle)}
                      className="fa-solid fa-chevron-down"
                    ></i>
                  </IconButton>
                )}
                <IconButton
                  onClick={() => navigate(`/movies/${id}`)}
                  color="primary"
                >
                  <InfoIcon />
                </IconButton>
              </div>

              <div>⭐ {Movie.rating}</div>
            </div>
          </b>
          <hr></hr>
          {togglestyle ? <p>{Movie.summary}</p> : null}
          <CardActions className="CounterDelete">
            <Counter />
            {editbutton}
            {deletebutton}
          </CardActions>
        </div>
      </div>
    </div>
  );
}
