import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Slices/CartSlice';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AddToCart = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{
        position: 'fixed',
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)',
        backgroundColor: '#019376', 
        color: '#fff', 
        padding: '10px',
        borderRadius: '5px 0 0 5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding:'20px 30px',
      }}>
        <Typography variant="body2" onClick={() => setOpen(true)} sx={{ fontWeight: 'bold' }}>0 Item</Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '5px', backgroundColor: 'white', color:'#019376', padding:'10px 10px' }}>$0.00</Typography>
      </Box>

      
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '400px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        <IconButton onClick={() => setOpen(false)} sx={{ alignSelf: 'flex-end' }}>
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" sx={{ marginBottom: '10px' }}>Your Cart</Typography>

        <List>
          {cart.map(item => (
            <ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center' }}>
              {/* Display item image */}
              <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <ListItemText primary={item.name} secondary={`$${item.price}`} />
              <Button onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default AddToCart;
