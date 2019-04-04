import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '../partials/tabs';
import SimpleTable from '../partials/table';
import ProjectDetailView from './projectDetailView';
import useTabs from '../partials/hooks/useTabs';

const styles = theme => ({
  /* root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }, */
});

function GeneralContractor(props) {
  // const { classes, theme } = props;
  
  const {
    activeTab, handleTabChange, handleChangeIndex,
  } = useTabs();
  
  function handleRowClick(event, id) {
    handleChangeIndex(1)
  }
  
  function handleProposalClick(event, id) {
    handleChangeIndex(2)
  }

  const tableProps = {
    hover: true,
    tableHeadCells: [
      { label: 'Name' }, { label: 'Status', align: 'right' }, { label: 'Placeholder', align: 'right' },
    ],
    tableBodyRows: [
      {
        id: '1',
        columns: [
          { id: '1', value: 'Project Name_1' },
          { id: '2', align: 'right', value: 'inprocess' },
          { id: '3', align: 'right', value: 'Some placeholder' }
        ],
      },
      {
        id: '2',
        columns: [
          { id: '1', value: 'Project Name_2' },
          { id: '2', align: 'right', value: 'done' },
          { id: '3', align: 'right', value: 'Some placeholder' },
        ],
      },
      {
        id: '3',
        columns: [
          { id: '1', value: 'Project Name_3' },
          { id: '2', align: 'right', value: 'inprocess' },
          { id: '3', align: 'right', value: 'Some placeholder' }
        ],
      },
    ],
    handleRowClick,
  }
  
  const projectDetailViewProps = {
    handleProposalClick,
  }

  const tabsProps = {
    rootStyle: {
      width: '800px',
    },
    tabs: [{ label: 'Current Projects View' }, { label: 'Project Detail View' }, { label: 'Proposal Detail View' }],
    tabContainers: [
      <SimpleTable {...tableProps} />,
      <ProjectDetailView {...projectDetailViewProps} />,
      <div>Proposal Detail View</div>,
    ],
    activeTab,
    handleTabChange,
    handleChangeIndex,
  }

  return (
    <Tabs {...tabsProps} />
  )
}

GeneralContractor.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(GeneralContractor)
