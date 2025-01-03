import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '../../Slices/CartSlice';
import { AppBar, IconButton, Drawer, List, ListItem, ListItemText, Typography, Button, Box, Toolbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ErrorImg from '../../assets/Imgs/cart img.png';
import DeleteIcon from '@mui/icons-material/Delete';

const AddToCart = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', '')) * (item.quantity || 1);
    if (!isNaN(price)) {
      return total + price;
    }
    console.log("Invalid price:", item.price);
    return total;
  }, 0).toFixed(2);

  const handleQuantityChange = (id, delta) => {
    dispatch(updateCartItemQuantity({ id, delta }));
  };

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: 1300, backgroundColor: "#FAFAFA", color: "#000", boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Your App</Typography>
        </Toolbar>
      </AppBar>

      {!open && (
        <Box
          sx={{
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
            padding: '20px 30px',
            zIndex: 1400,
          }}
        >
          <Typography variant="body2" onClick={() => setOpen(true)} sx={{ fontWeight: 'bold' }}>
            {cart.length} Item{cart.length > 1 ? 's' : ''}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 'bold',
              marginTop: '5px',
              backgroundColor: 'white',
              color: '#019376',
              padding: '10px 10px',
            }}
          >
            ${totalPrice}
          </Typography>
        </Box>
      )}

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '390px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 1500,
            top: 70,
            position: 'absolute',
            borderRadius: '16px 0 0 16px',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#FFFFFF',
          },
        }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            alignSelf: 'flex-end',
            color: '#757575',
            '&:hover': {
              color: '#019376',
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box sx={{ width: '100%', textAlign: 'center', flex: 1, }}>
          {cart.length > 0 ? (
            <>
              <Typography variant="h6" sx={{ marginBottom: '20px' }}>
                Your Cart
              </Typography>
              <List>
                {cart.map(item => (
                  <ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                    <ListItemText
                      primary={item.name}
                      secondary={`$${(parseFloat(item.price.replace('$', '')) * (item.quantity || 1)).toFixed(2)}`}
                    />

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>

                      <Button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        sx={{
                          backgroundColor: 'transparent',
                          color: '#019376',
                          padding: '5px 10px',
                          '&:hover': {
                            backgroundColor: '#017263',
                            color: '#fff',
                          },
                          minWidth: '30px',
                          height: '30px',
                        }}
                      >
                        +
                      </Button>
                      <Typography variant="body2" sx={{ margin: '0 10px' }}>
                        {item.quantity || 1}
                      </Typography>
                       <Button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={item.quantity === 1}
                        sx={{
                          backgroundColor: 'transparent',
                          color: '#019376',
                          padding: '5px 10px',
                          '&:hover': {
                            backgroundColor: '#017263',
                            color: '#fff',
                          },
                          minWidth: '30px',
                          height: '30px',
                        }}
                      >
                        -
                      </Button>
                    </Box>

                    <Button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      sx={{
                        backgroundColor: '#e57373',
                        color: '#fff',
                        padding: '5px 10px',
                        '&:hover': {
                          backgroundColor: '#d32f2f',
                        },
                        marginLeft: '10px',
                      }}
                    >
                      < DeleteIcon />
                    </Button>
                  </ListItem>
                ))}
              </List>

              <Box
                sx={{
                  width: '100%',
                  padding: '15px 20px',
                  backgroundColor: '#019376',
                  borderRadius: '10px',
                  color: '#fff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '20px',
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Checkout
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  ${totalPrice}
                </Typography>
              </Box>
            </>
          ) : (
            <Box
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}
            >
              <img
                src={ErrorImg}
                alt="Empty Cart"
                style={{ width: '50%', height: '50%', marginBottom: '20px' }}
              />
              <Typography variant="body1" sx={{ fontSize: '16px', color: '#757575' }}>
                No products found
              </Typography>

              <Box
                sx={{
                  width: '100%',
                  padding: '15px 20px',
                  backgroundColor: '#019376',
                  borderRadius: '10px',
                  color: '#fff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '20px',
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Checkout
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  ${totalPrice}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default AddToCart;