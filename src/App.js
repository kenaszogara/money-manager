import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core'
import MasterLayout from './components/masterLayout'
import useWindowSize from './hooks/useWindowSize'

/** router */
import AuthenticatedRoute from './authenticatedRoute'
import LoginPage from './pages/login'

export default function App(props) {
  const [open, setOpen] = useState(true)
  const [user, setUser] = useState(null)

  const toggleDrawer = () => {
    open ? setOpen(false) : setOpen(true)
  }

  const userLogin = () => {
    setUser(true)
  }

  const userLogout = (cb) => {
    setUser(false)
    cb()
  }

  const appWindow = useWindowSize()

  const mobile = appWindow.width < 500 ? true : false

  // material ui themeing
  const getTheme = (theme) => {
    return createMuiTheme({
      ...theme,
      overrides: {
        MuiAppBar: {
          colorPrimary: {
            color: '#C4C4C4',
            backgroundColor: '#FBFBFB'
          }
        },
        MuiPaper: {
          elevation2: {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'
          }
        },
        MuiListItem: {
          root: {
            paddingBottom: '16px'
          }
        }
      },
      palette: {
        type: theme.paletteType,
        background: {
          default: theme.paletteType === 'dark' ? '#212121' : '#f0f2f5',
          paper: theme.paletteType === 'dark' ? '#424242' : '#fff'
        }
      }
    })
  }

  const theme = getTheme({
    space: 5,
    paletteType: 'light'
  })

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          {/** Start of Body */}
          <Switch>
            <Route
              exact
              path="/login"
              render={(props) => (
                <LoginPage {...props} handleLogin={userLogin} />
              )}
            />
            {user && (
              <MasterLayout
                drawerOpen={mobile ? !open : open}
                handleToggleDrawer={toggleDrawer}
                handleLogout={userLogout}
              >
                <AuthenticatedRoute />
              </MasterLayout>
            )}
            <Route
              path="/"
              render={(props) => (
                <LoginPage {...props} handleLogin={userLogin} />
              )}
            />
          </Switch>
          {/** end of Body */}
        </BrowserRouter>
      </MuiThemeProvider>
    </StylesProvider>
  )
}
