import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LogIn = () => {
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
        <form>
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
              />
            </Grid>
            <Grid item xs={12} my={2}>
              <TextField
                variant="outlined"
                label="password:"
                name="password"
                fullWidth
                type="password"
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
