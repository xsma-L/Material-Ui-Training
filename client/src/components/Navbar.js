import React, { useState } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuIcon,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
    AbdIcon
} from '@mui/material'
import { Dashboard } from "@mui/icons-material";


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navabar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTraget);
    }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTraget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AbdIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: "none", md: "flex" }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color:"inherit", textDecoration: 'none' }} >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="account of curent user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu}
                        color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu id="manu-appbar" anchorEl={anchorElnav} anchorOrigin={{ vertical: 'bottom', horizontal: left }} keepMounted transformOrigin={{ vertical: "top", horizontal: "left" }} open={ Boolean(anchorElNav) } onClose={handleCloseNavMenu} sx={{ display: { xs: "block", md: "none" } }}>
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AbdIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                    <Typography variant="h5" noWrap component="a" href="" sx={{ mr: 2, display: { xs: "flex", md: "none" }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: ".3rem", color: "inherit", textDecoration: 'none' }}>
                        LOGO
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navabar