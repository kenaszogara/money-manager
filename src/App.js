import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core'
import MasterLayout from './components/masterLayout'
import useWindowSize from './hooks/useWindowSize'

/** router */
import Router from './router'

export default function App() {

  const [open, setOpen] = useState(true)

  const toggleDrawer = () => {
    open ? setOpen(false) : setOpen(true)
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
            backgroundColor: '#FBFBFB',
          }
        },
        MuiPaper: {
          elevation2: {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
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
          paper: theme.paletteType === 'dark' ? '#424242' : '#fff',
        },
      }
    })
  }

  const theme = getTheme({
    space: 5,
    paletteType: 'light',
  })

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            {/** Start of Body */}
            <MasterLayout
              drawerOpen={mobile ? !open : open}
              handleToggleDrawer={toggleDrawer}
            >
              <Router />
            </MasterLayout>
            {/** end of Body */}
          </BrowserRouter>
      </MuiThemeProvider>
    </StylesProvider>
  )
}
