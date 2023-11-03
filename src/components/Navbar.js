import { AppBar, Box, Button, Grid, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const Navbar = ({ links }) => {
    const [value, setValue] = React.useState();
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={2}>
                            <Typography>
                                <ShoppingBagIcon />
                            </Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <Tabs
                                onChange={(e, newValue) => setValue(newValue)}
                                value={value}
                                textColor="inherit"
                                indicatorColor="secondary"
                                aria-label="secondary tabs example"
                            >
                                {links.map((link, index) => (
                                    <Tab key={index} label={link} />
                                ))}
                            </Tabs>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex' }}>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit">Signup</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar