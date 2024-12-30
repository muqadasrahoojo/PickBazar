// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart } from '../../Slices/CartSlice';
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   IconButton,
//   Box,
//   Typography,
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

// const AddToCart = () => {
//   const [open, setOpen] = useState(false);
//   const cart = useSelector(state => state.cart);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <Box sx={{
//         position: 'fixed',
//         top: '50%',
//         right: 0,
//         transform: 'translateY(-50%)',
//         backgroundColor: '#019376', 
//         color: '#fff', 
//         padding: '10px',
//         borderRadius: '5px 0 0 5px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding:'20px 30px',
//       }}>
//         <Typography variant="body2" onClick={() => setOpen(true)} sx={{ fontWeight: 'bold' }}>0 Item</Typography>
//         <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '5px', backgroundColor: 'white', color:'#019376', padding:'10px 10px' }}>$0.00</Typography>
//       </Box>

      
//       <Drawer
//         anchor="right"
//         open={open}
//         onClose={() => setOpen(false)}
//         sx={{
//           '& .MuiDrawer-paper': {
//             width: '400px',
//             padding: '10px',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           },
//         }}
//       >
//         <IconButton onClick={() => setOpen(false)} sx={{ alignSelf: 'flex-end' }}>
//           <CloseIcon />
//         </IconButton>

//         <Typography variant="h6" sx={{ marginBottom: '10px' }}>Your Cart</Typography>

//         <List>
//           {cart.map(item => (
//             <ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center' }}>
//               {/* Display item image */}
//               <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
//               <ListItemText primary={item.name} secondary={`$${item.price}`} />
//               <Button onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </>
//   );
// };

// export default AddToCart;










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
  const cart = useSelector(state => state.cart.items) || []; // Ensure items are accessed correctly from the state
  const dispatch = useDispatch();

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0), 0).toFixed(2);

  return (
    <>
      {/* Sidebar Trigger Button */}
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          backgroundColor: '#019376',
          color: '#fff',
          borderRadius: '5px 0 0 5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 30px',
          zIndex: 1000, // Ensure it stays on top
        }}
      >
        <Typography
          variant="body2"
          onClick={() => setOpen(true)}
          sx={{ fontWeight: 'bold', cursor: 'pointer' }}
        >
          {totalItems} Item{totalItems !== 1 ? 's' : ''}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 'bold',
            marginTop: '5px',
            backgroundColor: 'white',
            color: '#019376',
            padding: '10px 10px',
            cursor: 'pointer',
          }}
          onClick={() => setOpen(true)}
        >
          ${totalPrice}
        </Typography>
      </Box>

      {/* Drawer Component */}
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

        <Typography variant="h6" sx={{ marginBottom: '10px' }}>
          Your Cart
        </Typography>

        <List>
          {cart.length > 0 ? (
            cart.map(item => (
              <ListItem key={item.id || Math.random()} sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={item.image || 'https://via.placeholder.com/50'}
                  alt={item.name || 'No Name'}
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <ListItemText primary={item.name || 'No Name'} secondary={`$${item.price || 0}`} />
                <Button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  sx={{
                    color: 'white',
                    backgroundColor: '#019376',
                    '&:hover': { backgroundColor: '#016f56' },
                  }}
                >
                  Remove
                </Button>
              </ListItem>
            ))
          ) : (
            <Typography variant="body2" sx={{ marginTop: '20px' }}>
              Your cart is empty.
            </Typography>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default AddToCart;


