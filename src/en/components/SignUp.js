import React from "react";
import {
  Button,
  Checkbox,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

// toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
  isAccepted: false,
};

const onSubmit = (values, { resetForm }) => {
  toast.success("You signed up In successfully", {
    position: "top-center",
    autoClose: 1500,
  });
  console.log(values);
  resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Email format!").required("Required!"),
  password: Yup.string()
    .min(7, "Password needs to be more than 7 characters!")
    .required("Required!"),
  confirmpassword: Yup.string()
    .min(7, "Password needs to be more than 7 characters!")
    .oneOf([Yup.ref("password"), null], "Passwords dos not match")
    .required("Required1"),
  isAccepted: Yup.boolean().isTrue("the terms hasn't Accepted!"),
});

const SignUp = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Grid container>
      <Grid
        item
        xs={11}
        sm={9}
        md={7}
        lg={5}
        sx={{
          boxShadow: "0 8px 12px rgba(0,0,0,0.2)",
          borderRadius: 3,
          padding: 4,
          margin: "50px auto",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid item xs={12} my={2}>
              <Typography component="h3" variant="h3" color="primary">
                SignUp
              </Typography>
            </Grid>
            <Grid item xs={12} my={2}>
              <TextField
                variant="outlined"
                label="Name:"
                name="name"
                fullWidth
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...(formik.errors.name && formik.touched.name
                  ? { helperText: formik.errors.name, error: true }
                  : null)}
              />
            </Grid>
            <Grid item xs={12} my={2}>
              <TextField
                variant="outlined"
                label="E-mail:"
                name="email"
                fullWidth
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...(formik.errors.email && formik.touched.email
                  ? { helperText: formik.errors.email, error: true }
                  : null)}
              />
            </Grid>
            <Grid item xs={12} my={2}>
              <TextField
                variant="outlined"
                label="Password:"
                name="password"
                fullWidth
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...(formik.errors.password && formik.touched.password
                  ? { helperText: formik.errors.password, error: true }
                  : null)}
              />
            </Grid>
            <Grid item xs={12} my={2}>
              <TextField
                variant="outlined"
                label="Confirm password:"
                name="confirmpassword"
                fullWidth
                type="password"
                value={formik.values.confirmpassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...(formik.errors.confirmpassword &&
                formik.touched.confirmpassword
                  ? { helperText: formik.errors.confirmpassword, error: true }
                  : null)}
              />
            </Grid>
            <Grid item xs={12} my={2} display="flex" alignItems="center">
              <Typography component="p" variant="p" mr={2}>
                I accept the terms
              </Typography>
              <Checkbox
                name="isAccepted"
                inputProps={{ "aria-label": "controlled" }}
                checked={formik.values.isAccepted}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.isAccepted && formik.touched.isAccepted ? (
                <FormHelperText error>
                  {formik.errors.isAccepted}
                </FormHelperText>
              ) : null}
            </Grid>
            <Grid
              item
              xs={12}
              my={2}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "#1976d2",
                  fontWeight: "500",
                }}
              >
                LOGIN
              </Link>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignUp;
