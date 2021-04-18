import React from 'react'
import { Switch } from 'react-router-dom'
import ProtectedRoute from './components/protectedRoute'

/** Pages */
import HomePage from './pages/home'
import ChartPage from './pages/chart'
import CategoriesPage from './pages/categories'
import SettingsPage from './pages/settings'
import AboutPage from './pages/about'
import AddPage from './pages/add'

export default function AuthenticatedRoute() {
  return(
    <Switch>
      <ProtectedRoute exact path='/home' component={HomePage} />
      <ProtectedRoute exact path='/chart' component={ChartPage} />
      <ProtectedRoute exact path='/categories' component={CategoriesPage} />
      <ProtectedRoute exact path='/settings' component={SettingsPage} />
      <ProtectedRoute exact path='/about' component={AboutPage} />
      <ProtectedRoute exact path='/add' component={AddPage} />
    </Switch>
  )
}