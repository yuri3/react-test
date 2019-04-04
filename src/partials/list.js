import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import FileIcon from '@material-ui/icons/FileCopy';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function SimpleList(props) {
  const { classes } = props;

  return (
    <List className={classes.root}>
      <ListItem button>
        <ListItemIcon>
          <FileIcon />
        </ListItemIcon>
        {/* <ListItemText primary="" /> */}
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FileIcon />
        </ListItemIcon>
        {/* <ListItemText primary="" /> */}
      </ListItem>
    </List>
  );
}

SimpleList.defaultProps = {}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
