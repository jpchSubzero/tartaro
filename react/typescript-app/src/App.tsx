import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, AppBar, Box, Toolbar, IconButton, Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import { ProductResponse } from './product-response.interfaces';
import { getAllProducts } from './services/product.service';

import MenuIcon from '@mui/icons-material/Menu';

function App() {

  const [products, setProducts] = useState<ProductResponse[]>([]);

  useEffect(() => {
    getAllProducts().then((productsResponse:ProductResponse[]) => {
      console.log(productsResponse);
      setProducts(productsResponse);
    }); 
  }, []);

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>    
        <div className="card-grid">
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} p={2} alignItems="top" justifyContent="center">
        {
                  products.map((product:ProductResponse) => {
                    if (!product) {
                        return '';
                    }
                    return (
                      <Grid p={2} key={product.id}>
                      <Card key={product.id} sx={{ maxWidth: 345, boxShadow: 10, borderRadius: 2 }} style={{backgroundColor: "light gray"}}>
                      <CardMedia
                        component="img"
                        // height="200px"
                        image={product.productImage}
                        alt={product.productImage}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                        <span className="card-title">
                          {product.name}
                          </span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <span className="card-text">
                          {product.description ? product.description : product.name}
                          </span>
                        </Typography>
                      </CardContent>
                      <CardActions>
                      <Grid container columns={3} alignItems="top" justifyContent="center">
                        <Button variant="contained" size="small" style={{ width: "30%", marginRight: "5px", marginLeft: "5px" }}>Ver</Button>
                        <Chip color="success" size="medium" style={{ width: "30%", marginRight: "5px", marginLeft: "5px" }} label={product.unitCost} />
                        <Button variant="contained" size="small" style={{ width: "30%", marginRight: "5px", marginLeft: "5px" }}>Agregar</Button>
                        </Grid>
                      </CardActions>
                    </Card>
            </Grid>

                
                    );                    
                })
            }
            </Grid>
        </div>
    </>


    // <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     component="img"
    //     height="140"
    //     image="https://t3.ftcdn.net/jpg/03/31/21/52/360_F_331215213_ZO5t1rhLx6tRcERUvjXqnfko37nvM2cl.jpg"
    //     alt="green iguana"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       Lizard
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       Lizards are a widespread group of squamate reptiles, with over 6,000
    //       species, ranging across all continents except Antarctica
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Share</Button>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );
}

export default App;
