import React from "react";
import { Button, Checkbox, FormHelperText, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LLink from '@mui/material/Link';

const SignUp = () => {
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
              <Typography component='h3' variant="h3" color="primary">Sign Up</Typography>
            </Grid>
            <Grid item xs={12} my={2}>
              <TextField variant="outlined" label="Name:" name="name" fullWidth type='text' />
              {/* <TextField variant="outlined" label="Name:" name="name" fullWidth helperText="Incorrect entry." error/> */}
            </Grid>
            <Grid item xs={12} my={2}>
              <TextField variant="outlined" label="E-mail:" name="email" fullWidth type='email' />
            </Grid>
            <Grid item xs={12} my={2}>
              <TextField variant="outlined" label="Password:" name="password" fullWidth type='password' />
            </Grid>
            <Grid item xs={12} my={2}>
              <TextField variant="outlined" label="Confirm password:" name="confirmpassword" fullWidth type='password' />
            </Grid>
            <Grid item xs={12} my={2} display='flex' alignItems='center'>
              <Typography component="p" variant='p' mr={2}>I agree with terms</Typography>
              <Checkbox  inputProps={{ 'aria-label': 'controlled' }} />
              {/* <FormHelperText error>terms hasn't confirmed!</FormHelperText> */}
            </Grid>            
            <Grid item xs={12} my={2} display='flex' alignItems='center' justifyContent='space-between' >
              <Link to='/login' style={{textDecoration: 'none'}}><LLink underline="hover">LOGIN</LLink></Link>
              <Button variant="contained" type="submit">Submit</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignUp;
