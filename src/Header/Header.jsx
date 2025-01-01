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

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        // className="sticky-appbar"
        sx={{
          position: "fixed", 
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1301, 
          backgroundColor: "#FAFAFA",
          color: "#000",
          boxShadow: "none",
        }}
      > <Toolbar>

          <Typography
            variant="h6"
            noWrap
            component="div"

          >
            <img src={Logo} alt="Logo" style={{ height: "30px" }} />
          </Typography>

          <FormControl sx={{ m: 1, width: 160, ml: 1, marginLeft: '30px', display: { xs: "none", sm: "block" } }}>
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

          </Box>

        </Toolbar>
      </AppBar>

    </Box>
  );
}
