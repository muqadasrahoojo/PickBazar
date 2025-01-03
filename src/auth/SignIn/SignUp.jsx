import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography, Box, FormHelperText } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PickBazarLogo from '../../assets/Imgs/Logo-new.webp'
const SignUpDialog = ({ open, handleClose, handleRegisterSuccess }) => {
  const schema = yup.object({
    firstName: yup.string().min(3).required("Name is invalid"),
    email: yup.string().required("Your email is invalid"),
    password: yup.string().required("Password is invalid").min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol'),
  });

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const signUpHandler = (data) => {
    console.log(data);
    handleRegisterSuccess(data); // Pass the user data to the parent component (Header)
    reset(); 
    handleClose(); 
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" aria-labelledby="sign-up-dialog-title">
      <Box sx={{ textAlign: 'center', paddingTop: 2 }}>
         <img
                  src={PickBazarLogo}
                  alt="PickBazar Logo"
                />
        <DialogContent>
          <Typography variant="body2" align="center">
            By signing up, you agree to our terms & policy
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{textAlign:'start'}}>Name</Typography>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => <TextField {...field} size="small" fullWidth placeholder="Name" />}
              />
              {errors.firstName && <FormHelperText error>{errors.firstName.message}</FormHelperText>}
            </Grid>

            <Grid item xs={12}>
              <Typography sx={{textAlign:'start'}}>Email</Typography>
              <Controller
                name="email"
                control={control}
                render={({ field }) => <TextField {...field} size="small" fullWidth type="email" placeholder="Email" />}
              />
              {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}
            </Grid>

            <Grid item xs={12}>
              <Typography sx={{textAlign:'start'}}>Password</Typography>
              <Controller
                name="password"
                control={control}
                render={({ field }) => <TextField {...field} size="small" fullWidth type="password" placeholder="Password" />}
              />
              {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}
            </Grid>
          </Grid>

          <Button
            fullWidth
            variant="contained"
            color="white"
            sx={{ marginBottom: 2, fontWeight: 'bold', backgroundColor:'#009F7F', color:'white', marginTop:'20px' }}
            onClick={handleSubmit(signUpHandler)} >
            Register
          </Button>
        </DialogContent>

        <DialogActions>
          <Typography variant="body2" align="center" sx={{ width: '100%' }}>
            Already have an account?
            <Button color="primary" onClick={() => handleClose()}>Login</Button>
          </Typography>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default SignUpDialog; 