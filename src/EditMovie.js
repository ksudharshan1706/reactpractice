import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
var newMovie = {};

const movieValidationSchema = yup.object({
  MovieName: yup.string().min(4),
  movieDp: yup.string().min(4),
  Moviedesc: yup.string().min(20),
  Rating: yup.number().min(0).max(10),
  trailer: yup.string().min(4),
});
export function EditMovie() {
  const { id } = useParams();
  var [moviedata, setmovie] = useState(null);
  useEffect(() => {
    fetch(`https://635f6f7f3e8f65f283b2ee35.mockapi.io/movies/${id}`)
      .then((data) => data.json())
      .then((mvs) => setmovie(mvs));
  }, [id]);
  return moviedata ? <EditMovieForm movie={moviedata} /> : <h2>Loading...</h2>;
}

function EditMovieForm({ movie }) {
  console.log(movie);
  const formik = useFormik({
    initialValues: {
      MovieName: movie.MovieName,
      movieDp: movie.movieDp,
      Moviedesc: movie.Moviedesc,
      Rating: movie.Rating,
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
    fetch(`https://635f6f7f3e8f65f283b2ee35.mockapi.io/movies/${movie.id}`, {
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
        label="MovieName"
        variant="outlined"
        name="MovieName"
        value={formik.values.MovieName}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.MovieName && formik.errors.MovieName}
        helperText={
          formik.touched.MovieName && formik.errors.MovieName
            ? formik.errors.MovieName
            : null
        }
      />

      <br></br>
      <TextField
        id="outlined-basic"
        label="MovieDp"
        variant="outlined"
        name="movieDp"
        value={formik.values.movieDp}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.movieDp && formik.errors.movieDp}
        helperText={
          formik.touched.movieDp && formik.errors.movieDp
            ? formik.errors.movieDp
            : null
        }
      />

      <br></br>
      <TextField
        id="outlined-basic"
        label="Movie Desc"
        variant="outlined"
        name="Moviedesc"
        value={formik.values.Moviedesc}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.Moviedesc && formik.errors.Moviedesc}
        helperText={
          formik.touched.Moviedesc && formik.errors.Moviedesc
            ? formik.errors.Moviedesc
            : null
        }
      />

      <br></br>
      <TextField
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        name="Rating"
        value={formik.values.Rating}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.Rating && formik.errors.Rating}
        helperText={
          formik.touched.Rating && formik.errors.Rating
            ? formik.errors.Rating
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
