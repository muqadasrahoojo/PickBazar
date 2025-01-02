import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Divider,
  IconButton,
  Box,
} from '@mui/material';
import { Google, Phone } from '@mui/icons-material';
import PickBazarLogo from '../../assets/Imgs/Logo-new.webp'

const ResponsiveDialog = ({ open, handleClose, handleSignUpOpen }) => {
  const handleRegisterClick = () => {
    handleClose();
    handleSignUpOpen(); 
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <Box sx={{ textAlign: 'center', paddingTop: 2 }}>
        <img
          src={PickBazarLogo}
          alt="PickBazar Logo"
        />
        <DialogTitle
          sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem', color: 'text.secondary' }}
        >
          Login with your email & password
        </DialogTitle>
      </Box>
      <DialogContent>
        {/* Email Input */}
        <TextField
          autoFocus
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          sx={{ marginBottom: 1 }}
        />
        {/* Password Input */}
        <TextField
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          sx={{ marginBottom: 1 }}
        />
        {/* Forgot Password */}
        <Typography
          variant="body2"
          sx={{ textAlign: 'right', color: 'primary.main', cursor: 'pointer', marginBottom: 2 }}
        >
          Forgot password?
        </Typography>

        {/* Login Button */}
        <Button
          fullWidth
          variant="contained"
          color="success"
          sx={{ marginBottom: 2, fontWeight: 'bold',  backgroundColor:'#009F7F', color:'white',}}
        >
          Login
        </Button>

        {/* Divider */}
        <Divider sx={{ marginY: 2 }}>Or</Divider>

        {/* Login with Google */}
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Google />}
          sx={{ marginBottom: 2, fontWeight: 'bold', backgroundColor: '#4285F4', color: 'white' }}
        >
          Login with Google
        </Button>

        {/* Login with Mobile */}
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Phone />}
          sx={{ fontWeight: 'bold', backgroundColor: '#6B7280', color: 'white' }}
        >
          Login with Mobile number
        </Button>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center', paddingY: 2 }}>
        <Typography variant="body2" sx={{ marginRight: 1 }}>
          Don’t have any account?
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'primary.main', fontWeight: 'bold', cursor: 'pointer' }}
          onClick={handleRegisterClick}
        >
          Register
        </Typography>
      </DialogActions>
    </Dialog>
  );
};

export default ResponsiveDialog;
