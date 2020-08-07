import React from 'react'

import { Link } from 'react-router-dom'

// material-ui
import { 
  Hidden, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
} from '@material-ui/core'

// icons from material-ui
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined'
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

export default function SideBar(props) {

  const { open, style, container, toggleDrawer } = props
  const classes = style

  function renderIcon(index) {
    switch (index) {
      case 0:
        return <PieChartOutlinedIcon />
      case 1:
        return <CategoryOutlinedIcon />
      case 2:
        return <DescriptionOutlinedIcon />
      case 3:
        return <SettingsOutlinedIcon />
      case 4:
        return <InfoOutlinedIcon />
      default:
        return 'NoIcon'
    }
  }

  const links = [
    {
      'name': 'Chart',
      'url': '/chart'
    },
    {
      'name': 'Categories',
      'url': '/categories'
    },
    {
      'name': 'Export',
      'url': '#'
    },
    {
      'name': 'Settings',
      'url': '/settings'
    },
    {
      'name': 'About',
      'url': '/about'
    },
  ]

  const menuList = (
    <div>
      <Link to='/'>
        <div className={classes.drawerHeader} />
      </Link>
      
      <List>
        {links.map((link, index) => (
          <Link key={index} to={link.url} underline='none' color='inherit'>
            <ListItem button>
              <ListItemIcon>{renderIcon(index)}</ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  return (
    <nav>
      <Hidden smUp implementation="js">
        <Drawer
          container={container}
          variant="temporary"
          anchor='left'
          open={open}
          onClose={toggleDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {menuList}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {menuList}
        </Drawer>
      </Hidden>
    </nav>
  )
}
