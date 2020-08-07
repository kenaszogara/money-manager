import React from 'react'
import { Switch, Route } from 'react-router-dom'

/** Pages */
import HomePage from './pages/home'
import ChartPage from './pages/chart'
import CategoriesPage from './pages/categories'
import SettingsPage from './pages/settings'
import AboutPage from './pages/about'
import AddPage from './pages/add'

export default function Router() {
  return(
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/chart' component={ChartPage} />
      <Route exact path='/categories' component={CategoriesPage} />
      <Route exact path='/settings' component={SettingsPage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/add' component={AddPage} />
    </Switch>
  )
}