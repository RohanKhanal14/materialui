import { AppBar, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)

    const handelClose = () => {
        setAnchorEl(null)
        setOpen(false)
    }

    const handelClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    }

    return (
        <div>
            {/* <AppBar>
                <Toolbar>
                    <Typography variant='h4'>LOGO</Typography>
                    <Toolbar sx={{ marginLeft: "auto" }}>
                        <Typography variant='h6'>LOGO</Typography>
                        <Typography variant='h6'>LOGO</Typography>
                        <Button color='inherit'>Login</Button>
                    </Toolbar>
                </Toolbar>
            </AppBar> */}

            <Button onClick={handelClick}>
                OPEN
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handelClose}>
                <MenuItem onClick={handelClose}>Profile</MenuItem>
                <MenuItem onClick={handelClose}>hello</MenuItem>
                <MenuItem onClick={handelClose}>logout</MenuItem>
            </Menu>

        </div>
    )
}

export default Header