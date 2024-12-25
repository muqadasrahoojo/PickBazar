import React, { useState } from "react";

const products = [
  { id: 1, name: "Apples", price: 1.6 },
  { id: 2, name: "Baby Spinach", price: 0.6 },
  { id: 3, name: "Blueberries", price: 3.0 },
  { id: 4, name: "Brussels Sprouts", price: 3.0 },
];

export default function AddToCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              margin: "10px",
              width: "150px",
              textAlign: "center",
            }}
          >
            <h4>{product.name}</h4>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h3>Cart</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}




   {/* Main Content */}
      {/* <Box
        component="main"
        sx={{
          backgroundColor: '#f3f4f6',
          flexGrow: 1,
          p: 3,
          overflowY: 'auto', // Enables scrolling for the content
          maxHeight: '100vh', // Restrict height for viewport
        }}
      >
        <Toolbar />
        <Grid container spacing={2}>
          {Array.from({ length: 20 }, (_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Item {index + 1}</Typography>
                  <Typography>$10.00</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box> */}