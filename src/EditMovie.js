import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global.js";
var newMovie = {};

const movieValidationSchema = yup.object({
  name: yup.string().min(4),
  poster: yup.string().min(4),
  summary: yup.string().min(20),
  rating: yup.number().min(0).max(10),
  trailer: yup.string().min(4),
});
export function EditMovie() {
  const { id } = useParams();
  var [moviedata, setmovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mvs) => setmovie(mvs));
  }, [id]);
  return moviedata ? <EditMovieForm movie={moviedata} /> : <h2>Loading...</h2>;
}

function EditMovieForm({ movie }) {
  console.log(movie);
  const formik = useFormik({
    initialValues: {
      name: movie.name,
      poster: movie.poster,
      summary: movie.summary,
      rating: movie.rating,
      trailer: movie.trailer,
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      console.log(newMovie);
      UpdateMovie(newMovie);
    },
  });
  var navigate = useNavigate();
  const UpdateMovie = (newMovie) => {
    fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      navigate("/movies");
    });
  };
  return (
    <form onSubmit={formik.handleSubmit} className="formdata">
      <TextField
        id="outlined-basic"
        label="name"
        variant="outlined"
        name="name"
        value={formik.values.name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.name && formik.errors.name}
        helperText={
          formik.touched.name && formik.errors.name ? formik.errors.name : null
        }
      />

      <br></br>
      <TextField
        id="outlined-basic"
        label="poster"
        variant="outlined"
        name="poster"
        value={formik.values.poster}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.poster && formik.errors.poster}
        helperText={
          formik.touched.poster && formik.errors.poster
            ? formik.errors.poster
            : null
        }
      />

      <br></br>
      <TextField
        id="outlined-basic"
        label="Movie Desc"
        variant="outlined"
        name="summary"
        value={formik.values.summary}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.summary && formik.errors.summary}
        helperText={
          formik.touched.summary && formik.errors.summary
            ? formik.errors.summary
            : null
        }
      />

      <br></br>
      <TextField
        id="outlined-basic"
        label="rating"
        variant="outlined"
        name="rating"
        value={formik.values.rating}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.rating && formik.errors.rating}
        helperText={
          formik.touched.rating && formik.errors.rating
            ? formik.errors.rating
            : null
        }
      />

      <br></br>
      <TextField
        id="outlined-basic"
        label="trailer"
        variant="outlined"
        name="trailer"
        value={formik.values.trailer}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={
          formik.touched.trailer && formik.errors.trailer
            ? formik.errors.trailer
            : null
        }
      />

      <br></br>
      <Button
        // onClick={AddMovie}
        type="submit"
        variant="contained"
        className="btnclass btn btn-primary"
      >
        Save
      </Button>
    </form>
  );
}
