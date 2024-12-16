import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import heroSectionImg from '../../assets/Imgs/Hero-Img.jpg';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const HeroSection = () => {
  return (
    <Box

      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${heroSectionImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
      }}

    >
      <Box
        sx={{
          position: 'absolute',
          top: '43%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'black',
        }}
      >


        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bolder',
            marginBottom: '30px',
            color: '#1f2937',
            fontSize: {
              xs: '18px',
              sm: '22px',
              md: '28px',
              lg: '45px',
            },
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            lineHeight: 1.2,
            textAlign: 'center',
          }}
        >
          Groceries Delivered in 90 Minutes
        </Typography>

        <Typography
          variant="p"
          sx={{
            fontSize: {
              xs: '16px',
              sm: '18px',
              md: '20px',
              lg: '17px',
            },

          }}
        >
          Get your healthy foods & snacks delivered at your doorsteps all day every day
        </Typography>


      </Box>

      <Box sx={{
        marginTop: {
          xs: '7%',
          sm: '7%',
          md: '7%',
          lg: '10%'
        }
      }} className=' d-flex justify-content-center'>
        <Paper
          component="form"
          sx={{

            display: 'flex',
            alignItems: 'center',
            width: '620px',
            borderRadius: '5px 0px 0px 5px',
            boxShadow: "0 5px 6px rgba(167, 157, 157, 0.2)",
            // boxShadow: 'none',
            padding: '2px 10px',
            backgroundColor: '#ffffff',
            '&:focus-within': {
              border: '1px solid #019376',
            },


          }}
        >
          <InputBase
            sx={{
              flex: 1,
              fontSize: '14px',
              color: '#000',
              paddingLeft: '10px'
            }}
            placeholder="Search your products from here"
            inputProps={{ 'aria-label': 'search products' }}
          />
        </Paper>
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            backgroundColor: '#019376',
            '&:hover': {
              backgroundColor: '#017a5b',
            },
          }}
        >
          <SearchIcon sx={{ color: '#fff' }} />
          <Typography sx={{ color: '#fff', fontWeight: 'bold', p: '10px' }} variant="button">
            Search
          </Typography>
        </Button>
      </Box>

    </Box>
  );
};




export default HeroSection;




