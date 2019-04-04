import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import Header from './layout/header';
import Sidebar, { drawerWidth } from './layout/sidebar';
import routes from './routes'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  // toolbar: theme.mixins.toolbar,
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
})

function App({ classes, ...restProps }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function handleToggleSidebar() {
    setIsSidebarOpen(prevOpen => !prevOpen)
  }
  
  function handleOpenSidebar() {
    setIsSidebarOpen(true);
  }

  const headerProps = {
    isLogin,
    setIsLogin,
    isSidebarOpen,
    handleToggleSidebar,
    handleOpenSidebar,
  }

  const sidebarProps = {
    isSidebarOpen,
  }

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Header {...headerProps} />
        {isLogin && <Sidebar {...sidebarProps} />}
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: isSidebarOpen,
          })}
        >
          <div className={classes.drawerHeader} />
          <Switch>
            {
              isLogin ? (
                routes.map(({
                  component: Component, exact, path, ...rest
                }, key) => (
                    <Route
                      key={key.toString()}
                      {...{ exact, path }}
                      render={routeProps => (
                        <Component {...{ ...restProps, ...rest, ...routeProps }} />
                      )}
                    />
                  )
                )
              ) : (
                  <Route render={() => <h1>Please login</h1>} />
                )
            }
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
