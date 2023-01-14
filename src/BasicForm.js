import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup.string().min(7),
  password: yup.string().min(8).max(12),
});
export function BasicForm() {
  const formik = useFormik({
    initialValues: {
      email: "r.@ju",
      password: "12345678",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        value={formik.values.email}
        name="email"
        placeholder="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      {formik.touched.email && formik.errors.email ? formik.errors.email : null}
      <input
        type="text"
        value={formik.values.password}
        name="password"
        placeholder="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : null}
      <button type="submit">SUBMIT</button>
    </form>
  );
}
