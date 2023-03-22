import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global.js";
import { useNavigate, useParams } from "react-router-dom";
//npm install formik --save
// npm i yup
const formValidationSchema = yup.object({
  email: yup.string().min(5, "Need a longer email"),
  password: yup
    .string()
    .min(8, "Need a longer password🥳")
    .max(12, "Too much password😉")
    .required("Why not fill this password"),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      LoginCredentials(values);
    },
  });
  var navigate = useNavigate();
  const LoginCredentials = (add) => {
    fetch(`${API}/users/login`, {
      method: "POST",
      body: JSON.stringify(add),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/movies");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="email"
        placeholder="Enter email"
      />
      <br />
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <br />
      <input
        id="password"
        name="password"
        value={formik.values.password}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="password"
        placeholder="Enter password"
      />
      <br />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : ""}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
