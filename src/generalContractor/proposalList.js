import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function ProposalList(props) {
  const { classes, list, handleProposalClick } = props;

  return (
    <List className={classes.root} component="nav">
      {
        list.map(({ id, title }) => (
          <ListItem key={id} button onClick={e => handleProposalClick(e, id)}>
            <ListItemText
              primary={title}
            />
          </ListItem>
        ))
      }
    </List>
  );
}

ProposalList.defaultProps = {
  list: [],
}

ProposalList.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.array,
  handleProposalClick: PropTypes.func,
};

export default withStyles(styles)(ProposalList);
