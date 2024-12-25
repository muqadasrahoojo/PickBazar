import React, { useState } from 'react';
import { Box, Drawer, CssBaseline, Toolbar, List, ListItem, ListItemText, ListItemIcon, Grid, Card, CardContent, Typography, Collapse, Button, CardMedia, Badge } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import { Icon } from '@iconify/react';
import fluentFoodApple from '@iconify/icons-fluent/food-apple-20-regular';
import meatOutline from '@iconify/icons-mdi/meat-outline';

const drawerWidth = 240;

export default function StickySidebar() {
  const categories = [
    {
      name: 'Fruits & Vegetables',
      items: ['Apples', 'Bananas', 'Carrots'],
      icon: (
        <Icon
          icon={fluentFoodApple}
          style={{ marginRight: '4px', fontSize: '24px' }}
        />
      ),
    },
    {
      name: 'Meat & Fish',
      items: ['Chicken', 'Salmon', 'Tuna'],
      icon: (
        <Icon
          icon={meatOutline}
          style={{ marginRight: '4px', fontSize: '24px' }}
        />
      ),
    },
    { name: 'Snacks', items: ['Chips', 'Cookies', 'Nuts'], icon: <Icon icon="ph:coffee" style={{ fontSize: '20px', marginRight: '8px' }} /> },
    { name: 'Pet Care', items: ['Dog Food', 'Cat Food', 'Litter'], icon: <Icon icon="ph:bowl-food" style={{ fontSize: '20px', marginRight: '8px' }} /> },
    { name: 'Home & Cleaning', items: ['Detergents', 'Wipes', 'Sponges'], icon: <Icon icon="healthicons:cleaning-outline" style={{ fontSize: '28px', marginRight: '8px' }} /> },
    { name: 'Dairy', items: ['Milk', 'Cheese', 'Yogurt'], icon: <Icon icon="carbon:bottles-02" style={{ fontSize: '25px', marginRight: '8px' }} /> },
    { name: 'Cooking', items: ['Olive Oil', 'Spices', 'Rice'], icon: <Icon icon="ph:cooking-pot-light" style={{ fontSize: '25px', marginRight: '8px' }} /> },
    { name: 'Breakfast', items: ['Cereal', 'Oatmeal', 'Eggs'], icon: <Icon icon="circum:burger" style={{ fontSize: '25px', marginRight: '8px' }} /> },
    { name: 'Beverage', items: ['Juices', 'Soda', 'Water'], icon: <Icon icon="game-icons:wine-glass" style={{ fontSize: '25px', marginRight: '8px' }} /> },
    { name: 'Health & Beauty', items: ['Shampoo', 'Toothpaste', 'Cream'], icon: <Icon icon="tabler:globe" style={{ fontSize: '25px', marginRight: '8px' }} /> },
  ];

  // State to track the currently open category and selected category
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
    setSelectedCategory(category);
  };



  const images = [
    "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/Apples.jpg",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&w=1920&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F3%2Fblueberries.jpg&w=1920&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F4%2FBrusselsSprouts.jpg&w=1920&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fclementines.jpg&w=1920&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F7%2FCorn.jpg&w=1920&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F8%2FCucumber.jpg&w=1920&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F10%2FDates.jpg&w=1920&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F11%2FFrenchGreenBeans.jpg&w=1920&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F12%2FGreenBeans.jpg&w=1920&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F13%2FGreenLimes.jpg&w=1920&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F14%2FMangoes.jpg&w=1920&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2FMiniPeppers.jpg&w=1920&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F16%2Fpears.jpg&w=1920&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F17%2FPeeled-Carrots.jpg&w=1920&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F18%2FRedCherries.jpg&w=1920&q=75",
    "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F19%2Fstrawberry.jpg&w=640&q=75",
    ""
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'sticky',
            top: 0,
            transition: 'all 0.8s ease',
          },
        }}
      >
        <Toolbar />
        <List>
          {categories.map((category) => (
            <div key={category.name}>
              <ListItem
                button
                onClick={() => handleClick(category.name)}
                sx={{
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: selectedCategory === category.name ? '#019376' : 'black',
                    fontSize: '20px',
                  }}
                >
                  {category.icon}
                </ListItemIcon>
                <ListItemText
                  primary={category.name}
                  sx={{
                    color: selectedCategory === category.name ? '#019376' : 'black',
                    fontSize: '14px',
                  }}
                />
                {openCategory === category.name ? (
                  <ExpandLess
                    sx={{
                      color: selectedCategory === category.name ? '#019376' : 'black',
                    }}
                  />
                ) : (
                  <ExpandMore
                    sx={{
                      color: selectedCategory === category.name ? '#019376' : 'black',
                    }}
                  />
                )}
              </ListItem>
              <Collapse in={openCategory === category.name} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {category.items.map((item) => (
                    <ListItem button sx={{ pl: 4 }} key={item}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ backgroundColor: '#f3f4f6', flexGrow: 1, p: 3, overflowY: 'auto', maxHeight: '100vh' }}>
        <Toolbar />
        <Grid container spacing={2}>
          {/* Generate Cards with dynamic images */}
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={2} lg={2} key={index}>
              <Card>
                <CardContent>
                  {/* Image */}
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  />
                  {/* Discount Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 1,
                      right: 10,
                      background: '#f0c040',
                      color: '#fff',
                      padding: '4px 8px',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      // color: '#8707890',
                    }}
                  >
                    20%
                  </div>
                  {/* Product Information */}
                  <Typography variant="h6" style={{ marginTop: '8px' }}>
                    Product {index + 1}
                  </Typography>
                  <Typography variant="body2">1lb</Typography>
                  {/* Price Section */}
                  <Typography variant="body2" style={{ textDecoration: 'line-through', color: 'gray' }}>
                    $2.00
                  </Typography>
                  <Typography variant="h6" style={{ color: '#019376', fontWeight: 'bold' }}>
                    $1.60
                  </Typography>
                  {/* Cart Button */}
                  <button
                    style={{
                      marginTop: '8px',
                      background: '#019376',
                      color: '#fff',
                      padding: '8px 16px',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      width: '100%',
                    }}
                  >
                    Add to Cart
                  </button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>





    </Box>
  );
}

