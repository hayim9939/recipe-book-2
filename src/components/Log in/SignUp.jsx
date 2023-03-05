import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useRef } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuth } from '../../Firebase';
import { useContext } from 'react';
import { ContextData } from '../../App';


export default function SignUp() {

  const {loading , SetLoading , SetUser} = useContext(ContextData)

  const currentUser = useAuth();

  const email =useRef();
  const password =useRef();
  const name =useRef();
  const lastName =useRef();


  const auth = getAuth();


  const register = async function (){
    let userName = name.current.value + " " + lastName.current.value;
    SetLoading(true);
    await createUserWithEmailAndPassword(auth ,email.current.value , password.current.value)
    .then((userCredential) => {
    
      const user = userCredential.user;
      updateProfile(user,{displayName: userName });
      console.log(user);
      SetUser(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      SetLoading(false);
      // ..
    });
  
  }


const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline  />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
            <br />
            {currentUser?.email}
          </Typography>
          <Box  noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  inputRef={name}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  inputRef={lastName}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                 inputRef={email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  inputRef={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
            onClick={register}
            disabled = {loading}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}