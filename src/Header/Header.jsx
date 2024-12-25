import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Badge,
  FormControl,
  Select,
  OutlinedInput,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material/styles";
import Logo from "../../src/assets/Imgs/Logo-new.webp";
import { Icon } from '@iconify/react';
import fluentFoodApple from '@iconify/icons-fluent/food-apple-20-regular';
import './style.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Grocery",
  "Bakery",
  "Makeup",
  "Bags",
  "Clothing",
  "Furniture",
  "Daily Needs",
  "Books",
  "Gadget",
  "Medicine",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function Header() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === "string" ? value.split(",") : value
    );
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="sticky-appbar"

        sx={{
          top: 0,
          zIndex: 1300, 
          backgroundColor: "#FAFAFA",
          color: "#000",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img src={Logo} alt="Logo" style={{ height: "30px" }} />
          </Typography>

          <FormControl sx={{ m: 1, width: 160, ml: 1 , marginLeft: '30px', }}>
            <Select
              multiple
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return (
                    <Typography
                      component="em"
                      sx={{
                        color: "#019376", 
                        display: "flex",
                        alignItems: "center",
                        
                      }}
                    >
                      <Icon
                        icon={fluentFoodApple}
                        style={{ marginRight: "4px", color: "#019376", fontSize: "24px" }}
                        width="24px"
                        height="24px"
                      />
                      Grocery
                    </Typography>
                  );
                }
                return selected.join(", ");
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                height: "38px",
                color: "#019376", 
                "& .MuiOutlinedInput-root": {
                  padding: "4px 3px",
                },
                "& .MuiSelect-icon": {
                  color: "#019376", 
                },
                "& .MuiSelect-filled": {
                  backgroundColor: "transparent", 
                },
                "&:hover": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#019376", 
                  },
                },
              }}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={{
                    color: "#019376", 
                  }}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>


          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <List sx={{ display: "flex", padding: 0 }}>
              <ListItem
                sx={{
                  padding: "10px",
                  cursor: "pointer",
                  "&:hover": { color: "#019376" },
                }}
              >
                <ListItemText primary="Shops" />
              </ListItem>
              <ListItem
                sx={{
                  padding: "10px",
                  cursor: "pointer",
                  "&:hover": { color: "#019376" },
                }}
              >
                <ListItemText primary="Offers" />
              </ListItem>
              <ListItem
                sx={{
                  padding: "10px",
                  cursor: "pointer",
                  "&:hover": { color: "#019376" },
                }}
              >
                <ListItemText primary="Contact" />
              </ListItem>
              <ListItem
                sx={{
                  padding: "10px",
                  cursor: "pointer",
                  "&:hover": { color: "#019376" },
                }}
              >
                <ListItemText primary="Pages" />
                <ArrowDropDownIcon />
              </ListItem>
            </List>

            <Button>
              <Typography
                variant="button"
                sx={{
                  backgroundColor: "#019376",
                  color: "white",
                  padding: "6px 11px",
                  borderRadius: "5px",
                }}
              >
                Join
              </Typography>
            </Button>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
