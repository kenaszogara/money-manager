import React from 'react'
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import useWindowSize from './../hooks/useWindowSize'

import SideBar from './sidebar'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  // app bar
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerHeader: {
    backgroundColor: '#FFE071',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: '3rem',
    marginLeft: -drawerWidth,
  },
  contentXS: {
    marginLeft: '0'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

export default function MasterLayout(props) {
  const { drawerOpen, handleToggleDrawer, children } = props
  const classes = useStyles()
  const appWindow = useWindowSize();

  return (
    <div style={{ display: 'flex'}}>
      <AppBar 
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen && appWindow.width > 500,
        })}
      >
        <Toolbar variant="dense">
          <IconButton onClick={handleToggleDrawer} edge="start" color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideBar 
        style={classes}
        open={drawerOpen}   
        toggleDrawer={handleToggleDrawer}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen && appWindow.width > 500,
          [classes.contentXS]: appWindow.width < 500,
        })}
      >
        {children}
      </main>
    </div>
  )
}
