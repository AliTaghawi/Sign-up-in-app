import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  password: Yup.string()
    .min(7, "Password needs to be more than 7 characters!")
    .required("Required!"),
});

const LogIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Grid container>
      <Grid
        item
        xs={5}
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
                LogIn
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
                {...(formik.errors.name &&
                  formik.touched.name && {
                    helperText: formik.errors.name,
                    error: true,
                  })}
              />
            </Grid>
            <Grid item xs={12} my={2}>
              <TextField
                variant="outlined"
                label="password:"
                name="password"
                fullWidth
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...(formik.errors.password &&
                  formik.touched.password && {
                    helperText: formik.errors.password,
                    error: true,
                  })}
              />
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
                to="/signup"
                style={{
                  textDecoration: "none",
                  color: "#1976d2",
                  fontWeight: "500",
                }}
              >
                SIGNUP
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

export default LogIn;
