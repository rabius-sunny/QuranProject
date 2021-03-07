import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DescriptionIcon from '@material-ui/icons/Description';
import MoreIcon from '@material-ui/icons/MoreVert';
import BookIcon from '@material-ui/icons/Book';

import logo from '../../images/logo.png'

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        color: '#00d6d6',
    },
    icon: {
        color: '#00d6d6',
        marginTop: '-15px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

function Navigation() {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            className={classes.icon}
        >
            <a href="/">
                <MenuItem>
                    <IconButton className={classes.icon}>
                        <HomeIcon />
                    </IconButton>
                    <p>Home</p>
                </MenuItem>
            </a>
            <a href="/api-reference">
                <MenuItem>
                    <IconButton className={classes.icon}>
                        <InfoIcon />
                    </IconButton>
                    <p>API Reference</p>
                </MenuItem>
            </a>
            <a href="/about">
                <MenuItem>
                    <IconButton className={classes.icon}>
                        <DescriptionIcon />
                    </IconButton>
                    <p>About</p>
                </MenuItem>
            </a>
            <a href="/tutorial">
                <MenuItem>
                    <IconButton className={classes.icon}>
                        <BookIcon />
                    </IconButton>
                    <p>Tutorial</p>
                </MenuItem>
            </a>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <a href="/">
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <img src={logo} width="60px" alt="jsDude logo" />
                        </IconButton>
                    </a>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Quran Project
          </Typography>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <a href="/">
                            <IconButton color="inherit">
                                <Typography variant={'h6'} >Home</Typography>
                            </IconButton>
                        </a>
                        <a href="/api-reference">
                            <IconButton color="inherit">
                                <Typography variant={'h6'} >API Reference</Typography>
                            </IconButton>
                        </a>
                        <a href="/about">
                            <IconButton color="inherit">
                                <Typography variant={'h6'} >About</Typography>
                            </IconButton>
                        </a>
                        <a href="/tutorial">
                            <IconButton color="inherit">
                                <Typography variant={'h6'} >Tutorial</Typography>
                            </IconButton>
                        </a>

                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}

export default Navigation