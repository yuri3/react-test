import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function ListItemLink({ button, alignItems, ...restProps}) {
  return (
    <ListItem button={button} alignItems={alignItems} component="a" {...restProps} />
  );
}

function MessageList(props) {
  const { classes, list } = props;

  return (
    <List className={classes.root} component="nav">
      {
        list.map(({ id, from, subject, date }) => (
          <ListItemLink key={id} href="#message-detail-view" button alignItems="flex-start">
            <ListItemText
              primary={`From: ${from}`}
              secondary={
                <React.Fragment>
                  <Typography noWrap component="span" color="textPrimary">
                    Subject: {subject}
                  </Typography>
                  Date: {date}
                </React.Fragment>
              }
            />
          </ListItemLink>
        ))
      }
    </List>
  );
}

MessageList.defaultProps = {
  list: [],
}

MessageList.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.array,
};

export default withStyles(styles)(MessageList);
