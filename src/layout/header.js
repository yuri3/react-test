import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Settings from '@material-ui/icons/Settings';
import Logout from '@material-ui/icons/ExitToApp';
import MoreIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const styles = theme => ({
  root: {},
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
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
});

function Header({
  classes, theme, history,
  isLogin, setIsLogin, isSidebarOpen, handleToggleSidebar, handleOpenSidebar,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
  function handleLogin() {
    setIsLogin(prevLogin => !prevLogin);
    history.push('/general-contractor');
  }
  
  function handleLogout() {
    handleMobileMenuClose();
    handleMenuClose();
    setIsLogin(prevLogin => !prevLogin);
    handleOpenSidebar();
    history.push('/');
  }

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }
  
  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }
  
  function handleMenuClose() {
    setAnchorEl(null);
  }
  
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton color="inherit">
          <Settings />
        </IconButton>
        <p>Setting</p>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <IconButton color="inherit">
          <Logout />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );
  
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton color="inherit">
          <Settings />
        </IconButton>
        <p>Setting</p>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <IconButton color="inherit">
          <Logout />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {
            isLogin && (
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleToggleSidebar}
              >
                {isSidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            )
          }
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Logo
          </Typography>
          {
            !isLogin ? (
              <Button color="inherit" onClick={handleLogin}>Login</Button>
            ) : (
                <div className={classes.sectionDesktop}>
                  <IconButton color="inherit">
                    <Badge badgeContent={0} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
              )
          }
          {
            isLogin && (
              <div className={classes.sectionMobile}>
                <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                  <MoreIcon />
                </IconButton>
              </div>
            )
          }
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderMobileMenu}
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  theme: PropTypes.object.isRequired,
  isLogin: PropTypes.bool,
  setIsLogin: PropTypes.func,
  handleToggleSidebar: PropTypes.func,
  handleOpenSidebar: PropTypes.func,
};

export default withRouter(withStyles(styles, { withTheme: true })(Header));
