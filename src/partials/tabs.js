import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

function CustomTabs(props) {
  const {
    classes, theme, rootStyle,
    appBarStyle, tabsStyle, tabs, tabContainers,
    activeTab, handleTabChange, handleChangeIndex,
  } = props

  return (
    <div className={classes.root} style={rootStyle}>
      <AppBar {...appBarStyle}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          {...tabsStyle}
        >
          {
            tabs.map(({ label }) => (
              <Tab key={label} label={label} />
            ))
          }
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeTab}
        onChangeIndex={handleChangeIndex}
      >
        {
          tabContainers.map((container, index) => (
            <TabContainer key={index} dir={theme.direction}>
              {container}
            </TabContainer>
          ))
        }
      </SwipeableViews>
    </div>
  )
}

CustomTabs.defaultProps = {
  rootStyle: {},
  appBarStyle: {
    position: 'static',
    color: 'default',
  },
  tabsStyle: {
    indicatorColor: 'primary',
    textColor: 'primary',
    variant: 'scrollable',
    scrollButtons: 'auto',
  },
  tabs: [],
}

CustomTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  appBarStyle: PropTypes.object,
  tabsStyle: PropTypes.object,
  tabs: PropTypes.arrayOf(PropTypes.object),
  tabContainers: PropTypes.arrayOf(PropTypes.element),
  activeTab: PropTypes.number,
  handleTabChange: PropTypes.func,
  handleChangeIndex: PropTypes.func,
}

export default withStyles(styles, { withTheme: true })(CustomTabs)
