import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
  Avatar,
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
import { Icon } from "@iconify/react";
import fluentFoodApple from "@iconify/icons-fluent/food-apple-20-regular";
import ResponsiveDialog from "../../src/auth/SignIn/SignIn";
import SignUpDialog from "../../src/auth/SignIn/SignUp";
import { Link } from "react-router-dom";
import ProfileImage from "../../src/assets/Imgs/man-thumbnail.webp";

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

export default function Header() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [pagesAnchorEl, setPagesAnchorEl] = React.useState(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = React.useState(null);
  const [openLoginDialog, setOpenLoginDialog] = React.useState(false);
  const [openSignUpDialog, setOpenSignUpDialog] = React.useState(false);
  const [user, setUser] = React.useState(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    return savedUser || null;
  });

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const handleOpenLoginDialog = () => setOpenLoginDialog(true);
  const handleCloseLoginDialog = () => setOpenLoginDialog(false);
  const handleOpenSignUpDialog = () => setOpenSignUpDialog(true);
  const handleCloseSignUpDialog = () => setOpenSignUpDialog(false);

  const handleRegisterSuccess = (userData) => {
    const userDataWithAvatar = { ...userData, avatar: ProfileImage };
    localStorage.setItem("user", JSON.stringify(userDataWithAvatar));
    setUser(userDataWithAvatar);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    handleProfileMenuClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
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
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <img src={Logo} alt="Logo" style={{ height: "30px" }} />
          </Typography>

          <FormControl
            sx={{
              m: 1,
              width: 160,
              ml: 1,
              marginLeft: "30px",
              display: { xs: "none", sm: "block" },
            }}
          >
            <Select
              multiple
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) =>
                selected.length === 0 ? (
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
                      style={{
                        marginRight: "4px",
                        color: "#019376",
                        fontSize: "24px",
                      }}
                    />
                    Grocery
                  </Typography>
                ) : (
                  selected.join(", ")
                )
              }
              MenuProps={MenuProps}
              sx={{
                height: "38px",
                color: "#019376",
                "& .MuiOutlinedInput-root": {
                  padding: "4px 3px",
                },
                "& .MuiSelect-icon": {
                  color: "#019376",
                },
              }}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name} style={{ color: "#019376" }}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <List sx={{ display: "flex", padding: 0 }}>
              <ListItem sx={{ padding: "10px", cursor: "pointer", "&:hover": { color: "#019376" } }}>
                <ListItemText primary="Shops" />
              </ListItem>
              <ListItem sx={{ padding: "10px", cursor: "pointer", "&:hover": { color: "#019376" } }}>
                <ListItemText primary="Offers" />
              </ListItem>
              <ListItem sx={{ padding: "10px", cursor: "pointer", "&:hover": { color: "#019376" } }}>
                <ListItemText primary="Contact" />
              </ListItem>
              <ListItem sx={{ padding: "10px", cursor: "pointer", "&:hover": { color: "#019376" } }} onClick={(event) => setPagesAnchorEl(event.currentTarget)}>
                <ListItemText primary="Pages" />
                <ArrowDropDownIcon />
              </ListItem>
            </List>

            <Menu
              anchorEl={pagesAnchorEl}
              open={Boolean(pagesAnchorEl)}
              onClose={() => setPagesAnchorEl(null)}
            >
              <MenuItem onClick={() => setPagesAnchorEl(null)}>Flash Sale</MenuItem>
              <MenuItem onClick={() => setPagesAnchorEl(null)}>Manufacturers/Publishers</MenuItem>
              <MenuItem onClick={() => setPagesAnchorEl(null)}>Authors</MenuItem>
              <MenuItem onClick={() => setPagesAnchorEl(null)}>FAQ</MenuItem>
              <MenuItem onClick={() => setPagesAnchorEl(null)}>Terms and Conditions</MenuItem>
            </Menu>
          </Box>

          <Box sx={{ ml: 2 }}>
            {user ? (
              <Avatar src={user.avatar} onClick={handleProfileMenuOpen} sx={{ cursor: "pointer" }} />
            ) : (
              <Button
                variant="contained"
                sx={{ backgroundColor: "#019376", color: "white" }}
                onClick={handleOpenLoginDialog}
              >
                Join
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <ResponsiveDialog
        open={openLoginDialog}
        handleClose={handleCloseLoginDialog}
        handleSignUpOpen={handleOpenSignUpDialog}
      />

      <SignUpDialog
        open={openSignUpDialog}
        handleClose={handleCloseSignUpDialog}
        handleRegisterSuccess={handleRegisterSuccess}
      />

      <Menu
        anchorEl={profileMenuAnchorEl}
        open={Boolean(profileMenuAnchorEl)}
        onClose={handleProfileMenuClose}
      >
        <MenuItem onClick={handleProfileMenuClose}>
          <Link to="./profile" style={{ textDecoration: "none", color: "inherit" }}>
            Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>My Orders</MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>My Wishlists</MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>Checkout</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}

