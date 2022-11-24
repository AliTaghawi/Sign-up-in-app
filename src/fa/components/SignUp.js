import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

//mui
import {
  Button,
  Checkbox,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

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
  toast.success("شما با موفقیت ثبت نام کردید", {
    position: "top-center",
    autoClose: 1500,
  });
  console.log(values);
  resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("الزامی!"),
  email: Yup.string().email("ایمیل نامعتبر است!").required("الزامی!"),
  password: Yup.string()
    .min(7, "رمزعبور باید بیشتر از 7 کارکتر باشد!")
    .required("الزامی!"),
  confirmpassword: Yup.string()
    .min(7, "رمزعبور باید بیشتر از 7 کارکتر باشد!")
    .oneOf([Yup.ref("password"), null], "رمزعبور مطابقت ندارد")
    .required("الزامی!"),
  isAccepted: Yup.boolean().isTrue("قوانین و شرایط پذیرفته نشده است!"),
});

const SignUp = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  // Create rtl cache
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
                فرم ثبت نام
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
                  {...(formik.errors.name && formik.touched.name
                    ? { helperText: formik.errors.name, error: true }
                    : null)}
                />
              </Grid>
              <Grid item xs={12} my={2}>
                <TextField
                  variant="outlined"
                  label="ایمیل:"
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
                  label="رمزعبور:"
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
                  label="تکرار رمزعبور:"
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
            </CacheProvider>
            <Grid item xs={12} my={2} display="flex" alignItems="center">
              <Typography component="p" variant="p" mr={2}>
                من تمام قوانین و شرایط را می‌پذیرم
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
                  fontSize: "18px",
                }}
              >
                ورود
              </Link>
              <Button
                variant="contained"
                type="submit"
                sx={{ fontSize: "16px" }}
              >
                ارسال
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignUp;
