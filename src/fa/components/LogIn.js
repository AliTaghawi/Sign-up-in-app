import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

//mui
import { Button, Grid, TextField, Typography } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

// toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  name: "",
  password: "",
};

const onSubmit = (values, { resetForm }) => {
  toast.success("شما با موفقیت وارد شدید", {
    position: "top-center",
    autoClose: 1500,
  });
  console.log(values);
  resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("الزامی!"),
  password: Yup.string()
    .min(7, "رمزعبور باید بیشتر از 7 کارکتر باشد!")
    .required("الزامی!"),
});

const LogIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
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
                فرم ورود
              </Typography>
            </Grid>
            <CacheProvider value={cacheRtl}>
              <Grid item xs={12} my={2}>
                <TextField
                  variant="outlined"
                  label="نام:"
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
                  label="رمزعبور:"
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
            </CacheProvider>
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
                  fontSize: "18px",
                }}
              >
                ثبت نام
              </Link>
              <Button
                variant="contained"
                type="submit"
                sx={{ fontSize: "16px" }}
              >
                ورود
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default LogIn;
