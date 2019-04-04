import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import routes from '../routes'

function ListItemLink({ selected, primary, to }) {
  return (
    <li>
      <ListItem selected={selected} button component={Link} to={to}>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

export const drawerWidth = 240;

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  lists: {
    backgroundColor: theme.palette.background.paper,
  },
});

function Sidebar({ classes, history, location, isSidebarOpen }) {
  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isSidebarOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List component="nav">
          {routes.map(({ name, path }) => (
            <ListItemLink
              key={name}
              to={path}
              primary={name}
              selected={location.pathname === path}
            />
          ))}
        </List>
      </Drawer>
    </div>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  location: PropTypes.object,
  isSidebarOpen: PropTypes.bool,
};

export default withRouter(withStyles(styles)(Sidebar));
