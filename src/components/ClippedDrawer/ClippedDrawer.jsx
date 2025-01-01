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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Slices/CartSlice';
import { Icon } from '@iconify/react';
import fluentFoodApple from '@iconify/icons-fluent/food-apple-20-regular';
import meatOutline from '@iconify/icons-mdi/meat-outline';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Apples from '../../assets/Imgs/Apples.webp';
import BabySpinach from '../../assets/Imgs/BabySpinach.webp';
import BrusselsSprouts from '../../assets/Imgs/BrusselsSprouts.webp';
import CelerySticks from '../../assets/Imgs/CelerySticks.webp';
import Cucumber from '../../assets/Imgs/Cucumber.webp';
import Dates from '../../assets/Imgs/Dates.webp';
import Everyday_Essentials_Wholemeal_Bread from '../../assets/Imgs/Everyday_Essentials_Wholemeal_Bread.webp';
import Farmhouse_Multigrain_Batch_loaf_purple_pack from '../../assets/Imgs/Farmhouse_Multigrain_Batch_loaf_purple_pack.webp';
import FrenchGreenBeans from '../../assets/Imgs/FrenchGreenBeans.webp';
import GreenBeans from '../../assets/Imgs/GreenBeans.webp';
import Mangoes from '../../assets/Imgs/Mangoes.webp';
import MiniPeppers from '../../assets/Imgs/MiniPeppers.webp';
import Pears from '../../assets/Imgs/pears.webp';
import PeeledCarrots from '../../assets/Imgs/Peeled-Carrots.webp';
import BelmontCream from '../../assets/Imgs/belmont_custard_cream.webp';
import AvoDermGrainFree from '../../assets/Imgs/grain_free.webp';
import HillsScienceDiet from '../../assets/Imgs/hills_science_diet.webp';
import HillMiniPackMix from '../../assets/Imgs/Hill_Biscuits_Mini_Pack_Mix_.webp';
import KhongGuanMarie from '../../assets/Imgs/khong_guan_orange_cream.webp';
import instinct_the_raw from '../../assets/Imgs/instinct_the_raw.webp';
import ProDietBalance from '../../assets/Imgs/pro_diet.webp';
import SignatureSalmon_fstp4m from '../../assets/Imgs/SignatureSalmon_fstp4m.webp';
import codfillet_u0mti1 from '../../assets/Imgs/codfillet_u0mti1.webp';
import butter_barney from '../../assets/Imgs/butter_barney.webp';
import butter_kirkland from '../../assets/Imgs/butter_kirkland.webp';
import milk_cream_nammilk from '../../assets/Imgs/milk_cream_nammilk.webp';
import purina_pro_plan from '../../assets/Imgs/purina_pro_plan.webp';
import Fish from '../../assets/Imgs/TilapiaFillet_a2urhk.webp';
import Clementines from '../../assets/Imgs/clementines.webp';
import air_freshner_acana_ozmo from '../../assets/Imgs/air_freshner_acana_ozmo.webp';
import air_freshner_air_wick_essential_oils from '../../assets/Imgs/air_freshner_air_wick_essential_oils.webp';
import air_freshner_ambipur_air_sweet_citrus from '../../assets/Imgs/air_freshner_ambipur_air_sweet_citrus&zest.webp';
import oil_clover from '../../assets/Imgs/oil_clover_valley.webp';
import oil_san from '../../assets/Imgs/oil_san_lucas.webp';
import chefa_choice_bamboo_rice from '../../assets/Imgs/chefa_choice_bamboo_rice.webp';
import _Seeded_Bloomer from '../../assets/Imgs/roberts_Seriously_Seeded_Bloomer.webp';
import gnc_aloe_vera_moisturizing_cream from '../../assets/Imgs/gnc_aloe_vera_moisturizing_cream.webp';
import bubble_bath from '../../assets/Imgs/attitude_night_bubble_bath.webp';
import eo_lotion from '../../assets/Imgs/eo_body_lotion.webp';
import javarama_classic from '../../assets/Imgs/javarama_classic.webp';
import starbucks_house_blend from '../../assets/Imgs/starbucks_house_blend.webp';
import starbucks_vanilla_latte from '../../assets/Imgs/starbucks_vanilla_latte.webp';
import instincttheraw from '../../assets/Imgs/instinct_the_raw.webp';







const drawerWidth = 240;

const ProductList = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const allProducts = [
    { id: 1, name: 'Apples', category: 'Fruits & Vegetables', image: Apples, price: '$2.50' },
    { id: 2, name: 'Baby Spinach', category: 'Fruits & Vegetables', image: BabySpinach, price: '$3.00' },
    { id: 3, name: 'Blueberries', category: 'Fruits & Vegetables', image: BrusselsSprouts, price: '$4.20' },
    { id: 4, name: 'Brussels Sprouts', category: 'Fruits & Vegetables', image: CelerySticks, price: '$5.50' },
    { id: 5, name: 'Clementines', category: 'Fruits & Vegetables', image: Clementines, price: '$3.80' },
    { id: 6, name: 'Cucumber', category: 'Fruits & Vegetables', image: Cucumber, price: '$2.50' },
    { id: 7, name: 'Dates', category: 'Fruits & Vegetables', image: Dates, price: '$6.20' },
    { id: 8, name: 'French Green Beans', category: 'Fruits & Vegetables', image: FrenchGreenBeans, price: '$4.00' },
    { id: 9, name: 'Green Beans', category: 'Fruits & Vegetables', image: GreenBeans, price: '$4.50' },
    { id: 10, name: 'Mangoes', category: 'Fruits & Vegetables', image: Mangoes, price: '$7.00' },
    { id: 11, name: 'Mini Peppers', category: 'Fruits & Vegetables', image: MiniPeppers, price: '$5.60' },
    { id: 12, name: 'Pears', category: 'Fruits & Vegetables', image: Pears, price: '$3.00' },
    { id: 13, name: 'Peeled Carrots', category: 'Fruits & Vegetables', image: PeeledCarrots, price: '$9.80' },
    { id: 14, name: 'Belmont Cream', category: 'Snacks', image: BelmontCream, price: '$8.80' },
    { id: 15, name: 'Avo Derm Grain Free', category: 'Pet Care', image: AvoDermGrainFree, price: '$2.80' },
    { id: 16, name: 'Hills Science Diet', category: 'Pet Care', image: HillsScienceDiet, price: '$2.8' },
    { id: 17, name: 'Hill Mini Pack Mix', category: 'Snacks', image: HillMiniPackMix, price: '$8.45' },
    { id: 18, name: 'Khong Guan Marie', category: 'Snacks', image: KhongGuanMarie, price: '$9.80' },
    { id: 19, name: 'instinct_the_raw', category: 'Pet Care', image: instinct_the_raw, price: '$6.80' },
    { id: 20, name: 'Pro Diet Balance', category: 'Pet Care', image: ProDietBalance, price: '$5.80' },
    { id: 21, name: 'Fish', category: 'Meat & Fish', image: Fish, price: '$2.80' },
    { id: 22, name: 'Signature Salmon', category: 'Meat & Fish', image: SignatureSalmon_fstp4m, price: '$8.80' },
    { id: 23, name: 'Cod Fillet', category: 'Meat & Fish', image: codfillet_u0mti1, price: '$5.80' },
    { id: 24, name: 'Barney Butter', category: 'Dairy', image: butter_barney, price: '$7.80' },
    { id: 25, name: 'Kirkland Signature', category: 'Dairy', image: butter_kirkland, price: '$8.80' },
    { id: 26, name: 'Nikki S Milk', category: 'Dairy', image: milk_cream_nammilk, price: '$3.80' },
    { id: 27, name: 'Purina Veterinary Diets', category: 'Pet Care', image: purina_pro_plan, price: '$8.80' },
    { id: 28, name: 'loaf_purple_pack', category: 'Breakfast', image: Farmhouse_Multigrain_Batch_loaf_purple_pack, price: '$6.20' },
    { id: 29, name: 'Wholemeal_Bread', category: 'Breakfast', image: Everyday_Essentials_Wholemeal_Bread, price: '$7.20' },
    { id: 30, name: 'Seeded Bloomer', category: 'Breakfast', image: _Seeded_Bloomer, price: '$9.20' },
    { id: 31, name: 'Hill_Biscuits', category: 'Snacks', image: HillMiniPackMix, price: '$8.20' },
    { id: 32, name: 'air_freshner', category: 'Home & Cleaning', image: air_freshner_acana_ozmo, price: '$7.20' },
    { id: 33, name: 'air_wick_essential_oils', category: 'Home & Cleaning', image: air_freshner_air_wick_essential_oils, price: '$5.20' },
    { id: 34, name: 'air-ambipur', category: 'Home & Cleaning', image: air_freshner_ambipur_air_sweet_citrus, price: '$4.20' },
    { id: 35, name: 'oil_clover', category: 'Cooking', image: oil_clover, price: '$6.20' },
    { id: 36, name: 'oil_san', category: 'Cooking', image: oil_san, price: '$9.20' },
    { id: 37, name: 'chefa_rice', category: 'Cooking', image: chefa_choice_bamboo_rice, price: '$4.20' },
    { id: 38, name: 'Aloevera', category: 'Health & Beauty', image: gnc_aloe_vera_moisturizing_cream, price: '$4.20' },
    { id: 39, name: 'Bubble', category: 'Health & Beauty', image: bubble_bath, price: '$8.20' },
    { id: 40, name: 'Eo_lotion', category: 'Health & Beauty', image: eo_lotion, price: '$3.20' },
    { id: 41, name: 'Instinct_the_raw', category: 'Beverage', image: instincttheraw, price: '$3.20' },
    { id: 42, name: 'Javarama_classic', category: 'Beverage', image: javarama_classic, price: '$3.20' },
    { id: 43, name: 'starbucks_house_blend', category: 'Beverage', image: starbucks_house_blend, price: '$3.20' },
    { id: 44, name: 'starbucks_vanilla_latte', category: 'Beverage', image: starbucks_vanilla_latte, price: '$3.20' },
  ];


  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setOpenModal(false);
  };

  const filteredProducts = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  return (
    <div className="mx-5">
      {/* <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} lg={2} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={product.image}
                alt={product.name}
                onClick={() => handleCardClick(product)}
                style={{
                  cursor: 'pointer',
                  width: '200px',
                  height: '250px',
                  objectFit: 'cover',
                  margin: '0 auto',
                }}
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
                    onClick={() => dispatch(addToCart(product))}
                  >
                    <ShoppingBasketIcon style={{ fontSize: '18px' }} /> Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}

      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid
            item
            xs={12}  
            sm={6}  
            md={4}  
            lg={3}   
            xl={2}   
            key={product.id}
          >
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={product.image}
                alt={product.name}
                onClick={() => handleCardClick(product)}
                style={{
                  cursor: 'pointer',
                  width: '200px',
                  height: '250px',
                  objectFit: 'cover',
                  margin: '0 auto',
                }}
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
                    onClick={() => dispatch(addToCart(product))}
                  >
                    <ShoppingBasketIcon style={{ fontSize: '18px' }} /> Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>



      <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="lg">
        <DialogTitle>
          {selectedProduct?.name}
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img src={selectedProduct?.image} alt={selectedProduct?.name} style={{ width: '100%', height: 'auto' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Price: {selectedProduct?.price}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedProduct?.description}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => handleAddToCart(selectedProduct)}
                sx={{
                  display: 'flex',
                  textAlign: 'center',
                  marginTop: '16px',
                  backgroundColor: '#019376',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#016c4f',
                  },
                }}
              >
                <ShoppingBasketIcon style={{ fontSize: '18px' }} /> Add to Cart
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

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
