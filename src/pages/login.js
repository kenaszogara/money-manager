import React, { useState } from 'react'
import auth from './../auth'

export default function LoginPage({ handleLogin, history }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const formSubmit = (e) => {
    e.preventDefault()

    auth.login(
      () => {
        handleLogin()
        console.log('login')
        history.push('/home')
      },
      () => {
        console.log('error data')
      },
      username,
      password
    )
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  )
}
