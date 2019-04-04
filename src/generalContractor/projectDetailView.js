import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tabs from '../partials/tabs';
import useTabs from '../partials/hooks/useTabs';
import SimpleTable from '../partials/table';
import SimpleList from '../partials/list';
import MessageList from './messageList';
import ProposalList from './proposalList';

const styles = theme => ({
  /* root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }, */
});

function ProjectDetailView({ handleProposalClick }) {
  const {
    activeTab, handleTabChange, handleChangeIndex,
  } = useTabs();

  const tableProps = {
    tableHeadCells: [
      { label: 'Name' }, { label: 'Price', align: 'right' }, { label: 'Duration', align: 'right' },
    ],
    tableBodyRows: [
      {
        id: '1',
        columns: [
          { id: '1', value: 'Tim' },
          { id: '2', align: 'right', value: '33' },
          { id: '3', align: 'right', value: '1' }
        ],
      },
      {
        id: '2',
        columns: [
          { id: '1', value: 'Mark' },
          { id: '2', align: 'right', value: '55' },
          { id: '3', align: 'right', value: '2' },
        ],
      },
      {
        id: '3',
        columns: [
          { id: '1', value: 'Yuri' },
          { id: '2', align: 'right', value: '13' },
          { id: '3', align: 'right', value: '3' }
        ],
      },
    ],
  }
  
  const listProps = {}
  
  const messageListProps = {
    list: [
      { id: '1', from: 'Tim', subject: 'Some subject', date: new Date().toDateString() },
      { id: '2', from: 'Mark', subject: 'Some subject', date: new Date().toDateString() },
      { id: '3', from: 'Yuri', subject: 'Some subject', date: new Date().toDateString() },
    ]
  }
  
  const proposalListProps = {
    list: [
      { id: '1', title: 'Proposal_1' },
      { id: '2', title: 'Proposal_2' },
      { id: '3', title: 'Proposal_3' },
    ],
    handleProposalClick,
  }

  const tabsProps = {
    tabs: [{ label: 'Overview' }, { label: 'Bidders' }, { label: 'Files' }, { label: 'Messages' }, { label: 'Proposals' }],
    tabContainers: [
      <div>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
          elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
          velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
          Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
          viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
          Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
          at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
          ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
      </div>,
      <div><SimpleTable {...tableProps} /></div>,
      <div><SimpleList {...listProps} /></div>,
      <div><MessageList {...messageListProps} /></div>,
      <div><ProposalList {...proposalListProps} /></div>
    ],
    activeTab,
    handleTabChange,
    handleChangeIndex,
  }

  return (
    <Tabs {...tabsProps} />
  )
}

ProjectDetailView.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  handleProposalClick: PropTypes.func,
}

export default withStyles(styles, { withTheme: true })(ProjectDetailView)
