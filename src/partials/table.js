import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function SimpleTable(props) {
  const {
    classes, hover, tableHeadCells, tableBodyRows, handleRowClick,
  } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {
              tableHeadCells.map(({ label, align }) => (
                <TableCell key={label} align={align}>{label}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableBodyRows.map(({ id, columns }) => (
              <TableRow key={id} hover={hover} onClick={e => handleRowClick(e, id)}>
                {
                  columns.map(({ id, align, value }) => (
                    <TableCell key={id} align={align}>{value}</TableCell>
                  ))
                }
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.defaultProps = {
  hover: false,
  tableHeadCells: [],
  tableBodyRows: [],
  handleRowClick: () => {},
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  hover: PropTypes.bool,
  tableHeadCells: PropTypes.array,
  tableBodyRows: PropTypes.array,
  handleRowClick: PropTypes.func,
};

export default withStyles(styles)(SimpleTable);
