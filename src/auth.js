import React from 'react'
import axios from 'axios'

class Auth {
  constructor() {
    this.authenticated = false
  }

  async login(successCB, notFound, username, password) {
    // logic for login
    await axios
      .get(`${process.env.REACT_APP_BACKEND}/api/v1/users/username/${username}`)
      .then((res) => {
        if (res.data.length > 0) {
          localStorage.setItem('user', JSON.stringify(res.data))
          successCB()
        } else {
          notFound()
        }
      })
      .catch((err) => console.log('Error ' + err))
  }

  logout(cb) {
    // logic for logout
    localStorage.clear()
    this.authenticated = false
    cb()
  }

  isAuthenticated() {
    localStorage.getItem('user')
      ? (this.authenticated = true)
      : (this.authenticated = false)
    return this.authenticated
  }
}

export default new Auth()
