import React, { useState } from 'react';
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  IconButton,
  useMediaQuery,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Icon } from '@iconify/react';
import fluentFoodApple from '@iconify/icons-fluent/food-apple-20-regular';
import meatOutline from '@iconify/icons-mdi/meat-outline';
import { Menu } from '@mui/icons-material';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';



const drawerWidth = 240;

const ProductList = ({ selectedCategory }) => {
  const allProducts = [
    { id: 1, name: 'Apples', category: 'Fruits & Vegetables', image: 'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/Apples.jpg', price: '$2.50' },
    { id: 2, name: 'Baby Spinach', category: 'Fruits & Vegetables', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&w=1920&q=75', price: '$3.00' },
    { id: 3, name: 'Blueberries', category: 'Fruits & Vegetables', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F3%2Fblueberries.jpg&w=1920&q=75', price: '$4.20' },
    { id: 4, name: 'Brussels Sprouts', category: 'Fruits & Vegetables', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F4%2FBrusselsSprouts.jpg&w=1920&q=75', price: '$5.50' },
    // { id: 5, name: 'Clementines', category: 'Fruits & Vegetables', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fclementines.jpg&w=1920&q=75', price: '$3.80' },
    { id: 5, name: 'Clementines', category: 'Fruits & Vegetables', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fclementines.jpg&w=1920&q=75', price: '$3.80' },
    { id: 6, name: 'Corn', category: 'Fruits & Vegetables', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F7%2FCorn.jpg&w=1920&q=75', price: '$2.30' },
    { id: 7, name: 'Cucumber', category: 'Fruits & Vegetables', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F8%2FCucumber.jpg&w=1920&q=75', price: '$2.50' },
    { id: 8, name: 'Dates', category: 'Fruits & Vegetables', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F10%2FDates.jpg&w=1920&q=75', price: '$6.20' },
    { id: 9, name: 'French Green Beans', category: 'Fruits & Vegetables', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F11%2FFrenchGreenBeans.jpg&w=1920&q=75', price: '$4.00' },
    { id: 10, name: 'Green Beans', category: 'Fruits & Vegetables', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F12%2FGreenBeans.jpg&w=1920&q=75', price: '$4.50' },
    { id: 11, name: 'Green Limes', category: 'Fruits & Vegetables', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F13%2FGreenLimes.jpg&w=1920&q=75', price: '$3.90' },
    { id: 12, name: 'Mangoes', category: 'Fruits & Vegetables', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F14%2FMangoes.jpg&w=1920&q=75', price: '$7.00' },
    { id: 13, name: 'Mini Peppers', category: 'Fruits & Vegetables', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2FMiniPeppers.jpg&w=1920&q=75', price: '$5.60' },
    { id: 14, name: 'Pears', category: 'Fruits & Vegetables', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F16%2Fpears.jpg&w=1920&q=75', price: '$3.00' },
    { id: 15, name: 'Peeled Carrots', category: 'Fruits & Vegetables', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F17%2FPeeled-Carrots.jpg&w=1920&q=75', price: '$9.80' },
    { id: 16, name: 'Belmont Cream', category: 'Snacks', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F199%2Fkhong_guan_orange_cream.jpg&w=1920&q=75', price: '$8.80' },
    { id: 17, name: 'Avo Derm Grain Free', category: 'Pet Care', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F266%2Fgrain_free.jpg&w=1920&q=75', price: '$2.80' },
    { id: 18, name: 'Hills Science Diet', category: 'Pet Care', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F268%2Finstinct_the_raw.jpg&w=1920&q=75', price: '$2.8' },
    { id: 19, name: 'Hill Mini Pack Mix', category: 'Snacks', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F196%2FHill_Biscuits_Mini_Pack_Mix_.jpg&w=1920&q=75', price: '$8.45' },
    { id: 20, name: 'Khong Guan Marie', category: 'Snacks', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F200%2Fkhong_guan_premium_marie.jpg&w=1920&q=75', price: '$9.80' },
    { id: 21, name: 'Avo Derm Grain Free', category: 'Pet Care', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F266%2Fgrain_free.jpg&w=1920&q=75', price: '$6.80' },
    { id: 22, name: 'Hills Science Diet', category: 'Pet Care', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F268%2Finstinct_the_raw.jpg&w=1920&q=75', price: '$6.80' },
    { id: 23, name: 'Pro Diet Balance', category: 'Pet Care', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F271%2Fpro_diet.jpg&w=1920&q=75', price: '$5.80' },
    { id: 24, name: 'Fish', category: 'Meat & Fish', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F183%2FSignatureSalmon_fstp4m.jpg&w=1920&q=75', price: '$2.80' },
    { id: 25, name: 'Signature Salmon', category: 'Meat & Fish', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F184%2Fcodfillet_u0mti1.jpg&w=1920&q=75', price: '$8.80' },
    { id: 26, name: 'Cod Fillet', category: 'Meat & Fish', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F185%2Fswordfish_smniuv.jpg&w=1920&q=75', price: '$5.80' },
    { id: 27, name: 'Barney Butter', category: 'Dairy', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F305%2Fbutter_barney.jpg&w=1920&q=75', price: '$7.80' },
    { id: 28, name: 'Kirkland Signature', category: 'Dairy', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F306%2Fbutter_kirkland.jpg&w=1920&q=75', price: '$8.80' },
    { id: 29, name: 'Nikki S Milk', category: 'Dairy', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F322%2Fmilk_living_planet.jpg&w=1920&q=75', price: '$3.80' },
    { id: 30, name: 'Purina Veterinary Diets', category: 'Pet Care', image: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F272%2Fpurina_pro_plan.jpg&w=1920&q=75', price: '$8.80' },
  ];


  const filteredProducts = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  return (
    <div className="mx-5">
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} lg={2} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                  <Typography variant="body1" sx={{ color: '#019376', fontWeight: 'bold' }}>
                    {product.price}
                  </Typography>
                  <Button
                    variant="submit"
                    sx={{
                      color: '#019376',
                      border: '1px solid rgb(211, 210, 210)',
                      borderRadius: '16px',
                      gap: '4px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#019376',
                        color: 'white',
                      },
                    }}
                  >
                    <ShoppingBasketIcon style={{ fontSize: '18px' }} /> Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default function DualDrawerSidebar() {
  const categories = [
    { name: 'Fruits & Vegetables', items: ['Apples', 'Bananas', 'Carrots'], icon: <Icon icon={fluentFoodApple} style={{ marginRight: '4px', fontSize: '24px' }} /> },
    { name: 'Meat & Fish', items: ['Chicken', 'Salmon', 'Tuna'], icon: <Icon icon={meatOutline} style={{ marginRight: '4px', fontSize: '24px' }} /> },
    { name: 'Snacks', items: ['Chips', 'Cookies', 'Nuts'], icon: <Icon icon="ph:coffee" style={{ fontSize: '20px', marginRight: '8px' }} /> },
    { name: 'Pet Care', items: ['Dog Food', 'Cat Food', 'Litter'], icon: <Icon icon="ph:bowl-food" style={{ fontSize: '20px', marginRight: '8px' }} /> },
    { name: 'Dairy', items: ['Milk', 'Cheese', 'Yogurt'], icon: <Icon icon="carbon:bottles-02" style={{ fontSize: '25px', marginRight: '8px' }} /> },
    { name: 'Home & Cleaning', items: ['Detergents', 'Wipes', 'Sponges'], icon: <Icon icon="healthicons:cleaning-outline" style={{ fontSize: '28px', marginRight: '8px' }} /> },
    { name: 'Cooking', items: ['Olive Oil', 'Spices', 'Rice'], icon: <Icon icon="ph:cooking-pot-light" style={{ fontSize: '25px', marginRight: '8px' }} /> },
    { name: 'Breakfast', items: ['Cereal', 'Oatmeal', 'Eggs'], icon: <Icon icon="circum:burger" style={{ fontSize: '25px', marginRight: '8px' }} /> },
    { name: 'Beverage', items: ['Juices', 'Soda', 'Water'], icon: <Icon icon="game-icons:wine-glass" style={{ fontSize: '25px', marginRight: '8px' }} /> },
    { name: 'Health & Beauty', items: ['Shampoo', 'Toothpaste', 'Cream'], icon: <Icon icon="tabler:globe" style={{ fontSize: '25px', marginRight: '8px' }} /> },
  ];

  const [openCategory, setOpenCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
    setSelectedCategory(category);
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <List>
      {categories.map((category) => (
        <div key={category.name}>
          <ListItem button onClick={() => handleClick(category.name)}>
            <ListItemIcon>{category.icon}</ListItemIcon>
            <ListItemText primary={category.name} />
            {openCategory === category.name ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openCategory === category.name} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {category.items.map((item) => (
                <ListItem button key={item} sx={{ pl: 4 }}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {isLargeScreen && (
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
          {drawerContent}
        </Drawer>
      )}

      <Box component="main" sx={{ backgroundColor: '#f3f4f6', flexGrow: 1, p: 1, height: '100vh', overflowY: 'auto' }}>
        <Toolbar />
        {isSmallScreen && (

          <Box
            className='mb-5'
            sx={{
              display: 'flex',
              justifyContent: 'left',
              mb: 2,
              position: 'sticky',
              top: '70px',
              zIndex: 1,
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleMobileDrawerToggle}
              sx={{
                border: '1px solid #d0d0d0',
                backgroundColor: '#f9f9f9', 
                color: '#333', 
                borderRadius: '4px', 
                padding: '4px 12px', 
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  backgroundColor: '#e0e0e0', 
                },
              }}
            >
              <TuneOutlinedIcon /> <span style={{ fontSize: '14px', fontWeight: 500 }}>Filter</span>
            </IconButton>
          </Box>

        )}

        <ProductList selectedCategory={selectedCategory} />
      </Box>

      {isSmallScreen && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleMobileDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            top: '69px',
            height: `calc(100vh - 64px)`,
            boxSizing: 'border-box',
          },
        }}
        >
          {drawerContent}
        </Drawer>
      )}
    </Box>
  );
}
