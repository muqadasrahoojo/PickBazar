// import React from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Card,
//   TextField,
//   Button,
//   Divider,
//   useMediaQuery,
// } from "@mui/material";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import { useTheme } from "@mui/material/styles";
// import ProfileImage from "../../assets/Imgs/man-thumbnail.webp";

// const ProfilePage = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box
//       sx={{
//         padding: 4,
//         backgroundColor: "#f9f9f9",
//         minHeight: "100vh",
//         paddingBottom: isMobile ? 2 : 4,
//       }}
//     >
//       <Grid container spacing={isMobile ? 2 : 4}>
//         {/* Wallet Points Section */}
//         <Grid item xs={12} md={3}>
//           <Card sx={{ padding: 2 }}>
//             <Typography variant="h6" textAlign="center" fontWeight="bold">
//               Wallet Points
//             </Typography>
//             <Divider sx={{ my: 2 }} />
//             <Grid container spacing={1}>
//               <Grid item xs={4} textAlign="center">
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   0
//                 </Typography>
//                 <Typography variant="body2">Total</Typography>
//               </Grid>
//               <Grid item xs={4} textAlign="center">
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   0
//                 </Typography>
//                 <Typography variant="body2">Used</Typography>
//               </Grid>
//               <Grid item xs={4} textAlign="center">
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   0
//                 </Typography>
//                 <Typography variant="body2">Available</Typography>
//               </Grid>
//             </Grid>
//           </Card>

//           {/* Navigation Links */}
//           <Card sx={{ marginTop: 2, padding: 2 }}>
//             <Typography variant="body1" fontWeight="bold">
//               Profile
//             </Typography>
//             {[
//               "Change Password",
//               "My Orders",
//               "Downloads",
//               "My Wishlist",
//               "My Questions",
//               "My Refunds",
//               "My Reports",
//               "My Cards",
//               "Need Help",
//             ].map((text, index) => (
//               <Typography variant="body2" sx={{ my: 1 }} key={index}>
//                 {text}
//               </Typography>
//             ))}
//           </Card>
//         </Grid>

//         {/* Profile Section */}
//         <Grid item xs={12} md={9}>
//           <Card sx={{ padding: 2 }}>
//             <Typography variant="h6" fontWeight="bold">
//               Profile
//             </Typography>
//             <Divider sx={{ my: 2 }} />

//             {/* Upload Section */}
//             <Box
//               sx={{
//                 border: "2px dashed #ccc",
//                 borderRadius: 1,
//                 padding: 2,
//                 textAlign: "center",
//                 marginBottom: 2,
//               }}
//             >
//               <CloudUploadIcon fontSize="large" sx={{ color: "#666" }} />
//               <Typography variant="body2" color="textSecondary">
//                 Upload an image or drag and drop
//               </Typography>
//               <Typography variant="caption">PNG, JPG</Typography>
//             </Box>

//             <Box
//               display="flex"
//               flexDirection={isMobile ? "column" : "row"}
//               alignItems="center"
//               marginBottom={2}
//             >
//               <img
//                 src={ProfileImage}
//                 alt="Profile"
//                 style={{
//                   width: 80,
//                   height: 80,
//                   borderRadius: "50%",
//                   marginRight: isMobile ? 0 : 16,
//                   marginBottom: isMobile ? 16 : 0,
//                 }}
//               />
//               <Typography variant="subtitle1" fontWeight="bold">
//                 John Doe
//               </Typography>
//             </Box>

//             {/* Form Fields */}
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   defaultValue="John Doe"
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Bio"
//                   placeholder="Write something about yourself"
//                   variant="outlined"
//                   multiline
//                   rows={4}
//                 />
//               </Grid>
//             </Grid>

//             {/* Save Button */}
//             <Box textAlign="right" marginTop={2}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{ width: isMobile ? "100%" : "auto", backgroundColor:"#009F7F", color:"white" }}
//               >
//                 Save 
//               </Button>
//             </Box>
//           </Card>

//           {/* Email Section */}
//           <Card sx={{ marginTop: 4, padding: 2 }}>
//             <Typography variant="h6" fontWeight="bold">
//               Email
//             </Typography>
//             <Divider sx={{ my: 2 }} />
//             <Box
//               display="flex"
//               flexDirection={isMobile ? "column" : "row"}
//               alignItems="center"
//             >
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 defaultValue="admin@demo.com"
//                 sx={{ marginBottom: isMobile ? 2 : 0 }}
//               />
//               <Button
//                 variant="contained"
//                 color="white"
//                 sx={{ marginLeft: isMobile ? 0 : 2, width: isMobile ? "100%" : "auto", backgroundColor:"#009F7F", color:"white" }}
//               >
//                 Update
//               </Button>
//             </Box>
//           </Card>

//           {/* Contact Number Section */}
//           <Card sx={{ marginTop: 4, padding: 2 }}>
//             <Typography variant="h6" fontWeight="bold">
//               Contact Number
//             </Typography>
//             <Divider sx={{ my: 2 }} />
//             <Box
//               display="flex"
//               flexDirection={isMobile ? "column" : "row"}
//               alignItems="center"
//             >
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 defaultValue="+1 (936) 514-1641"
//                 sx={{ marginBottom: isMobile ? 2 : 0 }}
//               />
//               <Button
//                 variant="text"
//                 color="primary"
//                 sx={{ marginLeft: isMobile ? 0 : 2, width: isMobile ? "100%" : "auto" }}
//               >
//                 + Update
//               </Button>
//             </Box>
//           </Card>

//           {/* Addresses Section */}
//           <Card sx={{ marginTop: 4, padding: 2 }}>
//             <Typography variant="h6" fontWeight="bold">
//               Addresses
//             </Typography>
//             <Divider sx={{ my: 2 }} />
//             <Box display="flex" flexDirection="column" gap={2}>
//               <Box>
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   Billing
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   2231 Kidd Avenue, AK, Kipnuk, 99614, United States
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   Shipping
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   2148 Stratford Park, KY, Winchester, 40391, United States
//                 </Typography>
//               </Box>
//               <Button
//                 variant="text"
//                 color="primary"
//                 sx={{ alignSelf: "flex-start", width: isMobile ? "100%" : "auto" }}
//               >
//                 + Add
//               </Button>
//             </Box>
//           </Card>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default ProfilePage;


import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  TextField,
  Button,
  Divider,
  useMediaQuery,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useTheme } from "@mui/material/styles";
import ProfileImage from "../../assets/Imgs/man-thumbnail.webp";

const ProfilePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // State for user data
  const [user, setUser] = useState({
    name: "John Doe",
    bio: "",
    email: "admin@demo.com",
    contact: "+1 (936) 514-1641",
    billingAddress: "2231 Kidd Avenue, AK, Kipnuk, 99614, United States",
    shippingAddress: "2148 Stratford Park, KY, Winchester, 40391, United States",
    walletPoints: { total: 0, used: 0, available: 0 },
  });

  // Example of setting user data after fetching from API or local storage
  useEffect(() => {
    // Example: Fetch user data after login
    // setUser({ ...user, name: fetchedUser.name, bio: fetchedUser.bio });
  }, []);

  const handleUpdateEmail = (event) => {
    // Handle email update logic
    setUser({ ...user, email: event.target.value });
  };

  const handleSave = () => {
    // Handle save logic (e.g., send data to API)
    alert("Profile updated!");
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        paddingBottom: isMobile ? 2 : 4,
      }}
    >
      <Grid container spacing={isMobile ? 2 : 4}>
        {/* Wallet Points Section */}
        <Grid item xs={12} md={3}>
          <Card sx={{ padding: 2 }}>
            <Typography variant="h6" textAlign="center" fontWeight="bold">
              Wallet Points
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={1}>
              <Grid item xs={4} textAlign="center">
                <Typography variant="subtitle1" fontWeight="bold">
                  {user.walletPoints.total}
                </Typography>
                <Typography variant="body2">Total</Typography>
              </Grid>
              <Grid item xs={4} textAlign="center">
                <Typography variant="subtitle1" fontWeight="bold">
                  {user.walletPoints.used}
                </Typography>
                <Typography variant="body2">Used</Typography>
              </Grid>
              <Grid item xs={4} textAlign="center">
                <Typography variant="subtitle1" fontWeight="bold">
                  {user.walletPoints.available}
                </Typography>
                <Typography variant="body2">Available</Typography>
              </Grid>
            </Grid>
          </Card>

          {/* Navigation Links */}
          <Card sx={{ marginTop: 2, padding: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              Profile
            </Typography>
            {[
              "Change Password",
              "My Orders",
              "Downloads",
              "My Wishlist",
              "My Questions",
              "My Refunds",
              "My Reports",
              "My Cards",
              "Need Help",
            ].map((text, index) => (
              <Typography variant="body2" sx={{ my: 1 }} key={index}>
                {text}
              </Typography>
            ))}
          </Card>
        </Grid>

        {/* Profile Section */}
        <Grid item xs={12} md={9}>
          <Card sx={{ padding: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Profile
            </Typography>
            <Divider sx={{ my: 2 }} />

            {/* Upload Section */}
            <Box
              sx={{
                border: "2px dashed #ccc",
                borderRadius: 1,
                padding: 2,
                textAlign: "center",
                marginBottom: 2,
              }}
            >
              <CloudUploadIcon fontSize="large" sx={{ color: "#666" }} />
              <Typography variant="body2" color="textSecondary">
                Upload an image or drag and drop
              </Typography>
              <Typography variant="caption">PNG, JPG</Typography>
            </Box>

            <Box
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              alignItems="center"
              marginBottom={2}
            >
              <img
                src={ProfileImage}
                alt="Profile"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  marginRight: isMobile ? 0 : 16,
                  marginBottom: isMobile ? 16 : 0,
                }}
              />
              <Typography variant="subtitle1" fontWeight="bold">
                {user.name}
              </Typography>
            </Box>

            {/* Form Fields */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  defaultValue={user.name}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Bio"
                  placeholder="Write something about yourself"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={user.bio}
                  onChange={(e) => setUser({ ...user, bio: e.target.value })}
                />
              </Grid>
            </Grid>

            {/* Save Button */}
            <Box textAlign="right" marginTop={2}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: isMobile ? "100%" : "auto",
                  backgroundColor: "#009F7F",
                  color: "white",
                }}
                onClick={handleSave}
              >
                Save
              </Button>
            </Box>
          </Card>

          {/* Email Section */}
          <Card sx={{ marginTop: 4, padding: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Email
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              alignItems="center"
            >
              <TextField
                fullWidth
                variant="outlined"
                value={user.email}
                onChange={handleUpdateEmail}
                sx={{ marginBottom: isMobile ? 2 : 0 }}
              />
              <Button
                variant="contained"
                color="white"
                sx={{
                  marginLeft: isMobile ? 0 : 2,
                  width: isMobile ? "100%" : "auto",
                  backgroundColor: "#009F7F",
                  color: "white",
                }}
              >
                Update
              </Button>
            </Box>
          </Card>

          {/* Contact Number Section */}
          <Card sx={{ marginTop: 4, padding: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Contact Number
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              alignItems="center"
            >
              <TextField
                fullWidth
                variant="outlined"
                value={user.contact}
                onChange={(e) =>
                  setUser({ ...user, contact: e.target.value })
                }
                sx={{ marginBottom: isMobile ? 2 : 0 }}
              />
              <Button
                variant="text"
                color="primary"
                sx={{ marginLeft: isMobile ? 0 : 2, width: isMobile ? "100%" : "auto" }}
              >
                + Update
              </Button>
            </Box>
          </Card>

          {/* Addresses Section */}
          <Card sx={{ marginTop: 4, padding: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Addresses
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" flexDirection="column" gap={2}>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Billing
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {user.billingAddress}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Shipping
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {user.shippingAddress}
                </Typography>
              </Box>
              <Button
                variant="text"
                color="primary"
                sx={{ alignSelf: "flex-start", width: isMobile ? "100%" : "auto" }}
              >
                + Add
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
